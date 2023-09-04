import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

/* import { store } from './store'
import { Provider } from 'react-redux' */

import { TestsProvider } from './context/TestsProvider';
import Home from './containers/Home';
import Test from './containers/Test';
import Results from './containers/Results';
import ButtonCheckout from './components/buttonCheckout';

import './css/index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/buttonCheckout",
    element: <ButtonCheckout />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestsProvider>
      <RouterProvider router={router} />
    </TestsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
