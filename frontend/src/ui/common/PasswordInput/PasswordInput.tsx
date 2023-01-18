import { FieldProps } from 'formik';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import TextInput, { TextInputProps } from '../TextInput/TextInput';

const PasswordInput: React.FC<TextInputProps & FieldProps> = ({
  additionalStyles = '',
  ...otherProps
}) => {
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const iconStyle = 'w-6 h-6 text-text-secondary';

  const props = { additionalStyles: additionalStyles + '', ...otherProps };

  return (
    <TextInput {...props} type={passwordIsShown ? 'text' : 'password'} iconChild={true}>
      {passwordIsShown ? (
        <AiOutlineEyeInvisible onClick={() => setPasswordIsShown(false)} className={iconStyle} />
      ) : (
        <AiOutlineEye onClick={() => setPasswordIsShown(true)} className={iconStyle} />
      )}
    </TextInput>
  );
};

export default PasswordInput;
