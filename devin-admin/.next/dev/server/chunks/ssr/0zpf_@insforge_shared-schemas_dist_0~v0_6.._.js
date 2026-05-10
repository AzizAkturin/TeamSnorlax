module.exports = [
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/database.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnType",
    ()=>ColumnType,
    "columnSchema",
    ()=>columnSchema,
    "columnTypeSchema",
    ()=>columnTypeSchema,
    "databaseFunctionSchema",
    ()=>databaseFunctionSchema,
    "databaseIndexSchema",
    ()=>databaseIndexSchema,
    "databasePolicySchema",
    ()=>databasePolicySchema,
    "databaseSchemaInfoSchema",
    ()=>databaseSchemaInfoSchema,
    "databaseTriggerSchema",
    ()=>databaseTriggerSchema,
    "foreignKeySchema",
    ()=>foreignKeySchema,
    "migrationSchema",
    ()=>migrationSchema,
    "onDeleteActionSchema",
    ()=>onDeleteActionSchema,
    "onUpdateActionSchema",
    ()=>onUpdateActionSchema,
    "tableSchema",
    ()=>tableSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
var ColumnType;
(function(ColumnType) {
    ColumnType["STRING"] = "string";
    ColumnType["DATE"] = "date";
    ColumnType["DATETIME"] = "datetime";
    ColumnType["INTEGER"] = "integer";
    ColumnType["FLOAT"] = "float";
    ColumnType["BOOLEAN"] = "boolean";
    ColumnType["UUID"] = "uuid";
    ColumnType["JSON"] = "json";
})(ColumnType || (ColumnType = {}));
const onUpdateActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'CASCADE',
    'RESTRICT',
    'NO ACTION'
]);
const onDeleteActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'CASCADE',
    'SET NULL',
    'SET DEFAULT',
    'RESTRICT',
    'NO ACTION'
]);
const columnTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    ColumnType.STRING,
    ColumnType.DATE,
    ColumnType.DATETIME,
    ColumnType.INTEGER,
    ColumnType.FLOAT,
    ColumnType.BOOLEAN,
    ColumnType.UUID,
    ColumnType.JSON
]);
const foreignKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    referenceTable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Target table cannot be empty'),
    referenceColumn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Target column cannot be empty'),
    onDelete: onDeleteActionSchema,
    onUpdate: onUpdateActionSchema
});
const columnSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Column name cannot be empty').max(64, 'Column name must be less than 64 characters'),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        columnTypeSchema,
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]),
    defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    isPrimaryKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    isNullable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    isUnique: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    foreignKey: foreignKeySchema.optional()
});
const tableSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    schemaName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Table name cannot be empty').max(64, 'Table name must be less than 64 characters'),
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(columnSchema).min(1, 'At least one column is required'),
    recordCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const databaseSchemaInfoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isProtected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const databaseFunctionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    functionName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    functionDef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const databaseIndexSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    indexName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    indexDef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isUnique: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable(),
    isPrimary: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable()
});
const databasePolicySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    policyName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    cmd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    roles: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    qual: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    withCheck: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const databaseTriggerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    triggerName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionTiming: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    eventManipulation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actionCondition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    actionStatement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const migrationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{1,64}$/, 'Migration version must be a numeric string of at most 64 digits (e.g. 0001 or 20260418091500).'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    statements: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/database-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminTableRecordLookupQuerySchema",
    ()=>adminTableRecordLookupQuerySchema,
    "adminTableRecordLookupResponseSchema",
    ()=>adminTableRecordLookupResponseSchema,
    "adminTableRecordResponseSchema",
    ()=>adminTableRecordResponseSchema,
    "adminTableRecordSchema",
    ()=>adminTableRecordSchema,
    "adminTableRecordUpdateQuerySchema",
    ()=>adminTableRecordUpdateQuerySchema,
    "adminTableRecordUpdateRequestSchema",
    ()=>adminTableRecordUpdateRequestSchema,
    "adminTableRecordsCreateRequestSchema",
    ()=>adminTableRecordsCreateRequestSchema,
    "adminTableRecordsCreateResponseSchema",
    ()=>adminTableRecordsCreateResponseSchema,
    "adminTableRecordsDeleteQuerySchema",
    ()=>adminTableRecordsDeleteQuerySchema,
    "adminTableRecordsDeleteResponseSchema",
    ()=>adminTableRecordsDeleteResponseSchema,
    "adminTableRecordsListQuerySchema",
    ()=>adminTableRecordsListQuerySchema,
    "adminTableRecordsListResponseSchema",
    ()=>adminTableRecordsListResponseSchema,
    "adminTableRecordsSortClauseSchema",
    ()=>adminTableRecordsSortClauseSchema,
    "bulkUpsertRequestSchema",
    ()=>bulkUpsertRequestSchema,
    "bulkUpsertResponseSchema",
    ()=>bulkUpsertResponseSchema,
    "createMigrationRequestSchema",
    ()=>createMigrationRequestSchema,
    "createMigrationResponseSchema",
    ()=>createMigrationResponseSchema,
    "createTableRequestSchema",
    ()=>createTableRequestSchema,
    "createTableResponseSchema",
    ()=>createTableResponseSchema,
    "databaseFunctionsResponseSchema",
    ()=>databaseFunctionsResponseSchema,
    "databaseIndexesResponseSchema",
    ()=>databaseIndexesResponseSchema,
    "databaseMigrationsResponseSchema",
    ()=>databaseMigrationsResponseSchema,
    "databasePoliciesResponseSchema",
    ()=>databasePoliciesResponseSchema,
    "databaseSchemasResponseSchema",
    ()=>databaseSchemasResponseSchema,
    "databaseTriggersResponseSchema",
    ()=>databaseTriggersResponseSchema,
    "deleteTableResponse",
    ()=>deleteTableResponse,
    "exportJsonDataSchema",
    ()=>exportJsonDataSchema,
    "exportRequestSchema",
    ()=>exportRequestSchema,
    "exportResponseSchema",
    ()=>exportResponseSchema,
    "getTableSchemaResponseSchema",
    ()=>getTableSchemaResponseSchema,
    "importRequestSchema",
    ()=>importRequestSchema,
    "importResponseSchema",
    ()=>importResponseSchema,
    "rawSQLRequestSchema",
    ()=>rawSQLRequestSchema,
    "rawSQLResponseSchema",
    ()=>rawSQLResponseSchema,
    "updateTableSchemaRequestSchema",
    ()=>updateTableSchemaRequestSchema,
    "updateTableSchemaResponse",
    ()=>updateTableSchemaResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/database.schema.js [app-ssr] (ecmascript)");
;
;
const createTableRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableSchema"].pick({
    tableName: true,
    columns: true
}).extend({
    rlsEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true)
});
const createTableResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableSchema"].pick({
    schemaName: true,
    tableName: true,
    columns: true
}).extend({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    autoFields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    nextActions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const getTableSchemaResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tableSchema"];
const updateTableSchemaRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    addColumns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["columnSchema"].omit({
        foreignKey: true
    })).optional(),
    dropColumns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    updateColumns: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        newColumnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'New column name cannot be empty').max(64, 'New column name must be less than 64 characters').optional()
    })).optional(),
    addForeignKeys: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Column name is required for adding foreign key'),
        foreignKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["foreignKeySchema"]
    })).optional(),
    dropForeignKeys: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    renameTable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        newTableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'New table name cannot be empty').max(64, 'New table name must be less than 64 characters')
    }).optional()
});
const updateTableSchemaResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    schemaName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    operations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
const deleteTableResponse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    schemaName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    nextActions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const rawSQLRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    query: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Query is required'),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
});
const rawSQLResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    rows: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())),
    rowCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        dataTypeID: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })).optional()
});
const exportRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tables: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'sql',
        'json'
    ]).default('sql'),
    includeData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    includeFunctions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    includeSequences: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    includeViews: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    rowLimit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().max(10000).default(1000)
});
const exportJsonDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tables: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        schema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            dataType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            characterMaximumLength: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
            isNullable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            columnDefault: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
        })),
        indexes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            indexname: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            indexdef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            isUnique: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable(),
            isPrimary: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable()
        })),
        foreignKeys: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            constraintName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            foreignTableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            foreignColumnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            deleteRule: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            updateRule: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
        })),
        rlsEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
        policies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            policyname: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            cmd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            roles: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
            qual: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            withCheck: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
        })),
        triggers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            triggerName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            actionTiming: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            eventManipulation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            actionOrientation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            actionCondition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            actionStatement: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            newTable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
            oldTable: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
        })),
        rows: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).optional(),
        recordCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })),
    functions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        functionName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        functionDef: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    sequences: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        sequenceName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        startValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        increment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        minValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        maxValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
        cycle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    views: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        viewName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        definition: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))
});
const exportResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'sql',
        'json'
    ]),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        exportJsonDataSchema
    ]),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const importRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    truncate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>{
            if (val === 'true') return true;
            if (val === 'false') return false;
            throw new Error('Invalid boolean string');
        })
    ]).default(false)
});
const importResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tables: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    rowsImported: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    fileSize: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const bulkUpsertRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('public'),
    table: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Table name is required'),
    upsertKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const bulkUpsertResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    table: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    rowsAffected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalRecords: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const adminTableRecordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown());
const adminTableRecordsSortClauseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    columnName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Column name is required'),
    direction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'asc',
        'desc'
    ])
});
const adminTableRecordsListQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(500).default(50),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).default(0),
    search: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    sort: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    filterColumn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().optional(),
    filterValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).refine((value)=>value.filterColumn === undefined && value.filterValue === undefined || value.filterColumn !== undefined && value.filterValue !== undefined, {
    message: 'filterColumn and filterValue must be provided together.',
    path: [
        'filterColumn'
    ]
});
const adminTableRecordLookupQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    column: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Column is required'),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const adminTableRecordsCreateRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(adminTableRecordSchema).min(1, 'At least one record is required');
const adminTableRecordUpdateQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pkColumn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Primary key column is required')
});
const adminTableRecordUpdateRequestSchema = adminTableRecordSchema.refine((record)=>Object.keys(record).length > 0, {
    message: 'At least one field is required.'
});
const adminTableRecordsDeleteQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pkColumn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Primary key column is required'),
    pkValues: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'At least one primary key value is required')
});
const adminTableRecordResponseSchema = adminTableRecordSchema;
const adminTableRecordLookupResponseSchema = adminTableRecordSchema.nullable();
const adminTableRecordsCreateResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(adminTableRecordSchema);
const adminTableRecordsListResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(adminTableRecordSchema),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
    })
});
const adminTableRecordsDeleteResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    deletedCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
});
const createMigrationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{1,64}$/, 'Migration version must be a numeric string of at most 64 digits (e.g. 0001 or 20260418091500).'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Migration name is required').refine((value)=>value.length === 0 || /^[a-z0-9-]+$/.test(value), {
        message: 'Use lowercase letters, numbers, and hyphens only.'
    }),
    sql: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Migration SQL is required')
});
const createMigrationResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["migrationSchema"].extend({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const databaseFunctionsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    functions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databaseFunctionSchema"])
});
const databaseSchemasResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    schemas: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databaseSchemaInfoSchema"])
});
const databaseIndexesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    indexes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databaseIndexSchema"])
});
const databasePoliciesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    policies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databasePolicySchema"])
});
const databaseTriggersResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    triggers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["databaseTriggerSchema"])
});
const databaseMigrationsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    migrations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["migrationSchema"])
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/secrets.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "secretSchema",
    ()=>secretSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const secretSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    isReserved: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    lastUsedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/secrets-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSecretRequestSchema",
    ()=>createSecretRequestSchema,
    "createSecretResponseSchema",
    ()=>createSecretResponseSchema,
    "deleteSecretResponseSchema",
    ()=>deleteSecretResponseSchema,
    "getSecretValueResponseSchema",
    ()=>getSecretValueResponseSchema,
    "listSecretsResponseSchema",
    ()=>listSecretsResponseSchema,
    "updateSecretResponseSchema",
    ()=>updateSecretResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$secrets$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/secrets.schema.js [app-ssr] (ecmascript)");
