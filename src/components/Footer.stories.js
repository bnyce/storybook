import React from 'react';

import Footer from './Footer';

export default {
  component: Footer,
  title: 'Footer',
};

const Template = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  footer: {
    id: '1',
    title: 'Test Reservation',
    status: 'RESERVATION_AWAITING',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};