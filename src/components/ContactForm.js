import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast('Response sent successfully!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    try {
      setDisabled(true);

      const templateParams = {
        name,
        email,
        message
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
      toast.error('Failed to submit form. Please try again.');
      setDisabled(false);
    }
  };

  return (
    <div className='container' style={{marginTop:"50px", marginBottom: "50px"}}>
      <div className='card-container' style={{marginRight: "auto", marginLeft: "auto"}}>
        <h2 className='card-title'>Contact Us</h2>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='form-section'>
            <div className='form-row'>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Please enter your name'
                    },
                    maxLength: {
                      value: 30,
                      message: 'Please use 30 characters or less'
                    }
                  })}
                  className='form-control'
                  placeholder='Name'
                />
                {errors.name && <span className='error-message'>{errors.name.message}</span>}
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='email'
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}
                  className='form-control'
                  placeholder='Email address'
                />
                {errors.email && (
                  <span className='error-message'>Please enter a valid email address</span>
                )}
              </div>
            </div>
          </div>
          <div className='form-section'>
            <div className='form-group'>
              <textarea
                rows={3}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='form-control'
                placeholder='Message'
              />
              {errors.message && <span className='error-message'>Please enter your message</span>}
            </div>
          </div>
          <button className='submit-btn' disabled={disabled} type='submit' style={{backgroundColor: "#1A202C"}}>
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
