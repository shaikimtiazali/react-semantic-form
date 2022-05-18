import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./style.css";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container py-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 15 })}
          />
        </Form.Field>
        {errors.firstName && <p>Please Check the First Name</p>}
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.lastName && <p>Please check the Last name</p>}
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="text"
            {...register("email", {
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="password"
            type="password"
            {...register("password", {
              required: true
              // pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
        </Form.Field>
        {errors.password && <p>Please Check the Password</p>}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default FormValidation;
