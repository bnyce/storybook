import React from 'react';

import Reservation from './Reservation';

export default function ReservationList({ loading, reservations, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="reservation-list">loading</div>;
  }

  if (reservations.length === 0) {
    return <div className="reservation-list">empty</div>;
  }

  return (
    <div className="reservation-list">
      {reservations.map(reservation => (
        <Reservation key={reservation.id} reservation={reservation} {...events} />
      ))}
    </div>
  );
}
