import React from 'react';

import PasswordInput from './PasswordInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/Password Input',
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = args => {
  let containerStyle = 'p-10 ';
  if (args.suit === 'dark') {
    containerStyle += 'bg-black';
  }

  return (
    <div className={containerStyle}>
      <PasswordInput {...args} />
    </div>
  );
};

export const Dark = Template.bind({});
Dark.args = {
  labelText: 'Password',
  placeholder: 'placeholder text',
  errorText: 'error text',
  suit: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  labelText: 'Password',
  placeholder: 'placeholder text',
  errorText: 'error text',
  suit: 'light',
};
