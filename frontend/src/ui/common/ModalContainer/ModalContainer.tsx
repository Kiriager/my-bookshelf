import React, { MouseEventHandler } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';

export interface ModalContainerProps {
  title?: string;
  onClose?: MouseEventHandler;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ title, onClose, children }) => {
  const panelClassList: Array<string> = [
    'm-auto flex flex-col gap-8 p-12 w-96 w-full',
    'bg-white-pure rounded-lg shadow-main-box-shadow',
  ];

  return (
    <div className='fixed w-full h-screen p-4 bg-borders bg-opacity-60 grid grid-cols-modal justify-center'>
      <div className={panelClassList.join(' ')}>
        <header className='flex justify-between'>
          {title !== undefined ? <h3 className='text-primary'>{title}</h3> : null}
          <AiFillCloseSquare
            className='text-3xl relative -top-6 -right-6 cursor-pointer'
            onClick={onClose}
          />
        </header>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
