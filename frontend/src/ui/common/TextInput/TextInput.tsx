import { FieldProps } from 'formik';
import React from 'react';
import { string } from 'yup';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  labelText?: string;
  errorText?: string;
  placeholder?: string;
  type?: string;
  additionalStyles?: string;
}

const TextInput: React.FC<TextInputProps & FieldProps> = ({
  labelText,
  errorText,
  placeholder,
  type = 'text',
  additionalStyles = '',
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const inputClassList: Array<string> = [
    'border border-white-off/[0.3] rounded-standart block w-full h-input text-usual',
    'p-6 placeholder:text-white-off/[0.3] font-gill bg-black text-white-pure',
    additionalStyles,
  ];

  return (
    <input
      type={type}
      className={inputClassList.join(' ')}
      placeholder={placeholder}
      {...field}
      {...props}
    />
  );
};

export default TextInput;
