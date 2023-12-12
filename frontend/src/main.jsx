import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import store from './store'
import { Provider }  from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './index.css'
import PrivateRoute from './components/PrivateRoute';
import Homescreen from './screens/Homescreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen'
import WeatherScreen from './screens/WeatherScreen.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<Homescreen/>}></Route>
      <Route path='/login' element={<LoginScreen/>}></Route>
      <Route path='/register' element={<RegisterScreen/>}></Route>
      

      <Route path='' element={<PrivateRoute/>}>
      <Route path='/weather' element={<WeatherScreen/>}></Route>
      <Route path='/profile' element={<ProfileScreen/>}></Route>
      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
)
