import React, { useState } from 'react'
import Notifications from './pages/Notifications'
import './App.css'

const App = () => {

  const [notifCount, setNotifCount] = useState(0);
  const[markRead, setMarkRead] = useState(false)

  function markAllAsRead(){
    setNotifCount(0)
  }

  function toggle(id){
    console.log(id)
    setMarkRead(prevState => !prevState)
  }

  return (
    <div>
      <Notifications count={notifCount} markAllAsRead={markAllAsRead} toggle={toggle} />
    </div>
  )
}

export default App
