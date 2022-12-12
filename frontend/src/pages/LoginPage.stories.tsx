import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import LogInPage from './LoginPage';

export default {
  title: 'Pages/LogInPage',
  component: LogInPage,
} as ComponentMeta<typeof LogInPage>;

const Template: ComponentStory<typeof LogInPage> = args => <LogInPage {...args} />;

export const Default = Template.bind({});
