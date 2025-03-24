import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Components/Login/SigningUp'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './Components/Login/LoginForm';
import SecondPage from './Components/MainPanel/SecondPage';
import MainPanel from './Components/MainPanel/MainPanel';
import HistoryPage from './Components/HistoryPage/HistoryPage (1)';
import ForgotPassword from './Components/Login/ForgotPassword';
import ResetPassword from './Components/Login/ResetPassword';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/history",
    element:<HistoryPage/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <LoginForm/>
  },
  {
    path:"/secondpage",
    element:<SecondPage/>
  },
  {
    path:"/mainpage",
    element:<MainPanel/>
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  }
  
  
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();