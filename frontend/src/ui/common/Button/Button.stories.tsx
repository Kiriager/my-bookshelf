import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  format: 'secondary',
  title: 'Secondary',
};

export const Navbar = Template.bind({});
Navbar.args = {
  format: 'navbar',
  title: 'Navbar',
};