;
;
const listSecretsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    secrets: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$secrets$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["secretSchema"])
});
const getSecretValueResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const createSecretRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[A-Z0-9_]+$/, 'Use uppercase letters, numbers, and underscores only'),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Value is required')
});
const createSecretResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const updateSecretResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const deleteSecretResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "storageBucketSchema",
    ()=>storageBucketSchema,
    "storageConfigSchema",
    ()=>storageConfigSchema,
    "storageFileSchema",
    ()=>storageFileSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const storageFileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    bucket: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    mimeType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const storageBucketSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    public: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const storageConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    maxFileSizeMb: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "confirmUploadRequestSchema",
    ()=>confirmUploadRequestSchema,
    "createBucketRequestSchema",
    ()=>createBucketRequestSchema,
    "downloadStrategyRequestSchema",
    ()=>downloadStrategyRequestSchema,
    "downloadStrategyResponseSchema",
    ()=>downloadStrategyResponseSchema,
    "getStorageConfigResponseSchema",
    ()=>getStorageConfigResponseSchema,
    "listObjectsResponseSchema",
    ()=>listObjectsResponseSchema,
    "updateBucketRequestSchema",
    ()=>updateBucketRequestSchema,
    "updateStorageConfigRequestSchema",
    ()=>updateStorageConfigRequestSchema,
    "uploadStrategyRequestSchema",
    ()=>uploadStrategyRequestSchema,
    "uploadStrategyResponseSchema",
    ()=>uploadStrategyResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage.schema.js [app-ssr] (ecmascript)");
;
;
const createBucketRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    bucketName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Bucket name cannot be empty'),
    isPublic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true)
});
const updateBucketRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    isPublic: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const listObjectsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    objects: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageFileSchema"]),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const uploadStrategyRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Filename cannot be empty'),
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const uploadStrategyResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'presigned',
        'direct'
    ]),
    uploadUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    fields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    confirmRequired: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    confirmUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional()
});
const downloadStrategyRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    expiresIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional().default(3600)
});
const downloadStrategyResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    method: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'presigned',
        'direct'
    ]),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date().optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const confirmUploadRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    etag: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const updateStorageConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    maxFileSizeMb: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1, 'Must be at least 1 MB').max(200, 'Must be at most 200 MB')
});
const getStorageConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageConfigSchema"];
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/s3-access-key.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createS3AccessKeyRequestSchema",
    ()=>createS3AccessKeyRequestSchema,
    "s3AccessKeySchema",
    ()=>s3AccessKeySchema,
    "s3AccessKeyWithSecretSchema",
    ()=>s3AccessKeyWithSecretSchema,
    "s3GatewayConfigSchema",
    ()=>s3GatewayConfigSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const s3AccessKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    accessKeyId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^INSF[A-Z0-9]{16}$/, 'Invalid access key id format'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    lastUsedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const s3AccessKeyWithSecretSchema = s3AccessKeySchema.extend({
    secretAccessKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().length(40, 'Secret must be 40 characters')
});
const createS3AccessKeyRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
const s3GatewayConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allowedRedirectUrlsRegex",
    ()=>allowedRedirectUrlsRegex,
    "authConfigSchema",
    ()=>authConfigSchema,
    "customOAuthConfigSchema",
    ()=>customOAuthConfigSchema,
    "customOAuthKeySchema",
    ()=>customOAuthKeySchema,
    "emailSchema",
    ()=>emailSchema,
    "emailTemplateSchema",
    ()=>emailTemplateSchema,
    "nameSchema",
    ()=>nameSchema,
    "oAuthConfigSchema",
    ()=>oAuthConfigSchema,
    "oAuthProvidersSchema",
    ()=>oAuthProvidersSchema,
    "oAuthStateSchema",
    ()=>oAuthStateSchema,
    "passwordSchema",
    ()=>passwordSchema,
    "profileSchema",
    ()=>profileSchema,
    "roleSchema",
    ()=>roleSchema,
    "smtpConfigSchema",
    ()=>smtpConfigSchema,
    "tokenPayloadSchema",
    ()=>tokenPayloadSchema,
    "userIdSchema",
    ()=>userIdSchema,
    "userSchema",
    ()=>userSchema,
    "verificationMethodSchema",
    ()=>verificationMethodSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const userIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid('Invalid user ID format');
const emailSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid email format').toLowerCase().trim();
const passwordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string();
const nameSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters').trim();
const roleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'anon',
    'authenticated',
    'project_admin'
]);
const verificationMethodSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'code',
    'link'
]);
const profileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    avatar_url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
}).passthrough();
const userSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: userIdSchema,
    email: emailSchema,
    emailVerified: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    providers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    profile: profileSchema.nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullable()
});
const oAuthProvidersSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'google',
    'github',
    'discord',
    'linkedin',
    'facebook',
    'instagram',
    'tiktok',
    'apple',
    'x',
    'spotify',
    'microsoft'
]);
const oAuthStateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    provider: oAuthProvidersSchema,
    redirectUri: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
});
const oAuthConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    provider: oAuthProvidersSchema,
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    scopes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    redirectUri: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    useSharedKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const allowedRedirectUrlsRegex = /^(?:(?:https?:\/\/)(?:(?:\*\.)?[^\s/:?#]+|\[[0-9A-Fa-f:.]+\])(?::\d+)?(?:\/[^\s]*)?|(?!(?:https?|javascript|data|file|vbscript):)[a-zA-Z][a-zA-Z0-9+.-]*:(?:\/\/[^\s/]+(?:\/[^\s]*)?|\/[^\s]*))$/i;
const authConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    requireEmailVerification: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    passwordMinLength: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(4).max(128),
    requireNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    requireLowercase: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    requireUppercase: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    requireSpecialChar: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    verifyEmailMethod: verificationMethodSchema,
    resetPasswordMethod: verificationMethodSchema,
    allowedRedirectUrls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(allowedRedirectUrlsRegex, {
        message: 'Invalid URL or wildcard URL'
    })).optional().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const smtpConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    host: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
    username: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    hasPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    senderEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    senderName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    minIntervalSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const emailTemplateSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    templateType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    bodyHtml: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const tokenPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    sub: userIdSchema,
    email: emailSchema,
    role: roleSchema,
    iat: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
    exp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const customOAuthKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(64).regex(/^[a-z0-9_-]+$/, 'Key must contain only lowercase letters, numbers, hyphens, and underscores');
const customOAuthConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    key: customOAuthKeySchema,
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    discoveryEndpoint: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    clientId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authErrorResponseSchema",
    ()=>authErrorResponseSchema,
    "createAdminSessionRequestSchema",
    ()=>createAdminSessionRequestSchema,
    "createAdminSessionResponseSchema",
    ()=>createAdminSessionResponseSchema,
    "createCustomOAuthConfigRequestSchema",
    ()=>createCustomOAuthConfigRequestSchema,
    "createOAuthConfigRequestSchema",
    ()=>createOAuthConfigRequestSchema,
    "createSessionRequestSchema",
    ()=>createSessionRequestSchema,
    "createSessionResponseSchema",
    ()=>createSessionResponseSchema,
    "createUserRequestSchema",
    ()=>createUserRequestSchema,
    "createUserResponseSchema",
    ()=>createUserResponseSchema,
    "deleteUsersRequestSchema",
    ()=>deleteUsersRequestSchema,
    "deleteUsersResponseSchema",
    ()=>deleteUsersResponseSchema,
    "exchangeAdminSessionRequestSchema",
    ()=>exchangeAdminSessionRequestSchema,
    "exchangeResetPasswordTokenRequestSchema",
    ()=>exchangeResetPasswordTokenRequestSchema,
    "exchangeResetPasswordTokenResponseSchema",
    ()=>exchangeResetPasswordTokenResponseSchema,
    "getAuthConfigResponseSchema",
    ()=>getAuthConfigResponseSchema,
    "getCurrentSessionResponseSchema",
    ()=>getCurrentSessionResponseSchema,
    "getOauthUrlResponseSchema",
    ()=>getOauthUrlResponseSchema,
    "getProfileResponseSchema",
    ()=>getProfileResponseSchema,
    "getPublicAuthConfigResponseSchema",
    ()=>getPublicAuthConfigResponseSchema,
    "getSmtpConfigResponseSchema",
    ()=>getSmtpConfigResponseSchema,
    "listCustomOAuthConfigsResponseSchema",
    ()=>listCustomOAuthConfigsResponseSchema,
    "listEmailTemplatesResponseSchema",
    ()=>listEmailTemplatesResponseSchema,
    "listOAuthConfigsResponseSchema",
    ()=>listOAuthConfigsResponseSchema,
    "listUsersRequestSchema",
    ()=>listUsersRequestSchema,
    "listUsersResponseSchema",
    ()=>listUsersResponseSchema,
    "oAuthCodeExchangeRequestSchema",
    ()=>oAuthCodeExchangeRequestSchema,
    "oAuthInitRequestSchema",
    ()=>oAuthInitRequestSchema,
    "paginationSchema",
    ()=>paginationSchema,
    "refreshSessionRequestSchema",
    ()=>refreshSessionRequestSchema,
    "refreshSessionResponseSchema",
    ()=>refreshSessionResponseSchema,
    "resetPasswordRequestSchema",
    ()=>resetPasswordRequestSchema,
    "resetPasswordResponseSchema",
    ()=>resetPasswordResponseSchema,
    "sendResetPasswordEmailRequestSchema",
    ()=>sendResetPasswordEmailRequestSchema,
    "sendVerificationEmailRequestSchema",
    ()=>sendVerificationEmailRequestSchema,
    "updateAuthConfigRequestSchema",
    ()=>updateAuthConfigRequestSchema,
    "updateCustomOAuthConfigRequestSchema",
    ()=>updateCustomOAuthConfigRequestSchema,
    "updateEmailTemplateRequestSchema",
    ()=>updateEmailTemplateRequestSchema,
    "updateOAuthConfigRequestSchema",
    ()=>updateOAuthConfigRequestSchema,
    "updateProfileRequestSchema",
    ()=>updateProfileRequestSchema,
    "upsertSmtpConfigRequestSchema",
    ()=>upsertSmtpConfigRequestSchema,
    "verifyEmailRequestSchema",
    ()=>verifyEmailRequestSchema,
    "verifyEmailResponseSchema",
    ()=>verifyEmailResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-ssr] (ecmascript)");
;
;
const paginationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const createUserRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["passwordSchema"],
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nameSchema"].optional(),
    redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    autoConfirm: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const createSessionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["passwordSchema"]
});
const createAdminSessionRequestSchema = createSessionRequestSchema;
const refreshSessionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'refreshToken is required')
});
const exchangeAdminSessionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const listUsersRequestSchema = paginationSchema.extend({
    search: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).optional();
const deleteUsersRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    userIds: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userIdSchema"]).min(1, 'At least one user ID is required')
});
const updateProfileRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())
});
const sendVerificationEmailRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
});
const verifyEmailRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    otp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{6}$/, 'OTP code must be a 6-digit numeric code')
});
const sendResetPasswordEmailRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    redirectTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
});
const exchangeResetPasswordTokenRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{6}$/, 'Reset password code must be a 6-digit numeric code')
});
const resetPasswordRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    newPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["passwordSchema"],
    otp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'OTP/token is required')
});
const createUserResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"].optional(),
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    requireEmailVerification: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    csrfToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const createSessionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"],
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    csrfToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const verifyEmailResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"],
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    csrfToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const refreshSessionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    accessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"],
    csrfToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    refreshToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const exchangeResetPasswordTokenResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    token: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    expiresAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const resetPasswordResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const createAdminSessionResponseSchema = createSessionResponseSchema;
const getCurrentSessionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"]
});
const getProfileResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userIdSchema"],
    profile: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profileSchema"].nullable()
});
const listUsersResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userSchema"]),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const deleteUsersResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deletedCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative()
});
const getOauthUrlResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    authUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()
});
const createOAuthConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthConfigSchema"].omit({
    id: true,
    createdAt: true,
    updatedAt: true
}).extend({
    clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const updateOAuthConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthConfigSchema"].omit({
    id: true,
    provider: true,
    createdAt: true,
    updatedAt: true
}).extend({
    clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).partial();
/**
 * PKCE character validation regex (RFC 7636 unreserved characters)
 * Allows: A-Z, a-z, 0-9, -, ., _, ~ (no padding)
 */ const pkceRegex = /^[A-Za-z0-9._~-]+$/;
const oAuthInitRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    redirect_uri: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional(),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    code_challenge: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(43, 'Code challenge must be at least 43 characters').max(128, 'Code challenge must be at most 128 characters').regex(pkceRegex, 'Code challenge must be base64url encoded')
});
const oAuthCodeExchangeRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Exchange code is required'),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    code_verifier: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(43, 'Code verifier must be at least 43 characters').max(128, 'Code verifier must be at most 128 characters').regex(pkceRegex, 'Code verifier must be base64url encoded')
});
const listOAuthConfigsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthConfigSchema"]),
    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const updateAuthConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authConfigSchema"].omit({
    id: true,
    createdAt: true,
    updatedAt: true
}).partial();
const getAuthConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authConfigSchema"];
const getPublicAuthConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    oAuthProviders: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["oAuthProvidersSchema"]),
    customOAuthProviders: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customOAuthKeySchema"]),
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authConfigSchema"].omit({
        id: true,
        updatedAt: true,
        createdAt: true,
        allowedRedirectUrls: true
    }).shape
});
const upsertSmtpConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    host: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'SMTP host is required'),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(25),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(465),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(587),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(2525)
    ], {
        errorMap: ()=>({
                message: 'Port must be one of: 25, 465, 587, 2525'
            })
    }),
    username: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'SMTP username is required'),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'SMTP password is required').optional(),
    senderEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid sender email'),
    senderName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Sender name is required'),
    minIntervalSeconds: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).default(60)
});
const getSmtpConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["smtpConfigSchema"];
const updateEmailTemplateRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Subject is required'),
    bodyHtml: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Template body is required')
});
const listEmailTemplatesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailTemplateSchema"])
});
const authErrorResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    statusCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
    nextActions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const createCustomOAuthConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customOAuthConfigSchema"].omit({
    id: true,
    createdAt: true,
    updatedAt: true
}).extend({
    clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Client secret is required')
});
const updateCustomOAuthConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customOAuthConfigSchema"].omit({
    id: true,
    key: true,
    createdAt: true,
    updatedAt: true
}).extend({
    clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional()
}).partial();
const listCustomOAuthConfigsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customOAuthConfigSchema"]),
    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "presenceAnonymousMemberSchema",
    ()=>presenceAnonymousMemberSchema,
    "presenceIdentityTypeSchema",
    ()=>presenceIdentityTypeSchema,
    "presenceJoinMessageSchema",
    ()=>presenceJoinMessageSchema,
    "presenceLeaveMessageSchema",
    ()=>presenceLeaveMessageSchema,
    "presenceMemberSchema",
    ()=>presenceMemberSchema,
    "presenceSnapshotSchema",
    ()=>presenceSnapshotSchema,
    "presenceUserMemberSchema",
    ()=>presenceUserMemberSchema,
    "publishEventPayloadSchema",
    ()=>publishEventPayloadSchema,
    "realtimeChannelSchema",
    ()=>realtimeChannelSchema,
    "realtimeConfigSchema",
    ()=>realtimeConfigSchema,
    "realtimeErrorPayloadSchema",
    ()=>realtimeErrorPayloadSchema,
    "realtimeMessageSchema",
    ()=>realtimeMessageSchema,
    "senderTypeSchema",
    ()=>senderTypeSchema,
    "socketMessageMetaSchema",
    ()=>socketMessageMetaSchema,
    "socketMessageSchema",
    ()=>socketMessageSchema,
    "subscribeChannelPayloadSchema",
    ()=>subscribeChannelPayloadSchema,
    "subscribeResponseSchema",
    ()=>subscribeResponseSchema,
    "unsubscribeChannelPayloadSchema",
    ()=>unsubscribeChannelPayloadSchema,
    "webhookMessageSchema",
    ()=>webhookMessageSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const senderTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'system',
    'user'
]);
const realtimeChannelSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    webhookUrls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).nullable(),
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const realtimeMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    eventName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    channelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().nullable(),
    channelName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    payload: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()),
    senderType: senderTypeSchema,
    senderId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().nullable(),
    wsAudienceCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    whAudienceCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    whDeliveredCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const realtimeConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    retentionDays: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().nullable()
});
const subscribeChannelPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const unsubscribeChannelPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const publishEventPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    event: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    payload: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())
});
const presenceIdentityTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'user',
    'anonymous'
]);
const basePresenceMemberSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    presenceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    joinedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const presenceUserMemberSchema = basePresenceMemberSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('user')
});
const presenceAnonymousMemberSchema = basePresenceMemberSchema.extend({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('anonymous')
});
const presenceMemberSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    presenceUserMemberSchema,
    presenceAnonymousMemberSchema
]);
const presenceSnapshotSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    members: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(presenceMemberSchema)
});
const subscribeResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('ok', [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
        channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        presence: presenceSnapshotSchema
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(false),
        channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
        error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
            message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
        })
    })
]);
const realtimeErrorPayloadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)
});
const webhookMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    eventName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    payload: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())
});
const socketMessageMetaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    messageId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    senderType: senderTypeSchema,
    senderId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const socketMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    meta: socketMessageMetaSchema
}).passthrough();
const presenceJoinMessageSchema = socketMessageSchema.extend({
    member: presenceMemberSchema
});
const presenceLeaveMessageSchema = socketMessageSchema.extend({
    member: presenceMemberSchema
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createChannelRequestSchema",
    ()=>createChannelRequestSchema,
    "createChannelResponseSchema",
    ()=>createChannelResponseSchema,
    "deleteChannelResponseSchema",
    ()=>deleteChannelResponseSchema,
    "getChannelResponseSchema",
    ()=>getChannelResponseSchema,
    "getRealtimeConfigResponseSchema",
    ()=>getRealtimeConfigResponseSchema,
    "listChannelsResponseSchema",
    ()=>listChannelsResponseSchema,
    "listMessagesRequestSchema",
    ()=>listMessagesRequestSchema,
    "listMessagesResponseSchema",
    ()=>listMessagesResponseSchema,
    "messageStatsRequestSchema",
    ()=>messageStatsRequestSchema,
    "messageStatsResponseSchema",
    ()=>messageStatsResponseSchema,
    "realtimePermissionsResponseSchema",
    ()=>realtimePermissionsResponseSchema,
    "rlsPolicySchema",
    ()=>rlsPolicySchema,
    "updateChannelRequestSchema",
    ()=>updateChannelRequestSchema,
    "updateChannelResponseSchema",
    ()=>updateChannelResponseSchema,
    "updateRealtimeConfigRequestSchema",
    ()=>updateRealtimeConfigRequestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime.schema.js [app-ssr] (ecmascript)");
;
;
const createChannelRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Channel pattern is required'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    webhookUrls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).optional(),
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true)
});
const createChannelResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeChannelSchema"];
const updateChannelRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    pattern: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    webhookUrls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url()).optional(),
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const updateChannelResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeChannelSchema"];
const getChannelResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeChannelSchema"];
const listChannelsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeChannelSchema"]);
const deleteChannelResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const listMessagesRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    eventName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(1000).optional().default(100),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(0).optional().default(0)
});
const listMessagesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeMessageSchema"]);
const messageStatsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    since: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional()
});
const messageStatsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalMessages: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    whDeliveryRate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
    topEvents: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        eventName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0)
    })),
    retentionDays: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeConfigSchema"].shape.retentionDays
});
const updateRealtimeConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeConfigSchema"];
const getRealtimeConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeConfigSchema"];
const rlsPolicySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    policyName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    command: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    roles: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    using: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    withCheck: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const realtimePermissionsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    subscribe: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        policies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(rlsPolicySchema)
    }),
    publish: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        policies: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(rlsPolicySchema)
    })
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/metadata.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiMetadataSchema",
    ()=>aiMetadataSchema,
    "apiKeyResponseSchema",
    ()=>apiKeyResponseSchema,
    "appMetaDataSchema",
    ()=>appMetaDataSchema,
    "authMetadataSchema",
    ()=>authMetadataSchema,
    "bucketMetadataSchema",
    ()=>bucketMetadataSchema,
    "databaseConnectionInfoSchema",
    ()=>databaseConnectionInfoSchema,
    "databaseConnectionParametersSchema",
    ()=>databaseConnectionParametersSchema,
    "databaseMetadataSchema",
    ()=>databaseMetadataSchema,
    "databasePasswordInfoSchema",
    ()=>databasePasswordInfoSchema,
    "edgeFunctionMetadataSchema",
    ()=>edgeFunctionMetadataSchema,
    "projectIdResponseSchema",
    ()=>projectIdResponseSchema,
    "realtimeMetadataSchema",
    ()=>realtimeMetadataSchema,
    "storageMetadataSchema",
    ()=>storageMetadataSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth-api.schema.js [app-ssr] (ecmascript)");
