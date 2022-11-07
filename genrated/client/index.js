
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "genrated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role'
});
exports.Role = makeEnum({
  Admin: 'Admin',
  User: 'User',
  Guest: 'Guest'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User'
});

const compressedDMMF = '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='
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/davidev/learn/deno/deno-login-architecture-hexagonal/genrated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.5.0",
  "engineVersion": "0362da9eebca54d94c8ef5edd3b2e90af99ba452",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VucmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJtb25nb2RiIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KGF1dG8oKSkgQG1hcCgiX2lkIikgQGRiLk9iamVjdElkCiAgdXVpZCAgICAgU3RyaW5nCiAgbmFtZSAgICAgU3RyaW5nCiAgZW1haWwgICAgU3RyaW5nIEB1bmlxdWUKICBwYXNzd29yZCBTdHJpbmcKICByb2xlICAgICBSb2xlICAgQGRlZmF1bHQoVXNlcikgQG1hcCgicm9sZSIpCn0KCmVudW0gUm9sZSB7CiAgQWRtaW4KICBVc2VyCiAgR3Vlc3QKfQo='
config.inlineSchemaHash = '010f8ed916532c7301dc35f50534050991431cfdfa59e006e2509979ce60ce58'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

