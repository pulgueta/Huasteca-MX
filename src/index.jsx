import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { App } from "./App";

import reportWebVitals from "./reportWebVitals";
import AuthProvider from "./contexts/AuthProvider";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
