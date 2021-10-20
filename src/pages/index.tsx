
import React from "react"
import Login from 'pages/index'
import UserContext from 'contexts/UserContex';

export default function Home() {
  
  return <UserContext>
    <Login />
  </UserContext>
}
