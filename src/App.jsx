import React, { useState } from 'react'
import Notifications from './pages/Notifications'
import './App.css'
import notificationData from './notificationData'

const App = () => {

  
  const [notifCount, setNotifCount] = useState(0);
  const [data, setData] = useState(notificationData)
  

  function markAllAsRead(){
    setNotifCount(0)
  }

  function toggle(id){
    console.log(id)
    return setData(prevState => prevState.map(item => item.id === id ? {...item, isRead: !item.isRead} : item))
  }

  const notifElements = data.map(notif => 
  <Notifications name={notif.name} 
                 avatar={notif.avatar} 
                 activity={notif.activity}
                 objectActivity={notif.objectActivity}
                 objectImg={notif.objectImg}
                 time={notif.time}
                 message={notif.message}
                 hasObjectImg={notif.hasObjectImg}
                 key={notif.id}
                 toggle={()=>toggle(notif.id)}
                 isRead={notif.isRead}/>)
  
  return (
    <div className='main--container'>
      <header>
        <h2>Notifications<span className='notification--counter'>{notifCount}</span></h2>
        <button onClick={markAllAsRead}>Mark all as read</button>
        </header>
      {notifElements}
      </div>
  )
}

export default App
