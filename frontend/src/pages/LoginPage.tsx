import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import Button from 'src/ui/common/Button/Button';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';

// import { useAppSelector, useAppDispatch } from 'src/hooks';
// import { selectUser, login, userUnauthorize } from 'src/store/slices';
// import { REGISTER_ROUTE } from 'src/config';

const LogInPage: React.FC = () => {
  //const dispatch = useAppDispatch();
  // const userState = useAppSelector(selectUser);

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => {
        //dispatch(login(values.email, values.password));
      }}
      validateOnMount
      validationSchema={Yup.object({
        email: Yup.string().required('Email is required').email('The email is invalid'),
        password: Yup.string().required('Password is required'),
      })}
    >
      {({ isValid }) => (
        <Form
          onChange={() => {
            //if (userState.status === 'unauthorized') dispatch(userUnauthorize());
          }}
        >
          <p>Hello from login form</p>
          <div className='w-96'>
            <Field
              id='email'
              component={TextInput}
              name='email'
              placeholder={t('auth.emailPlaceholder')}
              label={t('')}
              // error={userState.error?.type === 'unregistered' ? userState.error?.message : undefined}
            />
            <Field
              id='password'
              name='password'
              component={PasswordInput}
              placeholder={t('auth.passwordPlaceholder')}
              label={t('auth.passwordTitle')}
              // error={
              //   userState.error?.type === 'invalidPassword' ? userState.error?.message : undefined
              // }
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LogInPage;
