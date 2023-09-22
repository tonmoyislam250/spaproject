import React, { useState } from 'react';
import {
  FormWrap,
  FormContent,
  Form,
  FormLabel,
  FormRow,
  HalfWidthInput,
  FormSelect,
  FormTextArea,
  FormButton,
  Text,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from '../ContactForm/FormElement.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formSubmissionStatus, setFormSubmissionStatus] = useState('');

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setFormSubmissionStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        setFormSubmissionStatus('Form submission failed. Please try again later.');
      });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <>
      <InfoContainer lightBg={true} id="contact">
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <TextWrapper>
                <TopLine>Contact Us</TopLine>
                <Heading>Tell Us About Your Project</Heading>
                <Subtitle>
                  In Spark Food Dome we offer delicious and tasty food also for vegitarians. this Form also will test your sharpness.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormWrap>
                <FormContent>
                  <Form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out: <HalfWidthInput name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <FormRow>
                      <FormLabel htmlFor="name">
                        Name
                        <HalfWidthInput
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                      <FormLabel htmlFor="email">
                        Email
                        <HalfWidthInput
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={handleChange}
                          required
                        />
                      </FormLabel>
                    </FormRow>
                    <FormLabel htmlFor="subject">
                      Subject
                      <FormSelect id="subject" name="subject" value={subject} onChange={handleChange} required>
                        <option value="">--Please choose an option--</option>
                        <option value="New Business Inquiry">New Business Inquiry</option>
                        <option value="Existing Order Inquiry">Existing Order Inquiry</option>
                        <option value="Other">Other</option>
                      </FormSelect>
                    </FormLabel>
                    <FormLabel htmlFor="message">
                      Message
                      <FormTextArea id="message" name="message" value={message} onChange={handleChange} required />
                    </FormLabel>
                    <FormButton type="submit">Submit</FormButton>
                    {formSubmissionStatus && <Text>{formSubmissionStatus}</Text>}
                  </Form>
                </FormContent>
              </FormWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactForm;
