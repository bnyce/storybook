import React from 'react';

import Reservation from './Reservation';

export default {
  component: Reservation,
  title: 'Reservation',
};

const Template = args => <Reservation {...args} />;

export const Default = Template.bind({});
Default.args = {
  reservation: {
    id: '1',
    title: 'Test Reservation',
    name: 'John Doe',
    email: 'john@example.com',
    how_many: '2',
    room: 'Shared Learning - 531',
    date: 'Tuesday, April 26, 2022',
    time_start: '9:00 AM',
    time_end: '11:00 AM',
    status: 'RESERVATION_AWAITING',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Awaiting = Template.bind({});
Awaiting.args = {
  reservation: {
    ...Default.args.reservation,
    status: 'RESERVATION_AWAITING',
},
};

export const Confirmed = Template.bind({});
Confirmed.args = {
  reservation: {
    ...Default.args.reservation,
    status: 'RESERVATION_CONFIRMED',
},
};

export const Expired = Template.bind({});
Expired.args = {
  reservation: {
    ...Default.args.reservation,
    status: 'RESERVATION_EXPIRED',
},
};
