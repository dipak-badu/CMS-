import { z } from "zod";
export const LOginSchema = z.object({
  username: z
    .email("Invalid email format")
    .nonempty("Username is required")
    .nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional(),
});

export const UserSchema = z.object({
  name: z.string().nonempty().nonoptional(),
  username: z.email().min(5).max(20),
  role: z.string(),
  address: z.string().nonempty().nonoptional(),
  phone: z.number().min(1000000000).max(9999999999),
  image: z.string().url().optional(),
});
