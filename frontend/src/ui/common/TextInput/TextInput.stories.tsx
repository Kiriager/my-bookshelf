import React from 'react';

import TextInput from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => (
  <div className='bg-black p-10'>
    <TextInput {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  labelText: 'label text',
  placeholder: 'placeholder text',
  errorText: 'error text',
};
