import React, { useState } from 'react'
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import Input from '../components/ui/Input';
import BasicButton from '../components/ui/BasicButton';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice';


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({ email, password }) => {
    const userData = {
      email: email,
      password: password
    };
    handleUserSubmition(userData);
  };

  const handleUserSubmition = async(userData) => {
    try{
      setLoading(true);
      const res = await axios.post('http://localhost:8080/user/login', userData, {
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
      dispatch(signInSuccess(data));
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="md:w-1/2 max-w-[440px] mx-auto flex flex-col items-center lg:my-10 lg:gap-10 my-5 gap-5">
      <div className="rounded-xl bg-bgColor-soft w-full p-8 border border-borderColor">
        <h1 className="text-4xl text-center font-bold">Login</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 my-8 text-black"
        >
          <Input
            label="Email"
            placeholder="Email"
            type="email"
            error={errors.email}
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <Input
            label="Password"
            placeholder="Password"
            type="password"
            error={errors.password}
            {...register("password", {
              required: "Password is required",
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
            className="w-full"
          >
            Login
          </BasicButton>
        </form>
        <p className="text-center text-textColor-soft mt-4">
          Don't you have an account?{" "}
          <Link
            to="/register"
            className="text-primary hover:text-secondary font-semibold ml-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
