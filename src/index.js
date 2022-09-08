import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-react-file-upload/dist/css/file-upload.min.css";
import "mdb-react-table-editor/dist/css/table-editor.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>);