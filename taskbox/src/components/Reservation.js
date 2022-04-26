import React from 'react';

export default function Reservation({ reservation: { id, title, name, email, how_many, room, date, time_start, time_end, state, status }, onArchiveTask, onPinTask }) {
  return (
    <div className={`slr_reservation list-item ${status}`}>
<div>Meeting Topic: {`${title}`}</div>
<div>Full Name: {`${name}`}</div>
<div>Email: {`${email}`}</div>
<div>How many people? {`${how_many}`}</div>
<div>Room: {`${room}`}</div>
<div>Reservation Date: {`${date}`}</div>
<div>Time Start:{`${time_start}`}</div>
<div>Time End: {`${time_end}`}</div>
<div>Status: <span id="slr_status">{`${status}`}</span></div>
<span id="slr_update"></span>
<div id="update_status"></div>
    <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
          </a>
        )}
      </div>
    </div>
  );
}