console.log("\n npm start packagejson main index.ts yarm powershell\n");
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { reportWebVitals } from "./reportWebVitals";

import AppWithCallbackAfterRender from "./components/AppWithCallbackAfterRender";
// import { articles } from './components/AppWithCallbackAfterRender';

// ReportWebVitals reportWebVitals = new ReportWebVitals();

// reportWebVitals.reportWebVitals(reportWebVitals.sendToAnalytics);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(AppWithCallbackAfterRender());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals.reportWebVitals();
