import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import MainPage from './MainPage'
import LoginPage from './pages/LoginPage'
const router = createHashRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='MainPage' element={<MainPage/>} />
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)