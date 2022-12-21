import * as Yup from 'yup';
import { validationRules } from './validationRules';

export const signUpSchema = Yup.object({
  email: validationRules.email.required('Email is required'),
  password: validationRules.password.required('Password is required'),
  passwordConfirmation: validationRules
    .passwordConfirmation('password')
    .required('Password confirmation is required'),
});
