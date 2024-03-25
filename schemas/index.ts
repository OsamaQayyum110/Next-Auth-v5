// we create this schema for as a root type which use in both FrontEnd and Backend
import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Must be a String",
    })
    .email({
      message: "Email is Required!",
    }),
  // NOTE:
  // we can use our own error message in input field like invalid enter, Email is Required etc. we can use this code.
  // email: z.string().email({
  // message: "Email is Required!",
  // }),
  //
  // OR this
  // email: z.string({
  // invalid_type_error:"Must be a String"
  // }).email(),

  password: z.string().min(1, {
    message: "Password is required",
  }),
  // NOTE:
  // we can use minimum password schema like password should be in 6 character for to do this we can use this code
  // password: z.string().min(6)
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message:"Name is Required",
  }),
  email: z
    .string()
    .email({
      message: "Email is Required!",
    }),

  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});