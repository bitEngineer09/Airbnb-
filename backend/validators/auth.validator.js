import z from 'zod';

export const loginUserValidator = z.object({
    email: z
        .email()
        .trim(),
    password: z
        .string()
        .min(3, { message: "Password must be at least 3 characters long" })
        .max(50, { message: "Password should not be more than 50 characters long" })
        .trim()
});

export const registerUserValidator = loginUserValidator.extend({
    name: z
        .string()
        .trim()
        .min(3, { message: "Name must be at least 3 characters long." })
        .max(50, { message: "Name must be no more than 50 characters." }),
});