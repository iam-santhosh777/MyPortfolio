import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaWhatsapp } from "react-icons/fa";


const ContactUs = () => {
  const form = useRef();

  const validationSchema = Yup.object().shape({
    from_name: Yup.string().required('Name is required'),
    from_email: Yup.string().email('Invalid email').required('Email is required'),
    company_name: Yup.string().required('Company name is required'),
    position_name: Yup.string().required('Position name is required'),
    location_name: Yup.string().required('Location is required'),
    mobile_number: Yup.string(),
    message: Yup.string().required('Message is required'),
  });

  const sendEmail = (values, { resetForm }) => {
    emailjs.sendForm('service_7fvvqvm', 'template_wbm79gj', form.current, 'scphxeaOgeBXvJHtD')
      .then(() => {
        console.log('SUCCESS!');
        resetForm();
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('An error occurred while sending the message. Please try again.');
      });
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    // Replace 'your_number' with your actual WhatsApp number
    window.open('https://wa.me/9603131169', '_blank');
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-5 shadow-lg p-3 mb-5  rounded">
          <Formik
            initialValues={{
              from_name: '',
              from_email: '',
              company_name: '',
              position_name: '',
              mobile_number: '',
              message: ''
            }}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ errors, touched }) => (
              <Form ref={form}>
                <div className="mb-3">
                  <label htmlFor="from_name" className="form-label row d-flex mx-2 justify-content-start">Name</label>
                  <Field type="text" name="from_name" className={`form-control ${errors.from_name && touched.from_name ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Enter your name"/>
                  <ErrorMessage name="from_name" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3">
                  <label htmlFor="from_email" className="form-label row d-flex mx-2 justify-content-start">Email</label>
                  <Field type="email" name="from_email" className={`form-control ${errors.from_email && touched.from_email ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Enter your Email"/>
                  <ErrorMessage name="from_email" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3">
                  <label htmlFor="company_name" className="form-label row d-flex mx-2 justify-content-start">Company Name</label>
                  <Field type="text" name="company_name" className={`form-control ${errors.company_name && touched.company_name ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Enter your company name" />
                  <ErrorMessage name="company_name" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3">
                  <label htmlFor="position_name" className="form-label row d-flex mx-2 justify-content-start">Position Name</label>
                  <Field type="text" name="position_name" className={`form-control ${errors.position_name && touched.position_name ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Position name" />
                  <ErrorMessage name="position_name" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3">
                  <label htmlFor="location_name" className="form-label row d-flex mx-2 justify-content-start">Location</label>
                  <Field type="text" name="location_name" className={`form-control ${errors.location_name && touched.location_name ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Work Location" />
                  <ErrorMessage name="location_name" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile_number" className="form-label row d-flex mx-2 justify-content-start">Mobile Number</label>
                  <Field type="text" name="mobile_number" className={`form-control ${errors.mobile_number && touched.mobile_number ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Enter your mobile number (optional)" />
                  <ErrorMessage name="mobile_number" component="div" className="invalid-feedback" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label row d-flex mx-2 justify-content-start">Message</label>
                  <Field as="textarea" name="message" className={`form-control ${errors.message && touched.message ? 'is-invalid' : ''} bg-dark text-white`} placeholder="Type your message here..."/>
                  <ErrorMessage name="message" component="div" className="invalid-feedback row d-flex mx-2 justify-content-start" />
                </div>
                <div className="mb-3 text-start" onClick={handleWhatsAppClick}>
                  <label htmlFor="whatsapp" className="form-label row d-flex mx-2 justify-content-start">
                    <div style={{cursor: 'pointer'}}>
                    <FaWhatsapp style={{ marginRight: '5px', fontSize: '40px'}}/>
                    Get in touch with WhatsApp
                    </div>
                    
                  </label>
                </div>
                <button type="submit" className="btn btn-primary px-5">Send</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
