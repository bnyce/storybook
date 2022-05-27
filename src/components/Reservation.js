import React from 'react';
//import ConfirmButton from ConfirmButton;

export default function Reservation({ reservation: { id, title, name, email, how_many, room, room_id, date, time_start, time_end, state, status }, onArchiveTask, onPinTask }) {
 
    if(status == 'Awaiting Confirmation') {
       return (
    <div className={`slr_reservation room-${room_id} ${status}`}>
<div className="title">{`${title}`}</div>
<div className="name">Full Name: {`${name}`}</div>
<div className="email">Email: {`${email}`}</div>
<div className="how_many">How many people? {`${how_many}`}</div>
<div className="room">Room: {`${room}`}</div>
<div className="date">{`${date}`}</div>
<div className="time">{`${time_start}`} - {`${time_end}`}</div>
<div className="status" ><span id="slr_status">{`${status}`}</span></div>
<span id="slr_update">
<div id="update_status">
<h2>Please confirm your reservation:</h2>
<form><button class="apl-button" type="submit">Confirm</button></form>
</div>
</span>
    </div>
  ); 
    } else {
    
    return (
    <div className={`slr_reservation room-${room_id} ${status}`}>
<div className="title">{`${title}`}</div>
<div className="name">Full Name: {`${name}`}</div>
<div className="email">Email: {`${email}`}</div>
<div className="how_many">How many people? {`${how_many}`}</div>
<div className="room">Room: {`${room}`}</div>
<div className="date">{`${date}`}</div>
<div className="time">{`${time_start}`} - {`${time_end}`}</div>
<div className="status" ><span id="slr_status">{`${status}`}</span></div>
<span id="slr_update"></span>
<div id="update_status"></div>
    </div>
  );

    }
}