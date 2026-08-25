const { z } = require("zod");

const listClassesSchema = z.object({
  body: z.object({}),
  query: z.object({
    departmentId: z.string().uuid().optional(),
    academicYearId: z.string().uuid().optional()
  }),
  params: z.object({})
});

module.exports = { listClassesSchema };
