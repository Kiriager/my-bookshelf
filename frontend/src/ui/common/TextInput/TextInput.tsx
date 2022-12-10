import React from 'react';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  labelText: string;
  errorText: string;
}

const TextInput: React.FC<TextInputProps> = ({ labelText, errorText }) => {
  const inputClassList: Array<string> = ['bg-black'];
  const rootClassList: Array<string> = [];

  return (
    <div className={rootClassList.join(' ')}>
      {/* {label !== undefined && <InputLabel className='mb-0.25'>{label}</InputLabel>} */}
      <div className='relative'>
        <input className={inputClassList.join(' ')} />
      </div>
      <p className='text-red'>Text</p>
      {/* {anyError !== undefined && <InputError className='mt-0.25'>{anyError}</InputError>} */}
    </div>
  );
};

export default TextInput;
