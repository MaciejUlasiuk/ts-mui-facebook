import React from 'react'
import ReactDOM from 'react-dom/client'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import { RootState, store } from './app/store'
import MainPage from './pages/MainPage'
import FriendsPage from './pages/FriendsPage'
import LoginPage from './pages/LoginPage'
// const user = useSelector((state: RootState)=> state.userSlice.user)
// const router = createHashRouter(
//   createRoutesFromElements(
//     <>
//     <Route path='/' element={user ? <MainPage/> : <LoginPage/>}/>
//     <Route path='/MainPage' element={<MainPage/>} />
//     <Route path='/FriendsPage' element={<FriendsPage/>}/>
//     </>
//   )
// )
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </Provider>
)
