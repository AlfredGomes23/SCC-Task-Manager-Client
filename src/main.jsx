import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Routes from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='py-1'>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  </React.StrictMode>,
)