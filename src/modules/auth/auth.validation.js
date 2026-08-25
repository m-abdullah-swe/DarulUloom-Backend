const { z } = require("zod");

const loginSchema = z.object({
  body: z.object({
    username: z.string().min(3),
    password: z.string().min(6)
  }),
  query: z.object({}),
  params: z.object({})
});

module.exports = { loginSchema };
