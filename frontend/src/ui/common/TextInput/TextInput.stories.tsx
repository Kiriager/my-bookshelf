import React from 'react';

import TextInput from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => {
  let containerStyle = 'p-10 ';
  if (args.suit === 'dark') {
    containerStyle += 'bg-black';
  }

  return (
    <div className={containerStyle}>
      <TextInput {...args} />
    </div>
  );
};

export const Dark = Template.bind({});
Dark.args = {
  labelText: 'label text',
  placeholder: 'placeholder text',
  errorText: 'error text',
  suit: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  labelText: 'label text',
  placeholder: 'placeholder text',
  errorText: 'error text',
  suit: 'light',
};
