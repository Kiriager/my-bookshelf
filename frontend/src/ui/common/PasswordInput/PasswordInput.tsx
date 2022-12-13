import { FieldProps } from 'formik';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import TextInput, { TextInputProps } from '../TextInput/TextInput';

const PasswordInput: React.FC<TextInputProps & FieldProps> = ({
  additionalStyles = '',
  ...otherProps
}) => {
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const iconStyle =
    'w-6 h-6 text-white-off col-start-1 row-start-1 self-center justify-self-end mr-4';

  const props = { additionalStyles: additionalStyles + ' col-start-1 row-start-1 ', ...otherProps };

  return (
    <div className='grid'>
      <TextInput {...props} type={passwordIsShown ? 'text' : 'password'} />
      {passwordIsShown ? (
        <AiOutlineEyeInvisible onClick={() => setPasswordIsShown(false)} className={iconStyle} />
      ) : (
        <AiOutlineEye onClick={() => setPasswordIsShown(true)} className={iconStyle} />
      )}
    </div>
  );
};

export default PasswordInput;
