"use client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import React from "react";
import { authClient } from "../api/auth/[...all]/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    if (data) {
      redirect("/");
    }
    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully");

    console.log({ data, error });
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold my-3">Create Account</h1>
        <p className="p-3">Start your adventure with wanderlust!</p>
      </div>
      <Card className="border">
        <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4">
          <TextField isRequired name="name" type="text">
            <Label>Name </Label>
            <Input placeholder="Jhon Doe" />
            <FieldError />
          </TextField>
          <TextField name="image" type="url">
            <Label>Image URL </Label>
            <Input placeholder="image Url" />
            <FieldError />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <div className="flex justify-center gap-2">
            <Button className={"w-full"} type="submit">
              {/* <Check /> */}
              Create Account
            </Button>
          </div>
        </Form>
        <div>
          <div className="flex justify-center items-center gap-3 ">
            <Separator />
            <div className="whitespace-nowrap py-3">Or sign up with </div>
            <Separator />
          </div>
          <div>
            <Button
              onClick={handleGoogleSignin}
              variant="outline"
              className={"w-full items-center justify-center"}
            >
              {" "}
              <FcGoogle /> Sign Up With Google!
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
