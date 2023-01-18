import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';
import Button from 'src/ui/common/Button/Button';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';
import { loginRequest } from 'src/store/slices/auth/auth.action';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from 'src/config';
import { signUpSchema } from 'src/config/validationSchemas';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
          validationSchema={signUpSchema}
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
              format='navbar'
            />
          </Form>
        </Formik>
        <Button
          id='submit-registration'
          name='submit-registration'
          onClick={() => navigate(LOGIN_ROUTE)}
          buttonType='button'
          title={t('auth.backToSignInLabel')}
          format='secondary'
        />
      </div>
    </div>
  );
};

export default LoginPage;
