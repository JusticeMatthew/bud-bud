import * as yup from 'yup';

const schema = yup.object({
  username: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .max(36, 'Max length is 36 characters')
    .required('A username is required *')
    .trim(),
  password: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .max(36, 'Max length is 36 characters')
    .required('A password is required *')
    .trim(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default schema;
