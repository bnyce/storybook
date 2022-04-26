import React from 'react';

export default function Reservation({ reservation: { id, title, name, email, how_many, room, room_id, date, time_start, time_end, state, status }, onArchiveTask, onPinTask }) {
  return (
    <div className={`slr_reservation room-${room_id} ${status}`}>
<div class="title">{`${title}`}</div>
<div class="name">Full Name: {`${name}`}</div>
<div class="email">Email: {`${email}`}</div>
<div class="how_many">How many people? {`${how_many}`}</div>
<div class="room">Room: {`${room}`}</div>
<div class="date">{`${date}`}</div>
<div class="time">{`${time_start}`} - {`${time_end}`}</div>
<div class="status" ><span id="slr_status">{`${status}`}</span></div>
<span id="slr_update"></span>
<div id="update_status"></div>
    </div>
  );
}