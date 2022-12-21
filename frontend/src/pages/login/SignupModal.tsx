import { Formik, Form, Field } from 'formik';
import { t } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';
import { loginRequest } from 'src/store/slices/auth/auth.action';
import Button from 'src/ui/common/Button/Button';
import ModalContainer from 'src/ui/common/ModalContainer/ModalContainer';
import PasswordInput from 'src/ui/common/PasswordInput';
import TextInput from 'src/ui/common/TextInput/TextInput';
import * as Yup from 'yup';

export interface SignupPanelProps {
  additionalStyle?: string;
}

const SignupPanel: React.FC<SignupPanelProps> = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const authState = useAppSelector(state => state.auth);
  const initialValues = { email: '', password: '', passwordConfirmation: '' };

  return (
    <ModalContainer title={String(t('auth.signupPanelTitle'))}>
      <p>Some text</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          dispatch(loginRequest({ email: values.email, password: values.password }));
          resetForm();
        }}
        validateOnMount
        validationSchema={Yup.object({
          email: Yup.string().required('Email is required').email('The email is invalid'),
          password: Yup.string().required('Password is required'),
        })}
      >
        <Form className='grid grid-cols-1 gap-4'>
          <Field
            id='email'
            component={TextInput}
            name='email'
            type='email'
            suit='light'
            labelText={t('auth.emailFieldLabel')}
            errorText={
              authState.error?.type == 'unregistered email'
                ? t('login.unregisteredEmailMessage')
                : null
            }
          />
          <Field
            id='password'
            name='password'
            type='password'
            component={PasswordInput}
            suit='light'
            labelText={t('auth.passwordFieldLabel')}
            errorText={
              authState.error?.type == 'incorrect password'
                ? t('login.incorrectPasswordMessage')
                : null
            }
          />
          <Field
            id='passwordConfirmation'
            name='passwordConfirmation'
            type='password'
            component={PasswordInput}
            labelText={t('auth.passwordConfirmationFieldLabel')}
            suit='light'
            errorText={
              authState.error?.type == 'incorrect password'
                ? t('login.incorrectPasswordMessage')
                : null
            }
          />
          <Button
            id='submit-registration'
            name='submit-registration'
            onClick={() => undefined}
            buttonType='submit'
            title={t('auth.signUpLabel')}
            format='secondary'
          />
        </Form>
      </Formik>
    </ModalContainer>
  );
};

export default SignupPanel;
