import React, { useEffect, useState } from 'react';
//import { withTranslation, Trans } from "react-i18next";
import { SRLWrapper } from "simple-react-lightbox";
import InfiniteScroll from 'react-infinite-scroll-component';
import { TailSpin } from 'react-loader-spinner';


function ExtraContent(props) {
  const [readMore, setReadMore] = useState(false);
  const extraContent = props.extra;
  const linkName = readMore ? 'Mniej << ' : 'Czytaj więcej >> '
  return (
    <div className="post-text-extra">
      {readMore && extraContent ? (<div dangerouslySetInnerHTML={{ __html: extraContent }}></div>) : null}
      <div className="post-text-read-more"><button className="read-more-link" onClick={() => { setReadMore(!readMore) }}>{linkName}</button></div>
    </div>
  );
}
const img_options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "5px",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    size: "40px"
  },
  caption: {
    showCaption: false
  },
  thumbnails: {
    showThumbnails: false
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, 0.9)",
    transitionTimingFunction: "ease-in-out",
    disablePanzoom: true,
    disableWheelControls: true,
    hideControlsAfter: false
  }
};


function GetPostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [pageInfo, setPageInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMorePosts = async () => {
    if (!hasMore) return;

    // Your GraphQL query variables
    const variables = {
      first: 3,
      after: pageInfo ? pageInfo.endCursor : null,
    };

  // Your GraphQL query
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const query = `
      query Campany($first: Int, $after: String) {
            Posts(first: $first, after: $after) {
              pageInfo {
                endCursor
                hasNextPage
              }
              edges {
                cursor
                node {
                  title
                  PostId
                  link
                  acf {
                    data
                    description
                    descriptionextra
                    articleLabel
                    articleUrl
                    linkedinUrl
                  }
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
  `;
  try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });
      

if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }


      const data = await response.json();
      const newPosts = data.data.postMasterPosts.edges;
      setPosts([...posts, ...newPosts]);
      setPageInfo(data.data.postMasterPosts.pageInfo);
      setCurrentPage(currentPage + 1);

      if (!data.data.postMasterPosts.pageInfo.hasNextPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchMorePosts();
  }, []); // Initial load

  return (
    <InfiniteScroll
        dataLength={posts.length}
        next={fetchMorePosts}
        hasMore={hasMore}
        loader={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
            <TailSpin color="#ffc321" height={50} width={50} radius={5}/>
          </div>
        }
        scrollThreshold={0.9}
        style={{overflow: 'hidden',}}
      >
    <div className="post-container">
    {posts.map((post, index) => (
      
        <div id={'Post_' + post.node.PostId} className="post" key={index}>
          <div className="post-row">
            <div className="post-col post-col-1 col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <SRLWrapper options={img_options}>
                <img src={post.node.featuredImage.node.sourceUrl} alt={post.node.title} />
              </SRLWrapper>
              {post.node.acf.articleUrl ? (<div><a href={post.node.acf.articleUrl} className="post-article btn">{post.node.acf.articleLabel ? (post.node.acf.articleLabel) : "Link do artykułu"}</a></div>) : null}
            </div>
            <div className="post-col post-col-2 col-lg-8 col-md-6 col-sm-6 col-xs-12">
              <div className="post-header row">
                <div className="post-title col-lg-8">{post.node.title}</div>
                <div className="post-data col-lg-4">{post.node.acf.data}</div>
              </div>
              <div className="post-text" dangerouslySetInnerHTML={{ __html: post.node.acf.description }}></div>
              <div className="post-text" >
                {post.node.acf.descriptionextra ? (<ExtraContent extra={post.node.acf.descriptionextra} />) : null}
              </div>
            </div>
          </div>
        </div>
    ))}
</div>
</InfiniteScroll>
  );
}

export default GetPostList;
