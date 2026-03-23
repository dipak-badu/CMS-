import { z } from "zod";
export const LOginSchema = z.object({
  username: z
    .email("Invalid email format")
    .nonempty("Username is required")
    .nonoptional(),
  password: z.string().nonempty("Password is required").nonoptional(),
});
