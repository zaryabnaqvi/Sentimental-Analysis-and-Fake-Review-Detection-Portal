import { useState, useEffect } from "react";
import { Card, Typography, Button, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Components/Logo";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [name, email, password, confirmPassword]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z]+$/;

    let isValid = true;

    if (!nameRegex.test(name) && name?.length) {
      setNameError("Name can only have English alphabets");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!emailRegex.test(email) && email?.length) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (confirmPassword !== password && confirmPassword?.length) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (
      !name?.length ||
      !email?.length ||
      !password?.length ||
      !confirmPassword?.length
    ) {
      isValid = false;
    }

    setIsFormValid(isValid);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (

      <Card
        shadow={false}
        className="w-full md:w-fit max-w-md flex flex-col items-center gap-6 px-8 py-12 md:border md:border-gray-300 bg-[#1b1b35]"
      >
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <Typography className="font-light text-center text-gray-200 mb-2">
            Sign Up
          </Typography>
        </div>
        <form className="w-full md:w-96 flex flex-col gap-6 transition-all duration-400">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <Typography className="text-xs font-semibold text-gray-200">
                Name
              </Typography>
              <Input
                size="md"
                placeholder="Name"
                className="!border-t-blue-gray-200 focus:!border-t-teal-300"
                color="teal"               value={name}
                onChange={handleNameChange}
                labelProps={{
                  className: "before:content-none after:content-none text-gray-200",
                }}
              />
              {nameError && <p className="text-red-500 text-xs">{nameError}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-xs font-semibold text-gray-200">
                Email
              </Typography>
              <Input
                size="md"
                placeholder="abc.123@mail.com"
                className="!border-t-blue-gray-200 focus:!border-t-teal-300"
                color="teal"               value={email}
                onChange={handleEmailChange}
                labelProps={{
                  className: "before:content-none after:content-none text-gray-200",
                }}
              />
              {emailError && (
                <p className="text-red-500 text-xs">{emailError}</p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-xs font-semibold text-gray-200">
                Password
              </Typography>
              <div className="relative">
                <Input
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-teal-300 pr-10"
                  color="teal"                  type={showPassword ? "text" : "password"} // Change type based on visibility
                  value={password}
                  onChange={handlePasswordChange}
                  labelProps={{
                    className: "before:content-none after:content-none text-gray-200",
                  }}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={handleTogglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeLowVision : faEye}
                    className="text-gray-200"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Typography className="text-xs font-semibold text-gray-200">
                Confirm Password
              </Typography>
              <div className="relative">
                <Input
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-teal-300"
                  color="teal"                 type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  labelProps={{
                    className: "before:content-none after:content-none text-gray-200",
                  }}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={handleToggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeLowVision : faEye}
                    className="text-gray-200"
                  />
                </button>
              </div>
              {confirmPasswordError && (
                <p className="text-red-500 text-xs">{confirmPasswordError}</p>
              )}
            </div>
          </div>
          <div className="bg-gray-700 p-4 text-justify rounded-lg">
            <p className="text-xs text-gray-200">
              By signing in to the Sentimental Analysis and Fake review Detection System, you agree to
              comply with all applicable laws and regulations regarding the use
              of this system.
              <br></br>
              <br></br>
              You also acknowledge that your activities within the system may be
              monitored and recorded for security purposes.
            </p>
          </div>
          <Button color="teal" type="submit" fullWidth disabled={!isFormValid}>
            Sign Up
          </Button>
        </form>
      </Card>

  );
};

export default SignUpPage;