;
;
;
;
;
const authMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublicAuthConfigResponseSchema"];
const databaseMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    tables: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        tableName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        recordCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })),
    totalSizeInGB: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    hint: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const bucketMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storageBucketSchema"].extend({
    objectCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const storageMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    buckets: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(bucketMetadataSchema),
    totalSizeInGB: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const edgeFunctionMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const aiMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    models: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        inputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        outputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
        modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))
});
const realtimeMetadataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    channels: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimeChannelSchema"]),
    permissions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["realtimePermissionsResponseSchema"]
});
const appMetaDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    auth: authMetadataSchema,
    database: databaseMetadataSchema,
    storage: storageMetadataSchema,
    aiIntegration: aiMetadataSchema.optional(),
    functions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(edgeFunctionMetadataSchema),
    realtime: realtimeMetadataSchema.optional(),
    version: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const databaseConnectionParametersSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    host: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    database: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    sslmode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const databaseConnectionInfoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    connectionURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    parameters: databaseConnectionParametersSchema
});
const databasePasswordInfoSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    databasePassword: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const apiKeyResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const projectIdResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/ai.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiConfigurationInputSchema",
    ()=>aiConfigurationInputSchema,
    "aiConfigurationSchema",
    ()=>aiConfigurationSchema,
    "aiConfigurationWithUsageSchema",
    ()=>aiConfigurationWithUsageSchema,
    "aiUsageDataSchema",
    ()=>aiUsageDataSchema,
    "aiUsageRecordSchema",
    ()=>aiUsageRecordSchema,
    "aiUsageSummarySchema",
    ()=>aiUsageSummarySchema,
    "modalitySchema",
    ()=>modalitySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const modalitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'text',
    'image',
    'audio'
]);
const aiConfigurationInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    inputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(modalitySchema).min(1),
    outputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(modalitySchema).min(1),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    systemPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const aiConfigurationSchema = aiConfigurationInputSchema.extend({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid()
});
const aiConfigurationWithUsageSchema = aiConfigurationSchema.extend({
    usageStats: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        totalInputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        totalOutputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        totalImageCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        totalRequests: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    }).optional()
});
const aiUsageDataSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    configId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    inputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
    outputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
    imageCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().optional(),
    imageResolution: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const aiUsageRecordSchema = aiUsageDataSchema.extend({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].date(),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    inputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(modalitySchema).nullable(),
    outputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(modalitySchema).nullable()
});
const aiUsageSummarySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalInputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalOutputTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalImageCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    totalRequests: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/ai-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aiModelSchema",
    ()=>aiModelSchema,
    "annotationSchema",
    ()=>annotationSchema,
    "audioContentSchema",
    ()=>audioContentSchema,
    "chatCompletionRequestSchema",
    ()=>chatCompletionRequestSchema,
    "chatCompletionResponseSchema",
    ()=>chatCompletionResponseSchema,
    "chatMessageSchema",
    ()=>chatMessageSchema,
    "contentSchema",
    ()=>contentSchema,
    "createAIConfigurationRequestSchema",
    ()=>createAIConfigurationRequestSchema,
    "embeddingObjectSchema",
    ()=>embeddingObjectSchema,
    "embeddingsRequestSchema",
    ()=>embeddingsRequestSchema,
    "embeddingsResponseSchema",
    ()=>embeddingsResponseSchema,
    "fileAnnotationSchema",
    ()=>fileAnnotationSchema,
    "fileContentSchema",
    ()=>fileContentSchema,
    "fileParserPluginSchema",
    ()=>fileParserPluginSchema,
    "gatewayConfigResponseSchema",
    ()=>gatewayConfigResponseSchema,
    "getAIUsageRequestSchema",
    ()=>getAIUsageRequestSchema,
    "getAIUsageSummaryRequestSchema",
    ()=>getAIUsageSummaryRequestSchema,
    "imageContentSchema",
    ()=>imageContentSchema,
    "imageGenerationRequestSchema",
    ()=>imageGenerationRequestSchema,
    "imageGenerationResponseSchema",
    ()=>imageGenerationResponseSchema,
    "keySourceSchema",
    ()=>keySourceSchema,
    "listAIUsageResponseSchema",
    ()=>listAIUsageResponseSchema,
    "setGatewayBYOKKeyRequestSchema",
    ()=>setGatewayBYOKKeyRequestSchema,
    "textContentSchema",
    ()=>textContentSchema,
    "toolCallSchema",
    ()=>toolCallSchema,
    "toolChoiceSchema",
    ()=>toolChoiceSchema,
    "toolFunctionSchema",
    ()=>toolFunctionSchema,
    "toolSchema",
    ()=>toolSchema,
    "updateAIConfigurationRequestSchema",
    ()=>updateAIConfigurationRequestSchema,
    "urlCitationAnnotationSchema",
    ()=>urlCitationAnnotationSchema,
    "webSearchPluginSchema",
    ()=>webSearchPluginSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/ai.schema.js [app-ssr] (ecmascript)");
;
;
const textContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('text'),
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const imageContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('image_url'),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    image_url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        // URL can be either a public URL or base64-encoded data URI
        // Examples:
        // - Public URL: "https://example.com/image.jpg"
        // - Base64: "data:image/jpeg;base64,/9j/4AAQ..."
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        detail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'auto',
            'low',
            'high'
        ]).optional()
    })
});
const audioContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('input_audio'),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    input_audio: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        // Base64-encoded audio data (direct URLs not supported for audio)
        data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'wav',
            'mp3',
            'aiff',
            'aac',
            'ogg',
            'flac',
            'm4a'
        ])
    })
});
const fileContentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('file'),
    file: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        // Filename with extension (e.g., "document.pdf")
        filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        // File data can be:
        // - Public URL: "https://example.com/document.pdf"
        // - Base64 data URL: "data:application/pdf;base64,..."
        // eslint-disable-next-line @typescript-eslint/naming-convention
        file_data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
});
const contentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    textContentSchema,
    imageContentSchema,
    audioContentSchema,
    fileContentSchema
]);
const toolFunctionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    parameters: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
});
const toolSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('function'),
    function: toolFunctionSchema
});
const toolChoiceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'auto',
        'none',
        'required'
    ]),
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('function'),
        function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })
    })
]);
const toolCallSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('function'),
    function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        arguments: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })
});
const chatMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'user',
        'assistant',
        'system',
        'tool'
    ]),
    // New format: content can be string or array of content parts (OpenAI-compatible)
    content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(contentSchema)
    ]).nullable(),
    // Legacy format: separate images field (deprecated but supported for backward compatibility)
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).optional(),
    // Tool calls made by the assistant
    // eslint-disable-next-line @typescript-eslint/naming-convention
    tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(toolCallSchema).optional(),
    // Tool call ID for tool response messages
    // eslint-disable-next-line @typescript-eslint/naming-convention
    tool_call_id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const webSearchPluginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    // Engine selection:
    // - "native": Always use provider's built-in web search (OpenAI, Anthropic, Perplexity, xAI)
    // - "exa": Use Exa's search API
    // - undefined: Auto-select (native if available, otherwise Exa)
    engine: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'native',
        'exa'
    ]).optional(),
    // Maximum number of search results (1-10, default: 5)
    maxResults: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(10).optional(),
    // Custom prompt for attaching search results to the message
    searchPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const fileParserPluginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    enabled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    pdf: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        // PDF processing engine:
        // - "pdf-text": Best for well-structured PDFs with clear text content (Free)
        // - "mistral-ocr": Best for scanned documents or PDFs with images ($2 per 1,000 pages)
        // - "native": Only available for models that support file input natively (charged as input tokens)
        // If not specified, defaults to native if available, otherwise mistral-ocr
        engine: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'pdf-text',
            'mistral-ocr',
            'native'
        ]).optional()
    }).optional()
});
const chatCompletionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(chatMessageSchema),
    temperature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(2).optional(),
    maxTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional(),
    topP: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).optional(),
    stream: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    // Web Search: Incorporate relevant web search results into the response
    // Results are returned in the annotations field
    webSearch: webSearchPluginSchema.optional(),
    // File Parser: Configure PDF processing for file content in messages
    // When files are included in messages, this controls how PDFs are parsed
    fileParser: fileParserPluginSchema.optional(),
    // Thinking/Reasoning mode: Enable extended reasoning capabilities
    // Appends ":thinking" to the model ID for chain-of-thought reasoning
    thinking: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    // Tool calling: Define functions the AI can call
    tools: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(toolSchema).optional(),
    // Tool choice: Control whether/which tool is called ('auto', 'none', 'required', or specific function)
    toolChoice: toolChoiceSchema.optional(),
    // Parallel tool calls: Allow the model to call multiple tools in parallel
    parallelToolCalls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional()
});
const urlCitationAnnotationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('url_citation'),
    urlCitation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        title: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        // Character indices in the response text where this citation applies
        startIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
        endIndex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
    })
});
const fileAnnotationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('file'),
    file: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        filename: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        // Parsed content from the PDF (used for caching)
        parsedContent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
        // Additional metadata from the parser
        metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional()
    })
});
const annotationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    urlCitationAnnotationSchema,
    fileAnnotationSchema
]);
const chatCompletionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    // Tool calls from the assistant (present when the model invokes tools)
    // eslint-disable-next-line @typescript-eslint/naming-convention
    tool_calls: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(toolCallSchema).optional(),
    // Annotations from web search or file parsing (can be URL citations or file annotations)
    annotations: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(annotationSchema).optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            promptTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            completionTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
        }).optional()
    }).optional()
});
const embeddingsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    input: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
    ]),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    encoding_format: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'float',
        'base64'
    ]).optional(),
    dimensions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).optional()
});
const embeddingObjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    object: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('embedding'),
    // Embedding can be number[] (float format) or string (base64 format)
    embedding: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ]),
    index: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const embeddingsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    object: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('list'),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(embeddingObjectSchema),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            promptTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
        }).optional()
    }).optional()
});
const imageGenerationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    prompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).optional()
});
const imageGenerationResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    text: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    images: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('imageUrl'),
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        model: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        usage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            promptTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            completionTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional(),
            totalTokens: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
        }).optional()
    }).optional()
});
const aiModelSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    inputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modalitySchema"]).min(1),
    outputModality: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["modalitySchema"]).min(1),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    modelId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    inputPrice: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional(),
    outputPrice: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).optional()
});
const createAIConfigurationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiConfigurationSchema"].omit({
    id: true
});
const updateAIConfigurationRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    systemPrompt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const listAIUsageResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    records: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aiUsageRecordSchema"]),
    total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const getAIUsageRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional(),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d+$/).default('50'),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d+$/).default('0')
});
const getAIUsageSummaryRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    configId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().optional(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional(),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().optional()
});
const keySourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'byok',
    'cloud',
    'env',
    'unconfigured'
]);
const gatewayConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    keySource: keySourceSchema,
    hasByokKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    maskedKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const setGatewayBYOKKeyRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'API key is required')
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/logs.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auditLogSchema",
    ()=>auditLogSchema,
    "buildLogEntrySchema",
    ()=>buildLogEntrySchema,
    "getBuildLogsResponseSchema",
    ()=>getBuildLogsResponseSchema,
    "logSchema",
    ()=>logSchema,
    "logSourceSchema",
    ()=>logSourceSchema,
    "logStatsSchema",
    ()=>logStatsSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const auditLogSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    actor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    module: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    details: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullable(),
    ipAddress: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const logSourceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    token: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const logSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    eventMessage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const logStatsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    source: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    lastActivity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const buildLogEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    level: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const getBuildLogsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    deploymentId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'pending',
        'success',
        'failed'
    ]),
    logs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(buildLogEntrySchema),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/logs-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuditLogsRequestSchema",
    ()=>clearAuditLogsRequestSchema,
    "clearAuditLogsResponseSchema",
    ()=>clearAuditLogsResponseSchema,
    "getAuditLogStatsRequestSchema",
    ()=>getAuditLogStatsRequestSchema,
    "getAuditLogStatsResponseSchema",
    ()=>getAuditLogStatsResponseSchema,
    "getAuditLogsRequestSchema",
    ()=>getAuditLogsRequestSchema,
    "getAuditLogsResponseSchema",
    ()=>getAuditLogsResponseSchema,
    "getLogsResponseSchema",
    ()=>getLogsResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/logs.schema.js [app-ssr] (ecmascript)");
