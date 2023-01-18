import React, { useState } from 'react';

import ModalContainer from './ModalContainer';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Common/Modal Container',
  component: ModalContainer,
} as ComponentMeta<typeof ModalContainer>;

const Template: ComponentStory<typeof ModalContainer> = args => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <>
      {isModalOpen ? (
        <ModalContainer {...args} onClose={() => setIsModalOpen(false)}>
          <p>Some content</p>
        </ModalContainer>
      ) : null}
    </>
  );
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Modal title',
};
