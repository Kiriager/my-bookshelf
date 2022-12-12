import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';
import Button from 'src/ui/common/Button/Button';

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
        console.log('email' + values.email);
        console.log('password' + values.password);
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
          <div className='w-96'>
            <Field
              id='email'
              component={TextInput}
              name='email'
              placeholder={t('auth.emailPlaceholder')}
              label={''}
              // error={userState.error?.type === 'unregistered' ? userState.error?.message : undefined}
            />
            <Field
              id='password'
              name='password'
              component={PasswordInput}
              placeholder={t('auth.passwordPlaceholder')}
              label={''}
              // error={
              //   userState.error?.type === 'invalidPassword' ? userState.error?.message : undefined
              // }
            />
            <Button
              id='submit-registration'
              name='submit-registration'
              onClick={() => undefined}
              //isDisabled={userState.status === 'loggingIn' || !isValid}
              buttonType='submit'
              title={t('auth.signInLabel')}
              format='secondary'
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LogInPage;
