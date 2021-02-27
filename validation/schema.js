import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('First name is required *').trim(),
  username: yup
    .string()
    .required('A username is required * ')
    .min(4, 'Must be at least 4 characters * ')
    .max(36, 'Max length is 36 characters * ')
    .trim(),
  password: yup
    .string()
    .required('A password is required * ')
    .min(4, 'Must be at least 4 characters * ')
    .trim(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export default schema;
