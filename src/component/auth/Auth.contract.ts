import { z } from "zod";

export interface ICredential {
  username: string;
  password: string;
}

export interface IUserRegisterCredintial {
  name: string;
  username: string;
  gender: string;
  role: string;
  address: string;
  phone: string;
  image: File;
}

export const LOginSchema = z.object({
  username: z
    .string("Invalid email format")
    .nonempty("Username is required")
    .nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional(),
});

export const UserRegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(4, "usdrname is requiredd"),
  gender: z.string().nonempty("gender is required"),
  role: z.string().nonempty("role is required"),
  address: z.string().nonempty("address is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  image: z
    .any()
    .transform((files) => files?.[0])
    .refine((file) => file instanceof File, "Image is required"),
});