;
;
const getAuditLogsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(100),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(0),
    actor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    action: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    module: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const getAuditLogsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auditLogSchema"]),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const getAuditLogStatsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    days: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(7)
});
const getAuditLogStatsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    totalLogs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    uniqueActors: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    uniqueModules: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    actionsByModule: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()),
    recentActivity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auditLogSchema"])
});
const clearAuditLogsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    daysToKeep: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(90)
});
const clearAuditLogsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deleted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
const getLogsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    logs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logSchema"]),
    total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/functions.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "functionSchema",
    ()=>functionSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const functionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'draft',
        'active',
        'error'
    ]),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deployedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/functions-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deploymentResultSchema",
    ()=>deploymentResultSchema,
    "functionResponseSchema",
    ()=>functionResponseSchema,
    "listFunctionsResponseSchema",
    ()=>listFunctionsResponseSchema,
    "updateFunctionRequestSchema",
    ()=>updateFunctionRequestSchema,
    "uploadFunctionRequestSchema",
    ()=>uploadFunctionRequestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$functions$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/functions.schema.js [app-ssr] (ecmascript)");
;
;
const uploadFunctionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Name is required'),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-zA-Z0-9_-]+$/, 'Invalid slug format - must be alphanumeric with hyphens or underscores only').optional(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'draft',
        'active'
    ]).optional().default('active')
});
const updateFunctionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'draft',
        'active'
    ]).optional()
});
const listFunctionsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    functions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$functions$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionSchema"]),
    runtime: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'running',
            'unavailable'
        ])
    }),
    deploymentUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const deploymentResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'success',
        'failed'
    ]),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    buildLogs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const functionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    function: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$functions$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["functionSchema"],
    deployment: deploymentResultSchema.nullable().optional()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/cloud-events.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appRouteChangeEventSchema",
    ()=>appRouteChangeEventSchema,
    "authErrorEventSchema",
    ()=>authErrorEventSchema,
    "authSuccessEventSchema",
    ()=>authSuccessEventSchema,
    "authorizationCodeEventSchema",
    ()=>authorizationCodeEventSchema,
    "cloudEventSchema",
    ()=>cloudEventSchema,
    "instanceInfoEventSchema",
    ()=>instanceInfoEventSchema,
    "instanceTypeChangeResultEventSchema",
    ()=>instanceTypeChangeResultEventSchema,
    "mcpConnectionStatusEventSchema",
    ()=>mcpConnectionStatusEventSchema,
    "navigateToUsageSchema",
    ()=>navigateToUsageSchema,
    "onboardingSuccessSchema",
    ()=>onboardingSuccessSchema,
    "projectInfoEventSchema",
    ()=>projectInfoEventSchema,
    "requestInstanceInfoEventSchema",
    ()=>requestInstanceInfoEventSchema,
    "requestInstanceTypeChangeEventSchema",
    ()=>requestInstanceTypeChangeEventSchema,
    "requestProjectInfoEventSchema",
    ()=>requestProjectInfoEventSchema,
    "routeChangeEventSchema",
    ()=>routeChangeEventSchema,
    "showConnectOverlayEventSchema",
    ()=>showConnectOverlayEventSchema,
    "showContactModalEventSchema",
    ()=>showContactModalEventSchema,
    "showOnboardingOverlayEventSchema",
    ()=>showOnboardingOverlayEventSchema,
    "showPlanModalEventSchema",
    ()=>showPlanModalEventSchema,
    "showSettingsOverlayEventSchema",
    ()=>showSettingsOverlayEventSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const appRouteChangeEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('APP_ROUTE_CHANGE'),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const authSuccessEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('AUTH_SUCCESS')
});
const authErrorEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('AUTH_ERROR'),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const mcpConnectionStatusEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('MCP_CONNECTION_STATUS'),
    connected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    toolName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    ])
});
const showOnboardingOverlayEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('SHOW_ONBOARDING_OVERLAY')
});
const showSettingsOverlayEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('SHOW_SETTINGS_OVERLAY')
});
const onboardingSuccessSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('ONBOARDING_SUCCESS')
});
const navigateToUsageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('NAVIGATE_TO_USAGE')
});
const showContactModalEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('SHOW_CONTACT_MODAL')
});
const showConnectOverlayEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('SHOW_CONNECT_OVERLAY')
});
const showPlanModalEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('SHOW_PLAN_MODAL')
});
const authorizationCodeEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('AUTHORIZATION_CODE'),
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const routeChangeEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('ROUTE_CHANGE'),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const requestProjectInfoEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('REQUEST_PROJECT_INFO')
});
const projectInfoEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('PROJECT_INFO'),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    instanceType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    latestVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const requestInstanceInfoEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('REQUEST_INSTANCE_INFO')
});
const instanceInfoEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('INSTANCE_INFO'),
    currentInstanceType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    planName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    computeCredits: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    currentOrgComputeCost: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    instanceTypes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        cpu: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        ram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        pricePerHour: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        pricePerMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })),
    projects: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        instanceType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        monthlyCost: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        isCurrent: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    }))
});
const requestInstanceTypeChangeEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('REQUEST_INSTANCE_TYPE_CHANGE'),
    instanceType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const instanceTypeChangeResultEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('INSTANCE_TYPE_CHANGE_RESULT'),
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    instanceType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const cloudEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].discriminatedUnion('type', [
    appRouteChangeEventSchema,
    authSuccessEventSchema,
    authErrorEventSchema,
    mcpConnectionStatusEventSchema,
    showOnboardingOverlayEventSchema,
    showSettingsOverlayEventSchema,
    onboardingSuccessSchema,
    navigateToUsageSchema,
    showContactModalEventSchema,
    showConnectOverlayEventSchema,
    showPlanModalEventSchema,
    authorizationCodeEventSchema,
    routeChangeEventSchema,
    requestProjectInfoEventSchema,
    projectInfoEventSchema,
    requestInstanceInfoEventSchema,
    instanceInfoEventSchema,
    requestInstanceTypeChangeEventSchema,
    instanceTypeChangeResultEventSchema
]);
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/docs.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "docTypeSchema",
    ()=>docTypeSchema,
    "sdkFeatureSchema",
    ()=>sdkFeatureSchema,
    "sdkLanguageSchema",
    ()=>sdkLanguageSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const sdkFeatureSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'db',
    'storage',
    'functions',
    'auth',
    'ai',
    'realtime'
]).describe(`
    SDK feature categories:

    - "db" - Database operations
    - "storage" - File storage
    - "functions" - Edge functions
    - "auth" - User authentication
    - "ai" - AI features
    - "realtime" - Real-time WebSockets
    `);
const sdkLanguageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'typescript',
    'swift',
    'kotlin',
    // 'flutter',
    'rest-api'
]).describe(`
    SDK languages:

    - "typescript" - JavaScript/TypeScript SDK
    - "swift" - Swift SDK
    - "kotlin" - Kotlin SDK
    - "rest-api" - REST API
    `);
const docTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'instructions',
    'auth-sdk',
    'db-sdk',
    'storage-sdk',
    'functions-sdk',
    'ai-integration-sdk',
    'real-time',
    'deployment'
]).describe(`
    Documentation type:
      "instructions" (essential backend setup - use FIRST),
      "db-sdk" (database operations),
      "storage-sdk" (file storage),
      "functions-sdk" (edge functions),
      "auth-sdk" (direct SDK methods for custom auth flows),
      "ai-integration-sdk" (AI features),
      "real-time" (real-time pub/sub through WebSockets),
      "deployment" (deploy frontend applications via MCP tool)
    `);
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/email-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEmailResponseSchema",
    ()=>sendEmailResponseSchema,
    "sendRawEmailRequestSchema",
    ()=>sendRawEmailRequestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-ssr] (ecmascript)");
;
;
const emailOrEmails = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emailSchema"]).min(1, 'At least one email is required').max(50, 'Maximum 50 recipients allowed')
]);
const sendRawEmailRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    to: emailOrEmails,
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Subject is required').max(500, 'Subject too long'),
    html: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'HTML content is required'),
    cc: emailOrEmails.optional(),
    bcc: emailOrEmails.optional(),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(100, 'From name too long').optional(),
    replyTo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Reply-To must be a valid email').optional()
});
const sendEmailResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/deployments.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deploymentSchema",
    ()=>deploymentSchema,
    "deploymentStatusSchema",
    ()=>deploymentStatusSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const deploymentStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'WAITING',
    'UPLOADING',
    'QUEUED',
    'BUILDING',
    'READY',
    'ERROR',
    'CANCELED'
]);
const deploymentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    providerDeploymentId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    status: deploymentStatusSchema,
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/deployments-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCustomDomainRequestSchema",
    ()=>addCustomDomainRequestSchema,
    "addCustomDomainResponseSchema",
    ()=>addCustomDomainResponseSchema,
    "createDeploymentResponseSchema",
    ()=>createDeploymentResponseSchema,
    "createDirectDeploymentRequestSchema",
    ()=>createDirectDeploymentRequestSchema,
    "createDirectDeploymentResponseSchema",
    ()=>createDirectDeploymentResponseSchema,
    "customDomainSchema",
    ()=>customDomainSchema,
    "deleteEnvVarResponseSchema",
    ()=>deleteEnvVarResponseSchema,
    "deploymentEnvVarSchema",
    ()=>deploymentEnvVarSchema,
    "deploymentEnvVarWithValueSchema",
    ()=>deploymentEnvVarWithValueSchema,
    "deploymentFilePathSchema",
    ()=>deploymentFilePathSchema,
    "deploymentManifestFileEntrySchema",
    ()=>deploymentManifestFileEntrySchema,
    "deploymentManifestFileSchema",
    ()=>deploymentManifestFileSchema,
    "deploymentMetadataResponseSchema",
    ()=>deploymentMetadataResponseSchema,
    "domainVerificationRecordSchema",
    ()=>domainVerificationRecordSchema,
    "envVarSchema",
    ()=>envVarSchema,
    "getEnvVarResponseSchema",
    ()=>getEnvVarResponseSchema,
    "listCustomDomainsResponseSchema",
    ()=>listCustomDomainsResponseSchema,
    "listDeploymentsResponseSchema",
    ()=>listDeploymentsResponseSchema,
    "listEnvVarsResponseSchema",
    ()=>listEnvVarsResponseSchema,
    "projectSettingsSchema",
    ()=>projectSettingsSchema,
    "startDeploymentRequestSchema",
    ()=>startDeploymentRequestSchema,
    "startDeploymentResponseSchema",
    ()=>startDeploymentResponseSchema,
    "updateSlugRequestSchema",
    ()=>updateSlugRequestSchema,
    "updateSlugResponseSchema",
    ()=>updateSlugResponseSchema,
    "uploadDeploymentFileResponseSchema",
    ()=>uploadDeploymentFileResponseSchema,
    "upsertEnvVarRequestSchema",
    ()=>upsertEnvVarRequestSchema,
    "upsertEnvVarResponseSchema",
    ()=>upsertEnvVarResponseSchema,
    "upsertEnvVarsRequestSchema",
    ()=>upsertEnvVarsRequestSchema,
    "upsertEnvVarsResponseSchema",
    ()=>upsertEnvVarsResponseSchema,
    "verifyCustomDomainResponseSchema",
    ()=>verifyCustomDomainResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/deployments.schema.js [app-ssr] (ecmascript)");
