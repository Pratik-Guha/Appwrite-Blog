import React ,{ useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authServices from './appwrite/auth';
import {login,logout} from './store/authSlice'
import {Header,Footer} from './components'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {
  const [loading,setLoading]= useState(true);
  const dispatch= useDispatch()
  useEffect(()=>{
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  }, [])

  return !loading ?  (
    <div className=' min-h-screen flex flex-wrap content-between bg-gray-500 absolute left-0 top-0 right-0'>
      <div className='w-full block'>
        <Header/>
        <main>
        <div className='text-md md:text-3xl font-semibold text-yellow-500 '><span className='text-green-500' >Post Your Thoughts </span>and Experience <span className=' text-blue-500'>
        with Us </span> </div> 
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
