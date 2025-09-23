import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home/Home';
import ErrorBoundary from './components/ErrorBoundary';

// Make sure this element actually exists in your HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found");
}