;
;
const projectSettingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    buildCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    outputDirectory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    installCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    devCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional(),
    rootDirectory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable().optional()
});
const envVarSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const deploymentFilePathSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'path is required').max(2048, 'path is too long').refine((value)=>!value.includes('\0'), 'path cannot contain null bytes').refine((value)=>!value.includes('\\'), 'path must use forward slashes').refine((value)=>!value.startsWith('/'), 'path must be relative').refine((value)=>value.split('/').every((part)=>part !== '' && part !== '.' && part !== '..'), 'path cannot contain empty, current, or parent directory segments');
const deploymentManifestFileEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    path: deploymentFilePathSchema,
    sha: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-f0-9]{40}$/i, 'sha must be a SHA-1 hex digest'),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative()
});
const deploymentManifestFileSchema = deploymentManifestFileEntrySchema.extend({
    fileId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().nullable()
});
const createDeploymentResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    uploadUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    uploadFields: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string())
});
const createDirectDeploymentRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    files: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(deploymentManifestFileEntrySchema).min(1)
}).superRefine(({ files }, ctx)=>{
    const firstSeenByPath = new Map();
    files.forEach((file, index)=>{
        const existingIndex = firstSeenByPath.get(file.path);
        if (existingIndex !== undefined) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: 'duplicate file path',
                path: [
                    'files',
                    index,
                    'path'
                ]
            });
            return;
        }
        firstSeenByPath.set(file.path, index);
    });
});
const createDirectDeploymentResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deploymentSchema"].shape.status,
    files: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(deploymentManifestFileSchema)
});
const uploadDeploymentFileResponseSchema = deploymentManifestFileSchema.extend({
    uploadedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const startDeploymentRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    projectSettings: projectSettingsSchema.optional(),
    envVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(envVarSchema).optional(),
    meta: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const startDeploymentResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deploymentSchema"];
const listDeploymentsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    data: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deploymentSchema"]),
    pagination: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number()
    })
});
const deploymentEnvVarSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'plain',
        'encrypted',
        'secret',
        'sensitive',
        'system'
    ]),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const deploymentEnvVarWithValueSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'plain',
        'encrypted',
        'secret',
        'sensitive',
        'system'
    ]),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().optional()
});
const listEnvVarsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    envVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(deploymentEnvVarSchema)
});
const getEnvVarResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    envVar: deploymentEnvVarWithValueSchema
});
const upsertEnvVarRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'key is required'),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const upsertEnvVarsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    envVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(upsertEnvVarRequestSchema).min(1)
}).superRefine(({ envVars }, ctx)=>{
    const firstSeenByKey = new Map();
    envVars.forEach((envVar, index)=>{
        const existingIndex = firstSeenByKey.get(envVar.key);
        if (existingIndex !== undefined) {
            ctx.addIssue({
                code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].ZodIssueCode.custom,
                message: 'duplicate environment variable key',
                path: [
                    'envVars',
                    index,
                    'key'
                ]
            });
            return;
        }
        firstSeenByKey.set(envVar.key, index);
    });
});
const upsertEnvVarResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const upsertEnvVarsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    count: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive()
});
const deleteEnvVarResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(true),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const updateSlugRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(3, 'slug must be at least 3 characters').max(63, 'slug must be at most 63 characters').regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, 'slug must be lowercase alphanumeric with hyphens, not starting or ending with hyphen').nullable()
});
const updateSlugResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const deploymentMetadataResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    currentDeploymentId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid().nullable(),
    defaultDomainUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    customDomainUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const domainVerificationRecordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const customDomainSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    apexDomain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    verified: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    misconfigured: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    verification: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(domainVerificationRecordSchema),
    cnameTarget: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    aRecordValue: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const addCustomDomainRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    domain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Domain is required').regex(/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i, 'Invalid domain format (e.g. myapp.com or www.myapp.com)').refine((domain)=>!domain.toLowerCase().endsWith('.insforge.site'), {
        message: 'Domains ending with .insforge.site are reserved by InsForge'
    })
});
const addCustomDomainResponseSchema = customDomainSchema;
const listCustomDomainsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    domains: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(customDomainSchema)
});
const verifyCustomDomainResponseSchema = customDomainSchema;
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/schedules.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scheduleLogSchema",
    ()=>scheduleLogSchema,
    "scheduleSchema",
    ()=>scheduleSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const scheduleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    cronSchedule: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    functionUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url(),
    httpMethod: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ]),
    // Optional HTTP headers to include when invoking the scheduled function
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).nullable(),
    // Body payload for the scheduled invocation. Can be a JSON object or a raw string.
    body: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())
    ]).nullable(),
    // cron_job_id is a BIGINT in postgres, which node-pg returns as a string.
    cronJobId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastExecutedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().nullable(),
    // Whether the cron job is currently active (has a scheduled cron job)
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    // Next scheduled run time in ISO format (nullable if cron expression invalid)
    nextRun: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime()
});
const scheduleLogSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    scheduleId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    executedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime(),
    statusCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
    success: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    durationMs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/schedules-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScheduleRequestSchema",
    ()=>createScheduleRequestSchema,
    "createScheduleResponseSchema",
    ()=>createScheduleResponseSchema,
    "deleteScheduleResponseSchema",
    ()=>deleteScheduleResponseSchema,
    "executionLogResponseSchema",
    ()=>executionLogResponseSchema,
    "getScheduleResponseSchema",
    ()=>getScheduleResponseSchema,
    "listExecutionLogsResponseSchema",
    ()=>listExecutionLogsResponseSchema,
    "listSchedulesResponseSchema",
    ()=>listSchedulesResponseSchema,
    "updateScheduleRequestSchema",
    ()=>updateScheduleRequestSchema,
    "updateScheduleResponseSchema",
    ()=>updateScheduleResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/schedules.schema.js [app-ssr] (ecmascript)");
