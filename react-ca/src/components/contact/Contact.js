import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage"

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 2 characters"),
});

function Contact() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });

  function onSubmit(data) {
    console.log("data" + errors, data);
  }

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
       <Form.Group>
         <Form.Label>Name</Form.Label>
         <Form.Control name="firstName" placeholder="First name" ref={register} />
         {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
       </Form.Group>

       <Form.Group>
         <Form.Label>Last Name</Form.Label>
         <Form.Control name="lastName" placeholder="Last name" ref={register} />
         {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
       </Form.Group>

       <Form.Group>
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" name="email" placeholder="Email" ref={register} />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
       </Form.Group>

       <Form.Group>
         <Form.Label>Message</Form.Label>
         <Form.Control as="textarea" name="message" placeholder="Write a message" ref={register} />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
       </Form.Group>
       <Button type="submit">Submit</Button>
     </Form>
  );
}

export default Contact;
