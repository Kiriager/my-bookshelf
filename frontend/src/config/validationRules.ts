import * as Yup from 'yup';

export const validationRules = {
  password: Yup.string()
    .min(8)
    .max(64)
    .matches(/(?=.*[0-9])/, 'password must contain numbers')
    .matches(/(?=.*[a-z])/, 'password must contain lowercase letters')
    .matches(/(?=.*[A-Z])/, 'password must contain uppercase letters'),
  email: Yup.string().email(),
  passwordConfirmation: (passwordKey: string) =>
    Yup.string().oneOf([Yup.ref(passwordKey)], "passwords don't match"),
  name: Yup.string()
    .max(64)
    .matches(
      /^[a-zA-Z/'/-]+$/,
      ({ label }) => `${label} must contain only letters and "\'" or "-"`,
    ),
} as const;