;
;
// Accept either:
//   - 5-field cron expression (e.g. "*/5 * * * *", "0 9 * * 1-5")
//   - pg_cron sub-minute interval form: "1 second" through "59 seconds"
// Interval form is restricted to seconds because anything ≥ 1 minute is
// already expressible as a 5-field cron expression, and the two semantics
// differ (interval drifts from last run; cron fires on minute boundaries).
const intervalRegex = /^\s*([1-9]|[1-5]\d)\s+seconds?\s*$/i;
const cronScheduleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((value)=>{
    if (intervalRegex.test(value)) {
        return true;
    }
    // Service only accepts 5-field cron; 6-field (with seconds prefix) is
    // explicitly rejected, so don't let it past the schema.
    const parts = value.trim().split(/\s+/);
    return parts.length === 5;
}, {
    message: 'Invalid cron schedule. Use 5-field cron (e.g., "*/5 * * * *") or sub-minute interval form (1–59 seconds, e.g., "30 seconds").'
});
const createScheduleRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'Schedule name must be at least 3 characters long'),
    cronSchedule: cronScheduleSchema,
    functionUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url('The function URL must be a valid URL.'),
    httpMethod: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ]),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe('Header values can reference secrets using ${{secrets.KEY_NAME}} syntax.'),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional().describe('The JSON body to send with the request.')
});
const updateScheduleRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, 'Schedule name must be at least 3 characters long').optional(),
    cronSchedule: cronScheduleSchema.optional(),
    functionUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url('The function URL must be a valid URL.').optional(),
    httpMethod: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'GET',
        'POST',
        'PUT',
        'PATCH',
        'DELETE'
    ]).optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional().describe('Header values can reference secrets using ${{secrets.KEY_NAME}} syntax.'),
    body: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown()).optional().describe('The JSON body to send with the request.'),
    isActive: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().describe('Enable or disable the schedule.')
});
const listSchedulesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scheduleSchema"]);
const getScheduleResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scheduleSchema"];
const executionLogResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["scheduleLogSchema"];
const listExecutionLogsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    logs: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(executionLogResponseSchema),
    totalCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive(),
    offset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative()
});
const createScheduleResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    cronJobId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const updateScheduleResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    cronJobId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const deleteScheduleResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/payments.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "billingSubjectSchema",
    ()=>billingSubjectSchema,
    "checkoutModeSchema",
    ()=>checkoutModeSchema,
    "checkoutSessionPaymentStatusSchema",
    ()=>checkoutSessionPaymentStatusSchema,
    "checkoutSessionSchema",
    ()=>checkoutSessionSchema,
    "checkoutSessionStatusSchema",
    ()=>checkoutSessionStatusSchema,
    "customerPortalSessionSchema",
    ()=>customerPortalSessionSchema,
    "customerPortalSessionStatusSchema",
    ()=>customerPortalSessionStatusSchema,
    "paymentCustomerListItemSchema",
    ()=>paymentCustomerListItemSchema,
    "paymentHistorySchema",
    ()=>paymentHistorySchema,
    "paymentHistoryStatusSchema",
    ()=>paymentHistoryStatusSchema,
    "paymentHistoryTypeSchema",
    ()=>paymentHistoryTypeSchema,
    "stripeConnectionSchema",
    ()=>stripeConnectionSchema,
    "stripeConnectionStatusSchema",
    ()=>stripeConnectionStatusSchema,
    "stripeCustomerMappingSchema",
    ()=>stripeCustomerMappingSchema,
    "stripeCustomerSchema",
    ()=>stripeCustomerSchema,
    "stripeEnvironmentSchema",
    ()=>stripeEnvironmentSchema,
    "stripeLatestSyncStatusSchema",
    ()=>stripeLatestSyncStatusSchema,
    "stripePriceSchema",
    ()=>stripePriceSchema,
    "stripeProductSchema",
    ()=>stripeProductSchema,
    "stripeSubscriptionItemSchema",
    ()=>stripeSubscriptionItemSchema,
    "stripeSubscriptionSchema",
    ()=>stripeSubscriptionSchema,
    "stripeSubscriptionStatusSchema",
    ()=>stripeSubscriptionStatusSchema,
    "stripeWebhookEventSchema",
    ()=>stripeWebhookEventSchema,
    "stripeWebhookProcessingStatusSchema",
    ()=>stripeWebhookProcessingStatusSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const stripeEnvironmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'test',
    'live'
]);
const stripeConnectionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'unconfigured',
    'connected',
    'error'
]);
const stripeLatestSyncStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'succeeded',
    'failed'
]);
const stripeConnectionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    status: stripeConnectionStatusSchema,
    stripeAccountId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeAccountEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    accountLivemode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().nullable(),
    webhookEndpointId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    webhookEndpointUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    webhookConfiguredAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    maskedKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastSyncedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastSyncStatus: stripeLatestSyncStatusSchema.nullable(),
    lastSyncError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastSyncCounts: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number())
});
const stripeProductSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    defaultPriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    syncedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const stripePriceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripePriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    unitAmount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    unitAmountDecimal: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    lookupKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    billingScheme: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    taxBehavior: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    recurringInterval: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    recurringIntervalCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    syncedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const stripeCustomerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    deleted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    stripeCreatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    syncedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const paymentCustomerListItemSchema = stripeCustomerSchema.extend({
    paymentsCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    lastPaymentAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    totalSpend: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative().nullable(),
    totalSpendCurrency: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    paymentMethodBrand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    paymentMethodLast4: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    countryCode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().length(2).nullable()
});
const billingSubjectSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(100),
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255)
}).strict();
const checkoutModeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'payment',
    'subscription'
]);
const checkoutSessionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'initialized',
    'open',
    'completed',
    'expired',
    'failed'
]);
const checkoutSessionPaymentStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'paid',
    'unpaid',
    'no_payment_required'
]);
const checkoutSessionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    environment: stripeEnvironmentSchema,
    mode: checkoutModeSchema,
    status: checkoutSessionStatusSchema,
    paymentStatus: checkoutSessionPaymentStatusSchema.nullable(),
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    customerEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeCheckoutSessionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripePaymentIntentId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeSubscriptionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const customerPortalSessionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'initialized',
    'created',
    'failed'
]);
const customerPortalSessionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    environment: stripeEnvironmentSchema,
    status: customerPortalSessionStatusSchema,
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    returnUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    configuration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    lastError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const stripeCustomerMappingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const paymentHistoryTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'one_time_payment',
    'subscription_invoice',
    'refund',
    'failed_payment'
]);
const paymentHistoryStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'succeeded',
    'failed',
    'pending',
    'refunded',
    'partially_refunded'
]);
const paymentHistorySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    type: paymentHistoryTypeSchema,
    status: paymentHistoryStatusSchema,
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    customerEmailSnapshot: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeCheckoutSessionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripePaymentIntentId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeInvoiceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeChargeId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeRefundId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeSubscriptionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripePriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    amount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    amountRefunded: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    paidAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    failedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    refundedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripeCreatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const stripeSubscriptionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'incomplete',
    'incomplete_expired',
    'trialing',
    'active',
    'past_due',
    'canceled',
    'unpaid',
    'paused'
]);
const stripeSubscriptionItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripeSubscriptionItemId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeSubscriptionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    stripePriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
const stripeSubscriptionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripeSubscriptionId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    stripeCustomerId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    status: stripeSubscriptionStatusSchema,
    currentPeriodStart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    currentPeriodEnd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    cancelAtPeriodEnd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    cancelAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    canceledAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    trialStart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    trialEnd: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    latestInvoiceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    syncedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    items: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(stripeSubscriptionItemSchema).optional()
});
const stripeWebhookProcessingStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'pending',
    'processed',
    'failed',
    'ignored'
]);
const stripeWebhookEventSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: stripeEnvironmentSchema,
    stripeEventId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    eventType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    livemode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    stripeAccountId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    objectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    objectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    processingStatus: stripeWebhookProcessingStatusSchema,
    attemptCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    lastError: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    receivedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    processedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/payments-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "archivePaymentPriceResponseSchema",
    ()=>archivePaymentPriceResponseSchema,
    "configurePaymentWebhookResponseSchema",
    ()=>configurePaymentWebhookResponseSchema,
    "createCheckoutSessionBodySchema",
    ()=>createCheckoutSessionBodySchema,
    "createCheckoutSessionLineItemSchema",
    ()=>createCheckoutSessionLineItemSchema,
    "createCheckoutSessionRequestSchema",
    ()=>createCheckoutSessionRequestSchema,
    "createCheckoutSessionResponseSchema",
    ()=>createCheckoutSessionResponseSchema,
    "createCustomerPortalSessionBodySchema",
    ()=>createCustomerPortalSessionBodySchema,
    "createCustomerPortalSessionRequestSchema",
    ()=>createCustomerPortalSessionRequestSchema,
    "createCustomerPortalSessionResponseSchema",
    ()=>createCustomerPortalSessionResponseSchema,
    "createPaymentPriceBodySchema",
    ()=>createPaymentPriceBodySchema,
    "createPaymentPriceRequestSchema",
    ()=>createPaymentPriceRequestSchema,
    "createPaymentProductBodySchema",
    ()=>createPaymentProductBodySchema,
    "createPaymentProductRequestSchema",
    ()=>createPaymentProductRequestSchema,
    "deletePaymentProductResponseSchema",
    ()=>deletePaymentProductResponseSchema,
    "getPaymentPriceResponseSchema",
    ()=>getPaymentPriceResponseSchema,
    "getPaymentProductResponseSchema",
    ()=>getPaymentProductResponseSchema,
    "getPaymentsConfigResponseSchema",
    ()=>getPaymentsConfigResponseSchema,
    "getPaymentsStatusResponseSchema",
    ()=>getPaymentsStatusResponseSchema,
    "listPaymentCatalogQuerySchema",
    ()=>listPaymentCatalogQuerySchema,
    "listPaymentCatalogRequestSchema",
    ()=>listPaymentCatalogRequestSchema,
    "listPaymentCatalogResponseSchema",
    ()=>listPaymentCatalogResponseSchema,
    "listPaymentCustomersQuerySchema",
    ()=>listPaymentCustomersQuerySchema,
    "listPaymentCustomersRequestSchema",
    ()=>listPaymentCustomersRequestSchema,
    "listPaymentCustomersResponseSchema",
    ()=>listPaymentCustomersResponseSchema,
    "listPaymentHistoryQuerySchema",
    ()=>listPaymentHistoryQuerySchema,
    "listPaymentHistoryRequestSchema",
    ()=>listPaymentHistoryRequestSchema,
    "listPaymentHistoryResponseSchema",
    ()=>listPaymentHistoryResponseSchema,
    "listPaymentPricesQuerySchema",
    ()=>listPaymentPricesQuerySchema,
    "listPaymentPricesRequestSchema",
    ()=>listPaymentPricesRequestSchema,
    "listPaymentPricesResponseSchema",
    ()=>listPaymentPricesResponseSchema,
    "listPaymentProductsQuerySchema",
    ()=>listPaymentProductsQuerySchema,
    "listPaymentProductsRequestSchema",
    ()=>listPaymentProductsRequestSchema,
    "listPaymentProductsResponseSchema",
    ()=>listPaymentProductsResponseSchema,
    "listSubscriptionsQuerySchema",
    ()=>listSubscriptionsQuerySchema,
    "listSubscriptionsRequestSchema",
    ()=>listSubscriptionsRequestSchema,
    "listSubscriptionsResponseSchema",
    ()=>listSubscriptionsResponseSchema,
    "mutatePaymentPriceResponseSchema",
    ()=>mutatePaymentPriceResponseSchema,
    "mutatePaymentProductResponseSchema",
    ()=>mutatePaymentProductResponseSchema,
    "paymentEnvironmentParamsSchema",
    ()=>paymentEnvironmentParamsSchema,
    "paymentEnvironmentRequestSchema",
    ()=>paymentEnvironmentRequestSchema,
    "paymentPriceParamsSchema",
    ()=>paymentPriceParamsSchema,
    "paymentProductParamsSchema",
    ()=>paymentProductParamsSchema,
    "stripeIdempotencyKeySchema",
    ()=>stripeIdempotencyKeySchema,
    "stripeKeyConfigSchema",
    ()=>stripeKeyConfigSchema,
    "stripePriceRecurringIntervalSchema",
    ()=>stripePriceRecurringIntervalSchema,
    "stripePriceTaxBehaviorSchema",
    ()=>stripePriceTaxBehaviorSchema,
    "stripeWebhookParamsSchema",
    ()=>stripeWebhookParamsSchema,
    "stripeWebhookResponseSchema",
    ()=>stripeWebhookResponseSchema,
    "syncPaymentsEnvironmentResultSchema",
    ()=>syncPaymentsEnvironmentResultSchema,
    "syncPaymentsRequestSchema",
    ()=>syncPaymentsRequestSchema,
    "syncPaymentsResponseSchema",
    ()=>syncPaymentsResponseSchema,
    "syncPaymentsSubscriptionsSummarySchema",
    ()=>syncPaymentsSubscriptionsSummarySchema,
    "updatePaymentPriceBodySchema",
    ()=>updatePaymentPriceBodySchema,
    "updatePaymentPriceRequestSchema",
    ()=>updatePaymentPriceRequestSchema,
    "updatePaymentProductBodySchema",
    ()=>updatePaymentProductBodySchema,
    "updatePaymentProductRequestSchema",
    ()=>updatePaymentProductRequestSchema,
    "upsertPaymentsConfigBodySchema",
    ()=>upsertPaymentsConfigBodySchema,
    "upsertPaymentsConfigRequestSchema",
    ()=>upsertPaymentsConfigRequestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/payments.schema.js [app-ssr] (ecmascript)");
