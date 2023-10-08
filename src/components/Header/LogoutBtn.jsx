import React from 'react'
import { useDispatch } from 'react-redux'
import authServices from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
    const dispatch=useDispatch();
    const logoutHanler=()=>{
        authServices.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className=' inline-block text-red-600 font-bold text-2xl px-6 py-1 duration-200 hover:bg-gray-200 rounded-full '
    onClick={logoutHanler}>
        Logout
    </button>
  )
}

export default LogoutBtn