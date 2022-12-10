import React from 'react';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  labelText?: string;
  errorText?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({ labelText, errorText, placeholder }) => {
  const inputClassList: Array<string> = [
    'border border-white-off/[0.3] rounded-standart block w-full h-input',
    'p-6 placeholder:text-white-off/[0.3] font-gill bg-black text-white',
  ];
  const rootClassList: Array<string> = ['p-2 bg-black'];

  return (
    <div className={rootClassList.join(' ')}>
      {/* {label !== undefined && <InputLabel className='mb-0.25'>{label}</InputLabel>} */}
      <div className='relative'>
        <input className={inputClassList.join(' ')} placeholder={placeholder} />
      </div>
      {/* {anyError !== undefined && <InputError className='mt-0.25'>{anyError}</InputError>} */}
    </div>
  );
};

export default TextInput;
