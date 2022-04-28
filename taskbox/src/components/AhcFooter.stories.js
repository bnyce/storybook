import React from 'react';

import AhcFooter from './AhcFooter';

export default {
  component: AhcFooter,
  title: 'AhcFooter',
};

const Template = args => <AhcFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  ahcfooter: {
    id: '1',
    title: 'Test Reservation',
  },
};