;
;
const syncPaymentsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('all')
    ]).default('all')
});
const paymentEnvironmentParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"]
}).strict();
const listPaymentCatalogRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"].optional()
});
const paymentEnvironmentRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"]
}).strict();
const listPaymentCatalogQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}).strict();
const listPaymentProductsRequestSchema = paymentEnvironmentRequestSchema;
const listPaymentProductsQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({}).strict();
const listPaymentPricesRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe product id is required').optional()
}).strict();
const listPaymentPricesQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe product id is required').optional()
}).strict();
const paymentProductParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    productId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe product id is required')
});
const paymentPriceParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    priceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe price id is required')
});
const stripeWebhookParamsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"]
});
const stripePriceRecurringIntervalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'day',
    'week',
    'month',
    'year'
]);
const stripePriceTaxBehaviorSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'exclusive',
    'inclusive',
    'unspecified'
]);
const stripeIdempotencyKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Idempotency key is required').max(200, 'Idempotency key must be 200 characters or fewer');
function hasNoReservedInsForgeMetadata(metadata) {
    return !Object.keys(metadata ?? {}).some((key)=>key.startsWith('insforge_'));
}
const createPaymentProductBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Product name is required'),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(5000).nullable().optional(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    idempotencyKey: stripeIdempotencyKeySchema.optional()
}).strict();
const createPaymentProductRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...createPaymentProductBodySchema.shape
}).strict();
const updatePaymentProductFields = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Product name is required').optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(5000).nullable().optional(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
};
function hasAtLeastOneValue(value) {
    return Object.keys(value).length > 0;
}
const updatePaymentProductBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(updatePaymentProductFields).strict().refine(hasAtLeastOneValue, {
    message: 'At least one product field is required'
});
const updatePaymentProductRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...updatePaymentProductFields
}).strict().refine(({ environment: _environment, ...value })=>hasAtLeastOneValue(value), {
    message: 'At least one product field is required'
});
const createPaymentPriceBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe product id is required'),
    currency: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().length(3, 'Currency must be a three-letter ISO currency code').transform((value)=>value.toLowerCase()),
    unitAmount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    lookupKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(200).nullable().optional(),
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    recurring: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        interval: stripePriceRecurringIntervalSchema,
        intervalCount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().optional()
    }).strict().optional(),
    taxBehavior: stripePriceTaxBehaviorSchema.optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    idempotencyKey: stripeIdempotencyKeySchema.optional()
}).strict();
const createPaymentPriceRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...createPaymentPriceBodySchema.shape
}).strict();
const updatePaymentPriceFields = {
    active: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional(),
    lookupKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(200).nullable().optional(),
    taxBehavior: stripePriceTaxBehaviorSchema.optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
};
const updatePaymentPriceBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(updatePaymentPriceFields).strict().refine(hasAtLeastOneValue, {
    message: 'At least one price field is required'
});
const updatePaymentPriceRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...updatePaymentPriceFields
}).strict().refine(({ environment: _environment, ...value })=>hasAtLeastOneValue(value), {
    message: 'At least one price field is required'
});
const getPaymentsStatusResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    connections: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeConnectionSchema"])
});
const listPaymentCatalogResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    products: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeProductSchema"]),
    prices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"])
});
const listPaymentCustomersQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).default(50)
}).strict();
const listPaymentCustomersRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...listPaymentCustomersQuerySchema.shape
}).strict();
const listPaymentCustomersResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentCustomerListItemSchema"])
});
const listPaymentProductsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    products: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeProductSchema"])
});
const listPaymentPricesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    prices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"])
});
const getPaymentProductResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    product: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeProductSchema"],
    prices: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"])
});
const getPaymentPriceResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    price: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"]
});
const mutatePaymentProductResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    product: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeProductSchema"]
});
const mutatePaymentPriceResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    price: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"]
});
const archivePaymentPriceResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    price: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripePriceSchema"],
    archived: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const deletePaymentProductResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    stripeProductId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    deleted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
const createCheckoutSessionLineItemSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    stripePriceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe price id is required'),
    quantity: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().positive().max(999).default(1)
}).strict();
const createCheckoutSessionFields = {
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkoutModeSchema"],
    lineItems: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(createCheckoutSessionLineItemSchema).min(1).max(100),
    successUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().url('Success URL must be a valid URL'),
    cancelUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().url('Cancel URL must be a valid URL'),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingSubjectSchema"].optional(),
    customerEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().email().nullable().optional(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    idempotencyKey: stripeIdempotencyKeySchema.optional()
};
const createCheckoutSessionBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object(createCheckoutSessionFields).strict().refine((value)=>value.mode !== 'subscription' || value.subject !== undefined, {
    path: [
        'subject'
    ],
    message: 'Subscription checkout requires a billing subject'
}).refine((value)=>hasNoReservedInsForgeMetadata(value.metadata), {
    path: [
        'metadata'
    ],
    message: 'Metadata keys starting with insforge_ are reserved'
});
const createCheckoutSessionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...createCheckoutSessionFields
}).strict().refine((value)=>value.mode !== 'subscription' || value.subject !== undefined, {
    path: [
        'subject'
    ],
    message: 'Subscription checkout requires a billing subject'
}).refine((value)=>hasNoReservedInsForgeMetadata(value.metadata), {
    path: [
        'metadata'
    ],
    message: 'Metadata keys starting with insforge_ are reserved'
});
const createCheckoutSessionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    checkoutSession: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkoutSessionSchema"]
});
const createCustomerPortalSessionBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["billingSubjectSchema"],
    returnUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().url('Return URL must be a valid URL').optional(),
    configuration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255).optional()
}).strict();
const createCustomerPortalSessionRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...createCustomerPortalSessionBodySchema.shape
}).strict();
const createCustomerPortalSessionResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customerPortalSession: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["customerPortalSessionSchema"]
});
const subjectFilterFields = {
    subjectType: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(100).optional(),
    subjectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1).max(255).optional()
};
function hasCompleteSubjectFilter(value) {
    return value.subjectType === undefined === (value.subjectId === undefined);
}
const listPaymentHistoryRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ...subjectFilterFields,
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).default(50)
}).strict().refine(hasCompleteSubjectFilter, {
    message: 'subjectType and subjectId must be provided together'
});
const listPaymentHistoryQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ...subjectFilterFields,
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).default(50)
}).strict().refine(hasCompleteSubjectFilter, {
    message: 'subjectType and subjectId must be provided together'
});
const listSubscriptionsRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ...subjectFilterFields,
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).default(50)
}).strict().refine(hasCompleteSubjectFilter, {
    message: 'subjectType and subjectId must be provided together'
});
const listSubscriptionsQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ...subjectFilterFields,
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().min(1).max(100).default(50)
}).strict().refine(hasCompleteSubjectFilter, {
    message: 'subjectType and subjectId must be provided together'
});
const listPaymentHistoryResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    paymentHistory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymentHistorySchema"])
});
const listSubscriptionsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    subscriptions: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeSubscriptionSchema"])
});
const syncPaymentsSubscriptionsSummarySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    synced: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    unmapped: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative(),
    deleted: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().nonnegative()
});
const syncPaymentsEnvironmentResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    connection: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeConnectionSchema"],
    subscriptions: syncPaymentsSubscriptionsSummarySchema.nullable()
});
const syncPaymentsResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    results: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(syncPaymentsEnvironmentResultSchema)
});
const configurePaymentWebhookResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    connection: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeConnectionSchema"]
});
const stripeWebhookResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    received: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    handled: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    event: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeWebhookEventSchema"].optional()
});
const stripeKeyConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    hasKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    maskedKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable()
});
const getPaymentsConfigResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    keys: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(stripeKeyConfigSchema)
});
const upsertPaymentsConfigBodySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    secretKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(1, 'Stripe secret key is required')
}).strict();
const upsertPaymentsConfigRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    environment: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stripeEnvironmentSchema"],
    ...upsertPaymentsConfigBodySchema.shape
}).strict();
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/compute-services.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cpuTierEnum",
    ()=>cpuTierEnum,
    "cpuTierRegex",
    ()=>cpuTierRegex,
    "serviceSchema",
    ()=>serviceSchema,
    "serviceStatusEnum",
    ()=>serviceStatusEnum
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const serviceStatusEnum = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'creating',
    'deploying',
    'running',
    'stopped',
    'failed',
    'destroying'
]);
const cpuTierRegex = /^(shared|performance)-[1-9]\d*x$/;
const cpuTierEnum = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(cpuTierRegex, 'cpu must match `<shared|performance>-<N>x`, e.g. shared-2x or performance-8x');
const serviceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().uuid(),
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    cpu: cpuTierEnum,
    memory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number(),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    flyAppId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    flyMachineId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    status: serviceStatusEnum,
    endpointUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().nullable(),
    createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/compute-services-api.schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServiceSchema",
    ()=>createServiceSchema,
    "listServicesResponseSchema",
    ()=>listServicesResponseSchema,
    "updateServiceSchema",
    ()=>updateServiceSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/compute-services.schema.js [app-ssr] (ecmascript)");
;
;
const envVarKeyRegex = /^[A-Z_][A-Z0-9_]*$/;
const createServiceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(63).regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/, {
        message: 'Name must be DNS-safe: lowercase letters, numbers, and dashes only, must start with a letter or number'
    }),
    /**
     * Image URL — image-mode (any registry) or source-mode (digest-pinned
     * registry.fly.io ref produced by the CLI's `flyctl deploy --build-only --push`).
     * The CLI is responsible for building/pushing in source mode; the cloud
     * just launches a machine pointing at the resulting image.
     *
     * Required for createService (image-mode immediate launch).
     * Omit for prepareForDeploy / source-mode (the route's own validation handles it).
     */ imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(65535),
    cpu: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cpuTierEnum"].default('shared-1x'),
    memory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().refine((v)=>[
            256,
            512,
            1024,
            2048,
            4096,
            8192
        ].includes(v), {
        message: 'Memory must be one of: 256, 512, 1024, 2048, 4096, 8192'
    }).default(512),
    envVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(envVarKeyRegex, {
        message: 'Env var keys must match [A-Z_][A-Z0-9_]*'
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(4096)).optional(),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('iad')
});
const updateServiceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    /**
     * New image URL — image-mode (any registry) or source-mode digest-pinned
     * registry.fly.io ref. For non-image updates (port-only, env-only) omit.
     */ imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).optional(),
    port: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(65535).optional(),
    cpu: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cpuTierEnum"].optional(),
    memory: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().refine((v)=>[
            256,
            512,
            1024,
            2048,
            4096,
            8192
        ].includes(v), {
        message: 'Memory must be one of: 256, 512, 1024, 2048, 4096, 8192'
    }).optional(),
    /**
     * Wholesale replacement of the env var map. Sending {} clears all env
     * vars. For partial edits (rotate one secret without restating the
     * other six), use envVarsPatch instead.
     */ envVars: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(envVarKeyRegex, {
        message: 'Env var keys must match [A-Z_][A-Z0-9_]*'
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(4096)).optional(),
    /**
     * Partial env edit. `set` upserts keys, `unset` removes them. The server
     * decrypts the existing env_vars blob, applies the patch, and re-encrypts.
     * Mutually exclusive with `envVars` (the wholesale path) — sending both
     * is rejected, since the intent would be ambiguous.
     */ envVarsPatch: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        set: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(envVarKeyRegex, {
            message: 'Env var keys must match [A-Z_][A-Z0-9_]*'
        }), __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(4096)).optional(),
        unset: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(envVarKeyRegex, {
            message: 'Env var keys must match [A-Z_][A-Z0-9_]*'
        })).optional()
    }).refine((p)=>p.set && Object.keys(p.set).length > 0 || p.unset && p.unset.length > 0, {
        message: 'envVarsPatch must specify at least one key in set or unset'
    }).optional(),
    region: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).refine((data)=>!(data.envVars !== undefined && data.envVarsPatch !== undefined), {
    message: 'envVars and envVarsPatch are mutually exclusive — pick one (envVars replaces wholesale, envVarsPatch merges)',
    path: [
        'envVarsPatch'
    ]
});
const listServicesResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    services: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceSchema"])
});
}),
"[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/database.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$database$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/database-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$secrets$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/secrets.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$secrets$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/secrets-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$storage$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/storage-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$s3$2d$access$2d$key$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/s3-access-key.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$auth$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/auth-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$metadata$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/metadata.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/ai.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$ai$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/ai-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/logs.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$logs$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/logs-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$functions$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/functions.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$functions$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/functions-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$cloud$2d$events$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/cloud-events.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$realtime$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/realtime-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$docs$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/docs.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$email$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/email-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/deployments.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$deployments$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/deployments-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/schedules.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$schedules$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/schedules-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/payments.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$payments$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/payments-api.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/compute-services.schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$shared$2d$schemas$2f$dist$2f$compute$2d$services$2d$api$2e$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/shared-schemas/dist/compute-services-api.schema.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
];

//# sourceMappingURL=0zpf_%40insforge_shared-schemas_dist_0~v0_6.._.js.map