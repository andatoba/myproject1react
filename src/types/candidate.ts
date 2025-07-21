import { z } from 'zod'

export const CandidateSchema = z.object({
  name: z.string(),
  age: z.number().min(0),
  experience: z.number().min(0),
  status: z.enum(['Pending', 'Reviewing', 'Interviewing', 'Hired']),
  skills: z.array(z.string()),
  working: z.boolean(),
})

export type CandidateType = z.infer<typeof CandidateSchema>
