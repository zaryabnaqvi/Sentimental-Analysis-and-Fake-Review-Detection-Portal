import React, { useState } from "react";
import {
  Card,
  Typography,
  Radio,
  Button,
  Input,
} from "@material-tailwind/react";
import Logo from "../Components/Logo";
import { TextLink } from "../Components/Typography";

const SignInPage = () => {


  // const [selectedRole, setSelectedRole] = useState(availableRoles[0].value);

  // State for form fields





  const UserForm = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
  // Update form fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
    const LegalPrompt = () => {
      return (
        <div className="bg-gray-800 p-4 text-justify rounded-lg">
          <p className="text-xs text-gray-100 mb-4">
            By signing in to the Sentimental Analysis and Fake Review Detection System, you agree to comply with all applicable laws and regulations regarding the use of this system.
            <br></br>
            <br></br>
            You also acknowledge that your activities within the system may be monitored and recorded for security purposes.
          </p>
        </div>
      );
    };

    return (
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <Typography className="text-xs font-semibold text-gray-200">Email</Typography>
            <Input
  size="md"
  placeholder="name@mail.com"
  className="!border-t-blue-gray-200 focus:!border-t-teal-300 text-yellow-50"
  color="teal" labelProps={{
    className: "before:content-none after:content-none text-gray-200",
  }}
  name="email"
  value={formData.email} // Set value to formData.email
  onChange={handleFormChange} // Call handleFormChange when input changes
/>

          </div>
          <div className="flex flex-col gap-1">
            <Typography className="text-xs font-semibold text-gray-200">Password</Typography>
            <Input
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-teal-300"
              color="teal"            labelProps={{
                className: "before:content-none after:content-none text-gray-200",
              }}
              name="password"
              value={formData.password}
              onChange={handleFormChange}
            />
            <Typography className="text-right text-gray-200">
              <a
                href="."
                className="font-medium text-xs text-teal-300 hover:text-teal-400 active:text-teal-400 hover:underline"
              >
                Forgot password?
              </a>
            </Typography>
          </div>
        </div>
        <LegalPrompt />
        <Button color="teal" type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-16 py-8 bg-gray-800 text-white">
      <Card
        shadow={false}
        className="w-full md:w-fit max-w-md flex flex-col items-center gap-6 px-8 py-12 md:border md:border-gray-300 bg-[#1b1b35]"
      >
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="font-light text-center text-gray-200">
            Sign In
          </Typography>
        </div>
        <div className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
          {/* <RoleSelector name="userRole" availableRoles={availableRoles} /> */}
          <UserForm />
        </div>
        <div>
          <Typography color="white"variant="small">
            Don't have an account?{" "}
            <TextLink className={"text-teal-300"} href="/accounts/sign-up">Sign up</TextLink>
          </Typography>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
