import React, { useState } from 'react'
import Notifications from './pages/Notifications'
import './App.css'
import notificationData from './notificationData'

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

  const notifElements = notificationData.map(notif => 
  <Notifications name={notif.name} 
                 avatar={notif.avatar} 
                 activity={notif.activity}
                 objectActivity={notif.objectActivity}
                 objectImg={notif.objectImg}
                 time={notif.time}
                 message={notif.message}
                 hasObjectImg={notif.hasObjectImg}/>)
  
  return (
    <div className='main--container'>
      <header>
        <h2>Notifications<span className='notification--counter'>{notifCount}</span></h2>
        <button>Mark all as read</button>
        </header>
      {notifElements}
      </div>
  )
}

export default App
