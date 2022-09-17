import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
const FormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(20, 'Too Short!')
  .max(200, 'Too Long!').required('Required'),
});
const Contact = () => {
  
   
  return (
<div
      >
       <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         message:''
       }}
       validationSchema={FormSchema}
       onSubmit={values => {
         // same shape as initial values
         axios.post('https://run.mocky.io/v3/720515bb-0f70-487a-9296-3fa33e1daa55', values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="message" as="textarea" />
           {errors.message && touched.message ? <div>{errors.message}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
      </div>
    );
};

export default Contact;