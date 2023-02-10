import React from 'react'

const Notifications = (props) => {
  return (
    <div className='main-container'>
        <header>
            <h2>Notifications<span className='notification--counter'>{props.count}</span></h2>
            <button onClick={props.markAllAsRead}>Mark all as read</button>
        </header>
        <div className='notifications-container'>
            <div className='notification--container' onClick={props.toggle} id='1'>
                <img src="../src/assets/images/avatar-mark-webber.webp" alt="" />
                <p>
                <span className='notification--name'>Mark Webber </span>
                reacted to your recent post <span className='nofitication--react'>My first tournament today!</span>
                <br />
                <span>1m ago</span>
                </p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-angela-gray.webp" alt="" />
                <p>
                <span className='notification--name'>Angela Gray </span>
                followed you
                <br />
                <span>5m ago</span>
                </p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-jacob-thompson.webp" alt="" />
                <p>
                <span className='notification--name'>Jacob Thompson </span>
                has joined your group <span className='notification--group'> Chess Club</span>
                <br />
                <span>1 day ago</span>
                </p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-rizky-hasanuddin.webp" alt="" />
                <p>
                <span className='notification--name'>Rizky Hasanuddin </span>
                sent you private message
                <br />
                <span>5 days ago</span>
                <br />
                <span>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</span>
                </p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-kimberly-smith.webp" alt="" />
                <p>
                <span className='notification--name'>Kimberly Smith </span>
                commented on your picture
                <br />
                <span>1 week ago</span>
                </p>
                <img src="../src/assets/images/image-chess.webp" alt="" />
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-nathan-peterson.webp" alt="" />
                <p>
                <span className='notification--name'>Nathan Peterson </span>
                reacted to your recent post <span className='nofitication--react'>5 end-games strategies to increase your win rate</span>
                <br />
                <span>2 weeks ago</span>
                </p>
            </div>
            <div className='notification--container'>
                <img src="../src/assets/images/avatar-anna-kim.webp" alt="" />
                <p>
                <span className='notification--name'>Anna Kim </span>
                left the group <span className='notification--group'>Chess Club</span>
                <br />
                <span>2 weeks ago</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Notifications
