import React from 'react'

const Notifications = () => {
  return (
    <div>
        <header>
            <h2>Notifications</h2>
            <button>Mark all as read</button>
        </header>
        <div className='notifications-container'>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-mark-webber.webp" alt="" />
                <p><span>Mark Webber </span>reacted to your recent post <span>My first tournament today!</span></p>
                <p>1m ago</p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-angela-gray.webp" alt="" />
                <p><span>Angela Gray </span>followed you <span>My first tournament today!</span></p>
                <p>5m ago</p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-jacob-thompson.webp" alt="" />
                <p><span>Jacob Thompson </span>has joined your group <span>Chess Club</span></p>
                <p>1m ago</p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-rizky-hasanuddin.webp" alt="" />
                <p><span>Rizky Hasanuddin </span>sent you private message</p>
                <p>5 days ago</p>
                <p>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-kimberly-smith.webp" alt="" />
                <p><span>Kimberly Smith </span>commented on your picture</p>
                <p>1 week ago</p>
                <img src="../src/assets/images/image-chess.webp" alt="" />
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-nathan-peterson.webp" alt="" />
                <p><span>Nathan Peterson </span>reacted to your recent post <span>5 end-games strategies to increase your win rate</span></p>
                <p>2 weeks ago</p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-anna-kim.webp" alt="" />
                <p><span>Anna Kim </span>left the group <span>Chess Club</span></p>
                <p>2 weeks ago</p>
            </div>
        </div>
    </div>
  )
}

export default Notifications
