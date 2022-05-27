import React from 'react';
import { store } from '../app/store';
import { fetchAhcPage } from './AhcPageSlice'

import AhcPage from './AhcPage';

store.dispatch(fetchAhcPage());

export default {
  component: AhcPage,
  title: 'AhcPage',
};

const Template = args => <AhcPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  ahcPage: {
    id: '1',
    title: 'Test Reservation',
  },
};