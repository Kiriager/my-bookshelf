import React from 'react';

export interface ModalContainerProps {
  title: string;
  additionalStyle?: string;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ title, children }) => {
  const panelClassList: Array<string> = [
    'absolute flex flex-col top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 gap-8 p-8 w-102.5',
    'bg-white-pure rounded-lg text-center shadow-main-box-shadow',
  ];

  return (
    <div className={'fixed top-0 bottom-0 left-0 right-0 bg-borders bg-opacity-60'}>
      <div className={panelClassList.join(' ')}>
        <h3 className='text-primary'>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
