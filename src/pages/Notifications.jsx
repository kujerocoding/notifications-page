import React from 'react'



const Notifications = (props) => {
    const style = {
        backgroundColor : props.isRead ? '#f7fafd'  : "white"
    }
  return (
        <div className='notification--container' onClick={props.toggle} style={style}>
            <img className="notification--avatar" src={`../src/assets/images/${props.avatar}`} alt="profile avatar" />
            <p className="notification--activity">
                <span className='notification--name'>{props.name} </span>
                {props.activity}
                <span className={props.objectActivity === "Chess Club" ? "notification--group" : "notification--objectActivity"}> {props.objectActivity} {props.isRead && <img src="../src/assets/images/circle.svg"></img>}
                </span>
                <br />
                <span className='notification--time'>{props.time} ago</span>
                <br />
                {props.message !== "" && <div className='notification--message'>{props.message}</div>}
            </p>
            {props.hasObjectImg && <img className='notification--img' src={props.objectImg} alt="" />}
        </div>
  )
}

export default Notifications


