import React from 'react';

import TextInput from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Focused = Template.bind({});
Focused.args = {
  // autoFocus: true,
  // value: 'some text',
};

// export const Invalid = Template.bind({});
// Invalid.args = {
//   placeholder: 'example@email.com',
//   type: 'email',
//   value: 'not email value in email type',
// };
