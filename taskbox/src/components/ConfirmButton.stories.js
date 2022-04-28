import React from 'react';

import ConfirmButton from './ConfirmButton';

export default {
  component: ConfirmButton,
  title: 'ConfirmButton',
};

const Template = args => <ConfirmButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  confirmbutton: {
    id: '1',
    title: 'Test ConfirmButton',
  },
};
