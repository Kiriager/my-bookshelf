import * as Yup from 'yup';

export const validationRules = {
  password: Yup.string()
    .min(8)
    .max(64)
    .matches(/(?=.*[0-9])/, ({ label }) => `${label} must contain numbers`)
    .matches(/(?=.*[!@#$%^&*])/, ({ label }) => `${label} must contain special characters`)
    .matches(/(?=.*[a-z])/, ({ label }) => `${label} must contain lowercase letters`)
    .matches(/(?=.*[A-Z])/, ({ label }) => `${label} must contain uppercase letters`),
  email: Yup.string().email(),
  passwordConfirmation: (passwordKey: string) =>
    Yup.string().oneOf([Yup.ref(passwordKey)], "Passwords don't match"),
  name: Yup.string()
    .max(64)
    .matches(
      /^[a-zA-Z/'/-]+$/,
      ({ label }) => `${label} must contain only letters and "\'" or "-"`,
    ),
} as const;
