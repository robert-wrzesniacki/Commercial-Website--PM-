import React from "react";
import { I18nextProvider } from "react-i18next";
import { createRoot } from 'react-dom/client';
import i18n from "./i18n";
import App from "./App";
import 'babel-polyfill';



const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);