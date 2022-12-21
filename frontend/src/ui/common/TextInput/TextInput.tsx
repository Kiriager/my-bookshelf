import { FieldProps } from 'formik';
import React from 'react';

export interface TextInputProps {
  id?: string;
  labelText?: string;
  errorText?: string;
  placeholder?: string;
  type?: string;
  additionalStyles?: string;
  iconChild?: boolean;
  suit?: 'dark' | 'light';
}

const TextInput: React.FC<TextInputProps & FieldProps> = ({
  id = '',
  labelText,
  errorText,
  placeholder,
  type = 'text',
  suit = 'dark',
  additionalStyles = '',
  iconChild = false,
  children,
  field,
  form,
  ...props
}) => {
  const inputClassList: Array<string> = [
    'block w-full h-input text-usual font-gill caret-borders',
    'placeholder:font-light focus:ring-0 focus:outline-none',
    additionalStyles,
  ];

  const darkSuitClassList: Array<string> = [
    'border border-input-borders rounded bg-black p-6 text-white-off',
    'hover:placeholder:text-text-primary placeholder:text-text-secondary',
    'hover:text-green-secondary focus:border-green-primary',
  ];

  const lightSuitClassList: Array<string> = [
    'border-b border-transparent border-b-borders ph-6 pt-12 text-text-primary',
    'hover:placeholder:text-borders placeholder:text-placeholder hover:text-text-label',
    'focus:border-transparent focus:border-b-text-primary',
  ];

  const labelClassList: Array<string> = ['font-bold text-sub'];
  const errorsClassList: Array<string> = ['text-text-error text-sub'];
  const iconClassList: Array<string> = ['col-start-1 row-start-1 justify-self-end mr-4 mb-1'];

  if (suit === 'dark') {
    inputClassList.push(...darkSuitClassList);
    labelClassList.push('text-text-secondary');
    iconClassList.push('self-center');
  } else if (suit === 'light') {
    inputClassList.push(...lightSuitClassList);
    labelClassList.push('text-text-label relative top-4');
    iconClassList.push('self-end');
  }

  if (iconChild) {
    inputClassList.push('col-start-1 row-start-1');
  }

  const errorsMessage =
    (field !== undefined &&
      form !== undefined &&
      form.touched[field.name] &&
      form.errors[field.name]) ||
    errorText;

  return (
    <div className='flex flex-col'>
      {labelText !== undefined ? (
        <label className={labelClassList.join(' ')} htmlFor={id}>
          {labelText}
        </label>
      ) : null}
      <div className='grid'>
        <input
          id={id}
          type={type}
          className={inputClassList.join(' ')}
          placeholder={placeholder}
          autoComplete='off'
          {...field}
          {...props}
        />
        {iconChild ? <div className={iconClassList.join(' ')}>{children}</div> : null}
      </div>
      {errorsMessage !== undefined ? (
        <p className={errorsClassList.join(' ')}>{errorsMessage}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
