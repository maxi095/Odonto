import {z} from 'zod';

export const createProjectSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),

    
    date: z.string().datetime().optional(),
});