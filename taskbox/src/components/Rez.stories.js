import React from 'react';

import Rez from './Rez';

export default {
  component: Rez,
  title: 'Rez',
};

const Template = args => <Rez {...args} />;

export const Default = Template.bind({});
Default.args = {
  rez: {
    id: '1',
    title: 'Test Rez',
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
  rez: {
    ...Default.args.rez,
    status: 'RESERVATION_AWAITING',
},
};

export const Confirmed = Template.bind({});
Confirmed.args = {
  rez: {
    ...Default.args.rez,
    status: 'RESERVATION_CONFIRMED',
},
};

export const Expired = Template.bind({});
Expired.args = {
  rez: {
    ...Default.args.rez,
    status: 'RESERVATION_EXPIRED',
},
};
