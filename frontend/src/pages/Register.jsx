import React, { useState } from 'react'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';

import Input from '../components/ui/Input';
import BasicButton from '../components/ui/BasicButton';


const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register: subscribe, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ name, email, phone, password }) => {
    const userData = {
      name: name,
      email: email,
      phone: phone,
      password: password
    };
    handleUserSubmition(userData);
  };

  const handleUserSubmition = async (userData) => {
    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8080/user/register', userData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCrendentials: true,
      });
      
      const data = await res.data;
      if (data.success === false) {
        toast.error(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      toast.success(data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (e) {
      setLoading(false);
      console.log(e);
      if(e.response.data.message) toast.error(e.response.data.message);
    }
  }

  return (
    <div className="md:w-1/2 max-w-[440px] mx-auto flex flex-col items-center lg:my-10 lg:gap-10 my-5 gap-5">
      <div className="rounded-xl bg-bgColor-soft w-full p-8 border border-borderColor">
        <h1 className="text-4xl text-center font-bold">Create Account</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 my-8 text-black"
        >
          <Input
            label="Name"
            placeholder="John Doe"
            type="text"
            error={errors.name}
            {...subscribe("name", {
              required: "Name is required.",
            })}
          />
          <Input
            label="Email"
            placeholder="johndoe@mail.com"
            type="email"
            error={errors.email}
            {...subscribe("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address.",
              },
            })}
          />
          <Input
            label="Phone Number"
            placeholder="+918012345678"
            type="tel"
            error={errors.phone}
            {...subscribe("phone", {
              required: "Phone number is required.",
              pattern: {
                value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
                message: "Invalid phone number.",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="p4$$w0rd"
            type="password"
            error={errors.password}
            {...subscribe("password", {
              required: "Password is required.",
              minLength: {
                value: 5,
                message: "Password must be min 5 character.",
              },
            })}
          />
          <BasicButton
            variant="contained"
            radius="small"
            type="submit"
            loading={loading}
            className="w-full mt-2"
          >
            Create Account
          </BasicButton>
        </form>
        <p className="text-center text-textColor-soft mt-4">
          Do you have an account?{" "}
          <Link
            to="/login"
            className="text-primary hover:text-secondary font-semibold ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;