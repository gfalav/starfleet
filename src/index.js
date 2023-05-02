import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './comps/layout/Home'
import SignIn from './comps/auth/SignIn'
import SignUp from './comps/auth/SignUp'
import Reset from './comps/auth/Reset'
import Layout from './comps/layout/Layout'
import ErrorPage from './comps/layout/ErrorPage'
import { RecoilRoot } from 'recoil'
import { createTheme, ThemeProvider } from '@mui/material'
import Theme from './comps/layout/Theme'
import Flespi from './comps/app/flespi/Messages'

const router = createBrowserRouter([
  { 
    path: '/', element: <Layout />, errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'auth/signin', element: <SignIn />},
      { path: 'auth/signup', element: <SignUp />},
      { path: 'auth/reset', element: <Reset />},          
      { path: 'flespi', element: <Flespi />}
    ]
  },
])

const theme = createTheme(Theme())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>
)