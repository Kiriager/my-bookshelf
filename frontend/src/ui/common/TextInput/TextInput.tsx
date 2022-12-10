import React from 'react';
//import { FieldProps } from 'formik';

export interface TextInputProps {
  labelText: string;
  errorText: string;
}

const TextInput: React.FC<TextInputProps> = ({ labelText, errorText }) => {
  const inputClassList = [
    'focus:outline-none focus:ring-0 block w-full text-sm',
    'placeholder:text-sm placeholder:text-placeholder:text-grey-greyscale placeholder:opacity-70',
  ];

  const rootClassList: Array<string> = [];

  return (
    <div className={rootClassList.join(' ')}>
      {/* {label !== undefined && <InputLabel className='mb-0.25'>{label}</InputLabel>} */}
      <div className='relative'>
        <input className={inputClassList.join(' ')} />
      </div>
      {/* {anyError !== undefined && <InputError className='mt-0.25'>{anyError}</InputError>} */}
    </div>
  );
};

export default TextInput;
