import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Login ,AuthLayOut, SignUp,Home,AllPost, AddPost, EditPost, Post } from './components/index'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:(
          <AuthLayOut authentication={false}>
            <Login/>
          </AuthLayOut>
        ),
      },
      {
        path:'/signup',
        element:(
          <AuthLayOut authentication={false}>
            <SignUp/>
          </AuthLayOut>
        ),
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayOut authentication>
            {" "}
            <AllPost/>
          </AuthLayOut>
        ),
      },
      {
        path:'/add-post',
        element:(
          <AuthLayOut authentication>
            {" "}
            <AddPost/>
          </AuthLayOut>
        ),
      },
      {
        path:'/edit-post/:slug',
        element:(
          <AuthLayOut authentication>
            {" "}
            <EditPost/>
          </AuthLayOut>
        ),
      },
      {
        path:'/post/:slug',
        element:<Post/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>,
)
