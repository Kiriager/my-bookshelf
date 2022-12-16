import { FieldProps } from 'formik';
import React from 'react';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  id?: string;
  labelText?: string;
  errorText?: string;
  placeholder?: string;
  type?: string;
  additionalStyles?: string;
  iconChild?: boolean;
}

const TextInput: React.FC<TextInputProps & FieldProps> = ({
  id = '',
  labelText,
  errorText,
  placeholder,
  type = 'text',
  additionalStyles = '',
  iconChild = false,
  children,
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const inputClassList: Array<string> = [
    'border border-input-borders rounded bg-black block w-full h-input p-6',
    'text-usual font-gill text-white-off caret-borders',
    'hover:placeholder:text-text-primary placeholder:text-text-secondary hover:text-green-secondary',
    'focus:ring-0 focus:outline-none focus:border-green-primary',
    additionalStyles,
  ];

  if (iconChild) {
    inputClassList.push('col-start-1 row-start-1');
  }

  const labelClassList: Array<string> = ['text-text-secondary text-sub'];
  const errorsClassList: Array<string> = ['text-text-error text-sub'];

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
        {iconChild ? (
          <div className='col-start-1 row-start-1 self-center justify-self-end mr-4'>
            {children}
          </div>
        ) : null}
      </div>
      {errorsMessage !== undefined ? (
        <p className={errorsClassList.join(' ')}>{errorsMessage}</p>
      ) : null}
    </div>
  );
};

export default TextInput;
