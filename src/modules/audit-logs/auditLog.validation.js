const { z } = require("zod");

const optional = (schema) => z.preprocess((value) => (value === "" ? undefined : value), schema.optional());

const auditActions = ["CREATE", "UPDATE", "DELETE"];
const auditEntityTypes = ["STUDENT", "TEACHER", "VISIT"];

const listAuditLogSchema = z.object({
  body: z.object({}),
  query: z.object({
    page: optional(z.coerce.number().int().min(1)),
    limit: optional(z.coerce.number().int().min(1).max(100)),
    search: optional(z.string().trim()),
    action: optional(z.enum(auditActions)),
    entityType: optional(z.enum(auditEntityTypes)),
    from: optional(z.coerce.date()),
    to: optional(z.coerce.date()),
  }),
  params: z.object({}),
});

module.exports = { listAuditLogSchema, auditActions, auditEntityTypes };
