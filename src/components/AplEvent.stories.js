import React from 'react';

import AplEvent from './AplEvent';

export default {
  component: AplEvent,
  title: 'AplEvent',
};

const Template = args => <AplEvent {...args} />;

export const Default = Template.bind({});
Default.args = {
  aplevent: {
    id: '1',
    title: 'Test AplEvent',
    status: 'RESERVATION_AWAITING',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
