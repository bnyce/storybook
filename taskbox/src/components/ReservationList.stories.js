import React from 'react';

import ReservationList from './ReservationList';
import * as ReservationStories from './Reservation.stories';

export default {
  component: ReservationList,
  title: 'ReservationList',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <ReservationList {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Reservation.stories.js.
  reservations: [
    { ...ReservationStories.Default.args.task, id: '1', title: 'Internal Use', room_id: '3793', how_many: '3', date: 'Tuesday, April 26, 2022', time_start: '9:00 AM', time_end: '11:00 AM', status: 'Confirmed' },
    { ...ReservationStories.Default.args.task, id: '2', title: 'Interviews', room_id: '3796', how_many: '3', date: 'Tuesday, April 26, 2022', time_start: '11:00 PM', time_end: '1:00 PM', status: 'Confirmed' },
    { ...ReservationStories.Default.args.task, id: '3', title: 'Video Appointment', room_id: '3797', how_many: '3', date: 'Tuesday, April 26, 2022', time_start: '1:00 PM', time_end: '3:00 PM', status: 'Confirmed' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  reservations: [
    ...Default.args.reservations.slice(0, 2),
    { id: '3', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  reservations: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
