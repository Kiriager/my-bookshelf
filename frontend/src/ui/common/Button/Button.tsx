import React, { MouseEventHandler } from 'react';

export interface ButtonProps {
  title: string;
  id?: string;
  name?: string;
  format?: 'primary' | 'secondary' | 'navbar';
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({
  title,
  id,
  name,
  format = 'primary',
  buttonType = 'button',
  onClick,
}) => {
  const stylesClassList: Array<string> = ['rounded px-8 py-4 w-full block text-usual'];
  stylesClassList.push(
    format === 'secondary'
      ? 'text-text-primary bg-white-pure hover:underline'
      : format === 'navbar'
      ? 'text-white-pure bg-text-primary'
      : 'text-white-pure bg-green-primary',
  );
  return (
    <button
      onClick={onClick}
      type={buttonType}
      id={id}
      name={name}
      className={stylesClassList.join(' ')}
    >
      {title}
    </button>
  );
};

export default Button;
