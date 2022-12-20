import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';
import Button from 'src/ui/common/Button/Button';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';
import { loginRequest } from 'src/store/slices/auth/auth.action';
import SignupPanel from './SignupModal';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [isOpenSigninModal, setIsOpenSigninModal] = useState<boolean>(false);

  const authState = useAppSelector(state => state.auth);

  const { t } = useTranslation();
  const initialValues: LoginFormValues = { email: '', password: '' };

  return (
    <div className='flex'>
      <div className='w-96 m-auto mt-20'>
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
          <Form className='p-8 bg-black rounded-lg grid grid-cols-1 gap-4'>
            <Field
              id='email'
              component={TextInput}
              name='email'
              placeholder={t('auth.emailPlaceholder')}
              type='email'
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
              placeholder={t('auth.passwordPlaceholder')}
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
              title={t('auth.signInLabel')}
              format='secondary'
            />
          </Form>
        </Formik>
        <Button
          id='submit-registration'
          name='submit-registration'
          onClick={() => setIsOpenSigninModal(true)}
          buttonType='button'
          title={t('auth.createAccountLabel')}
          format='secondary'
        />
      </div>

      {isOpenSigninModal ? (
        <SignupPanel>
          <p>Create account panel</p>
        </SignupPanel>
      ) : null}
    </div>
  );
};

export default LoginPage;
