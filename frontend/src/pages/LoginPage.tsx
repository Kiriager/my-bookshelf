import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import TextInput from 'src/ui/common/TextInput/TextInput';
import PasswordInput from 'src/ui/common/PasswordInput';
import Button from 'src/ui/common/Button/Button';

interface LogInFormValues {
  email: string;
  password: string;
}

const LogInPage: React.FC = () => {
  const { t } = useTranslation();
  const initialValues: LogInFormValues = { email: '', password: '' };

  return (
    <div className='flex'>
      <div className='w-96 m-auto mt-20'>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            console.log(JSON.stringify(values, null, 2));
          }}
          validateOnMount
          validationSchema={Yup.object({
            email: Yup.string().required('Email is required').email('The email is invalid'),
            password: Yup.string().required('Password is required'),
          })}
        >
          <Form className='p-8 bg-black rounded-standart grid grid-cols-1 gap-4'>
            <Field
              id='email'
              component={TextInput}
              name='email'
              placeholder={t('auth.emailPlaceholder')}
            />
            <Field
              id='password'
              name='password'
              component={PasswordInput}
              placeholder={t('auth.passwordPlaceholder')}
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
