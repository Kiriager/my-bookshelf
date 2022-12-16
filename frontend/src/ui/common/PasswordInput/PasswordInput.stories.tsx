import React from 'react';

import PasswordInput from './PasswordInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/Password Input',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = args => (
  <div className='bg-black p-10'>
    <PasswordInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  labelText: 'Password',
  placeholder: 'placeholder text',
  errorText: 'error text',
};
