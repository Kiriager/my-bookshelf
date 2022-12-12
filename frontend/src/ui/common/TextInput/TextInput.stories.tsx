import React from 'react';

import TextInput from './TextInput';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'example@email.com',
};
