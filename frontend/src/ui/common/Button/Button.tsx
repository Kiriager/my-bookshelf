import React from 'react';

export interface ButtonProps {
  title?: string | null;
  id?: string;
  name?: string;
  format?: 'primary' | 'secondary' | 'navbar';
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  title = 'Press',
  id,
  name,
  format = 'primary',
  buttonType = 'button',
  onClick,
}) => {
  const styles: Array<string> = ['rounded-standart px-8 py-4 w-full block text-usual'];
  styles.push(
    format === 'secondary'
      ? 'text-text-primary bg-white'
      : format === 'navbar'
      ? 'text-white-pure bg-text-primary'
      : 'text-white-pure bg-green-primary',
  );
  return (
    <button onClick={onClick} type={buttonType} id={id} name={name} className={styles.join(' ')}>
      {title}
    </button>
  );
};

export default Button;
