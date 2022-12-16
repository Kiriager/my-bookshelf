import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';
import Button from 'src/ui/common/Button/Button';
import { logInRequest } from 'src/store/slices/user/user.action';
import { useAppDispatch, useAppSelector } from 'src/hooks/store';

interface LogInFormValues {
  email: string;
  password: string;
}

const LogInPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user);

  const { t } = useTranslation();
  const initialValues: LogInFormValues = { email: '', password: '' };

  return (
    <div className='flex'>
      <div className='w-96 m-auto mt-20'>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            console.log(JSON.stringify(values, null, 2)); //________________________delete later
            dispatch(logInRequest({ email: values.email, password: values.password }));
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
                user.error?.type == 'unregistered email'
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
                user.error?.type == 'incorrect password'
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
      </div>
    </div>
  );
};

export default LogInPage;
