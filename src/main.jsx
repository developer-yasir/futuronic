import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store';
import { Provider } from 'react-redux';
import { applyTheme } from './features/theme/themeSlice.js';

// Initialize theme when app loads
const state = store.getState();
applyTheme(state.theme.mode);

// Subscribe to theme changes to update CSS variables
store.subscribe(() => {
  const currentState = store.getState();
  applyTheme(currentState.theme.mode);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
