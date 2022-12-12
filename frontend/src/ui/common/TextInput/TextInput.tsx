import React from 'react';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  labelText?: string;
  errorText?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ labelText, errorText, placeholder }) => {
  const inputClassList: Array<string> = [
    'border border-white-off/[0.3] rounded-standart block w-full h-input text-usual',
    'p-6 placeholder:text-white-off/[0.3] font-gill bg-black text-white-pure',
  ];

  return <input className={inputClassList.join(' ')} placeholder={placeholder} />;
};

export default TextInput;
