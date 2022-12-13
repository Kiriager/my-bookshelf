import React from 'react';

import PasswordInput from './PasswordInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/Password Input',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = args => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: 'Password',
};
