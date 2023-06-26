// Multivariate Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import { App } from './components/App';

// Set the document title using the package name from the environment variable.
document.title = import.meta.env.VITE_PACKAGE_NAME;

console.log(`#${packageName}`);

ReactDOM.createRoot(document.querySelector(`#${import.meta.env.VITE_PACKAGE_NAME}`)).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
