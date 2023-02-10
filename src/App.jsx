import React, { useEffect, useState } from 'react'
import Notifications from './pages/Notifications'
import './App.css'
import notificationData from './notificationData'

const App = () => {

  
  const [notifCount, setNotifCount] = useState(0);
  const [data, setData] = useState(notificationData)
  
  useEffect(() => {
    const isReadCount = data.filter(item => item.isRead)
    setNotifCount(isReadCount.length)
  },[data])

  function markAllAsRead(){
    setData(prevState => prevState.map(item => item.isRead ? {...item,isRead: false} : item))
  }

  function toggle(id){
    
    setData(prevState => prevState.map(item => item.id === id ? {...item, isRead: !item.isRead} : item))

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
        {/* <img src="./src/assets/images/circle.svg" alt="small red circle" /> */}
        <h2>Notifications<span className='notification--counter'>{notifCount}</span></h2>
        <button onClick={markAllAsRead}>Mark all as read</button>
        </header>
      {notifElements}
      <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor.</a> Coded by kujerocoding
        </div>
      </div>
  )
}

export default App
