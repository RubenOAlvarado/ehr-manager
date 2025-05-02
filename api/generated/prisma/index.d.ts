
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model EhrProvider
 * 
 */
export type EhrProvider = $Result.DefaultSelection<Prisma.$EhrProviderPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model QuestionSet
 * 
 */
export type QuestionSet = $Result.DefaultSelection<Prisma.$QuestionSetPayload>
/**
 * Model BaseQuestion
 * 
 */
export type BaseQuestion = $Result.DefaultSelection<Prisma.$BaseQuestionPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model EhrMapping
 * 
 */
export type EhrMapping = $Result.DefaultSelection<Prisma.$EhrMappingPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model PatientResponse
 * 
 */
export type PatientResponse = $Result.DefaultSelection<Prisma.$PatientResponsePayload>
/**
 * Model EhrSyncLog
 * 
 */
export type EhrSyncLog = $Result.DefaultSelection<Prisma.$EhrSyncLogPayload>
/**
 * Model BulkOperation
 * 
 */
export type BulkOperation = $Result.DefaultSelection<Prisma.$BulkOperationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model EhrMappingsCache
 * 
 */
export type EhrMappingsCache = $Result.DefaultSelection<Prisma.$EhrMappingsCachePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QuestionType: {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  DATE: 'DATE',
  TIME: 'TIME',
  DATETIME: 'DATETIME',
  FILE: 'FILE',
  SCALE: 'SCALE'
};

export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType]


export const ResponseDataType: {
  STRING: 'STRING',
  INTEGER: 'INTEGER',
  FLOAT: 'FLOAT',
  BOOLEAN: 'BOOLEAN',
  DATE: 'DATE',
  TIME: 'TIME',
  DATETIME: 'DATETIME',
  JSON: 'JSON',
  BLOB: 'BLOB'
};

export type ResponseDataType = (typeof ResponseDataType)[keyof typeof ResponseDataType]


export const SyncStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  RETRY_SCHEDULED: 'RETRY_SCHEDULED'
};

export type SyncStatus = (typeof SyncStatus)[keyof typeof SyncStatus]


export const OperationType: {
  IMPORT_PATIENTS: 'IMPORT_PATIENTS',
  EXPORT_RESPONSES: 'EXPORT_RESPONSES',
  SYNC_EHR: 'SYNC_EHR',
  UPDATE_MAPPINGS: 'UPDATE_MAPPINGS',
  GENERATE_REPORTS: 'GENERATE_REPORTS'
};

export type OperationType = (typeof OperationType)[keyof typeof OperationType]


export const ActionType: {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  EXPORT: 'EXPORT',
  IMPORT: 'IMPORT'
};

export type ActionType = (typeof ActionType)[keyof typeof ActionType]

}

export type QuestionType = $Enums.QuestionType

export const QuestionType: typeof $Enums.QuestionType

export type ResponseDataType = $Enums.ResponseDataType

export const ResponseDataType: typeof $Enums.ResponseDataType

export type SyncStatus = $Enums.SyncStatus

export const SyncStatus: typeof $Enums.SyncStatus

export type OperationType = $Enums.OperationType

export const OperationType: typeof $Enums.OperationType

export type ActionType = $Enums.ActionType

export const ActionType: typeof $Enums.ActionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Languages
 * const languages = await prisma.language.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Languages
   * const languages = await prisma.language.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ehrProvider`: Exposes CRUD operations for the **EhrProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EhrProviders
    * const ehrProviders = await prisma.ehrProvider.findMany()
    * ```
    */
  get ehrProvider(): Prisma.EhrProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionSet`: Exposes CRUD operations for the **QuestionSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionSets
    * const questionSets = await prisma.questionSet.findMany()
    * ```
    */
  get questionSet(): Prisma.QuestionSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.baseQuestion`: Exposes CRUD operations for the **BaseQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BaseQuestions
    * const baseQuestions = await prisma.baseQuestion.findMany()
    * ```
    */
  get baseQuestion(): Prisma.BaseQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ehrMapping`: Exposes CRUD operations for the **EhrMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EhrMappings
    * const ehrMappings = await prisma.ehrMapping.findMany()
    * ```
    */
  get ehrMapping(): Prisma.EhrMappingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientResponse`: Exposes CRUD operations for the **PatientResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientResponses
    * const patientResponses = await prisma.patientResponse.findMany()
    * ```
    */
  get patientResponse(): Prisma.PatientResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ehrSyncLog`: Exposes CRUD operations for the **EhrSyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EhrSyncLogs
    * const ehrSyncLogs = await prisma.ehrSyncLog.findMany()
    * ```
    */
  get ehrSyncLog(): Prisma.EhrSyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulkOperation`: Exposes CRUD operations for the **BulkOperation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulkOperations
    * const bulkOperations = await prisma.bulkOperation.findMany()
    * ```
    */
  get bulkOperation(): Prisma.BulkOperationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ehrMappingsCache`: Exposes CRUD operations for the **EhrMappingsCache** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EhrMappingsCaches
    * const ehrMappingsCaches = await prisma.ehrMappingsCache.findMany()
    * ```
    */
  get ehrMappingsCache(): Prisma.EhrMappingsCacheDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Language: 'Language',
    EhrProvider: 'EhrProvider',
    Client: 'Client',
    QuestionSet: 'QuestionSet',
    BaseQuestion: 'BaseQuestion',
    Question: 'Question',
    EhrMapping: 'EhrMapping',
    Patient: 'Patient',
    PatientResponse: 'PatientResponse',
    EhrSyncLog: 'EhrSyncLog',
    BulkOperation: 'BulkOperation',
    AuditLog: 'AuditLog',
    EhrMappingsCache: 'EhrMappingsCache'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "language" | "ehrProvider" | "client" | "questionSet" | "baseQuestion" | "question" | "ehrMapping" | "patient" | "patientResponse" | "ehrSyncLog" | "bulkOperation" | "auditLog" | "ehrMappingsCache"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      EhrProvider: {
        payload: Prisma.$EhrProviderPayload<ExtArgs>
        fields: Prisma.EhrProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EhrProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EhrProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          findFirst: {
            args: Prisma.EhrProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EhrProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          findMany: {
            args: Prisma.EhrProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>[]
          }
          create: {
            args: Prisma.EhrProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          createMany: {
            args: Prisma.EhrProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EhrProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>[]
          }
          delete: {
            args: Prisma.EhrProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          update: {
            args: Prisma.EhrProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          deleteMany: {
            args: Prisma.EhrProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EhrProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EhrProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>[]
          }
          upsert: {
            args: Prisma.EhrProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrProviderPayload>
          }
          aggregate: {
            args: Prisma.EhrProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEhrProvider>
          }
          groupBy: {
            args: Prisma.EhrProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<EhrProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.EhrProviderCountArgs<ExtArgs>
            result: $Utils.Optional<EhrProviderCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      QuestionSet: {
        payload: Prisma.$QuestionSetPayload<ExtArgs>
        fields: Prisma.QuestionSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          findFirst: {
            args: Prisma.QuestionSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          findMany: {
            args: Prisma.QuestionSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>[]
          }
          create: {
            args: Prisma.QuestionSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          createMany: {
            args: Prisma.QuestionSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>[]
          }
          delete: {
            args: Prisma.QuestionSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          update: {
            args: Prisma.QuestionSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          deleteMany: {
            args: Prisma.QuestionSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>[]
          }
          upsert: {
            args: Prisma.QuestionSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionSetPayload>
          }
          aggregate: {
            args: Prisma.QuestionSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionSet>
          }
          groupBy: {
            args: Prisma.QuestionSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionSetCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionSetCountAggregateOutputType> | number
          }
        }
      }
      BaseQuestion: {
        payload: Prisma.$BaseQuestionPayload<ExtArgs>
        fields: Prisma.BaseQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          findFirst: {
            args: Prisma.BaseQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          findMany: {
            args: Prisma.BaseQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>[]
          }
          create: {
            args: Prisma.BaseQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          createMany: {
            args: Prisma.BaseQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>[]
          }
          delete: {
            args: Prisma.BaseQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          update: {
            args: Prisma.BaseQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          deleteMany: {
            args: Prisma.BaseQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>[]
          }
          upsert: {
            args: Prisma.BaseQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BaseQuestionPayload>
          }
          aggregate: {
            args: Prisma.BaseQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaseQuestion>
          }
          groupBy: {
            args: Prisma.BaseQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<BaseQuestionCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      EhrMapping: {
        payload: Prisma.$EhrMappingPayload<ExtArgs>
        fields: Prisma.EhrMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EhrMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EhrMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          findFirst: {
            args: Prisma.EhrMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EhrMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          findMany: {
            args: Prisma.EhrMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>[]
          }
          create: {
            args: Prisma.EhrMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          createMany: {
            args: Prisma.EhrMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EhrMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>[]
          }
          delete: {
            args: Prisma.EhrMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          update: {
            args: Prisma.EhrMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          deleteMany: {
            args: Prisma.EhrMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EhrMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EhrMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>[]
          }
          upsert: {
            args: Prisma.EhrMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingPayload>
          }
          aggregate: {
            args: Prisma.EhrMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEhrMapping>
          }
          groupBy: {
            args: Prisma.EhrMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<EhrMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.EhrMappingCountArgs<ExtArgs>
            result: $Utils.Optional<EhrMappingCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      PatientResponse: {
        payload: Prisma.$PatientResponsePayload<ExtArgs>
        fields: Prisma.PatientResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          findFirst: {
            args: Prisma.PatientResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          findMany: {
            args: Prisma.PatientResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>[]
          }
          create: {
            args: Prisma.PatientResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          createMany: {
            args: Prisma.PatientResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>[]
          }
          delete: {
            args: Prisma.PatientResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          update: {
            args: Prisma.PatientResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          deleteMany: {
            args: Prisma.PatientResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>[]
          }
          upsert: {
            args: Prisma.PatientResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientResponsePayload>
          }
          aggregate: {
            args: Prisma.PatientResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientResponse>
          }
          groupBy: {
            args: Prisma.PatientResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientResponseCountArgs<ExtArgs>
            result: $Utils.Optional<PatientResponseCountAggregateOutputType> | number
          }
        }
      }
      EhrSyncLog: {
        payload: Prisma.$EhrSyncLogPayload<ExtArgs>
        fields: Prisma.EhrSyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EhrSyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EhrSyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          findFirst: {
            args: Prisma.EhrSyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EhrSyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          findMany: {
            args: Prisma.EhrSyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>[]
          }
          create: {
            args: Prisma.EhrSyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          createMany: {
            args: Prisma.EhrSyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EhrSyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>[]
          }
          delete: {
            args: Prisma.EhrSyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          update: {
            args: Prisma.EhrSyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          deleteMany: {
            args: Prisma.EhrSyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EhrSyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EhrSyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>[]
          }
          upsert: {
            args: Prisma.EhrSyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrSyncLogPayload>
          }
          aggregate: {
            args: Prisma.EhrSyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEhrSyncLog>
          }
          groupBy: {
            args: Prisma.EhrSyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EhrSyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EhrSyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<EhrSyncLogCountAggregateOutputType> | number
          }
        }
      }
      BulkOperation: {
        payload: Prisma.$BulkOperationPayload<ExtArgs>
        fields: Prisma.BulkOperationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulkOperationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulkOperationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          findFirst: {
            args: Prisma.BulkOperationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulkOperationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          findMany: {
            args: Prisma.BulkOperationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>[]
          }
          create: {
            args: Prisma.BulkOperationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          createMany: {
            args: Prisma.BulkOperationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BulkOperationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>[]
          }
          delete: {
            args: Prisma.BulkOperationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          update: {
            args: Prisma.BulkOperationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          deleteMany: {
            args: Prisma.BulkOperationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulkOperationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BulkOperationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>[]
          }
          upsert: {
            args: Prisma.BulkOperationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulkOperationPayload>
          }
          aggregate: {
            args: Prisma.BulkOperationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulkOperation>
          }
          groupBy: {
            args: Prisma.BulkOperationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulkOperationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulkOperationCountArgs<ExtArgs>
            result: $Utils.Optional<BulkOperationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      EhrMappingsCache: {
        payload: Prisma.$EhrMappingsCachePayload<ExtArgs>
        fields: Prisma.EhrMappingsCacheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EhrMappingsCacheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EhrMappingsCacheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          findFirst: {
            args: Prisma.EhrMappingsCacheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EhrMappingsCacheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          findMany: {
            args: Prisma.EhrMappingsCacheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>[]
          }
          create: {
            args: Prisma.EhrMappingsCacheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          createMany: {
            args: Prisma.EhrMappingsCacheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EhrMappingsCacheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>[]
          }
          delete: {
            args: Prisma.EhrMappingsCacheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          update: {
            args: Prisma.EhrMappingsCacheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          deleteMany: {
            args: Prisma.EhrMappingsCacheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EhrMappingsCacheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EhrMappingsCacheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>[]
          }
          upsert: {
            args: Prisma.EhrMappingsCacheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EhrMappingsCachePayload>
          }
          aggregate: {
            args: Prisma.EhrMappingsCacheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEhrMappingsCache>
          }
          groupBy: {
            args: Prisma.EhrMappingsCacheGroupByArgs<ExtArgs>
            result: $Utils.Optional<EhrMappingsCacheGroupByOutputType>[]
          }
          count: {
            args: Prisma.EhrMappingsCacheCountArgs<ExtArgs>
            result: $Utils.Optional<EhrMappingsCacheCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    language?: LanguageOmit
    ehrProvider?: EhrProviderOmit
    client?: ClientOmit
    questionSet?: QuestionSetOmit
    baseQuestion?: BaseQuestionOmit
    question?: QuestionOmit
    ehrMapping?: EhrMappingOmit
    patient?: PatientOmit
    patientResponse?: PatientResponseOmit
    ehrSyncLog?: EhrSyncLogOmit
    bulkOperation?: BulkOperationOmit
    auditLog?: AuditLogOmit
    ehrMappingsCache?: EhrMappingsCacheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    questions: number
    patients: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | LanguageCountOutputTypeCountQuestionsArgs
    patients?: boolean | LanguageCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type EhrProviderCountOutputType
   */

  export type EhrProviderCountOutputType = {
    ehrMappings: number
    syncLogs: number
    EhrMappingsCache: number
  }

  export type EhrProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ehrMappings?: boolean | EhrProviderCountOutputTypeCountEhrMappingsArgs
    syncLogs?: boolean | EhrProviderCountOutputTypeCountSyncLogsArgs
    EhrMappingsCache?: boolean | EhrProviderCountOutputTypeCountEhrMappingsCacheArgs
  }

  // Custom InputTypes
  /**
   * EhrProviderCountOutputType without action
   */
  export type EhrProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProviderCountOutputType
     */
    select?: EhrProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EhrProviderCountOutputType without action
   */
  export type EhrProviderCountOutputTypeCountEhrMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingWhereInput
  }

  /**
   * EhrProviderCountOutputType without action
   */
  export type EhrProviderCountOutputTypeCountSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrSyncLogWhereInput
  }

  /**
   * EhrProviderCountOutputType without action
   */
  export type EhrProviderCountOutputTypeCountEhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingsCacheWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    questionSets: number
    patients: number
    bulkOperations: number
    EhrSyncLog: number
    EhrMappingsCache: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionSets?: boolean | ClientCountOutputTypeCountQuestionSetsArgs
    patients?: boolean | ClientCountOutputTypeCountPatientsArgs
    bulkOperations?: boolean | ClientCountOutputTypeCountBulkOperationsArgs
    EhrSyncLog?: boolean | ClientCountOutputTypeCountEhrSyncLogArgs
    EhrMappingsCache?: boolean | ClientCountOutputTypeCountEhrMappingsCacheArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountQuestionSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionSetWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBulkOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkOperationWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEhrSyncLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrSyncLogWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountEhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingsCacheWhereInput
  }


  /**
   * Count Type QuestionSetCountOutputType
   */

  export type QuestionSetCountOutputType = {
    questions: number
  }

  export type QuestionSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuestionSetCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionSetCountOutputType without action
   */
  export type QuestionSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSetCountOutputType
     */
    select?: QuestionSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionSetCountOutputType without action
   */
  export type QuestionSetCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type BaseQuestionCountOutputType
   */

  export type BaseQuestionCountOutputType = {
    questions: number
    ehrMappings: number
    patientResponses: number
    EhrMappingsCache: number
  }

  export type BaseQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | BaseQuestionCountOutputTypeCountQuestionsArgs
    ehrMappings?: boolean | BaseQuestionCountOutputTypeCountEhrMappingsArgs
    patientResponses?: boolean | BaseQuestionCountOutputTypeCountPatientResponsesArgs
    EhrMappingsCache?: boolean | BaseQuestionCountOutputTypeCountEhrMappingsCacheArgs
  }

  // Custom InputTypes
  /**
   * BaseQuestionCountOutputType without action
   */
  export type BaseQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestionCountOutputType
     */
    select?: BaseQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseQuestionCountOutputType without action
   */
  export type BaseQuestionCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * BaseQuestionCountOutputType without action
   */
  export type BaseQuestionCountOutputTypeCountEhrMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingWhereInput
  }

  /**
   * BaseQuestionCountOutputType without action
   */
  export type BaseQuestionCountOutputTypeCountPatientResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientResponseWhereInput
  }

  /**
   * BaseQuestionCountOutputType without action
   */
  export type BaseQuestionCountOutputTypeCountEhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingsCacheWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    responses: number
    syncLogs: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | PatientCountOutputTypeCountResponsesArgs
    syncLogs?: boolean | PatientCountOutputTypeCountSyncLogsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientResponseWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountSyncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrSyncLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    code: string | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    code: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageCountAggregateInputType = {
    code?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    code: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Language$questionsArgs<ExtArgs>
    patients?: boolean | Language$patientsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    code?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Language$questionsArgs<ExtArgs>
    patients?: boolean | Language$patientsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const languageWithCodeOnly = await prisma.language.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `code`
     * const languageWithCodeOnly = await prisma.language.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Language$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Language$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends Language$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Language$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly code: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly isActive: FieldRef<"Language", 'Boolean'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
    readonly updatedAt: FieldRef<"Language", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.questions
   */
  export type Language$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Language.patients
   */
  export type Language$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model EhrProvider
   */

  export type AggregateEhrProvider = {
    _count: EhrProviderCountAggregateOutputType | null
    _min: EhrProviderMinAggregateOutputType | null
    _max: EhrProviderMaxAggregateOutputType | null
  }

  export type EhrProviderMinAggregateOutputType = {
    code: string | null
    name: string | null
    baseUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrProviderMaxAggregateOutputType = {
    code: string | null
    name: string | null
    baseUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrProviderCountAggregateOutputType = {
    code: number
    name: number
    baseUrl: number
    authConfig: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EhrProviderMinAggregateInputType = {
    code?: true
    name?: true
    baseUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrProviderMaxAggregateInputType = {
    code?: true
    name?: true
    baseUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrProviderCountAggregateInputType = {
    code?: true
    name?: true
    baseUrl?: true
    authConfig?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EhrProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrProvider to aggregate.
     */
    where?: EhrProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrProviders to fetch.
     */
    orderBy?: EhrProviderOrderByWithRelationInput | EhrProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EhrProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EhrProviders
    **/
    _count?: true | EhrProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EhrProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EhrProviderMaxAggregateInputType
  }

  export type GetEhrProviderAggregateType<T extends EhrProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateEhrProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEhrProvider[P]>
      : GetScalarType<T[P], AggregateEhrProvider[P]>
  }




  export type EhrProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrProviderWhereInput
    orderBy?: EhrProviderOrderByWithAggregationInput | EhrProviderOrderByWithAggregationInput[]
    by: EhrProviderScalarFieldEnum[] | EhrProviderScalarFieldEnum
    having?: EhrProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EhrProviderCountAggregateInputType | true
    _min?: EhrProviderMinAggregateInputType
    _max?: EhrProviderMaxAggregateInputType
  }

  export type EhrProviderGroupByOutputType = {
    code: string
    name: string
    baseUrl: string
    authConfig: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EhrProviderCountAggregateOutputType | null
    _min: EhrProviderMinAggregateOutputType | null
    _max: EhrProviderMaxAggregateOutputType | null
  }

  type GetEhrProviderGroupByPayload<T extends EhrProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EhrProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EhrProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EhrProviderGroupByOutputType[P]>
            : GetScalarType<T[P], EhrProviderGroupByOutputType[P]>
        }
      >
    >


  export type EhrProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    baseUrl?: boolean
    authConfig?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ehrMappings?: boolean | EhrProvider$ehrMappingsArgs<ExtArgs>
    syncLogs?: boolean | EhrProvider$syncLogsArgs<ExtArgs>
    EhrMappingsCache?: boolean | EhrProvider$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | EhrProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrProvider"]>

  export type EhrProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    baseUrl?: boolean
    authConfig?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ehrProvider"]>

  export type EhrProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    baseUrl?: boolean
    authConfig?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ehrProvider"]>

  export type EhrProviderSelectScalar = {
    code?: boolean
    name?: boolean
    baseUrl?: boolean
    authConfig?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EhrProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "baseUrl" | "authConfig" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["ehrProvider"]>
  export type EhrProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ehrMappings?: boolean | EhrProvider$ehrMappingsArgs<ExtArgs>
    syncLogs?: boolean | EhrProvider$syncLogsArgs<ExtArgs>
    EhrMappingsCache?: boolean | EhrProvider$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | EhrProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EhrProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EhrProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EhrProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EhrProvider"
    objects: {
      ehrMappings: Prisma.$EhrMappingPayload<ExtArgs>[]
      syncLogs: Prisma.$EhrSyncLogPayload<ExtArgs>[]
      EhrMappingsCache: Prisma.$EhrMappingsCachePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      baseUrl: string
      authConfig: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ehrProvider"]>
    composites: {}
  }

  type EhrProviderGetPayload<S extends boolean | null | undefined | EhrProviderDefaultArgs> = $Result.GetResult<Prisma.$EhrProviderPayload, S>

  type EhrProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EhrProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EhrProviderCountAggregateInputType | true
    }

  export interface EhrProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EhrProvider'], meta: { name: 'EhrProvider' } }
    /**
     * Find zero or one EhrProvider that matches the filter.
     * @param {EhrProviderFindUniqueArgs} args - Arguments to find a EhrProvider
     * @example
     * // Get one EhrProvider
     * const ehrProvider = await prisma.ehrProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EhrProviderFindUniqueArgs>(args: SelectSubset<T, EhrProviderFindUniqueArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EhrProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EhrProviderFindUniqueOrThrowArgs} args - Arguments to find a EhrProvider
     * @example
     * // Get one EhrProvider
     * const ehrProvider = await prisma.ehrProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EhrProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, EhrProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderFindFirstArgs} args - Arguments to find a EhrProvider
     * @example
     * // Get one EhrProvider
     * const ehrProvider = await prisma.ehrProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EhrProviderFindFirstArgs>(args?: SelectSubset<T, EhrProviderFindFirstArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderFindFirstOrThrowArgs} args - Arguments to find a EhrProvider
     * @example
     * // Get one EhrProvider
     * const ehrProvider = await prisma.ehrProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EhrProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, EhrProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EhrProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EhrProviders
     * const ehrProviders = await prisma.ehrProvider.findMany()
     * 
     * // Get first 10 EhrProviders
     * const ehrProviders = await prisma.ehrProvider.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const ehrProviderWithCodeOnly = await prisma.ehrProvider.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends EhrProviderFindManyArgs>(args?: SelectSubset<T, EhrProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EhrProvider.
     * @param {EhrProviderCreateArgs} args - Arguments to create a EhrProvider.
     * @example
     * // Create one EhrProvider
     * const EhrProvider = await prisma.ehrProvider.create({
     *   data: {
     *     // ... data to create a EhrProvider
     *   }
     * })
     * 
     */
    create<T extends EhrProviderCreateArgs>(args: SelectSubset<T, EhrProviderCreateArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EhrProviders.
     * @param {EhrProviderCreateManyArgs} args - Arguments to create many EhrProviders.
     * @example
     * // Create many EhrProviders
     * const ehrProvider = await prisma.ehrProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EhrProviderCreateManyArgs>(args?: SelectSubset<T, EhrProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EhrProviders and returns the data saved in the database.
     * @param {EhrProviderCreateManyAndReturnArgs} args - Arguments to create many EhrProviders.
     * @example
     * // Create many EhrProviders
     * const ehrProvider = await prisma.ehrProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EhrProviders and only return the `code`
     * const ehrProviderWithCodeOnly = await prisma.ehrProvider.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EhrProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, EhrProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EhrProvider.
     * @param {EhrProviderDeleteArgs} args - Arguments to delete one EhrProvider.
     * @example
     * // Delete one EhrProvider
     * const EhrProvider = await prisma.ehrProvider.delete({
     *   where: {
     *     // ... filter to delete one EhrProvider
     *   }
     * })
     * 
     */
    delete<T extends EhrProviderDeleteArgs>(args: SelectSubset<T, EhrProviderDeleteArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EhrProvider.
     * @param {EhrProviderUpdateArgs} args - Arguments to update one EhrProvider.
     * @example
     * // Update one EhrProvider
     * const ehrProvider = await prisma.ehrProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EhrProviderUpdateArgs>(args: SelectSubset<T, EhrProviderUpdateArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EhrProviders.
     * @param {EhrProviderDeleteManyArgs} args - Arguments to filter EhrProviders to delete.
     * @example
     * // Delete a few EhrProviders
     * const { count } = await prisma.ehrProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EhrProviderDeleteManyArgs>(args?: SelectSubset<T, EhrProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EhrProviders
     * const ehrProvider = await prisma.ehrProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EhrProviderUpdateManyArgs>(args: SelectSubset<T, EhrProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrProviders and returns the data updated in the database.
     * @param {EhrProviderUpdateManyAndReturnArgs} args - Arguments to update many EhrProviders.
     * @example
     * // Update many EhrProviders
     * const ehrProvider = await prisma.ehrProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EhrProviders and only return the `code`
     * const ehrProviderWithCodeOnly = await prisma.ehrProvider.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EhrProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, EhrProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EhrProvider.
     * @param {EhrProviderUpsertArgs} args - Arguments to update or create a EhrProvider.
     * @example
     * // Update or create a EhrProvider
     * const ehrProvider = await prisma.ehrProvider.upsert({
     *   create: {
     *     // ... data to create a EhrProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EhrProvider we want to update
     *   }
     * })
     */
    upsert<T extends EhrProviderUpsertArgs>(args: SelectSubset<T, EhrProviderUpsertArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EhrProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderCountArgs} args - Arguments to filter EhrProviders to count.
     * @example
     * // Count the number of EhrProviders
     * const count = await prisma.ehrProvider.count({
     *   where: {
     *     // ... the filter for the EhrProviders we want to count
     *   }
     * })
    **/
    count<T extends EhrProviderCountArgs>(
      args?: Subset<T, EhrProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EhrProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EhrProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EhrProviderAggregateArgs>(args: Subset<T, EhrProviderAggregateArgs>): Prisma.PrismaPromise<GetEhrProviderAggregateType<T>>

    /**
     * Group by EhrProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EhrProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EhrProviderGroupByArgs['orderBy'] }
        : { orderBy?: EhrProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EhrProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEhrProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EhrProvider model
   */
  readonly fields: EhrProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EhrProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EhrProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ehrMappings<T extends EhrProvider$ehrMappingsArgs<ExtArgs> = {}>(args?: Subset<T, EhrProvider$ehrMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncLogs<T extends EhrProvider$syncLogsArgs<ExtArgs> = {}>(args?: Subset<T, EhrProvider$syncLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EhrMappingsCache<T extends EhrProvider$EhrMappingsCacheArgs<ExtArgs> = {}>(args?: Subset<T, EhrProvider$EhrMappingsCacheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EhrProvider model
   */
  interface EhrProviderFieldRefs {
    readonly code: FieldRef<"EhrProvider", 'String'>
    readonly name: FieldRef<"EhrProvider", 'String'>
    readonly baseUrl: FieldRef<"EhrProvider", 'String'>
    readonly authConfig: FieldRef<"EhrProvider", 'Json'>
    readonly isActive: FieldRef<"EhrProvider", 'Boolean'>
    readonly createdAt: FieldRef<"EhrProvider", 'DateTime'>
    readonly updatedAt: FieldRef<"EhrProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EhrProvider findUnique
   */
  export type EhrProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter, which EhrProvider to fetch.
     */
    where: EhrProviderWhereUniqueInput
  }

  /**
   * EhrProvider findUniqueOrThrow
   */
  export type EhrProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter, which EhrProvider to fetch.
     */
    where: EhrProviderWhereUniqueInput
  }

  /**
   * EhrProvider findFirst
   */
  export type EhrProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter, which EhrProvider to fetch.
     */
    where?: EhrProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrProviders to fetch.
     */
    orderBy?: EhrProviderOrderByWithRelationInput | EhrProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrProviders.
     */
    cursor?: EhrProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrProviders.
     */
    distinct?: EhrProviderScalarFieldEnum | EhrProviderScalarFieldEnum[]
  }

  /**
   * EhrProvider findFirstOrThrow
   */
  export type EhrProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter, which EhrProvider to fetch.
     */
    where?: EhrProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrProviders to fetch.
     */
    orderBy?: EhrProviderOrderByWithRelationInput | EhrProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrProviders.
     */
    cursor?: EhrProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrProviders.
     */
    distinct?: EhrProviderScalarFieldEnum | EhrProviderScalarFieldEnum[]
  }

  /**
   * EhrProvider findMany
   */
  export type EhrProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter, which EhrProviders to fetch.
     */
    where?: EhrProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrProviders to fetch.
     */
    orderBy?: EhrProviderOrderByWithRelationInput | EhrProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EhrProviders.
     */
    cursor?: EhrProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrProviders.
     */
    skip?: number
    distinct?: EhrProviderScalarFieldEnum | EhrProviderScalarFieldEnum[]
  }

  /**
   * EhrProvider create
   */
  export type EhrProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a EhrProvider.
     */
    data: XOR<EhrProviderCreateInput, EhrProviderUncheckedCreateInput>
  }

  /**
   * EhrProvider createMany
   */
  export type EhrProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EhrProviders.
     */
    data: EhrProviderCreateManyInput | EhrProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EhrProvider createManyAndReturn
   */
  export type EhrProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * The data used to create many EhrProviders.
     */
    data: EhrProviderCreateManyInput | EhrProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EhrProvider update
   */
  export type EhrProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a EhrProvider.
     */
    data: XOR<EhrProviderUpdateInput, EhrProviderUncheckedUpdateInput>
    /**
     * Choose, which EhrProvider to update.
     */
    where: EhrProviderWhereUniqueInput
  }

  /**
   * EhrProvider updateMany
   */
  export type EhrProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EhrProviders.
     */
    data: XOR<EhrProviderUpdateManyMutationInput, EhrProviderUncheckedUpdateManyInput>
    /**
     * Filter which EhrProviders to update
     */
    where?: EhrProviderWhereInput
    /**
     * Limit how many EhrProviders to update.
     */
    limit?: number
  }

  /**
   * EhrProvider updateManyAndReturn
   */
  export type EhrProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * The data used to update EhrProviders.
     */
    data: XOR<EhrProviderUpdateManyMutationInput, EhrProviderUncheckedUpdateManyInput>
    /**
     * Filter which EhrProviders to update
     */
    where?: EhrProviderWhereInput
    /**
     * Limit how many EhrProviders to update.
     */
    limit?: number
  }

  /**
   * EhrProvider upsert
   */
  export type EhrProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the EhrProvider to update in case it exists.
     */
    where: EhrProviderWhereUniqueInput
    /**
     * In case the EhrProvider found by the `where` argument doesn't exist, create a new EhrProvider with this data.
     */
    create: XOR<EhrProviderCreateInput, EhrProviderUncheckedCreateInput>
    /**
     * In case the EhrProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EhrProviderUpdateInput, EhrProviderUncheckedUpdateInput>
  }

  /**
   * EhrProvider delete
   */
  export type EhrProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
    /**
     * Filter which EhrProvider to delete.
     */
    where: EhrProviderWhereUniqueInput
  }

  /**
   * EhrProvider deleteMany
   */
  export type EhrProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrProviders to delete
     */
    where?: EhrProviderWhereInput
    /**
     * Limit how many EhrProviders to delete.
     */
    limit?: number
  }

  /**
   * EhrProvider.ehrMappings
   */
  export type EhrProvider$ehrMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    where?: EhrMappingWhereInput
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    cursor?: EhrMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrMappingScalarFieldEnum | EhrMappingScalarFieldEnum[]
  }

  /**
   * EhrProvider.syncLogs
   */
  export type EhrProvider$syncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    where?: EhrSyncLogWhereInput
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    cursor?: EhrSyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * EhrProvider.EhrMappingsCache
   */
  export type EhrProvider$EhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    where?: EhrMappingsCacheWhereInput
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    cursor?: EhrMappingsCacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * EhrProvider without action
   */
  export type EhrProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrProvider
     */
    select?: EhrProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrProvider
     */
    omit?: EhrProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrProviderInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    externalId: string | null
    preferredEhr: string | null
    defaultLanguage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    externalId: string | null
    preferredEhr: string | null
    defaultLanguage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    externalId: number
    preferredEhr: number
    defaultLanguage: number
    metadata: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    externalId?: true
    preferredEhr?: true
    defaultLanguage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    externalId?: true
    preferredEhr?: true
    defaultLanguage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    externalId?: true
    preferredEhr?: true
    defaultLanguage?: true
    metadata?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    externalId: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    externalId?: boolean
    preferredEhr?: boolean
    defaultLanguage?: boolean
    metadata?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    questionSets?: boolean | Client$questionSetsArgs<ExtArgs>
    patients?: boolean | Client$patientsArgs<ExtArgs>
    bulkOperations?: boolean | Client$bulkOperationsArgs<ExtArgs>
    EhrSyncLog?: boolean | Client$EhrSyncLogArgs<ExtArgs>
    EhrMappingsCache?: boolean | Client$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    externalId?: boolean
    preferredEhr?: boolean
    defaultLanguage?: boolean
    metadata?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    externalId?: boolean
    preferredEhr?: boolean
    defaultLanguage?: boolean
    metadata?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    externalId?: boolean
    preferredEhr?: boolean
    defaultLanguage?: boolean
    metadata?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "externalId" | "preferredEhr" | "defaultLanguage" | "metadata" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionSets?: boolean | Client$questionSetsArgs<ExtArgs>
    patients?: boolean | Client$patientsArgs<ExtArgs>
    bulkOperations?: boolean | Client$bulkOperationsArgs<ExtArgs>
    EhrSyncLog?: boolean | Client$EhrSyncLogArgs<ExtArgs>
    EhrMappingsCache?: boolean | Client$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      questionSets: Prisma.$QuestionSetPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      bulkOperations: Prisma.$BulkOperationPayload<ExtArgs>[]
      EhrSyncLog: Prisma.$EhrSyncLogPayload<ExtArgs>[]
      EhrMappingsCache: Prisma.$EhrMappingsCachePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      externalId: string | null
      preferredEhr: string
      defaultLanguage: string
      metadata: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questionSets<T extends Client$questionSetsArgs<ExtArgs> = {}>(args?: Subset<T, Client$questionSetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends Client$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Client$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bulkOperations<T extends Client$bulkOperationsArgs<ExtArgs> = {}>(args?: Subset<T, Client$bulkOperationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EhrSyncLog<T extends Client$EhrSyncLogArgs<ExtArgs> = {}>(args?: Subset<T, Client$EhrSyncLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EhrMappingsCache<T extends Client$EhrMappingsCacheArgs<ExtArgs> = {}>(args?: Subset<T, Client$EhrMappingsCacheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly externalId: FieldRef<"Client", 'String'>
    readonly preferredEhr: FieldRef<"Client", 'String'>
    readonly defaultLanguage: FieldRef<"Client", 'String'>
    readonly metadata: FieldRef<"Client", 'Json'>
    readonly isActive: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly deletedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.questionSets
   */
  export type Client$questionSetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    where?: QuestionSetWhereInput
    orderBy?: QuestionSetOrderByWithRelationInput | QuestionSetOrderByWithRelationInput[]
    cursor?: QuestionSetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionSetScalarFieldEnum | QuestionSetScalarFieldEnum[]
  }

  /**
   * Client.patients
   */
  export type Client$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Client.bulkOperations
   */
  export type Client$bulkOperationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    where?: BulkOperationWhereInput
    orderBy?: BulkOperationOrderByWithRelationInput | BulkOperationOrderByWithRelationInput[]
    cursor?: BulkOperationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulkOperationScalarFieldEnum | BulkOperationScalarFieldEnum[]
  }

  /**
   * Client.EhrSyncLog
   */
  export type Client$EhrSyncLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    where?: EhrSyncLogWhereInput
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    cursor?: EhrSyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * Client.EhrMappingsCache
   */
  export type Client$EhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    where?: EhrMappingsCacheWhereInput
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    cursor?: EhrMappingsCacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model QuestionSet
   */

  export type AggregateQuestionSet = {
    _count: QuestionSetCountAggregateOutputType | null
    _avg: QuestionSetAvgAggregateOutputType | null
    _sum: QuestionSetSumAggregateOutputType | null
    _min: QuestionSetMinAggregateOutputType | null
    _max: QuestionSetMaxAggregateOutputType | null
  }

  export type QuestionSetAvgAggregateOutputType = {
    version: number | null
  }

  export type QuestionSetSumAggregateOutputType = {
    version: number | null
  }

  export type QuestionSetMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    name: string | null
    description: string | null
    version: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type QuestionSetMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    name: string | null
    description: string | null
    version: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type QuestionSetCountAggregateOutputType = {
    id: number
    clientId: number
    name: number
    description: number
    version: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type QuestionSetAvgAggregateInputType = {
    version?: true
  }

  export type QuestionSetSumAggregateInputType = {
    version?: true
  }

  export type QuestionSetMinAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type QuestionSetMaxAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type QuestionSetCountAggregateInputType = {
    id?: true
    clientId?: true
    name?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type QuestionSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionSet to aggregate.
     */
    where?: QuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSets to fetch.
     */
    orderBy?: QuestionSetOrderByWithRelationInput | QuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionSets
    **/
    _count?: true | QuestionSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionSetMaxAggregateInputType
  }

  export type GetQuestionSetAggregateType<T extends QuestionSetAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionSet[P]>
      : GetScalarType<T[P], AggregateQuestionSet[P]>
  }




  export type QuestionSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionSetWhereInput
    orderBy?: QuestionSetOrderByWithAggregationInput | QuestionSetOrderByWithAggregationInput[]
    by: QuestionSetScalarFieldEnum[] | QuestionSetScalarFieldEnum
    having?: QuestionSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionSetCountAggregateInputType | true
    _avg?: QuestionSetAvgAggregateInputType
    _sum?: QuestionSetSumAggregateInputType
    _min?: QuestionSetMinAggregateInputType
    _max?: QuestionSetMaxAggregateInputType
  }

  export type QuestionSetGroupByOutputType = {
    id: string
    clientId: string
    name: string
    description: string | null
    version: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: QuestionSetCountAggregateOutputType | null
    _avg: QuestionSetAvgAggregateOutputType | null
    _sum: QuestionSetSumAggregateOutputType | null
    _min: QuestionSetMinAggregateOutputType | null
    _max: QuestionSetMaxAggregateOutputType | null
  }

  type GetQuestionSetGroupByPayload<T extends QuestionSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionSetGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionSetGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    questions?: boolean | QuestionSet$questionsArgs<ExtArgs>
    _count?: boolean | QuestionSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSet"]>

  export type QuestionSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSet"]>

  export type QuestionSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionSet"]>

  export type QuestionSetSelectScalar = {
    id?: boolean
    clientId?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type QuestionSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "name" | "description" | "version" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["questionSet"]>
  export type QuestionSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    questions?: boolean | QuestionSet$questionsArgs<ExtArgs>
    _count?: boolean | QuestionSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type QuestionSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $QuestionSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionSet"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      name: string
      description: string | null
      version: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["questionSet"]>
    composites: {}
  }

  type QuestionSetGetPayload<S extends boolean | null | undefined | QuestionSetDefaultArgs> = $Result.GetResult<Prisma.$QuestionSetPayload, S>

  type QuestionSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionSetCountAggregateInputType | true
    }

  export interface QuestionSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionSet'], meta: { name: 'QuestionSet' } }
    /**
     * Find zero or one QuestionSet that matches the filter.
     * @param {QuestionSetFindUniqueArgs} args - Arguments to find a QuestionSet
     * @example
     * // Get one QuestionSet
     * const questionSet = await prisma.questionSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionSetFindUniqueArgs>(args: SelectSubset<T, QuestionSetFindUniqueArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionSetFindUniqueOrThrowArgs} args - Arguments to find a QuestionSet
     * @example
     * // Get one QuestionSet
     * const questionSet = await prisma.questionSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionSetFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetFindFirstArgs} args - Arguments to find a QuestionSet
     * @example
     * // Get one QuestionSet
     * const questionSet = await prisma.questionSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionSetFindFirstArgs>(args?: SelectSubset<T, QuestionSetFindFirstArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetFindFirstOrThrowArgs} args - Arguments to find a QuestionSet
     * @example
     * // Get one QuestionSet
     * const questionSet = await prisma.questionSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionSetFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionSets
     * const questionSets = await prisma.questionSet.findMany()
     * 
     * // Get first 10 QuestionSets
     * const questionSets = await prisma.questionSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionSetWithIdOnly = await prisma.questionSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionSetFindManyArgs>(args?: SelectSubset<T, QuestionSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionSet.
     * @param {QuestionSetCreateArgs} args - Arguments to create a QuestionSet.
     * @example
     * // Create one QuestionSet
     * const QuestionSet = await prisma.questionSet.create({
     *   data: {
     *     // ... data to create a QuestionSet
     *   }
     * })
     * 
     */
    create<T extends QuestionSetCreateArgs>(args: SelectSubset<T, QuestionSetCreateArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionSets.
     * @param {QuestionSetCreateManyArgs} args - Arguments to create many QuestionSets.
     * @example
     * // Create many QuestionSets
     * const questionSet = await prisma.questionSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionSetCreateManyArgs>(args?: SelectSubset<T, QuestionSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionSets and returns the data saved in the database.
     * @param {QuestionSetCreateManyAndReturnArgs} args - Arguments to create many QuestionSets.
     * @example
     * // Create many QuestionSets
     * const questionSet = await prisma.questionSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionSets and only return the `id`
     * const questionSetWithIdOnly = await prisma.questionSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionSetCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionSet.
     * @param {QuestionSetDeleteArgs} args - Arguments to delete one QuestionSet.
     * @example
     * // Delete one QuestionSet
     * const QuestionSet = await prisma.questionSet.delete({
     *   where: {
     *     // ... filter to delete one QuestionSet
     *   }
     * })
     * 
     */
    delete<T extends QuestionSetDeleteArgs>(args: SelectSubset<T, QuestionSetDeleteArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionSet.
     * @param {QuestionSetUpdateArgs} args - Arguments to update one QuestionSet.
     * @example
     * // Update one QuestionSet
     * const questionSet = await prisma.questionSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionSetUpdateArgs>(args: SelectSubset<T, QuestionSetUpdateArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionSets.
     * @param {QuestionSetDeleteManyArgs} args - Arguments to filter QuestionSets to delete.
     * @example
     * // Delete a few QuestionSets
     * const { count } = await prisma.questionSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionSetDeleteManyArgs>(args?: SelectSubset<T, QuestionSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionSets
     * const questionSet = await prisma.questionSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionSetUpdateManyArgs>(args: SelectSubset<T, QuestionSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionSets and returns the data updated in the database.
     * @param {QuestionSetUpdateManyAndReturnArgs} args - Arguments to update many QuestionSets.
     * @example
     * // Update many QuestionSets
     * const questionSet = await prisma.questionSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionSets and only return the `id`
     * const questionSetWithIdOnly = await prisma.questionSet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionSetUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionSet.
     * @param {QuestionSetUpsertArgs} args - Arguments to update or create a QuestionSet.
     * @example
     * // Update or create a QuestionSet
     * const questionSet = await prisma.questionSet.upsert({
     *   create: {
     *     // ... data to create a QuestionSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionSet we want to update
     *   }
     * })
     */
    upsert<T extends QuestionSetUpsertArgs>(args: SelectSubset<T, QuestionSetUpsertArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetCountArgs} args - Arguments to filter QuestionSets to count.
     * @example
     * // Count the number of QuestionSets
     * const count = await prisma.questionSet.count({
     *   where: {
     *     // ... the filter for the QuestionSets we want to count
     *   }
     * })
    **/
    count<T extends QuestionSetCountArgs>(
      args?: Subset<T, QuestionSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionSetAggregateArgs>(args: Subset<T, QuestionSetAggregateArgs>): Prisma.PrismaPromise<GetQuestionSetAggregateType<T>>

    /**
     * Group by QuestionSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionSetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionSetGroupByArgs['orderBy'] }
        : { orderBy?: QuestionSetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionSet model
   */
  readonly fields: QuestionSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends QuestionSet$questionsArgs<ExtArgs> = {}>(args?: Subset<T, QuestionSet$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionSet model
   */
  interface QuestionSetFieldRefs {
    readonly id: FieldRef<"QuestionSet", 'String'>
    readonly clientId: FieldRef<"QuestionSet", 'String'>
    readonly name: FieldRef<"QuestionSet", 'String'>
    readonly description: FieldRef<"QuestionSet", 'String'>
    readonly version: FieldRef<"QuestionSet", 'Int'>
    readonly isActive: FieldRef<"QuestionSet", 'Boolean'>
    readonly createdAt: FieldRef<"QuestionSet", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionSet", 'DateTime'>
    readonly deletedAt: FieldRef<"QuestionSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionSet findUnique
   */
  export type QuestionSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSet to fetch.
     */
    where: QuestionSetWhereUniqueInput
  }

  /**
   * QuestionSet findUniqueOrThrow
   */
  export type QuestionSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSet to fetch.
     */
    where: QuestionSetWhereUniqueInput
  }

  /**
   * QuestionSet findFirst
   */
  export type QuestionSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSet to fetch.
     */
    where?: QuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSets to fetch.
     */
    orderBy?: QuestionSetOrderByWithRelationInput | QuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionSets.
     */
    cursor?: QuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionSets.
     */
    distinct?: QuestionSetScalarFieldEnum | QuestionSetScalarFieldEnum[]
  }

  /**
   * QuestionSet findFirstOrThrow
   */
  export type QuestionSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSet to fetch.
     */
    where?: QuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSets to fetch.
     */
    orderBy?: QuestionSetOrderByWithRelationInput | QuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionSets.
     */
    cursor?: QuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionSets.
     */
    distinct?: QuestionSetScalarFieldEnum | QuestionSetScalarFieldEnum[]
  }

  /**
   * QuestionSet findMany
   */
  export type QuestionSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter, which QuestionSets to fetch.
     */
    where?: QuestionSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionSets to fetch.
     */
    orderBy?: QuestionSetOrderByWithRelationInput | QuestionSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionSets.
     */
    cursor?: QuestionSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionSets.
     */
    skip?: number
    distinct?: QuestionSetScalarFieldEnum | QuestionSetScalarFieldEnum[]
  }

  /**
   * QuestionSet create
   */
  export type QuestionSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionSet.
     */
    data: XOR<QuestionSetCreateInput, QuestionSetUncheckedCreateInput>
  }

  /**
   * QuestionSet createMany
   */
  export type QuestionSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionSets.
     */
    data: QuestionSetCreateManyInput | QuestionSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionSet createManyAndReturn
   */
  export type QuestionSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionSets.
     */
    data: QuestionSetCreateManyInput | QuestionSetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionSet update
   */
  export type QuestionSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionSet.
     */
    data: XOR<QuestionSetUpdateInput, QuestionSetUncheckedUpdateInput>
    /**
     * Choose, which QuestionSet to update.
     */
    where: QuestionSetWhereUniqueInput
  }

  /**
   * QuestionSet updateMany
   */
  export type QuestionSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionSets.
     */
    data: XOR<QuestionSetUpdateManyMutationInput, QuestionSetUncheckedUpdateManyInput>
    /**
     * Filter which QuestionSets to update
     */
    where?: QuestionSetWhereInput
    /**
     * Limit how many QuestionSets to update.
     */
    limit?: number
  }

  /**
   * QuestionSet updateManyAndReturn
   */
  export type QuestionSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * The data used to update QuestionSets.
     */
    data: XOR<QuestionSetUpdateManyMutationInput, QuestionSetUncheckedUpdateManyInput>
    /**
     * Filter which QuestionSets to update
     */
    where?: QuestionSetWhereInput
    /**
     * Limit how many QuestionSets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionSet upsert
   */
  export type QuestionSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionSet to update in case it exists.
     */
    where: QuestionSetWhereUniqueInput
    /**
     * In case the QuestionSet found by the `where` argument doesn't exist, create a new QuestionSet with this data.
     */
    create: XOR<QuestionSetCreateInput, QuestionSetUncheckedCreateInput>
    /**
     * In case the QuestionSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionSetUpdateInput, QuestionSetUncheckedUpdateInput>
  }

  /**
   * QuestionSet delete
   */
  export type QuestionSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
    /**
     * Filter which QuestionSet to delete.
     */
    where: QuestionSetWhereUniqueInput
  }

  /**
   * QuestionSet deleteMany
   */
  export type QuestionSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionSets to delete
     */
    where?: QuestionSetWhereInput
    /**
     * Limit how many QuestionSets to delete.
     */
    limit?: number
  }

  /**
   * QuestionSet.questions
   */
  export type QuestionSet$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * QuestionSet without action
   */
  export type QuestionSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionSet
     */
    select?: QuestionSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionSet
     */
    omit?: QuestionSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionSetInclude<ExtArgs> | null
  }


  /**
   * Model BaseQuestion
   */

  export type AggregateBaseQuestion = {
    _count: BaseQuestionCountAggregateOutputType | null
    _min: BaseQuestionMinAggregateOutputType | null
    _max: BaseQuestionMaxAggregateOutputType | null
  }

  export type BaseQuestionMinAggregateOutputType = {
    id: string | null
    internalCode: string | null
    questionType: $Enums.QuestionType | null
    responseDataType: $Enums.ResponseDataType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseQuestionMaxAggregateOutputType = {
    id: string | null
    internalCode: string | null
    questionType: $Enums.QuestionType | null
    responseDataType: $Enums.ResponseDataType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseQuestionCountAggregateOutputType = {
    id: number
    internalCode: number
    questionType: number
    responseDataType: number
    validationRules: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BaseQuestionMinAggregateInputType = {
    id?: true
    internalCode?: true
    questionType?: true
    responseDataType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseQuestionMaxAggregateInputType = {
    id?: true
    internalCode?: true
    questionType?: true
    responseDataType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseQuestionCountAggregateInputType = {
    id?: true
    internalCode?: true
    questionType?: true
    responseDataType?: true
    validationRules?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BaseQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseQuestion to aggregate.
     */
    where?: BaseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseQuestions to fetch.
     */
    orderBy?: BaseQuestionOrderByWithRelationInput | BaseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BaseQuestions
    **/
    _count?: true | BaseQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseQuestionMaxAggregateInputType
  }

  export type GetBaseQuestionAggregateType<T extends BaseQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateBaseQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaseQuestion[P]>
      : GetScalarType<T[P], AggregateBaseQuestion[P]>
  }




  export type BaseQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseQuestionWhereInput
    orderBy?: BaseQuestionOrderByWithAggregationInput | BaseQuestionOrderByWithAggregationInput[]
    by: BaseQuestionScalarFieldEnum[] | BaseQuestionScalarFieldEnum
    having?: BaseQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseQuestionCountAggregateInputType | true
    _min?: BaseQuestionMinAggregateInputType
    _max?: BaseQuestionMaxAggregateInputType
  }

  export type BaseQuestionGroupByOutputType = {
    id: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules: JsonValue
    metadata: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: BaseQuestionCountAggregateOutputType | null
    _min: BaseQuestionMinAggregateOutputType | null
    _max: BaseQuestionMaxAggregateOutputType | null
  }

  type GetBaseQuestionGroupByPayload<T extends BaseQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], BaseQuestionGroupByOutputType[P]>
        }
      >
    >


  export type BaseQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalCode?: boolean
    questionType?: boolean
    responseDataType?: boolean
    validationRules?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | BaseQuestion$questionsArgs<ExtArgs>
    ehrMappings?: boolean | BaseQuestion$ehrMappingsArgs<ExtArgs>
    patientResponses?: boolean | BaseQuestion$patientResponsesArgs<ExtArgs>
    EhrMappingsCache?: boolean | BaseQuestion$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | BaseQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baseQuestion"]>

  export type BaseQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalCode?: boolean
    questionType?: boolean
    responseDataType?: boolean
    validationRules?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["baseQuestion"]>

  export type BaseQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    internalCode?: boolean
    questionType?: boolean
    responseDataType?: boolean
    validationRules?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["baseQuestion"]>

  export type BaseQuestionSelectScalar = {
    id?: boolean
    internalCode?: boolean
    questionType?: boolean
    responseDataType?: boolean
    validationRules?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BaseQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "internalCode" | "questionType" | "responseDataType" | "validationRules" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["baseQuestion"]>
  export type BaseQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | BaseQuestion$questionsArgs<ExtArgs>
    ehrMappings?: boolean | BaseQuestion$ehrMappingsArgs<ExtArgs>
    patientResponses?: boolean | BaseQuestion$patientResponsesArgs<ExtArgs>
    EhrMappingsCache?: boolean | BaseQuestion$EhrMappingsCacheArgs<ExtArgs>
    _count?: boolean | BaseQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BaseQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BaseQuestion"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      ehrMappings: Prisma.$EhrMappingPayload<ExtArgs>[]
      patientResponses: Prisma.$PatientResponsePayload<ExtArgs>[]
      EhrMappingsCache: Prisma.$EhrMappingsCachePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      internalCode: string
      questionType: $Enums.QuestionType
      responseDataType: $Enums.ResponseDataType
      validationRules: Prisma.JsonValue
      metadata: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["baseQuestion"]>
    composites: {}
  }

  type BaseQuestionGetPayload<S extends boolean | null | undefined | BaseQuestionDefaultArgs> = $Result.GetResult<Prisma.$BaseQuestionPayload, S>

  type BaseQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseQuestionCountAggregateInputType | true
    }

  export interface BaseQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BaseQuestion'], meta: { name: 'BaseQuestion' } }
    /**
     * Find zero or one BaseQuestion that matches the filter.
     * @param {BaseQuestionFindUniqueArgs} args - Arguments to find a BaseQuestion
     * @example
     * // Get one BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseQuestionFindUniqueArgs>(args: SelectSubset<T, BaseQuestionFindUniqueArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BaseQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseQuestionFindUniqueOrThrowArgs} args - Arguments to find a BaseQuestion
     * @example
     * // Get one BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionFindFirstArgs} args - Arguments to find a BaseQuestion
     * @example
     * // Get one BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseQuestionFindFirstArgs>(args?: SelectSubset<T, BaseQuestionFindFirstArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BaseQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionFindFirstOrThrowArgs} args - Arguments to find a BaseQuestion
     * @example
     * // Get one BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BaseQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BaseQuestions
     * const baseQuestions = await prisma.baseQuestion.findMany()
     * 
     * // Get first 10 BaseQuestions
     * const baseQuestions = await prisma.baseQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseQuestionWithIdOnly = await prisma.baseQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseQuestionFindManyArgs>(args?: SelectSubset<T, BaseQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BaseQuestion.
     * @param {BaseQuestionCreateArgs} args - Arguments to create a BaseQuestion.
     * @example
     * // Create one BaseQuestion
     * const BaseQuestion = await prisma.baseQuestion.create({
     *   data: {
     *     // ... data to create a BaseQuestion
     *   }
     * })
     * 
     */
    create<T extends BaseQuestionCreateArgs>(args: SelectSubset<T, BaseQuestionCreateArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BaseQuestions.
     * @param {BaseQuestionCreateManyArgs} args - Arguments to create many BaseQuestions.
     * @example
     * // Create many BaseQuestions
     * const baseQuestion = await prisma.baseQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseQuestionCreateManyArgs>(args?: SelectSubset<T, BaseQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BaseQuestions and returns the data saved in the database.
     * @param {BaseQuestionCreateManyAndReturnArgs} args - Arguments to create many BaseQuestions.
     * @example
     * // Create many BaseQuestions
     * const baseQuestion = await prisma.baseQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BaseQuestions and only return the `id`
     * const baseQuestionWithIdOnly = await prisma.baseQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BaseQuestion.
     * @param {BaseQuestionDeleteArgs} args - Arguments to delete one BaseQuestion.
     * @example
     * // Delete one BaseQuestion
     * const BaseQuestion = await prisma.baseQuestion.delete({
     *   where: {
     *     // ... filter to delete one BaseQuestion
     *   }
     * })
     * 
     */
    delete<T extends BaseQuestionDeleteArgs>(args: SelectSubset<T, BaseQuestionDeleteArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BaseQuestion.
     * @param {BaseQuestionUpdateArgs} args - Arguments to update one BaseQuestion.
     * @example
     * // Update one BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseQuestionUpdateArgs>(args: SelectSubset<T, BaseQuestionUpdateArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BaseQuestions.
     * @param {BaseQuestionDeleteManyArgs} args - Arguments to filter BaseQuestions to delete.
     * @example
     * // Delete a few BaseQuestions
     * const { count } = await prisma.baseQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseQuestionDeleteManyArgs>(args?: SelectSubset<T, BaseQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BaseQuestions
     * const baseQuestion = await prisma.baseQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseQuestionUpdateManyArgs>(args: SelectSubset<T, BaseQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BaseQuestions and returns the data updated in the database.
     * @param {BaseQuestionUpdateManyAndReturnArgs} args - Arguments to update many BaseQuestions.
     * @example
     * // Update many BaseQuestions
     * const baseQuestion = await prisma.baseQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BaseQuestions and only return the `id`
     * const baseQuestionWithIdOnly = await prisma.baseQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BaseQuestion.
     * @param {BaseQuestionUpsertArgs} args - Arguments to update or create a BaseQuestion.
     * @example
     * // Update or create a BaseQuestion
     * const baseQuestion = await prisma.baseQuestion.upsert({
     *   create: {
     *     // ... data to create a BaseQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BaseQuestion we want to update
     *   }
     * })
     */
    upsert<T extends BaseQuestionUpsertArgs>(args: SelectSubset<T, BaseQuestionUpsertArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BaseQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionCountArgs} args - Arguments to filter BaseQuestions to count.
     * @example
     * // Count the number of BaseQuestions
     * const count = await prisma.baseQuestion.count({
     *   where: {
     *     // ... the filter for the BaseQuestions we want to count
     *   }
     * })
    **/
    count<T extends BaseQuestionCountArgs>(
      args?: Subset<T, BaseQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BaseQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseQuestionAggregateArgs>(args: Subset<T, BaseQuestionAggregateArgs>): Prisma.PrismaPromise<GetBaseQuestionAggregateType<T>>

    /**
     * Group by BaseQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseQuestionGroupByArgs['orderBy'] }
        : { orderBy?: BaseQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BaseQuestion model
   */
  readonly fields: BaseQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BaseQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends BaseQuestion$questionsArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestion$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ehrMappings<T extends BaseQuestion$ehrMappingsArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestion$ehrMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientResponses<T extends BaseQuestion$patientResponsesArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestion$patientResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EhrMappingsCache<T extends BaseQuestion$EhrMappingsCacheArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestion$EhrMappingsCacheArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BaseQuestion model
   */
  interface BaseQuestionFieldRefs {
    readonly id: FieldRef<"BaseQuestion", 'String'>
    readonly internalCode: FieldRef<"BaseQuestion", 'String'>
    readonly questionType: FieldRef<"BaseQuestion", 'QuestionType'>
    readonly responseDataType: FieldRef<"BaseQuestion", 'ResponseDataType'>
    readonly validationRules: FieldRef<"BaseQuestion", 'Json'>
    readonly metadata: FieldRef<"BaseQuestion", 'Json'>
    readonly createdAt: FieldRef<"BaseQuestion", 'DateTime'>
    readonly updatedAt: FieldRef<"BaseQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BaseQuestion findUnique
   */
  export type BaseQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BaseQuestion to fetch.
     */
    where: BaseQuestionWhereUniqueInput
  }

  /**
   * BaseQuestion findUniqueOrThrow
   */
  export type BaseQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BaseQuestion to fetch.
     */
    where: BaseQuestionWhereUniqueInput
  }

  /**
   * BaseQuestion findFirst
   */
  export type BaseQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BaseQuestion to fetch.
     */
    where?: BaseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseQuestions to fetch.
     */
    orderBy?: BaseQuestionOrderByWithRelationInput | BaseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseQuestions.
     */
    cursor?: BaseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseQuestions.
     */
    distinct?: BaseQuestionScalarFieldEnum | BaseQuestionScalarFieldEnum[]
  }

  /**
   * BaseQuestion findFirstOrThrow
   */
  export type BaseQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BaseQuestion to fetch.
     */
    where?: BaseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseQuestions to fetch.
     */
    orderBy?: BaseQuestionOrderByWithRelationInput | BaseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BaseQuestions.
     */
    cursor?: BaseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BaseQuestions.
     */
    distinct?: BaseQuestionScalarFieldEnum | BaseQuestionScalarFieldEnum[]
  }

  /**
   * BaseQuestion findMany
   */
  export type BaseQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BaseQuestions to fetch.
     */
    where?: BaseQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BaseQuestions to fetch.
     */
    orderBy?: BaseQuestionOrderByWithRelationInput | BaseQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BaseQuestions.
     */
    cursor?: BaseQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BaseQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BaseQuestions.
     */
    skip?: number
    distinct?: BaseQuestionScalarFieldEnum | BaseQuestionScalarFieldEnum[]
  }

  /**
   * BaseQuestion create
   */
  export type BaseQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a BaseQuestion.
     */
    data: XOR<BaseQuestionCreateInput, BaseQuestionUncheckedCreateInput>
  }

  /**
   * BaseQuestion createMany
   */
  export type BaseQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BaseQuestions.
     */
    data: BaseQuestionCreateManyInput | BaseQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseQuestion createManyAndReturn
   */
  export type BaseQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many BaseQuestions.
     */
    data: BaseQuestionCreateManyInput | BaseQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BaseQuestion update
   */
  export type BaseQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a BaseQuestion.
     */
    data: XOR<BaseQuestionUpdateInput, BaseQuestionUncheckedUpdateInput>
    /**
     * Choose, which BaseQuestion to update.
     */
    where: BaseQuestionWhereUniqueInput
  }

  /**
   * BaseQuestion updateMany
   */
  export type BaseQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BaseQuestions.
     */
    data: XOR<BaseQuestionUpdateManyMutationInput, BaseQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BaseQuestions to update
     */
    where?: BaseQuestionWhereInput
    /**
     * Limit how many BaseQuestions to update.
     */
    limit?: number
  }

  /**
   * BaseQuestion updateManyAndReturn
   */
  export type BaseQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * The data used to update BaseQuestions.
     */
    data: XOR<BaseQuestionUpdateManyMutationInput, BaseQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BaseQuestions to update
     */
    where?: BaseQuestionWhereInput
    /**
     * Limit how many BaseQuestions to update.
     */
    limit?: number
  }

  /**
   * BaseQuestion upsert
   */
  export type BaseQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the BaseQuestion to update in case it exists.
     */
    where: BaseQuestionWhereUniqueInput
    /**
     * In case the BaseQuestion found by the `where` argument doesn't exist, create a new BaseQuestion with this data.
     */
    create: XOR<BaseQuestionCreateInput, BaseQuestionUncheckedCreateInput>
    /**
     * In case the BaseQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseQuestionUpdateInput, BaseQuestionUncheckedUpdateInput>
  }

  /**
   * BaseQuestion delete
   */
  export type BaseQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
    /**
     * Filter which BaseQuestion to delete.
     */
    where: BaseQuestionWhereUniqueInput
  }

  /**
   * BaseQuestion deleteMany
   */
  export type BaseQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BaseQuestions to delete
     */
    where?: BaseQuestionWhereInput
    /**
     * Limit how many BaseQuestions to delete.
     */
    limit?: number
  }

  /**
   * BaseQuestion.questions
   */
  export type BaseQuestion$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * BaseQuestion.ehrMappings
   */
  export type BaseQuestion$ehrMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    where?: EhrMappingWhereInput
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    cursor?: EhrMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrMappingScalarFieldEnum | EhrMappingScalarFieldEnum[]
  }

  /**
   * BaseQuestion.patientResponses
   */
  export type BaseQuestion$patientResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    where?: PatientResponseWhereInput
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    cursor?: PatientResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientResponseScalarFieldEnum | PatientResponseScalarFieldEnum[]
  }

  /**
   * BaseQuestion.EhrMappingsCache
   */
  export type BaseQuestion$EhrMappingsCacheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    where?: EhrMappingsCacheWhereInput
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    cursor?: EhrMappingsCacheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * BaseQuestion without action
   */
  export type BaseQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseQuestion
     */
    select?: BaseQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BaseQuestion
     */
    omit?: BaseQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseQuestionInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    baseQuestionId: string | null
    questionSetId: string | null
    languageCode: string | null
    questionText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    baseQuestionId: string | null
    questionSetId: string | null
    languageCode: string | null
    questionText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    baseQuestionId: number
    questionSetId: number
    languageCode: number
    questionText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    baseQuestionId?: true
    questionSetId?: true
    languageCode?: true
    questionText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    baseQuestionId?: true
    questionSetId?: true
    languageCode?: true
    questionText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    baseQuestionId?: true
    questionSetId?: true
    languageCode?: true
    questionText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    baseQuestionId: string
    questionSetId: string
    languageCode: string
    questionText: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    questionSetId?: boolean
    languageCode?: boolean
    questionText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    questionSetId?: boolean
    languageCode?: boolean
    questionText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    questionSetId?: boolean
    languageCode?: boolean
    questionText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    baseQuestionId?: boolean
    questionSetId?: boolean
    languageCode?: boolean
    questionText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseQuestionId" | "questionSetId" | "languageCode" | "questionText" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    questionSet?: boolean | QuestionSetDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      baseQuestion: Prisma.$BaseQuestionPayload<ExtArgs>
      questionSet: Prisma.$QuestionSetPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      baseQuestionId: string
      questionSetId: string
      languageCode: string
      questionText: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseQuestion<T extends BaseQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestionDefaultArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionSet<T extends QuestionSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionSetDefaultArgs<ExtArgs>>): Prisma__QuestionSetClient<$Result.GetResult<Prisma.$QuestionSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly baseQuestionId: FieldRef<"Question", 'String'>
    readonly questionSetId: FieldRef<"Question", 'String'>
    readonly languageCode: FieldRef<"Question", 'String'>
    readonly questionText: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model EhrMapping
   */

  export type AggregateEhrMapping = {
    _count: EhrMappingCountAggregateOutputType | null
    _min: EhrMappingMinAggregateOutputType | null
    _max: EhrMappingMaxAggregateOutputType | null
  }

  export type EhrMappingMinAggregateOutputType = {
    id: string | null
    baseQuestionId: string | null
    ehrProviderCode: string | null
    ehrFieldPath: string | null
    ehrFieldType: string | null
    transformationRule: string | null
    ehrEndpoint: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrMappingMaxAggregateOutputType = {
    id: string | null
    baseQuestionId: string | null
    ehrProviderCode: string | null
    ehrFieldPath: string | null
    ehrFieldType: string | null
    transformationRule: string | null
    ehrEndpoint: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrMappingCountAggregateOutputType = {
    id: number
    baseQuestionId: number
    ehrProviderCode: number
    ehrFieldPath: number
    ehrFieldType: number
    transformationRule: number
    ehrEndpoint: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EhrMappingMinAggregateInputType = {
    id?: true
    baseQuestionId?: true
    ehrProviderCode?: true
    ehrFieldPath?: true
    ehrFieldType?: true
    transformationRule?: true
    ehrEndpoint?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrMappingMaxAggregateInputType = {
    id?: true
    baseQuestionId?: true
    ehrProviderCode?: true
    ehrFieldPath?: true
    ehrFieldType?: true
    transformationRule?: true
    ehrEndpoint?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrMappingCountAggregateInputType = {
    id?: true
    baseQuestionId?: true
    ehrProviderCode?: true
    ehrFieldPath?: true
    ehrFieldType?: true
    transformationRule?: true
    ehrEndpoint?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EhrMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrMapping to aggregate.
     */
    where?: EhrMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappings to fetch.
     */
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EhrMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EhrMappings
    **/
    _count?: true | EhrMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EhrMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EhrMappingMaxAggregateInputType
  }

  export type GetEhrMappingAggregateType<T extends EhrMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateEhrMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEhrMapping[P]>
      : GetScalarType<T[P], AggregateEhrMapping[P]>
  }




  export type EhrMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingWhereInput
    orderBy?: EhrMappingOrderByWithAggregationInput | EhrMappingOrderByWithAggregationInput[]
    by: EhrMappingScalarFieldEnum[] | EhrMappingScalarFieldEnum
    having?: EhrMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EhrMappingCountAggregateInputType | true
    _min?: EhrMappingMinAggregateInputType
    _max?: EhrMappingMaxAggregateInputType
  }

  export type EhrMappingGroupByOutputType = {
    id: string
    baseQuestionId: string
    ehrProviderCode: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule: string | null
    ehrEndpoint: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: EhrMappingCountAggregateOutputType | null
    _min: EhrMappingMinAggregateOutputType | null
    _max: EhrMappingMaxAggregateOutputType | null
  }

  type GetEhrMappingGroupByPayload<T extends EhrMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EhrMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EhrMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EhrMappingGroupByOutputType[P]>
            : GetScalarType<T[P], EhrMappingGroupByOutputType[P]>
        }
      >
    >


  export type EhrMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    ehrProviderCode?: boolean
    ehrFieldPath?: boolean
    ehrFieldType?: boolean
    transformationRule?: boolean
    ehrEndpoint?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMapping"]>

  export type EhrMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    ehrProviderCode?: boolean
    ehrFieldPath?: boolean
    ehrFieldType?: boolean
    transformationRule?: boolean
    ehrEndpoint?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMapping"]>

  export type EhrMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseQuestionId?: boolean
    ehrProviderCode?: boolean
    ehrFieldPath?: boolean
    ehrFieldType?: boolean
    transformationRule?: boolean
    ehrEndpoint?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMapping"]>

  export type EhrMappingSelectScalar = {
    id?: boolean
    baseQuestionId?: boolean
    ehrProviderCode?: boolean
    ehrFieldPath?: boolean
    ehrFieldType?: boolean
    transformationRule?: boolean
    ehrEndpoint?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EhrMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseQuestionId" | "ehrProviderCode" | "ehrFieldPath" | "ehrFieldType" | "transformationRule" | "ehrEndpoint" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["ehrMapping"]>
  export type EhrMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }
  export type EhrMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }
  export type EhrMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }

  export type $EhrMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EhrMapping"
    objects: {
      baseQuestion: Prisma.$BaseQuestionPayload<ExtArgs>
      ehrProvider: Prisma.$EhrProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      baseQuestionId: string
      ehrProviderCode: string
      ehrFieldPath: string
      ehrFieldType: string
      transformationRule: string | null
      ehrEndpoint: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ehrMapping"]>
    composites: {}
  }

  type EhrMappingGetPayload<S extends boolean | null | undefined | EhrMappingDefaultArgs> = $Result.GetResult<Prisma.$EhrMappingPayload, S>

  type EhrMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EhrMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EhrMappingCountAggregateInputType | true
    }

  export interface EhrMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EhrMapping'], meta: { name: 'EhrMapping' } }
    /**
     * Find zero or one EhrMapping that matches the filter.
     * @param {EhrMappingFindUniqueArgs} args - Arguments to find a EhrMapping
     * @example
     * // Get one EhrMapping
     * const ehrMapping = await prisma.ehrMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EhrMappingFindUniqueArgs>(args: SelectSubset<T, EhrMappingFindUniqueArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EhrMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EhrMappingFindUniqueOrThrowArgs} args - Arguments to find a EhrMapping
     * @example
     * // Get one EhrMapping
     * const ehrMapping = await prisma.ehrMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EhrMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, EhrMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingFindFirstArgs} args - Arguments to find a EhrMapping
     * @example
     * // Get one EhrMapping
     * const ehrMapping = await prisma.ehrMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EhrMappingFindFirstArgs>(args?: SelectSubset<T, EhrMappingFindFirstArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingFindFirstOrThrowArgs} args - Arguments to find a EhrMapping
     * @example
     * // Get one EhrMapping
     * const ehrMapping = await prisma.ehrMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EhrMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, EhrMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EhrMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EhrMappings
     * const ehrMappings = await prisma.ehrMapping.findMany()
     * 
     * // Get first 10 EhrMappings
     * const ehrMappings = await prisma.ehrMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ehrMappingWithIdOnly = await prisma.ehrMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EhrMappingFindManyArgs>(args?: SelectSubset<T, EhrMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EhrMapping.
     * @param {EhrMappingCreateArgs} args - Arguments to create a EhrMapping.
     * @example
     * // Create one EhrMapping
     * const EhrMapping = await prisma.ehrMapping.create({
     *   data: {
     *     // ... data to create a EhrMapping
     *   }
     * })
     * 
     */
    create<T extends EhrMappingCreateArgs>(args: SelectSubset<T, EhrMappingCreateArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EhrMappings.
     * @param {EhrMappingCreateManyArgs} args - Arguments to create many EhrMappings.
     * @example
     * // Create many EhrMappings
     * const ehrMapping = await prisma.ehrMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EhrMappingCreateManyArgs>(args?: SelectSubset<T, EhrMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EhrMappings and returns the data saved in the database.
     * @param {EhrMappingCreateManyAndReturnArgs} args - Arguments to create many EhrMappings.
     * @example
     * // Create many EhrMappings
     * const ehrMapping = await prisma.ehrMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EhrMappings and only return the `id`
     * const ehrMappingWithIdOnly = await prisma.ehrMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EhrMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, EhrMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EhrMapping.
     * @param {EhrMappingDeleteArgs} args - Arguments to delete one EhrMapping.
     * @example
     * // Delete one EhrMapping
     * const EhrMapping = await prisma.ehrMapping.delete({
     *   where: {
     *     // ... filter to delete one EhrMapping
     *   }
     * })
     * 
     */
    delete<T extends EhrMappingDeleteArgs>(args: SelectSubset<T, EhrMappingDeleteArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EhrMapping.
     * @param {EhrMappingUpdateArgs} args - Arguments to update one EhrMapping.
     * @example
     * // Update one EhrMapping
     * const ehrMapping = await prisma.ehrMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EhrMappingUpdateArgs>(args: SelectSubset<T, EhrMappingUpdateArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EhrMappings.
     * @param {EhrMappingDeleteManyArgs} args - Arguments to filter EhrMappings to delete.
     * @example
     * // Delete a few EhrMappings
     * const { count } = await prisma.ehrMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EhrMappingDeleteManyArgs>(args?: SelectSubset<T, EhrMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EhrMappings
     * const ehrMapping = await prisma.ehrMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EhrMappingUpdateManyArgs>(args: SelectSubset<T, EhrMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrMappings and returns the data updated in the database.
     * @param {EhrMappingUpdateManyAndReturnArgs} args - Arguments to update many EhrMappings.
     * @example
     * // Update many EhrMappings
     * const ehrMapping = await prisma.ehrMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EhrMappings and only return the `id`
     * const ehrMappingWithIdOnly = await prisma.ehrMapping.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EhrMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, EhrMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EhrMapping.
     * @param {EhrMappingUpsertArgs} args - Arguments to update or create a EhrMapping.
     * @example
     * // Update or create a EhrMapping
     * const ehrMapping = await prisma.ehrMapping.upsert({
     *   create: {
     *     // ... data to create a EhrMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EhrMapping we want to update
     *   }
     * })
     */
    upsert<T extends EhrMappingUpsertArgs>(args: SelectSubset<T, EhrMappingUpsertArgs<ExtArgs>>): Prisma__EhrMappingClient<$Result.GetResult<Prisma.$EhrMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EhrMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingCountArgs} args - Arguments to filter EhrMappings to count.
     * @example
     * // Count the number of EhrMappings
     * const count = await prisma.ehrMapping.count({
     *   where: {
     *     // ... the filter for the EhrMappings we want to count
     *   }
     * })
    **/
    count<T extends EhrMappingCountArgs>(
      args?: Subset<T, EhrMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EhrMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EhrMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EhrMappingAggregateArgs>(args: Subset<T, EhrMappingAggregateArgs>): Prisma.PrismaPromise<GetEhrMappingAggregateType<T>>

    /**
     * Group by EhrMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EhrMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EhrMappingGroupByArgs['orderBy'] }
        : { orderBy?: EhrMappingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EhrMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEhrMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EhrMapping model
   */
  readonly fields: EhrMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EhrMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EhrMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baseQuestion<T extends BaseQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestionDefaultArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ehrProvider<T extends EhrProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EhrProviderDefaultArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EhrMapping model
   */
  interface EhrMappingFieldRefs {
    readonly id: FieldRef<"EhrMapping", 'String'>
    readonly baseQuestionId: FieldRef<"EhrMapping", 'String'>
    readonly ehrProviderCode: FieldRef<"EhrMapping", 'String'>
    readonly ehrFieldPath: FieldRef<"EhrMapping", 'String'>
    readonly ehrFieldType: FieldRef<"EhrMapping", 'String'>
    readonly transformationRule: FieldRef<"EhrMapping", 'String'>
    readonly ehrEndpoint: FieldRef<"EhrMapping", 'String'>
    readonly isActive: FieldRef<"EhrMapping", 'Boolean'>
    readonly createdAt: FieldRef<"EhrMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"EhrMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EhrMapping findUnique
   */
  export type EhrMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter, which EhrMapping to fetch.
     */
    where: EhrMappingWhereUniqueInput
  }

  /**
   * EhrMapping findUniqueOrThrow
   */
  export type EhrMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter, which EhrMapping to fetch.
     */
    where: EhrMappingWhereUniqueInput
  }

  /**
   * EhrMapping findFirst
   */
  export type EhrMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter, which EhrMapping to fetch.
     */
    where?: EhrMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappings to fetch.
     */
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrMappings.
     */
    cursor?: EhrMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrMappings.
     */
    distinct?: EhrMappingScalarFieldEnum | EhrMappingScalarFieldEnum[]
  }

  /**
   * EhrMapping findFirstOrThrow
   */
  export type EhrMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter, which EhrMapping to fetch.
     */
    where?: EhrMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappings to fetch.
     */
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrMappings.
     */
    cursor?: EhrMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrMappings.
     */
    distinct?: EhrMappingScalarFieldEnum | EhrMappingScalarFieldEnum[]
  }

  /**
   * EhrMapping findMany
   */
  export type EhrMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappings to fetch.
     */
    where?: EhrMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappings to fetch.
     */
    orderBy?: EhrMappingOrderByWithRelationInput | EhrMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EhrMappings.
     */
    cursor?: EhrMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappings.
     */
    skip?: number
    distinct?: EhrMappingScalarFieldEnum | EhrMappingScalarFieldEnum[]
  }

  /**
   * EhrMapping create
   */
  export type EhrMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a EhrMapping.
     */
    data: XOR<EhrMappingCreateInput, EhrMappingUncheckedCreateInput>
  }

  /**
   * EhrMapping createMany
   */
  export type EhrMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EhrMappings.
     */
    data: EhrMappingCreateManyInput | EhrMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EhrMapping createManyAndReturn
   */
  export type EhrMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * The data used to create many EhrMappings.
     */
    data: EhrMappingCreateManyInput | EhrMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrMapping update
   */
  export type EhrMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a EhrMapping.
     */
    data: XOR<EhrMappingUpdateInput, EhrMappingUncheckedUpdateInput>
    /**
     * Choose, which EhrMapping to update.
     */
    where: EhrMappingWhereUniqueInput
  }

  /**
   * EhrMapping updateMany
   */
  export type EhrMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EhrMappings.
     */
    data: XOR<EhrMappingUpdateManyMutationInput, EhrMappingUncheckedUpdateManyInput>
    /**
     * Filter which EhrMappings to update
     */
    where?: EhrMappingWhereInput
    /**
     * Limit how many EhrMappings to update.
     */
    limit?: number
  }

  /**
   * EhrMapping updateManyAndReturn
   */
  export type EhrMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * The data used to update EhrMappings.
     */
    data: XOR<EhrMappingUpdateManyMutationInput, EhrMappingUncheckedUpdateManyInput>
    /**
     * Filter which EhrMappings to update
     */
    where?: EhrMappingWhereInput
    /**
     * Limit how many EhrMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrMapping upsert
   */
  export type EhrMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the EhrMapping to update in case it exists.
     */
    where: EhrMappingWhereUniqueInput
    /**
     * In case the EhrMapping found by the `where` argument doesn't exist, create a new EhrMapping with this data.
     */
    create: XOR<EhrMappingCreateInput, EhrMappingUncheckedCreateInput>
    /**
     * In case the EhrMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EhrMappingUpdateInput, EhrMappingUncheckedUpdateInput>
  }

  /**
   * EhrMapping delete
   */
  export type EhrMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
    /**
     * Filter which EhrMapping to delete.
     */
    where: EhrMappingWhereUniqueInput
  }

  /**
   * EhrMapping deleteMany
   */
  export type EhrMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrMappings to delete
     */
    where?: EhrMappingWhereInput
    /**
     * Limit how many EhrMappings to delete.
     */
    limit?: number
  }

  /**
   * EhrMapping without action
   */
  export type EhrMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMapping
     */
    select?: EhrMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMapping
     */
    omit?: EhrMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    externalId: string | null
    preferredLanguage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    externalId: string | null
    preferredLanguage: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    clientId: number
    externalId: number
    basicInfo: number
    preferredLanguage: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    clientId?: true
    externalId?: true
    preferredLanguage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    clientId?: true
    externalId?: true
    preferredLanguage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    clientId?: true
    externalId?: true
    basicInfo?: true
    preferredLanguage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    clientId: string
    externalId: string | null
    basicInfo: JsonValue
    preferredLanguage: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    externalId?: boolean
    basicInfo?: boolean
    preferredLanguage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
    responses?: boolean | Patient$responsesArgs<ExtArgs>
    syncLogs?: boolean | Patient$syncLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    externalId?: boolean
    basicInfo?: boolean
    preferredLanguage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    externalId?: boolean
    basicInfo?: boolean
    preferredLanguage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    clientId?: boolean
    externalId?: boolean
    basicInfo?: boolean
    preferredLanguage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "externalId" | "basicInfo" | "preferredLanguage" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
    responses?: boolean | Patient$responsesArgs<ExtArgs>
    syncLogs?: boolean | Patient$syncLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    language?: boolean | Patient$languageArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs> | null
      responses: Prisma.$PatientResponsePayload<ExtArgs>[]
      syncLogs: Prisma.$EhrSyncLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      externalId: string | null
      basicInfo: Prisma.JsonValue
      preferredLanguage: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends Patient$languageArgs<ExtArgs> = {}>(args?: Subset<T, Patient$languageArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    responses<T extends Patient$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Patient$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    syncLogs<T extends Patient$syncLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$syncLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly clientId: FieldRef<"Patient", 'String'>
    readonly externalId: FieldRef<"Patient", 'String'>
    readonly basicInfo: FieldRef<"Patient", 'Json'>
    readonly preferredLanguage: FieldRef<"Patient", 'String'>
    readonly isActive: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
    readonly deletedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.language
   */
  export type Patient$languageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
  }

  /**
   * Patient.responses
   */
  export type Patient$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    where?: PatientResponseWhereInput
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    cursor?: PatientResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientResponseScalarFieldEnum | PatientResponseScalarFieldEnum[]
  }

  /**
   * Patient.syncLogs
   */
  export type Patient$syncLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    where?: EhrSyncLogWhereInput
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    cursor?: EhrSyncLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model PatientResponse
   */

  export type AggregatePatientResponse = {
    _count: PatientResponseCountAggregateOutputType | null
    _min: PatientResponseMinAggregateOutputType | null
    _max: PatientResponseMaxAggregateOutputType | null
  }

  export type PatientResponseMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    baseQuestionId: string | null
    response: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientResponseMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    baseQuestionId: string | null
    response: string | null
    sessionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientResponseCountAggregateOutputType = {
    id: number
    patientId: number
    baseQuestionId: number
    response: number
    responseMeta: number
    sessionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientResponseMinAggregateInputType = {
    id?: true
    patientId?: true
    baseQuestionId?: true
    response?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientResponseMaxAggregateInputType = {
    id?: true
    patientId?: true
    baseQuestionId?: true
    response?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientResponseCountAggregateInputType = {
    id?: true
    patientId?: true
    baseQuestionId?: true
    response?: true
    responseMeta?: true
    sessionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientResponse to aggregate.
     */
    where?: PatientResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientResponses to fetch.
     */
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientResponses
    **/
    _count?: true | PatientResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientResponseMaxAggregateInputType
  }

  export type GetPatientResponseAggregateType<T extends PatientResponseAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientResponse[P]>
      : GetScalarType<T[P], AggregatePatientResponse[P]>
  }




  export type PatientResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientResponseWhereInput
    orderBy?: PatientResponseOrderByWithAggregationInput | PatientResponseOrderByWithAggregationInput[]
    by: PatientResponseScalarFieldEnum[] | PatientResponseScalarFieldEnum
    having?: PatientResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientResponseCountAggregateInputType | true
    _min?: PatientResponseMinAggregateInputType
    _max?: PatientResponseMaxAggregateInputType
  }

  export type PatientResponseGroupByOutputType = {
    id: string
    patientId: string
    baseQuestionId: string
    response: string
    responseMeta: JsonValue
    sessionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientResponseCountAggregateOutputType | null
    _min: PatientResponseMinAggregateOutputType | null
    _max: PatientResponseMaxAggregateOutputType | null
  }

  type GetPatientResponseGroupByPayload<T extends PatientResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientResponseGroupByOutputType[P]>
            : GetScalarType<T[P], PatientResponseGroupByOutputType[P]>
        }
      >
    >


  export type PatientResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    baseQuestionId?: boolean
    response?: boolean
    responseMeta?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientResponse"]>

  export type PatientResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    baseQuestionId?: boolean
    response?: boolean
    responseMeta?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientResponse"]>

  export type PatientResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    baseQuestionId?: boolean
    response?: boolean
    responseMeta?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientResponse"]>

  export type PatientResponseSelectScalar = {
    id?: boolean
    patientId?: boolean
    baseQuestionId?: boolean
    response?: boolean
    responseMeta?: boolean
    sessionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "baseQuestionId" | "response" | "responseMeta" | "sessionId" | "createdAt" | "updatedAt", ExtArgs["result"]["patientResponse"]>
  export type PatientResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }
  export type PatientResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }
  export type PatientResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }

  export type $PatientResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientResponse"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      baseQuestion: Prisma.$BaseQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      baseQuestionId: string
      response: string
      responseMeta: Prisma.JsonValue
      sessionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientResponse"]>
    composites: {}
  }

  type PatientResponseGetPayload<S extends boolean | null | undefined | PatientResponseDefaultArgs> = $Result.GetResult<Prisma.$PatientResponsePayload, S>

  type PatientResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientResponseCountAggregateInputType | true
    }

  export interface PatientResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientResponse'], meta: { name: 'PatientResponse' } }
    /**
     * Find zero or one PatientResponse that matches the filter.
     * @param {PatientResponseFindUniqueArgs} args - Arguments to find a PatientResponse
     * @example
     * // Get one PatientResponse
     * const patientResponse = await prisma.patientResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientResponseFindUniqueArgs>(args: SelectSubset<T, PatientResponseFindUniqueArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientResponseFindUniqueOrThrowArgs} args - Arguments to find a PatientResponse
     * @example
     * // Get one PatientResponse
     * const patientResponse = await prisma.patientResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseFindFirstArgs} args - Arguments to find a PatientResponse
     * @example
     * // Get one PatientResponse
     * const patientResponse = await prisma.patientResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientResponseFindFirstArgs>(args?: SelectSubset<T, PatientResponseFindFirstArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseFindFirstOrThrowArgs} args - Arguments to find a PatientResponse
     * @example
     * // Get one PatientResponse
     * const patientResponse = await prisma.patientResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientResponses
     * const patientResponses = await prisma.patientResponse.findMany()
     * 
     * // Get first 10 PatientResponses
     * const patientResponses = await prisma.patientResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientResponseWithIdOnly = await prisma.patientResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientResponseFindManyArgs>(args?: SelectSubset<T, PatientResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientResponse.
     * @param {PatientResponseCreateArgs} args - Arguments to create a PatientResponse.
     * @example
     * // Create one PatientResponse
     * const PatientResponse = await prisma.patientResponse.create({
     *   data: {
     *     // ... data to create a PatientResponse
     *   }
     * })
     * 
     */
    create<T extends PatientResponseCreateArgs>(args: SelectSubset<T, PatientResponseCreateArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientResponses.
     * @param {PatientResponseCreateManyArgs} args - Arguments to create many PatientResponses.
     * @example
     * // Create many PatientResponses
     * const patientResponse = await prisma.patientResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientResponseCreateManyArgs>(args?: SelectSubset<T, PatientResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientResponses and returns the data saved in the database.
     * @param {PatientResponseCreateManyAndReturnArgs} args - Arguments to create many PatientResponses.
     * @example
     * // Create many PatientResponses
     * const patientResponse = await prisma.patientResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientResponses and only return the `id`
     * const patientResponseWithIdOnly = await prisma.patientResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientResponse.
     * @param {PatientResponseDeleteArgs} args - Arguments to delete one PatientResponse.
     * @example
     * // Delete one PatientResponse
     * const PatientResponse = await prisma.patientResponse.delete({
     *   where: {
     *     // ... filter to delete one PatientResponse
     *   }
     * })
     * 
     */
    delete<T extends PatientResponseDeleteArgs>(args: SelectSubset<T, PatientResponseDeleteArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientResponse.
     * @param {PatientResponseUpdateArgs} args - Arguments to update one PatientResponse.
     * @example
     * // Update one PatientResponse
     * const patientResponse = await prisma.patientResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientResponseUpdateArgs>(args: SelectSubset<T, PatientResponseUpdateArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientResponses.
     * @param {PatientResponseDeleteManyArgs} args - Arguments to filter PatientResponses to delete.
     * @example
     * // Delete a few PatientResponses
     * const { count } = await prisma.patientResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientResponseDeleteManyArgs>(args?: SelectSubset<T, PatientResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientResponses
     * const patientResponse = await prisma.patientResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientResponseUpdateManyArgs>(args: SelectSubset<T, PatientResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientResponses and returns the data updated in the database.
     * @param {PatientResponseUpdateManyAndReturnArgs} args - Arguments to update many PatientResponses.
     * @example
     * // Update many PatientResponses
     * const patientResponse = await prisma.patientResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientResponses and only return the `id`
     * const patientResponseWithIdOnly = await prisma.patientResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientResponse.
     * @param {PatientResponseUpsertArgs} args - Arguments to update or create a PatientResponse.
     * @example
     * // Update or create a PatientResponse
     * const patientResponse = await prisma.patientResponse.upsert({
     *   create: {
     *     // ... data to create a PatientResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientResponse we want to update
     *   }
     * })
     */
    upsert<T extends PatientResponseUpsertArgs>(args: SelectSubset<T, PatientResponseUpsertArgs<ExtArgs>>): Prisma__PatientResponseClient<$Result.GetResult<Prisma.$PatientResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseCountArgs} args - Arguments to filter PatientResponses to count.
     * @example
     * // Count the number of PatientResponses
     * const count = await prisma.patientResponse.count({
     *   where: {
     *     // ... the filter for the PatientResponses we want to count
     *   }
     * })
    **/
    count<T extends PatientResponseCountArgs>(
      args?: Subset<T, PatientResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientResponseAggregateArgs>(args: Subset<T, PatientResponseAggregateArgs>): Prisma.PrismaPromise<GetPatientResponseAggregateType<T>>

    /**
     * Group by PatientResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientResponseGroupByArgs['orderBy'] }
        : { orderBy?: PatientResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientResponse model
   */
  readonly fields: PatientResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    baseQuestion<T extends BaseQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestionDefaultArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientResponse model
   */
  interface PatientResponseFieldRefs {
    readonly id: FieldRef<"PatientResponse", 'String'>
    readonly patientId: FieldRef<"PatientResponse", 'String'>
    readonly baseQuestionId: FieldRef<"PatientResponse", 'String'>
    readonly response: FieldRef<"PatientResponse", 'String'>
    readonly responseMeta: FieldRef<"PatientResponse", 'Json'>
    readonly sessionId: FieldRef<"PatientResponse", 'String'>
    readonly createdAt: FieldRef<"PatientResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientResponse findUnique
   */
  export type PatientResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter, which PatientResponse to fetch.
     */
    where: PatientResponseWhereUniqueInput
  }

  /**
   * PatientResponse findUniqueOrThrow
   */
  export type PatientResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter, which PatientResponse to fetch.
     */
    where: PatientResponseWhereUniqueInput
  }

  /**
   * PatientResponse findFirst
   */
  export type PatientResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter, which PatientResponse to fetch.
     */
    where?: PatientResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientResponses to fetch.
     */
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientResponses.
     */
    cursor?: PatientResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientResponses.
     */
    distinct?: PatientResponseScalarFieldEnum | PatientResponseScalarFieldEnum[]
  }

  /**
   * PatientResponse findFirstOrThrow
   */
  export type PatientResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter, which PatientResponse to fetch.
     */
    where?: PatientResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientResponses to fetch.
     */
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientResponses.
     */
    cursor?: PatientResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientResponses.
     */
    distinct?: PatientResponseScalarFieldEnum | PatientResponseScalarFieldEnum[]
  }

  /**
   * PatientResponse findMany
   */
  export type PatientResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter, which PatientResponses to fetch.
     */
    where?: PatientResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientResponses to fetch.
     */
    orderBy?: PatientResponseOrderByWithRelationInput | PatientResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientResponses.
     */
    cursor?: PatientResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientResponses.
     */
    skip?: number
    distinct?: PatientResponseScalarFieldEnum | PatientResponseScalarFieldEnum[]
  }

  /**
   * PatientResponse create
   */
  export type PatientResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientResponse.
     */
    data: XOR<PatientResponseCreateInput, PatientResponseUncheckedCreateInput>
  }

  /**
   * PatientResponse createMany
   */
  export type PatientResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientResponses.
     */
    data: PatientResponseCreateManyInput | PatientResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientResponse createManyAndReturn
   */
  export type PatientResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * The data used to create many PatientResponses.
     */
    data: PatientResponseCreateManyInput | PatientResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientResponse update
   */
  export type PatientResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientResponse.
     */
    data: XOR<PatientResponseUpdateInput, PatientResponseUncheckedUpdateInput>
    /**
     * Choose, which PatientResponse to update.
     */
    where: PatientResponseWhereUniqueInput
  }

  /**
   * PatientResponse updateMany
   */
  export type PatientResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientResponses.
     */
    data: XOR<PatientResponseUpdateManyMutationInput, PatientResponseUncheckedUpdateManyInput>
    /**
     * Filter which PatientResponses to update
     */
    where?: PatientResponseWhereInput
    /**
     * Limit how many PatientResponses to update.
     */
    limit?: number
  }

  /**
   * PatientResponse updateManyAndReturn
   */
  export type PatientResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * The data used to update PatientResponses.
     */
    data: XOR<PatientResponseUpdateManyMutationInput, PatientResponseUncheckedUpdateManyInput>
    /**
     * Filter which PatientResponses to update
     */
    where?: PatientResponseWhereInput
    /**
     * Limit how many PatientResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientResponse upsert
   */
  export type PatientResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientResponse to update in case it exists.
     */
    where: PatientResponseWhereUniqueInput
    /**
     * In case the PatientResponse found by the `where` argument doesn't exist, create a new PatientResponse with this data.
     */
    create: XOR<PatientResponseCreateInput, PatientResponseUncheckedCreateInput>
    /**
     * In case the PatientResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientResponseUpdateInput, PatientResponseUncheckedUpdateInput>
  }

  /**
   * PatientResponse delete
   */
  export type PatientResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
    /**
     * Filter which PatientResponse to delete.
     */
    where: PatientResponseWhereUniqueInput
  }

  /**
   * PatientResponse deleteMany
   */
  export type PatientResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientResponses to delete
     */
    where?: PatientResponseWhereInput
    /**
     * Limit how many PatientResponses to delete.
     */
    limit?: number
  }

  /**
   * PatientResponse without action
   */
  export type PatientResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientResponse
     */
    select?: PatientResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientResponse
     */
    omit?: PatientResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientResponseInclude<ExtArgs> | null
  }


  /**
   * Model EhrSyncLog
   */

  export type AggregateEhrSyncLog = {
    _count: EhrSyncLogCountAggregateOutputType | null
    _avg: EhrSyncLogAvgAggregateOutputType | null
    _sum: EhrSyncLogSumAggregateOutputType | null
    _min: EhrSyncLogMinAggregateOutputType | null
    _max: EhrSyncLogMaxAggregateOutputType | null
  }

  export type EhrSyncLogAvgAggregateOutputType = {
    retryCount: number | null
  }

  export type EhrSyncLogSumAggregateOutputType = {
    retryCount: number | null
  }

  export type EhrSyncLogMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    clientId: string | null
    ehrProviderCode: string | null
    syncStatus: $Enums.SyncStatus | null
    retryCount: number | null
    nextRetryAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrSyncLogMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    clientId: string | null
    ehrProviderCode: string | null
    syncStatus: $Enums.SyncStatus | null
    retryCount: number | null
    nextRetryAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrSyncLogCountAggregateOutputType = {
    id: number
    patientId: number
    clientId: number
    ehrProviderCode: number
    syncStatus: number
    requestPayload: number
    responsePayload: number
    errorDetails: number
    retryCount: number
    nextRetryAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EhrSyncLogAvgAggregateInputType = {
    retryCount?: true
  }

  export type EhrSyncLogSumAggregateInputType = {
    retryCount?: true
  }

  export type EhrSyncLogMinAggregateInputType = {
    id?: true
    patientId?: true
    clientId?: true
    ehrProviderCode?: true
    syncStatus?: true
    retryCount?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrSyncLogMaxAggregateInputType = {
    id?: true
    patientId?: true
    clientId?: true
    ehrProviderCode?: true
    syncStatus?: true
    retryCount?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrSyncLogCountAggregateInputType = {
    id?: true
    patientId?: true
    clientId?: true
    ehrProviderCode?: true
    syncStatus?: true
    requestPayload?: true
    responsePayload?: true
    errorDetails?: true
    retryCount?: true
    nextRetryAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EhrSyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrSyncLog to aggregate.
     */
    where?: EhrSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrSyncLogs to fetch.
     */
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EhrSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EhrSyncLogs
    **/
    _count?: true | EhrSyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EhrSyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EhrSyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EhrSyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EhrSyncLogMaxAggregateInputType
  }

  export type GetEhrSyncLogAggregateType<T extends EhrSyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEhrSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEhrSyncLog[P]>
      : GetScalarType<T[P], AggregateEhrSyncLog[P]>
  }




  export type EhrSyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrSyncLogWhereInput
    orderBy?: EhrSyncLogOrderByWithAggregationInput | EhrSyncLogOrderByWithAggregationInput[]
    by: EhrSyncLogScalarFieldEnum[] | EhrSyncLogScalarFieldEnum
    having?: EhrSyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EhrSyncLogCountAggregateInputType | true
    _avg?: EhrSyncLogAvgAggregateInputType
    _sum?: EhrSyncLogSumAggregateInputType
    _min?: EhrSyncLogMinAggregateInputType
    _max?: EhrSyncLogMaxAggregateInputType
  }

  export type EhrSyncLogGroupByOutputType = {
    id: string
    patientId: string
    clientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload: JsonValue | null
    responsePayload: JsonValue | null
    errorDetails: JsonValue | null
    retryCount: number
    nextRetryAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: EhrSyncLogCountAggregateOutputType | null
    _avg: EhrSyncLogAvgAggregateOutputType | null
    _sum: EhrSyncLogSumAggregateOutputType | null
    _min: EhrSyncLogMinAggregateOutputType | null
    _max: EhrSyncLogMaxAggregateOutputType | null
  }

  type GetEhrSyncLogGroupByPayload<T extends EhrSyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EhrSyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EhrSyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EhrSyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], EhrSyncLogGroupByOutputType[P]>
        }
      >
    >


  export type EhrSyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    syncStatus?: boolean
    requestPayload?: boolean
    responsePayload?: boolean
    errorDetails?: boolean
    retryCount?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrSyncLog"]>

  export type EhrSyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    syncStatus?: boolean
    requestPayload?: boolean
    responsePayload?: boolean
    errorDetails?: boolean
    retryCount?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrSyncLog"]>

  export type EhrSyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    syncStatus?: boolean
    requestPayload?: boolean
    responsePayload?: boolean
    errorDetails?: boolean
    retryCount?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrSyncLog"]>

  export type EhrSyncLogSelectScalar = {
    id?: boolean
    patientId?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    syncStatus?: boolean
    requestPayload?: boolean
    responsePayload?: boolean
    errorDetails?: boolean
    retryCount?: boolean
    nextRetryAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EhrSyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "clientId" | "ehrProviderCode" | "syncStatus" | "requestPayload" | "responsePayload" | "errorDetails" | "retryCount" | "nextRetryAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ehrSyncLog"]>
  export type EhrSyncLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }
  export type EhrSyncLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }
  export type EhrSyncLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
  }

  export type $EhrSyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EhrSyncLog"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      ehrProvider: Prisma.$EhrProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      clientId: string
      ehrProviderCode: string
      syncStatus: $Enums.SyncStatus
      requestPayload: Prisma.JsonValue | null
      responsePayload: Prisma.JsonValue | null
      errorDetails: Prisma.JsonValue | null
      retryCount: number
      nextRetryAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ehrSyncLog"]>
    composites: {}
  }

  type EhrSyncLogGetPayload<S extends boolean | null | undefined | EhrSyncLogDefaultArgs> = $Result.GetResult<Prisma.$EhrSyncLogPayload, S>

  type EhrSyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EhrSyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EhrSyncLogCountAggregateInputType | true
    }

  export interface EhrSyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EhrSyncLog'], meta: { name: 'EhrSyncLog' } }
    /**
     * Find zero or one EhrSyncLog that matches the filter.
     * @param {EhrSyncLogFindUniqueArgs} args - Arguments to find a EhrSyncLog
     * @example
     * // Get one EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EhrSyncLogFindUniqueArgs>(args: SelectSubset<T, EhrSyncLogFindUniqueArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EhrSyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EhrSyncLogFindUniqueOrThrowArgs} args - Arguments to find a EhrSyncLog
     * @example
     * // Get one EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EhrSyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EhrSyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrSyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogFindFirstArgs} args - Arguments to find a EhrSyncLog
     * @example
     * // Get one EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EhrSyncLogFindFirstArgs>(args?: SelectSubset<T, EhrSyncLogFindFirstArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrSyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogFindFirstOrThrowArgs} args - Arguments to find a EhrSyncLog
     * @example
     * // Get one EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EhrSyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EhrSyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EhrSyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EhrSyncLogs
     * const ehrSyncLogs = await prisma.ehrSyncLog.findMany()
     * 
     * // Get first 10 EhrSyncLogs
     * const ehrSyncLogs = await prisma.ehrSyncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ehrSyncLogWithIdOnly = await prisma.ehrSyncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EhrSyncLogFindManyArgs>(args?: SelectSubset<T, EhrSyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EhrSyncLog.
     * @param {EhrSyncLogCreateArgs} args - Arguments to create a EhrSyncLog.
     * @example
     * // Create one EhrSyncLog
     * const EhrSyncLog = await prisma.ehrSyncLog.create({
     *   data: {
     *     // ... data to create a EhrSyncLog
     *   }
     * })
     * 
     */
    create<T extends EhrSyncLogCreateArgs>(args: SelectSubset<T, EhrSyncLogCreateArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EhrSyncLogs.
     * @param {EhrSyncLogCreateManyArgs} args - Arguments to create many EhrSyncLogs.
     * @example
     * // Create many EhrSyncLogs
     * const ehrSyncLog = await prisma.ehrSyncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EhrSyncLogCreateManyArgs>(args?: SelectSubset<T, EhrSyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EhrSyncLogs and returns the data saved in the database.
     * @param {EhrSyncLogCreateManyAndReturnArgs} args - Arguments to create many EhrSyncLogs.
     * @example
     * // Create many EhrSyncLogs
     * const ehrSyncLog = await prisma.ehrSyncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EhrSyncLogs and only return the `id`
     * const ehrSyncLogWithIdOnly = await prisma.ehrSyncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EhrSyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EhrSyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EhrSyncLog.
     * @param {EhrSyncLogDeleteArgs} args - Arguments to delete one EhrSyncLog.
     * @example
     * // Delete one EhrSyncLog
     * const EhrSyncLog = await prisma.ehrSyncLog.delete({
     *   where: {
     *     // ... filter to delete one EhrSyncLog
     *   }
     * })
     * 
     */
    delete<T extends EhrSyncLogDeleteArgs>(args: SelectSubset<T, EhrSyncLogDeleteArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EhrSyncLog.
     * @param {EhrSyncLogUpdateArgs} args - Arguments to update one EhrSyncLog.
     * @example
     * // Update one EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EhrSyncLogUpdateArgs>(args: SelectSubset<T, EhrSyncLogUpdateArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EhrSyncLogs.
     * @param {EhrSyncLogDeleteManyArgs} args - Arguments to filter EhrSyncLogs to delete.
     * @example
     * // Delete a few EhrSyncLogs
     * const { count } = await prisma.ehrSyncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EhrSyncLogDeleteManyArgs>(args?: SelectSubset<T, EhrSyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EhrSyncLogs
     * const ehrSyncLog = await prisma.ehrSyncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EhrSyncLogUpdateManyArgs>(args: SelectSubset<T, EhrSyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrSyncLogs and returns the data updated in the database.
     * @param {EhrSyncLogUpdateManyAndReturnArgs} args - Arguments to update many EhrSyncLogs.
     * @example
     * // Update many EhrSyncLogs
     * const ehrSyncLog = await prisma.ehrSyncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EhrSyncLogs and only return the `id`
     * const ehrSyncLogWithIdOnly = await prisma.ehrSyncLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EhrSyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EhrSyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EhrSyncLog.
     * @param {EhrSyncLogUpsertArgs} args - Arguments to update or create a EhrSyncLog.
     * @example
     * // Update or create a EhrSyncLog
     * const ehrSyncLog = await prisma.ehrSyncLog.upsert({
     *   create: {
     *     // ... data to create a EhrSyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EhrSyncLog we want to update
     *   }
     * })
     */
    upsert<T extends EhrSyncLogUpsertArgs>(args: SelectSubset<T, EhrSyncLogUpsertArgs<ExtArgs>>): Prisma__EhrSyncLogClient<$Result.GetResult<Prisma.$EhrSyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EhrSyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogCountArgs} args - Arguments to filter EhrSyncLogs to count.
     * @example
     * // Count the number of EhrSyncLogs
     * const count = await prisma.ehrSyncLog.count({
     *   where: {
     *     // ... the filter for the EhrSyncLogs we want to count
     *   }
     * })
    **/
    count<T extends EhrSyncLogCountArgs>(
      args?: Subset<T, EhrSyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EhrSyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EhrSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EhrSyncLogAggregateArgs>(args: Subset<T, EhrSyncLogAggregateArgs>): Prisma.PrismaPromise<GetEhrSyncLogAggregateType<T>>

    /**
     * Group by EhrSyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrSyncLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EhrSyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EhrSyncLogGroupByArgs['orderBy'] }
        : { orderBy?: EhrSyncLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EhrSyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEhrSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EhrSyncLog model
   */
  readonly fields: EhrSyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EhrSyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EhrSyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ehrProvider<T extends EhrProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EhrProviderDefaultArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EhrSyncLog model
   */
  interface EhrSyncLogFieldRefs {
    readonly id: FieldRef<"EhrSyncLog", 'String'>
    readonly patientId: FieldRef<"EhrSyncLog", 'String'>
    readonly clientId: FieldRef<"EhrSyncLog", 'String'>
    readonly ehrProviderCode: FieldRef<"EhrSyncLog", 'String'>
    readonly syncStatus: FieldRef<"EhrSyncLog", 'SyncStatus'>
    readonly requestPayload: FieldRef<"EhrSyncLog", 'Json'>
    readonly responsePayload: FieldRef<"EhrSyncLog", 'Json'>
    readonly errorDetails: FieldRef<"EhrSyncLog", 'Json'>
    readonly retryCount: FieldRef<"EhrSyncLog", 'Int'>
    readonly nextRetryAt: FieldRef<"EhrSyncLog", 'DateTime'>
    readonly createdAt: FieldRef<"EhrSyncLog", 'DateTime'>
    readonly updatedAt: FieldRef<"EhrSyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EhrSyncLog findUnique
   */
  export type EhrSyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which EhrSyncLog to fetch.
     */
    where: EhrSyncLogWhereUniqueInput
  }

  /**
   * EhrSyncLog findUniqueOrThrow
   */
  export type EhrSyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which EhrSyncLog to fetch.
     */
    where: EhrSyncLogWhereUniqueInput
  }

  /**
   * EhrSyncLog findFirst
   */
  export type EhrSyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which EhrSyncLog to fetch.
     */
    where?: EhrSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrSyncLogs to fetch.
     */
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrSyncLogs.
     */
    cursor?: EhrSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrSyncLogs.
     */
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * EhrSyncLog findFirstOrThrow
   */
  export type EhrSyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which EhrSyncLog to fetch.
     */
    where?: EhrSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrSyncLogs to fetch.
     */
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrSyncLogs.
     */
    cursor?: EhrSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrSyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrSyncLogs.
     */
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * EhrSyncLog findMany
   */
  export type EhrSyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter, which EhrSyncLogs to fetch.
     */
    where?: EhrSyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrSyncLogs to fetch.
     */
    orderBy?: EhrSyncLogOrderByWithRelationInput | EhrSyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EhrSyncLogs.
     */
    cursor?: EhrSyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrSyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrSyncLogs.
     */
    skip?: number
    distinct?: EhrSyncLogScalarFieldEnum | EhrSyncLogScalarFieldEnum[]
  }

  /**
   * EhrSyncLog create
   */
  export type EhrSyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EhrSyncLog.
     */
    data: XOR<EhrSyncLogCreateInput, EhrSyncLogUncheckedCreateInput>
  }

  /**
   * EhrSyncLog createMany
   */
  export type EhrSyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EhrSyncLogs.
     */
    data: EhrSyncLogCreateManyInput | EhrSyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EhrSyncLog createManyAndReturn
   */
  export type EhrSyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many EhrSyncLogs.
     */
    data: EhrSyncLogCreateManyInput | EhrSyncLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrSyncLog update
   */
  export type EhrSyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EhrSyncLog.
     */
    data: XOR<EhrSyncLogUpdateInput, EhrSyncLogUncheckedUpdateInput>
    /**
     * Choose, which EhrSyncLog to update.
     */
    where: EhrSyncLogWhereUniqueInput
  }

  /**
   * EhrSyncLog updateMany
   */
  export type EhrSyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EhrSyncLogs.
     */
    data: XOR<EhrSyncLogUpdateManyMutationInput, EhrSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which EhrSyncLogs to update
     */
    where?: EhrSyncLogWhereInput
    /**
     * Limit how many EhrSyncLogs to update.
     */
    limit?: number
  }

  /**
   * EhrSyncLog updateManyAndReturn
   */
  export type EhrSyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * The data used to update EhrSyncLogs.
     */
    data: XOR<EhrSyncLogUpdateManyMutationInput, EhrSyncLogUncheckedUpdateManyInput>
    /**
     * Filter which EhrSyncLogs to update
     */
    where?: EhrSyncLogWhereInput
    /**
     * Limit how many EhrSyncLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrSyncLog upsert
   */
  export type EhrSyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EhrSyncLog to update in case it exists.
     */
    where: EhrSyncLogWhereUniqueInput
    /**
     * In case the EhrSyncLog found by the `where` argument doesn't exist, create a new EhrSyncLog with this data.
     */
    create: XOR<EhrSyncLogCreateInput, EhrSyncLogUncheckedCreateInput>
    /**
     * In case the EhrSyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EhrSyncLogUpdateInput, EhrSyncLogUncheckedUpdateInput>
  }

  /**
   * EhrSyncLog delete
   */
  export type EhrSyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
    /**
     * Filter which EhrSyncLog to delete.
     */
    where: EhrSyncLogWhereUniqueInput
  }

  /**
   * EhrSyncLog deleteMany
   */
  export type EhrSyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrSyncLogs to delete
     */
    where?: EhrSyncLogWhereInput
    /**
     * Limit how many EhrSyncLogs to delete.
     */
    limit?: number
  }

  /**
   * EhrSyncLog without action
   */
  export type EhrSyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrSyncLog
     */
    select?: EhrSyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrSyncLog
     */
    omit?: EhrSyncLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrSyncLogInclude<ExtArgs> | null
  }


  /**
   * Model BulkOperation
   */

  export type AggregateBulkOperation = {
    _count: BulkOperationCountAggregateOutputType | null
    _avg: BulkOperationAvgAggregateOutputType | null
    _sum: BulkOperationSumAggregateOutputType | null
    _min: BulkOperationMinAggregateOutputType | null
    _max: BulkOperationMaxAggregateOutputType | null
  }

  export type BulkOperationAvgAggregateOutputType = {
    processedCount: number | null
    totalCount: number | null
  }

  export type BulkOperationSumAggregateOutputType = {
    processedCount: number | null
    totalCount: number | null
  }

  export type BulkOperationMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    operationType: $Enums.OperationType | null
    status: $Enums.SyncStatus | null
    createdBy: string | null
    processedCount: number | null
    totalCount: number | null
    errorLog: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BulkOperationMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    operationType: $Enums.OperationType | null
    status: $Enums.SyncStatus | null
    createdBy: string | null
    processedCount: number | null
    totalCount: number | null
    errorLog: string | null
    createdAt: Date | null
    updatedAt: Date | null
    completedAt: Date | null
  }

  export type BulkOperationCountAggregateOutputType = {
    id: number
    clientId: number
    operationType: number
    status: number
    parameters: number
    createdBy: number
    processedCount: number
    totalCount: number
    errorLog: number
    createdAt: number
    updatedAt: number
    completedAt: number
    _all: number
  }


  export type BulkOperationAvgAggregateInputType = {
    processedCount?: true
    totalCount?: true
  }

  export type BulkOperationSumAggregateInputType = {
    processedCount?: true
    totalCount?: true
  }

  export type BulkOperationMinAggregateInputType = {
    id?: true
    clientId?: true
    operationType?: true
    status?: true
    createdBy?: true
    processedCount?: true
    totalCount?: true
    errorLog?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BulkOperationMaxAggregateInputType = {
    id?: true
    clientId?: true
    operationType?: true
    status?: true
    createdBy?: true
    processedCount?: true
    totalCount?: true
    errorLog?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
  }

  export type BulkOperationCountAggregateInputType = {
    id?: true
    clientId?: true
    operationType?: true
    status?: true
    parameters?: true
    createdBy?: true
    processedCount?: true
    totalCount?: true
    errorLog?: true
    createdAt?: true
    updatedAt?: true
    completedAt?: true
    _all?: true
  }

  export type BulkOperationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkOperation to aggregate.
     */
    where?: BulkOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkOperations to fetch.
     */
    orderBy?: BulkOperationOrderByWithRelationInput | BulkOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulkOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulkOperations
    **/
    _count?: true | BulkOperationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulkOperationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulkOperationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulkOperationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulkOperationMaxAggregateInputType
  }

  export type GetBulkOperationAggregateType<T extends BulkOperationAggregateArgs> = {
        [P in keyof T & keyof AggregateBulkOperation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulkOperation[P]>
      : GetScalarType<T[P], AggregateBulkOperation[P]>
  }




  export type BulkOperationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulkOperationWhereInput
    orderBy?: BulkOperationOrderByWithAggregationInput | BulkOperationOrderByWithAggregationInput[]
    by: BulkOperationScalarFieldEnum[] | BulkOperationScalarFieldEnum
    having?: BulkOperationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulkOperationCountAggregateInputType | true
    _avg?: BulkOperationAvgAggregateInputType
    _sum?: BulkOperationSumAggregateInputType
    _min?: BulkOperationMinAggregateInputType
    _max?: BulkOperationMaxAggregateInputType
  }

  export type BulkOperationGroupByOutputType = {
    id: string
    clientId: string
    operationType: $Enums.OperationType
    status: $Enums.SyncStatus
    parameters: JsonValue
    createdBy: string | null
    processedCount: number
    totalCount: number
    errorLog: string | null
    createdAt: Date
    updatedAt: Date
    completedAt: Date | null
    _count: BulkOperationCountAggregateOutputType | null
    _avg: BulkOperationAvgAggregateOutputType | null
    _sum: BulkOperationSumAggregateOutputType | null
    _min: BulkOperationMinAggregateOutputType | null
    _max: BulkOperationMaxAggregateOutputType | null
  }

  type GetBulkOperationGroupByPayload<T extends BulkOperationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulkOperationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulkOperationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulkOperationGroupByOutputType[P]>
            : GetScalarType<T[P], BulkOperationGroupByOutputType[P]>
        }
      >
    >


  export type BulkOperationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    operationType?: boolean
    status?: boolean
    parameters?: boolean
    createdBy?: boolean
    processedCount?: boolean
    totalCount?: boolean
    errorLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkOperation"]>

  export type BulkOperationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    operationType?: boolean
    status?: boolean
    parameters?: boolean
    createdBy?: boolean
    processedCount?: boolean
    totalCount?: boolean
    errorLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkOperation"]>

  export type BulkOperationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    operationType?: boolean
    status?: boolean
    parameters?: boolean
    createdBy?: boolean
    processedCount?: boolean
    totalCount?: boolean
    errorLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulkOperation"]>

  export type BulkOperationSelectScalar = {
    id?: boolean
    clientId?: boolean
    operationType?: boolean
    status?: boolean
    parameters?: boolean
    createdBy?: boolean
    processedCount?: boolean
    totalCount?: boolean
    errorLog?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    completedAt?: boolean
  }

  export type BulkOperationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "operationType" | "status" | "parameters" | "createdBy" | "processedCount" | "totalCount" | "errorLog" | "createdAt" | "updatedAt" | "completedAt", ExtArgs["result"]["bulkOperation"]>
  export type BulkOperationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type BulkOperationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type BulkOperationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $BulkOperationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulkOperation"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      operationType: $Enums.OperationType
      status: $Enums.SyncStatus
      parameters: Prisma.JsonValue
      createdBy: string | null
      processedCount: number
      totalCount: number
      errorLog: string | null
      createdAt: Date
      updatedAt: Date
      completedAt: Date | null
    }, ExtArgs["result"]["bulkOperation"]>
    composites: {}
  }

  type BulkOperationGetPayload<S extends boolean | null | undefined | BulkOperationDefaultArgs> = $Result.GetResult<Prisma.$BulkOperationPayload, S>

  type BulkOperationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulkOperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulkOperationCountAggregateInputType | true
    }

  export interface BulkOperationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulkOperation'], meta: { name: 'BulkOperation' } }
    /**
     * Find zero or one BulkOperation that matches the filter.
     * @param {BulkOperationFindUniqueArgs} args - Arguments to find a BulkOperation
     * @example
     * // Get one BulkOperation
     * const bulkOperation = await prisma.bulkOperation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulkOperationFindUniqueArgs>(args: SelectSubset<T, BulkOperationFindUniqueArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulkOperation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulkOperationFindUniqueOrThrowArgs} args - Arguments to find a BulkOperation
     * @example
     * // Get one BulkOperation
     * const bulkOperation = await prisma.bulkOperation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulkOperationFindUniqueOrThrowArgs>(args: SelectSubset<T, BulkOperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkOperation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationFindFirstArgs} args - Arguments to find a BulkOperation
     * @example
     * // Get one BulkOperation
     * const bulkOperation = await prisma.bulkOperation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulkOperationFindFirstArgs>(args?: SelectSubset<T, BulkOperationFindFirstArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulkOperation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationFindFirstOrThrowArgs} args - Arguments to find a BulkOperation
     * @example
     * // Get one BulkOperation
     * const bulkOperation = await prisma.bulkOperation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulkOperationFindFirstOrThrowArgs>(args?: SelectSubset<T, BulkOperationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulkOperations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulkOperations
     * const bulkOperations = await prisma.bulkOperation.findMany()
     * 
     * // Get first 10 BulkOperations
     * const bulkOperations = await prisma.bulkOperation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulkOperationWithIdOnly = await prisma.bulkOperation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulkOperationFindManyArgs>(args?: SelectSubset<T, BulkOperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulkOperation.
     * @param {BulkOperationCreateArgs} args - Arguments to create a BulkOperation.
     * @example
     * // Create one BulkOperation
     * const BulkOperation = await prisma.bulkOperation.create({
     *   data: {
     *     // ... data to create a BulkOperation
     *   }
     * })
     * 
     */
    create<T extends BulkOperationCreateArgs>(args: SelectSubset<T, BulkOperationCreateArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulkOperations.
     * @param {BulkOperationCreateManyArgs} args - Arguments to create many BulkOperations.
     * @example
     * // Create many BulkOperations
     * const bulkOperation = await prisma.bulkOperation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulkOperationCreateManyArgs>(args?: SelectSubset<T, BulkOperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BulkOperations and returns the data saved in the database.
     * @param {BulkOperationCreateManyAndReturnArgs} args - Arguments to create many BulkOperations.
     * @example
     * // Create many BulkOperations
     * const bulkOperation = await prisma.bulkOperation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BulkOperations and only return the `id`
     * const bulkOperationWithIdOnly = await prisma.bulkOperation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BulkOperationCreateManyAndReturnArgs>(args?: SelectSubset<T, BulkOperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BulkOperation.
     * @param {BulkOperationDeleteArgs} args - Arguments to delete one BulkOperation.
     * @example
     * // Delete one BulkOperation
     * const BulkOperation = await prisma.bulkOperation.delete({
     *   where: {
     *     // ... filter to delete one BulkOperation
     *   }
     * })
     * 
     */
    delete<T extends BulkOperationDeleteArgs>(args: SelectSubset<T, BulkOperationDeleteArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulkOperation.
     * @param {BulkOperationUpdateArgs} args - Arguments to update one BulkOperation.
     * @example
     * // Update one BulkOperation
     * const bulkOperation = await prisma.bulkOperation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulkOperationUpdateArgs>(args: SelectSubset<T, BulkOperationUpdateArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulkOperations.
     * @param {BulkOperationDeleteManyArgs} args - Arguments to filter BulkOperations to delete.
     * @example
     * // Delete a few BulkOperations
     * const { count } = await prisma.bulkOperation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulkOperationDeleteManyArgs>(args?: SelectSubset<T, BulkOperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulkOperations
     * const bulkOperation = await prisma.bulkOperation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulkOperationUpdateManyArgs>(args: SelectSubset<T, BulkOperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulkOperations and returns the data updated in the database.
     * @param {BulkOperationUpdateManyAndReturnArgs} args - Arguments to update many BulkOperations.
     * @example
     * // Update many BulkOperations
     * const bulkOperation = await prisma.bulkOperation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BulkOperations and only return the `id`
     * const bulkOperationWithIdOnly = await prisma.bulkOperation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BulkOperationUpdateManyAndReturnArgs>(args: SelectSubset<T, BulkOperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BulkOperation.
     * @param {BulkOperationUpsertArgs} args - Arguments to update or create a BulkOperation.
     * @example
     * // Update or create a BulkOperation
     * const bulkOperation = await prisma.bulkOperation.upsert({
     *   create: {
     *     // ... data to create a BulkOperation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulkOperation we want to update
     *   }
     * })
     */
    upsert<T extends BulkOperationUpsertArgs>(args: SelectSubset<T, BulkOperationUpsertArgs<ExtArgs>>): Prisma__BulkOperationClient<$Result.GetResult<Prisma.$BulkOperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulkOperations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationCountArgs} args - Arguments to filter BulkOperations to count.
     * @example
     * // Count the number of BulkOperations
     * const count = await prisma.bulkOperation.count({
     *   where: {
     *     // ... the filter for the BulkOperations we want to count
     *   }
     * })
    **/
    count<T extends BulkOperationCountArgs>(
      args?: Subset<T, BulkOperationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulkOperationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulkOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulkOperationAggregateArgs>(args: Subset<T, BulkOperationAggregateArgs>): Prisma.PrismaPromise<GetBulkOperationAggregateType<T>>

    /**
     * Group by BulkOperation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulkOperationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulkOperationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulkOperationGroupByArgs['orderBy'] }
        : { orderBy?: BulkOperationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulkOperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulkOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulkOperation model
   */
  readonly fields: BulkOperationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulkOperation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulkOperationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulkOperation model
   */
  interface BulkOperationFieldRefs {
    readonly id: FieldRef<"BulkOperation", 'String'>
    readonly clientId: FieldRef<"BulkOperation", 'String'>
    readonly operationType: FieldRef<"BulkOperation", 'OperationType'>
    readonly status: FieldRef<"BulkOperation", 'SyncStatus'>
    readonly parameters: FieldRef<"BulkOperation", 'Json'>
    readonly createdBy: FieldRef<"BulkOperation", 'String'>
    readonly processedCount: FieldRef<"BulkOperation", 'Int'>
    readonly totalCount: FieldRef<"BulkOperation", 'Int'>
    readonly errorLog: FieldRef<"BulkOperation", 'String'>
    readonly createdAt: FieldRef<"BulkOperation", 'DateTime'>
    readonly updatedAt: FieldRef<"BulkOperation", 'DateTime'>
    readonly completedAt: FieldRef<"BulkOperation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BulkOperation findUnique
   */
  export type BulkOperationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter, which BulkOperation to fetch.
     */
    where: BulkOperationWhereUniqueInput
  }

  /**
   * BulkOperation findUniqueOrThrow
   */
  export type BulkOperationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter, which BulkOperation to fetch.
     */
    where: BulkOperationWhereUniqueInput
  }

  /**
   * BulkOperation findFirst
   */
  export type BulkOperationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter, which BulkOperation to fetch.
     */
    where?: BulkOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkOperations to fetch.
     */
    orderBy?: BulkOperationOrderByWithRelationInput | BulkOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkOperations.
     */
    cursor?: BulkOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkOperations.
     */
    distinct?: BulkOperationScalarFieldEnum | BulkOperationScalarFieldEnum[]
  }

  /**
   * BulkOperation findFirstOrThrow
   */
  export type BulkOperationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter, which BulkOperation to fetch.
     */
    where?: BulkOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkOperations to fetch.
     */
    orderBy?: BulkOperationOrderByWithRelationInput | BulkOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulkOperations.
     */
    cursor?: BulkOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkOperations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulkOperations.
     */
    distinct?: BulkOperationScalarFieldEnum | BulkOperationScalarFieldEnum[]
  }

  /**
   * BulkOperation findMany
   */
  export type BulkOperationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter, which BulkOperations to fetch.
     */
    where?: BulkOperationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulkOperations to fetch.
     */
    orderBy?: BulkOperationOrderByWithRelationInput | BulkOperationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulkOperations.
     */
    cursor?: BulkOperationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulkOperations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulkOperations.
     */
    skip?: number
    distinct?: BulkOperationScalarFieldEnum | BulkOperationScalarFieldEnum[]
  }

  /**
   * BulkOperation create
   */
  export type BulkOperationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * The data needed to create a BulkOperation.
     */
    data: XOR<BulkOperationCreateInput, BulkOperationUncheckedCreateInput>
  }

  /**
   * BulkOperation createMany
   */
  export type BulkOperationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulkOperations.
     */
    data: BulkOperationCreateManyInput | BulkOperationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulkOperation createManyAndReturn
   */
  export type BulkOperationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * The data used to create many BulkOperations.
     */
    data: BulkOperationCreateManyInput | BulkOperationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BulkOperation update
   */
  export type BulkOperationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * The data needed to update a BulkOperation.
     */
    data: XOR<BulkOperationUpdateInput, BulkOperationUncheckedUpdateInput>
    /**
     * Choose, which BulkOperation to update.
     */
    where: BulkOperationWhereUniqueInput
  }

  /**
   * BulkOperation updateMany
   */
  export type BulkOperationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulkOperations.
     */
    data: XOR<BulkOperationUpdateManyMutationInput, BulkOperationUncheckedUpdateManyInput>
    /**
     * Filter which BulkOperations to update
     */
    where?: BulkOperationWhereInput
    /**
     * Limit how many BulkOperations to update.
     */
    limit?: number
  }

  /**
   * BulkOperation updateManyAndReturn
   */
  export type BulkOperationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * The data used to update BulkOperations.
     */
    data: XOR<BulkOperationUpdateManyMutationInput, BulkOperationUncheckedUpdateManyInput>
    /**
     * Filter which BulkOperations to update
     */
    where?: BulkOperationWhereInput
    /**
     * Limit how many BulkOperations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BulkOperation upsert
   */
  export type BulkOperationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * The filter to search for the BulkOperation to update in case it exists.
     */
    where: BulkOperationWhereUniqueInput
    /**
     * In case the BulkOperation found by the `where` argument doesn't exist, create a new BulkOperation with this data.
     */
    create: XOR<BulkOperationCreateInput, BulkOperationUncheckedCreateInput>
    /**
     * In case the BulkOperation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulkOperationUpdateInput, BulkOperationUncheckedUpdateInput>
  }

  /**
   * BulkOperation delete
   */
  export type BulkOperationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
    /**
     * Filter which BulkOperation to delete.
     */
    where: BulkOperationWhereUniqueInput
  }

  /**
   * BulkOperation deleteMany
   */
  export type BulkOperationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulkOperations to delete
     */
    where?: BulkOperationWhereInput
    /**
     * Limit how many BulkOperations to delete.
     */
    limit?: number
  }

  /**
   * BulkOperation without action
   */
  export type BulkOperationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulkOperation
     */
    select?: BulkOperationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulkOperation
     */
    omit?: BulkOperationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulkOperationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actionType: $Enums.ActionType | null
    tableName: string | null
    recordId: string | null
    performedBy: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actionType: $Enums.ActionType | null
    tableName: string | null
    recordId: string | null
    performedBy: string | null
    performedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actionType: number
    tableName: number
    recordId: number
    oldValues: number
    newValues: number
    performedBy: number
    performedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actionType?: true
    tableName?: true
    recordId?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actionType?: true
    tableName?: true
    recordId?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actionType?: true
    tableName?: true
    recordId?: true
    oldValues?: true
    newValues?: true
    performedBy?: true
    performedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actionType: $Enums.ActionType
    tableName: string | null
    recordId: string | null
    oldValues: JsonValue | null
    newValues: JsonValue | null
    performedBy: string | null
    performedAt: Date
    ipAddress: string | null
    userAgent: string | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    tableName?: boolean
    recordId?: boolean
    oldValues?: boolean
    newValues?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    tableName?: boolean
    recordId?: boolean
    oldValues?: boolean
    newValues?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actionType?: boolean
    tableName?: boolean
    recordId?: boolean
    oldValues?: boolean
    newValues?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actionType?: boolean
    tableName?: boolean
    recordId?: boolean
    oldValues?: boolean
    newValues?: boolean
    performedBy?: boolean
    performedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actionType" | "tableName" | "recordId" | "oldValues" | "newValues" | "performedBy" | "performedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actionType: $Enums.ActionType
      tableName: string | null
      recordId: string | null
      oldValues: Prisma.JsonValue | null
      newValues: Prisma.JsonValue | null
      performedBy: string | null
      performedAt: Date
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actionType: FieldRef<"AuditLog", 'ActionType'>
    readonly tableName: FieldRef<"AuditLog", 'String'>
    readonly recordId: FieldRef<"AuditLog", 'String'>
    readonly oldValues: FieldRef<"AuditLog", 'Json'>
    readonly newValues: FieldRef<"AuditLog", 'Json'>
    readonly performedBy: FieldRef<"AuditLog", 'String'>
    readonly performedAt: FieldRef<"AuditLog", 'DateTime'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
    readonly userAgent: FieldRef<"AuditLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Model EhrMappingsCache
   */

  export type AggregateEhrMappingsCache = {
    _count: EhrMappingsCacheCountAggregateOutputType | null
    _min: EhrMappingsCacheMinAggregateOutputType | null
    _max: EhrMappingsCacheMaxAggregateOutputType | null
  }

  export type EhrMappingsCacheMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    ehrProviderCode: string | null
    baseQuestionId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrMappingsCacheMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    ehrProviderCode: string | null
    baseQuestionId: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EhrMappingsCacheCountAggregateOutputType = {
    id: number
    clientId: number
    ehrProviderCode: number
    baseQuestionId: number
    mappingData: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EhrMappingsCacheMinAggregateInputType = {
    id?: true
    clientId?: true
    ehrProviderCode?: true
    baseQuestionId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrMappingsCacheMaxAggregateInputType = {
    id?: true
    clientId?: true
    ehrProviderCode?: true
    baseQuestionId?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EhrMappingsCacheCountAggregateInputType = {
    id?: true
    clientId?: true
    ehrProviderCode?: true
    baseQuestionId?: true
    mappingData?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EhrMappingsCacheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrMappingsCache to aggregate.
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappingsCaches to fetch.
     */
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EhrMappingsCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappingsCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappingsCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EhrMappingsCaches
    **/
    _count?: true | EhrMappingsCacheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EhrMappingsCacheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EhrMappingsCacheMaxAggregateInputType
  }

  export type GetEhrMappingsCacheAggregateType<T extends EhrMappingsCacheAggregateArgs> = {
        [P in keyof T & keyof AggregateEhrMappingsCache]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEhrMappingsCache[P]>
      : GetScalarType<T[P], AggregateEhrMappingsCache[P]>
  }




  export type EhrMappingsCacheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EhrMappingsCacheWhereInput
    orderBy?: EhrMappingsCacheOrderByWithAggregationInput | EhrMappingsCacheOrderByWithAggregationInput[]
    by: EhrMappingsCacheScalarFieldEnum[] | EhrMappingsCacheScalarFieldEnum
    having?: EhrMappingsCacheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EhrMappingsCacheCountAggregateInputType | true
    _min?: EhrMappingsCacheMinAggregateInputType
    _max?: EhrMappingsCacheMaxAggregateInputType
  }

  export type EhrMappingsCacheGroupByOutputType = {
    id: string
    clientId: string
    ehrProviderCode: string
    baseQuestionId: string
    mappingData: JsonValue
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: EhrMappingsCacheCountAggregateOutputType | null
    _min: EhrMappingsCacheMinAggregateOutputType | null
    _max: EhrMappingsCacheMaxAggregateOutputType | null
  }

  type GetEhrMappingsCacheGroupByPayload<T extends EhrMappingsCacheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EhrMappingsCacheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EhrMappingsCacheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EhrMappingsCacheGroupByOutputType[P]>
            : GetScalarType<T[P], EhrMappingsCacheGroupByOutputType[P]>
        }
      >
    >


  export type EhrMappingsCacheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    baseQuestionId?: boolean
    mappingData?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMappingsCache"]>

  export type EhrMappingsCacheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    baseQuestionId?: boolean
    mappingData?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMappingsCache"]>

  export type EhrMappingsCacheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    baseQuestionId?: boolean
    mappingData?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ehrMappingsCache"]>

  export type EhrMappingsCacheSelectScalar = {
    id?: boolean
    clientId?: boolean
    ehrProviderCode?: boolean
    baseQuestionId?: boolean
    mappingData?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EhrMappingsCacheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "ehrProviderCode" | "baseQuestionId" | "mappingData" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["ehrMappingsCache"]>
  export type EhrMappingsCacheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }
  export type EhrMappingsCacheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }
  export type EhrMappingsCacheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ehrProvider?: boolean | EhrProviderDefaultArgs<ExtArgs>
    baseQuestion?: boolean | BaseQuestionDefaultArgs<ExtArgs>
  }

  export type $EhrMappingsCachePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EhrMappingsCache"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      ehrProvider: Prisma.$EhrProviderPayload<ExtArgs>
      baseQuestion: Prisma.$BaseQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      ehrProviderCode: string
      baseQuestionId: string
      mappingData: Prisma.JsonValue
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ehrMappingsCache"]>
    composites: {}
  }

  type EhrMappingsCacheGetPayload<S extends boolean | null | undefined | EhrMappingsCacheDefaultArgs> = $Result.GetResult<Prisma.$EhrMappingsCachePayload, S>

  type EhrMappingsCacheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EhrMappingsCacheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EhrMappingsCacheCountAggregateInputType | true
    }

  export interface EhrMappingsCacheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EhrMappingsCache'], meta: { name: 'EhrMappingsCache' } }
    /**
     * Find zero or one EhrMappingsCache that matches the filter.
     * @param {EhrMappingsCacheFindUniqueArgs} args - Arguments to find a EhrMappingsCache
     * @example
     * // Get one EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EhrMappingsCacheFindUniqueArgs>(args: SelectSubset<T, EhrMappingsCacheFindUniqueArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EhrMappingsCache that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EhrMappingsCacheFindUniqueOrThrowArgs} args - Arguments to find a EhrMappingsCache
     * @example
     * // Get one EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EhrMappingsCacheFindUniqueOrThrowArgs>(args: SelectSubset<T, EhrMappingsCacheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrMappingsCache that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheFindFirstArgs} args - Arguments to find a EhrMappingsCache
     * @example
     * // Get one EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EhrMappingsCacheFindFirstArgs>(args?: SelectSubset<T, EhrMappingsCacheFindFirstArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EhrMappingsCache that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheFindFirstOrThrowArgs} args - Arguments to find a EhrMappingsCache
     * @example
     * // Get one EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EhrMappingsCacheFindFirstOrThrowArgs>(args?: SelectSubset<T, EhrMappingsCacheFindFirstOrThrowArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EhrMappingsCaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EhrMappingsCaches
     * const ehrMappingsCaches = await prisma.ehrMappingsCache.findMany()
     * 
     * // Get first 10 EhrMappingsCaches
     * const ehrMappingsCaches = await prisma.ehrMappingsCache.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ehrMappingsCacheWithIdOnly = await prisma.ehrMappingsCache.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EhrMappingsCacheFindManyArgs>(args?: SelectSubset<T, EhrMappingsCacheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EhrMappingsCache.
     * @param {EhrMappingsCacheCreateArgs} args - Arguments to create a EhrMappingsCache.
     * @example
     * // Create one EhrMappingsCache
     * const EhrMappingsCache = await prisma.ehrMappingsCache.create({
     *   data: {
     *     // ... data to create a EhrMappingsCache
     *   }
     * })
     * 
     */
    create<T extends EhrMappingsCacheCreateArgs>(args: SelectSubset<T, EhrMappingsCacheCreateArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EhrMappingsCaches.
     * @param {EhrMappingsCacheCreateManyArgs} args - Arguments to create many EhrMappingsCaches.
     * @example
     * // Create many EhrMappingsCaches
     * const ehrMappingsCache = await prisma.ehrMappingsCache.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EhrMappingsCacheCreateManyArgs>(args?: SelectSubset<T, EhrMappingsCacheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EhrMappingsCaches and returns the data saved in the database.
     * @param {EhrMappingsCacheCreateManyAndReturnArgs} args - Arguments to create many EhrMappingsCaches.
     * @example
     * // Create many EhrMappingsCaches
     * const ehrMappingsCache = await prisma.ehrMappingsCache.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EhrMappingsCaches and only return the `id`
     * const ehrMappingsCacheWithIdOnly = await prisma.ehrMappingsCache.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EhrMappingsCacheCreateManyAndReturnArgs>(args?: SelectSubset<T, EhrMappingsCacheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EhrMappingsCache.
     * @param {EhrMappingsCacheDeleteArgs} args - Arguments to delete one EhrMappingsCache.
     * @example
     * // Delete one EhrMappingsCache
     * const EhrMappingsCache = await prisma.ehrMappingsCache.delete({
     *   where: {
     *     // ... filter to delete one EhrMappingsCache
     *   }
     * })
     * 
     */
    delete<T extends EhrMappingsCacheDeleteArgs>(args: SelectSubset<T, EhrMappingsCacheDeleteArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EhrMappingsCache.
     * @param {EhrMappingsCacheUpdateArgs} args - Arguments to update one EhrMappingsCache.
     * @example
     * // Update one EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EhrMappingsCacheUpdateArgs>(args: SelectSubset<T, EhrMappingsCacheUpdateArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EhrMappingsCaches.
     * @param {EhrMappingsCacheDeleteManyArgs} args - Arguments to filter EhrMappingsCaches to delete.
     * @example
     * // Delete a few EhrMappingsCaches
     * const { count } = await prisma.ehrMappingsCache.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EhrMappingsCacheDeleteManyArgs>(args?: SelectSubset<T, EhrMappingsCacheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrMappingsCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EhrMappingsCaches
     * const ehrMappingsCache = await prisma.ehrMappingsCache.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EhrMappingsCacheUpdateManyArgs>(args: SelectSubset<T, EhrMappingsCacheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EhrMappingsCaches and returns the data updated in the database.
     * @param {EhrMappingsCacheUpdateManyAndReturnArgs} args - Arguments to update many EhrMappingsCaches.
     * @example
     * // Update many EhrMappingsCaches
     * const ehrMappingsCache = await prisma.ehrMappingsCache.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EhrMappingsCaches and only return the `id`
     * const ehrMappingsCacheWithIdOnly = await prisma.ehrMappingsCache.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EhrMappingsCacheUpdateManyAndReturnArgs>(args: SelectSubset<T, EhrMappingsCacheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EhrMappingsCache.
     * @param {EhrMappingsCacheUpsertArgs} args - Arguments to update or create a EhrMappingsCache.
     * @example
     * // Update or create a EhrMappingsCache
     * const ehrMappingsCache = await prisma.ehrMappingsCache.upsert({
     *   create: {
     *     // ... data to create a EhrMappingsCache
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EhrMappingsCache we want to update
     *   }
     * })
     */
    upsert<T extends EhrMappingsCacheUpsertArgs>(args: SelectSubset<T, EhrMappingsCacheUpsertArgs<ExtArgs>>): Prisma__EhrMappingsCacheClient<$Result.GetResult<Prisma.$EhrMappingsCachePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EhrMappingsCaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheCountArgs} args - Arguments to filter EhrMappingsCaches to count.
     * @example
     * // Count the number of EhrMappingsCaches
     * const count = await prisma.ehrMappingsCache.count({
     *   where: {
     *     // ... the filter for the EhrMappingsCaches we want to count
     *   }
     * })
    **/
    count<T extends EhrMappingsCacheCountArgs>(
      args?: Subset<T, EhrMappingsCacheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EhrMappingsCacheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EhrMappingsCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EhrMappingsCacheAggregateArgs>(args: Subset<T, EhrMappingsCacheAggregateArgs>): Prisma.PrismaPromise<GetEhrMappingsCacheAggregateType<T>>

    /**
     * Group by EhrMappingsCache.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EhrMappingsCacheGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EhrMappingsCacheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EhrMappingsCacheGroupByArgs['orderBy'] }
        : { orderBy?: EhrMappingsCacheGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EhrMappingsCacheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEhrMappingsCacheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EhrMappingsCache model
   */
  readonly fields: EhrMappingsCacheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EhrMappingsCache.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EhrMappingsCacheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ehrProvider<T extends EhrProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EhrProviderDefaultArgs<ExtArgs>>): Prisma__EhrProviderClient<$Result.GetResult<Prisma.$EhrProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    baseQuestion<T extends BaseQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseQuestionDefaultArgs<ExtArgs>>): Prisma__BaseQuestionClient<$Result.GetResult<Prisma.$BaseQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EhrMappingsCache model
   */
  interface EhrMappingsCacheFieldRefs {
    readonly id: FieldRef<"EhrMappingsCache", 'String'>
    readonly clientId: FieldRef<"EhrMappingsCache", 'String'>
    readonly ehrProviderCode: FieldRef<"EhrMappingsCache", 'String'>
    readonly baseQuestionId: FieldRef<"EhrMappingsCache", 'String'>
    readonly mappingData: FieldRef<"EhrMappingsCache", 'Json'>
    readonly expiresAt: FieldRef<"EhrMappingsCache", 'DateTime'>
    readonly createdAt: FieldRef<"EhrMappingsCache", 'DateTime'>
    readonly updatedAt: FieldRef<"EhrMappingsCache", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EhrMappingsCache findUnique
   */
  export type EhrMappingsCacheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappingsCache to fetch.
     */
    where: EhrMappingsCacheWhereUniqueInput
  }

  /**
   * EhrMappingsCache findUniqueOrThrow
   */
  export type EhrMappingsCacheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappingsCache to fetch.
     */
    where: EhrMappingsCacheWhereUniqueInput
  }

  /**
   * EhrMappingsCache findFirst
   */
  export type EhrMappingsCacheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappingsCache to fetch.
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappingsCaches to fetch.
     */
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrMappingsCaches.
     */
    cursor?: EhrMappingsCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappingsCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappingsCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrMappingsCaches.
     */
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * EhrMappingsCache findFirstOrThrow
   */
  export type EhrMappingsCacheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappingsCache to fetch.
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappingsCaches to fetch.
     */
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EhrMappingsCaches.
     */
    cursor?: EhrMappingsCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappingsCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappingsCaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EhrMappingsCaches.
     */
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * EhrMappingsCache findMany
   */
  export type EhrMappingsCacheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter, which EhrMappingsCaches to fetch.
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EhrMappingsCaches to fetch.
     */
    orderBy?: EhrMappingsCacheOrderByWithRelationInput | EhrMappingsCacheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EhrMappingsCaches.
     */
    cursor?: EhrMappingsCacheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EhrMappingsCaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EhrMappingsCaches.
     */
    skip?: number
    distinct?: EhrMappingsCacheScalarFieldEnum | EhrMappingsCacheScalarFieldEnum[]
  }

  /**
   * EhrMappingsCache create
   */
  export type EhrMappingsCacheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * The data needed to create a EhrMappingsCache.
     */
    data: XOR<EhrMappingsCacheCreateInput, EhrMappingsCacheUncheckedCreateInput>
  }

  /**
   * EhrMappingsCache createMany
   */
  export type EhrMappingsCacheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EhrMappingsCaches.
     */
    data: EhrMappingsCacheCreateManyInput | EhrMappingsCacheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EhrMappingsCache createManyAndReturn
   */
  export type EhrMappingsCacheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * The data used to create many EhrMappingsCaches.
     */
    data: EhrMappingsCacheCreateManyInput | EhrMappingsCacheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrMappingsCache update
   */
  export type EhrMappingsCacheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * The data needed to update a EhrMappingsCache.
     */
    data: XOR<EhrMappingsCacheUpdateInput, EhrMappingsCacheUncheckedUpdateInput>
    /**
     * Choose, which EhrMappingsCache to update.
     */
    where: EhrMappingsCacheWhereUniqueInput
  }

  /**
   * EhrMappingsCache updateMany
   */
  export type EhrMappingsCacheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EhrMappingsCaches.
     */
    data: XOR<EhrMappingsCacheUpdateManyMutationInput, EhrMappingsCacheUncheckedUpdateManyInput>
    /**
     * Filter which EhrMappingsCaches to update
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * Limit how many EhrMappingsCaches to update.
     */
    limit?: number
  }

  /**
   * EhrMappingsCache updateManyAndReturn
   */
  export type EhrMappingsCacheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * The data used to update EhrMappingsCaches.
     */
    data: XOR<EhrMappingsCacheUpdateManyMutationInput, EhrMappingsCacheUncheckedUpdateManyInput>
    /**
     * Filter which EhrMappingsCaches to update
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * Limit how many EhrMappingsCaches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EhrMappingsCache upsert
   */
  export type EhrMappingsCacheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * The filter to search for the EhrMappingsCache to update in case it exists.
     */
    where: EhrMappingsCacheWhereUniqueInput
    /**
     * In case the EhrMappingsCache found by the `where` argument doesn't exist, create a new EhrMappingsCache with this data.
     */
    create: XOR<EhrMappingsCacheCreateInput, EhrMappingsCacheUncheckedCreateInput>
    /**
     * In case the EhrMappingsCache was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EhrMappingsCacheUpdateInput, EhrMappingsCacheUncheckedUpdateInput>
  }

  /**
   * EhrMappingsCache delete
   */
  export type EhrMappingsCacheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
    /**
     * Filter which EhrMappingsCache to delete.
     */
    where: EhrMappingsCacheWhereUniqueInput
  }

  /**
   * EhrMappingsCache deleteMany
   */
  export type EhrMappingsCacheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EhrMappingsCaches to delete
     */
    where?: EhrMappingsCacheWhereInput
    /**
     * Limit how many EhrMappingsCaches to delete.
     */
    limit?: number
  }

  /**
   * EhrMappingsCache without action
   */
  export type EhrMappingsCacheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EhrMappingsCache
     */
    select?: EhrMappingsCacheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EhrMappingsCache
     */
    omit?: EhrMappingsCacheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EhrMappingsCacheInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LanguageScalarFieldEnum: {
    code: 'code',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const EhrProviderScalarFieldEnum: {
    code: 'code',
    name: 'name',
    baseUrl: 'baseUrl',
    authConfig: 'authConfig',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EhrProviderScalarFieldEnum = (typeof EhrProviderScalarFieldEnum)[keyof typeof EhrProviderScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    externalId: 'externalId',
    preferredEhr: 'preferredEhr',
    defaultLanguage: 'defaultLanguage',
    metadata: 'metadata',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const QuestionSetScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    name: 'name',
    description: 'description',
    version: 'version',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type QuestionSetScalarFieldEnum = (typeof QuestionSetScalarFieldEnum)[keyof typeof QuestionSetScalarFieldEnum]


  export const BaseQuestionScalarFieldEnum: {
    id: 'id',
    internalCode: 'internalCode',
    questionType: 'questionType',
    responseDataType: 'responseDataType',
    validationRules: 'validationRules',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BaseQuestionScalarFieldEnum = (typeof BaseQuestionScalarFieldEnum)[keyof typeof BaseQuestionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    baseQuestionId: 'baseQuestionId',
    questionSetId: 'questionSetId',
    languageCode: 'languageCode',
    questionText: 'questionText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const EhrMappingScalarFieldEnum: {
    id: 'id',
    baseQuestionId: 'baseQuestionId',
    ehrProviderCode: 'ehrProviderCode',
    ehrFieldPath: 'ehrFieldPath',
    ehrFieldType: 'ehrFieldType',
    transformationRule: 'transformationRule',
    ehrEndpoint: 'ehrEndpoint',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EhrMappingScalarFieldEnum = (typeof EhrMappingScalarFieldEnum)[keyof typeof EhrMappingScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    externalId: 'externalId',
    basicInfo: 'basicInfo',
    preferredLanguage: 'preferredLanguage',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PatientResponseScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    baseQuestionId: 'baseQuestionId',
    response: 'response',
    responseMeta: 'responseMeta',
    sessionId: 'sessionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientResponseScalarFieldEnum = (typeof PatientResponseScalarFieldEnum)[keyof typeof PatientResponseScalarFieldEnum]


  export const EhrSyncLogScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    clientId: 'clientId',
    ehrProviderCode: 'ehrProviderCode',
    syncStatus: 'syncStatus',
    requestPayload: 'requestPayload',
    responsePayload: 'responsePayload',
    errorDetails: 'errorDetails',
    retryCount: 'retryCount',
    nextRetryAt: 'nextRetryAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EhrSyncLogScalarFieldEnum = (typeof EhrSyncLogScalarFieldEnum)[keyof typeof EhrSyncLogScalarFieldEnum]


  export const BulkOperationScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    operationType: 'operationType',
    status: 'status',
    parameters: 'parameters',
    createdBy: 'createdBy',
    processedCount: 'processedCount',
    totalCount: 'totalCount',
    errorLog: 'errorLog',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    completedAt: 'completedAt'
  };

  export type BulkOperationScalarFieldEnum = (typeof BulkOperationScalarFieldEnum)[keyof typeof BulkOperationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actionType: 'actionType',
    tableName: 'tableName',
    recordId: 'recordId',
    oldValues: 'oldValues',
    newValues: 'newValues',
    performedBy: 'performedBy',
    performedAt: 'performedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const EhrMappingsCacheScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    ehrProviderCode: 'ehrProviderCode',
    baseQuestionId: 'baseQuestionId',
    mappingData: 'mappingData',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EhrMappingsCacheScalarFieldEnum = (typeof EhrMappingsCacheScalarFieldEnum)[keyof typeof EhrMappingsCacheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'QuestionType'
   */
  export type EnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType'>
    


  /**
   * Reference to a field of type 'QuestionType[]'
   */
  export type ListEnumQuestionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QuestionType[]'>
    


  /**
   * Reference to a field of type 'ResponseDataType'
   */
  export type EnumResponseDataTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseDataType'>
    


  /**
   * Reference to a field of type 'ResponseDataType[]'
   */
  export type ListEnumResponseDataTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseDataType[]'>
    


  /**
   * Reference to a field of type 'SyncStatus'
   */
  export type EnumSyncStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncStatus'>
    


  /**
   * Reference to a field of type 'SyncStatus[]'
   */
  export type ListEnumSyncStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SyncStatus[]'>
    


  /**
   * Reference to a field of type 'OperationType'
   */
  export type EnumOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationType'>
    


  /**
   * Reference to a field of type 'OperationType[]'
   */
  export type ListEnumOperationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperationType[]'>
    


  /**
   * Reference to a field of type 'ActionType'
   */
  export type EnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType'>
    


  /**
   * Reference to a field of type 'ActionType[]'
   */
  export type ListEnumActionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    code?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    questions?: QuestionListRelationFilter
    patients?: PatientListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    questions?: QuestionListRelationFilter
    patients?: PatientListRelationFilter
  }, "code">

  export type LanguageOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    isActive?: BoolWithAggregatesFilter<"Language"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
  }

  export type EhrProviderWhereInput = {
    AND?: EhrProviderWhereInput | EhrProviderWhereInput[]
    OR?: EhrProviderWhereInput[]
    NOT?: EhrProviderWhereInput | EhrProviderWhereInput[]
    code?: StringFilter<"EhrProvider"> | string
    name?: StringFilter<"EhrProvider"> | string
    baseUrl?: StringFilter<"EhrProvider"> | string
    authConfig?: JsonFilter<"EhrProvider">
    isActive?: BoolFilter<"EhrProvider"> | boolean
    createdAt?: DateTimeFilter<"EhrProvider"> | Date | string
    updatedAt?: DateTimeFilter<"EhrProvider"> | Date | string
    ehrMappings?: EhrMappingListRelationFilter
    syncLogs?: EhrSyncLogListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }

  export type EhrProviderOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    authConfig?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ehrMappings?: EhrMappingOrderByRelationAggregateInput
    syncLogs?: EhrSyncLogOrderByRelationAggregateInput
    EhrMappingsCache?: EhrMappingsCacheOrderByRelationAggregateInput
  }

  export type EhrProviderWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: EhrProviderWhereInput | EhrProviderWhereInput[]
    OR?: EhrProviderWhereInput[]
    NOT?: EhrProviderWhereInput | EhrProviderWhereInput[]
    name?: StringFilter<"EhrProvider"> | string
    baseUrl?: StringFilter<"EhrProvider"> | string
    authConfig?: JsonFilter<"EhrProvider">
    isActive?: BoolFilter<"EhrProvider"> | boolean
    createdAt?: DateTimeFilter<"EhrProvider"> | Date | string
    updatedAt?: DateTimeFilter<"EhrProvider"> | Date | string
    ehrMappings?: EhrMappingListRelationFilter
    syncLogs?: EhrSyncLogListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }, "code">

  export type EhrProviderOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    authConfig?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EhrProviderCountOrderByAggregateInput
    _max?: EhrProviderMaxOrderByAggregateInput
    _min?: EhrProviderMinOrderByAggregateInput
  }

  export type EhrProviderScalarWhereWithAggregatesInput = {
    AND?: EhrProviderScalarWhereWithAggregatesInput | EhrProviderScalarWhereWithAggregatesInput[]
    OR?: EhrProviderScalarWhereWithAggregatesInput[]
    NOT?: EhrProviderScalarWhereWithAggregatesInput | EhrProviderScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"EhrProvider"> | string
    name?: StringWithAggregatesFilter<"EhrProvider"> | string
    baseUrl?: StringWithAggregatesFilter<"EhrProvider"> | string
    authConfig?: JsonWithAggregatesFilter<"EhrProvider">
    isActive?: BoolWithAggregatesFilter<"EhrProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EhrProvider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EhrProvider"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    externalId?: StringNullableFilter<"Client"> | string | null
    preferredEhr?: StringFilter<"Client"> | string
    defaultLanguage?: StringFilter<"Client"> | string
    metadata?: JsonFilter<"Client">
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    questionSets?: QuestionSetListRelationFilter
    patients?: PatientListRelationFilter
    bulkOperations?: BulkOperationListRelationFilter
    EhrSyncLog?: EhrSyncLogListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    externalId?: SortOrderInput | SortOrder
    preferredEhr?: SortOrder
    defaultLanguage?: SortOrder
    metadata?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    questionSets?: QuestionSetOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    bulkOperations?: BulkOperationOrderByRelationAggregateInput
    EhrSyncLog?: EhrSyncLogOrderByRelationAggregateInput
    EhrMappingsCache?: EhrMappingsCacheOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    externalId?: StringNullableFilter<"Client"> | string | null
    preferredEhr?: StringFilter<"Client"> | string
    defaultLanguage?: StringFilter<"Client"> | string
    metadata?: JsonFilter<"Client">
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    questionSets?: QuestionSetListRelationFilter
    patients?: PatientListRelationFilter
    bulkOperations?: BulkOperationListRelationFilter
    EhrSyncLog?: EhrSyncLogListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    externalId?: SortOrderInput | SortOrder
    preferredEhr?: SortOrder
    defaultLanguage?: SortOrder
    metadata?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    externalId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    preferredEhr?: StringWithAggregatesFilter<"Client"> | string
    defaultLanguage?: StringWithAggregatesFilter<"Client"> | string
    metadata?: JsonWithAggregatesFilter<"Client">
    isActive?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type QuestionSetWhereInput = {
    AND?: QuestionSetWhereInput | QuestionSetWhereInput[]
    OR?: QuestionSetWhereInput[]
    NOT?: QuestionSetWhereInput | QuestionSetWhereInput[]
    id?: StringFilter<"QuestionSet"> | string
    clientId?: StringFilter<"QuestionSet"> | string
    name?: StringFilter<"QuestionSet"> | string
    description?: StringNullableFilter<"QuestionSet"> | string | null
    version?: IntFilter<"QuestionSet"> | number
    isActive?: BoolFilter<"QuestionSet"> | boolean
    createdAt?: DateTimeFilter<"QuestionSet"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionSet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"QuestionSet"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    questions?: QuestionListRelationFilter
  }

  export type QuestionSetOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type QuestionSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionSetWhereInput | QuestionSetWhereInput[]
    OR?: QuestionSetWhereInput[]
    NOT?: QuestionSetWhereInput | QuestionSetWhereInput[]
    clientId?: StringFilter<"QuestionSet"> | string
    name?: StringFilter<"QuestionSet"> | string
    description?: StringNullableFilter<"QuestionSet"> | string | null
    version?: IntFilter<"QuestionSet"> | number
    isActive?: BoolFilter<"QuestionSet"> | boolean
    createdAt?: DateTimeFilter<"QuestionSet"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionSet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"QuestionSet"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    questions?: QuestionListRelationFilter
  }, "id">

  export type QuestionSetOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: QuestionSetCountOrderByAggregateInput
    _avg?: QuestionSetAvgOrderByAggregateInput
    _max?: QuestionSetMaxOrderByAggregateInput
    _min?: QuestionSetMinOrderByAggregateInput
    _sum?: QuestionSetSumOrderByAggregateInput
  }

  export type QuestionSetScalarWhereWithAggregatesInput = {
    AND?: QuestionSetScalarWhereWithAggregatesInput | QuestionSetScalarWhereWithAggregatesInput[]
    OR?: QuestionSetScalarWhereWithAggregatesInput[]
    NOT?: QuestionSetScalarWhereWithAggregatesInput | QuestionSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionSet"> | string
    clientId?: StringWithAggregatesFilter<"QuestionSet"> | string
    name?: StringWithAggregatesFilter<"QuestionSet"> | string
    description?: StringNullableWithAggregatesFilter<"QuestionSet"> | string | null
    version?: IntWithAggregatesFilter<"QuestionSet"> | number
    isActive?: BoolWithAggregatesFilter<"QuestionSet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QuestionSet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionSet"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"QuestionSet"> | Date | string | null
  }

  export type BaseQuestionWhereInput = {
    AND?: BaseQuestionWhereInput | BaseQuestionWhereInput[]
    OR?: BaseQuestionWhereInput[]
    NOT?: BaseQuestionWhereInput | BaseQuestionWhereInput[]
    id?: StringFilter<"BaseQuestion"> | string
    internalCode?: StringFilter<"BaseQuestion"> | string
    questionType?: EnumQuestionTypeFilter<"BaseQuestion"> | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFilter<"BaseQuestion"> | $Enums.ResponseDataType
    validationRules?: JsonFilter<"BaseQuestion">
    metadata?: JsonFilter<"BaseQuestion">
    createdAt?: DateTimeFilter<"BaseQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"BaseQuestion"> | Date | string
    questions?: QuestionListRelationFilter
    ehrMappings?: EhrMappingListRelationFilter
    patientResponses?: PatientResponseListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }

  export type BaseQuestionOrderByWithRelationInput = {
    id?: SortOrder
    internalCode?: SortOrder
    questionType?: SortOrder
    responseDataType?: SortOrder
    validationRules?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    ehrMappings?: EhrMappingOrderByRelationAggregateInput
    patientResponses?: PatientResponseOrderByRelationAggregateInput
    EhrMappingsCache?: EhrMappingsCacheOrderByRelationAggregateInput
  }

  export type BaseQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    internalCode?: string
    AND?: BaseQuestionWhereInput | BaseQuestionWhereInput[]
    OR?: BaseQuestionWhereInput[]
    NOT?: BaseQuestionWhereInput | BaseQuestionWhereInput[]
    questionType?: EnumQuestionTypeFilter<"BaseQuestion"> | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFilter<"BaseQuestion"> | $Enums.ResponseDataType
    validationRules?: JsonFilter<"BaseQuestion">
    metadata?: JsonFilter<"BaseQuestion">
    createdAt?: DateTimeFilter<"BaseQuestion"> | Date | string
    updatedAt?: DateTimeFilter<"BaseQuestion"> | Date | string
    questions?: QuestionListRelationFilter
    ehrMappings?: EhrMappingListRelationFilter
    patientResponses?: PatientResponseListRelationFilter
    EhrMappingsCache?: EhrMappingsCacheListRelationFilter
  }, "id" | "internalCode">

  export type BaseQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    internalCode?: SortOrder
    questionType?: SortOrder
    responseDataType?: SortOrder
    validationRules?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BaseQuestionCountOrderByAggregateInput
    _max?: BaseQuestionMaxOrderByAggregateInput
    _min?: BaseQuestionMinOrderByAggregateInput
  }

  export type BaseQuestionScalarWhereWithAggregatesInput = {
    AND?: BaseQuestionScalarWhereWithAggregatesInput | BaseQuestionScalarWhereWithAggregatesInput[]
    OR?: BaseQuestionScalarWhereWithAggregatesInput[]
    NOT?: BaseQuestionScalarWhereWithAggregatesInput | BaseQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BaseQuestion"> | string
    internalCode?: StringWithAggregatesFilter<"BaseQuestion"> | string
    questionType?: EnumQuestionTypeWithAggregatesFilter<"BaseQuestion"> | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeWithAggregatesFilter<"BaseQuestion"> | $Enums.ResponseDataType
    validationRules?: JsonWithAggregatesFilter<"BaseQuestion">
    metadata?: JsonWithAggregatesFilter<"BaseQuestion">
    createdAt?: DateTimeWithAggregatesFilter<"BaseQuestion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BaseQuestion"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    baseQuestionId?: StringFilter<"Question"> | string
    questionSetId?: StringFilter<"Question"> | string
    languageCode?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
    questionSet?: XOR<QuestionSetScalarRelationFilter, QuestionSetWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    questionSetId?: SortOrder
    languageCode?: SortOrder
    questionText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseQuestion?: BaseQuestionOrderByWithRelationInput
    questionSet?: QuestionSetOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_question_translation?: QuestionUnique_question_translationCompoundUniqueInput
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    baseQuestionId?: StringFilter<"Question"> | string
    questionSetId?: StringFilter<"Question"> | string
    languageCode?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
    questionSet?: XOR<QuestionSetScalarRelationFilter, QuestionSetWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id" | "unique_question_translation">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    questionSetId?: SortOrder
    languageCode?: SortOrder
    questionText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    baseQuestionId?: StringWithAggregatesFilter<"Question"> | string
    questionSetId?: StringWithAggregatesFilter<"Question"> | string
    languageCode?: StringWithAggregatesFilter<"Question"> | string
    questionText?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type EhrMappingWhereInput = {
    AND?: EhrMappingWhereInput | EhrMappingWhereInput[]
    OR?: EhrMappingWhereInput[]
    NOT?: EhrMappingWhereInput | EhrMappingWhereInput[]
    id?: StringFilter<"EhrMapping"> | string
    baseQuestionId?: StringFilter<"EhrMapping"> | string
    ehrProviderCode?: StringFilter<"EhrMapping"> | string
    ehrFieldPath?: StringFilter<"EhrMapping"> | string
    ehrFieldType?: StringFilter<"EhrMapping"> | string
    transformationRule?: StringNullableFilter<"EhrMapping"> | string | null
    ehrEndpoint?: StringFilter<"EhrMapping"> | string
    isActive?: BoolFilter<"EhrMapping"> | boolean
    createdAt?: DateTimeFilter<"EhrMapping"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMapping"> | Date | string
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
  }

  export type EhrMappingOrderByWithRelationInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    ehrProviderCode?: SortOrder
    ehrFieldPath?: SortOrder
    ehrFieldType?: SortOrder
    transformationRule?: SortOrderInput | SortOrder
    ehrEndpoint?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseQuestion?: BaseQuestionOrderByWithRelationInput
    ehrProvider?: EhrProviderOrderByWithRelationInput
  }

  export type EhrMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_question_ehr_mapping?: EhrMappingUnique_question_ehr_mappingCompoundUniqueInput
    AND?: EhrMappingWhereInput | EhrMappingWhereInput[]
    OR?: EhrMappingWhereInput[]
    NOT?: EhrMappingWhereInput | EhrMappingWhereInput[]
    baseQuestionId?: StringFilter<"EhrMapping"> | string
    ehrProviderCode?: StringFilter<"EhrMapping"> | string
    ehrFieldPath?: StringFilter<"EhrMapping"> | string
    ehrFieldType?: StringFilter<"EhrMapping"> | string
    transformationRule?: StringNullableFilter<"EhrMapping"> | string | null
    ehrEndpoint?: StringFilter<"EhrMapping"> | string
    isActive?: BoolFilter<"EhrMapping"> | boolean
    createdAt?: DateTimeFilter<"EhrMapping"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMapping"> | Date | string
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
  }, "id" | "unique_question_ehr_mapping">

  export type EhrMappingOrderByWithAggregationInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    ehrProviderCode?: SortOrder
    ehrFieldPath?: SortOrder
    ehrFieldType?: SortOrder
    transformationRule?: SortOrderInput | SortOrder
    ehrEndpoint?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EhrMappingCountOrderByAggregateInput
    _max?: EhrMappingMaxOrderByAggregateInput
    _min?: EhrMappingMinOrderByAggregateInput
  }

  export type EhrMappingScalarWhereWithAggregatesInput = {
    AND?: EhrMappingScalarWhereWithAggregatesInput | EhrMappingScalarWhereWithAggregatesInput[]
    OR?: EhrMappingScalarWhereWithAggregatesInput[]
    NOT?: EhrMappingScalarWhereWithAggregatesInput | EhrMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EhrMapping"> | string
    baseQuestionId?: StringWithAggregatesFilter<"EhrMapping"> | string
    ehrProviderCode?: StringWithAggregatesFilter<"EhrMapping"> | string
    ehrFieldPath?: StringWithAggregatesFilter<"EhrMapping"> | string
    ehrFieldType?: StringWithAggregatesFilter<"EhrMapping"> | string
    transformationRule?: StringNullableWithAggregatesFilter<"EhrMapping"> | string | null
    ehrEndpoint?: StringWithAggregatesFilter<"EhrMapping"> | string
    isActive?: BoolWithAggregatesFilter<"EhrMapping"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"EhrMapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EhrMapping"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    clientId?: StringFilter<"Patient"> | string
    externalId?: StringNullableFilter<"Patient"> | string | null
    basicInfo?: JsonFilter<"Patient">
    preferredLanguage?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
    responses?: PatientResponseListRelationFilter
    syncLogs?: EhrSyncLogListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    basicInfo?: SortOrder
    preferredLanguage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
    responses?: PatientResponseOrderByRelationAggregateInput
    syncLogs?: EhrSyncLogOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_client_patient?: PatientUnique_client_patientCompoundUniqueInput
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    clientId?: StringFilter<"Patient"> | string
    externalId?: StringNullableFilter<"Patient"> | string | null
    basicInfo?: JsonFilter<"Patient">
    preferredLanguage?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
    responses?: PatientResponseListRelationFilter
    syncLogs?: EhrSyncLogListRelationFilter
  }, "id" | "unique_client_patient">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    externalId?: SortOrderInput | SortOrder
    basicInfo?: SortOrder
    preferredLanguage?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    clientId?: StringWithAggregatesFilter<"Patient"> | string
    externalId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    basicInfo?: JsonWithAggregatesFilter<"Patient">
    preferredLanguage?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    isActive?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
  }

  export type PatientResponseWhereInput = {
    AND?: PatientResponseWhereInput | PatientResponseWhereInput[]
    OR?: PatientResponseWhereInput[]
    NOT?: PatientResponseWhereInput | PatientResponseWhereInput[]
    id?: StringFilter<"PatientResponse"> | string
    patientId?: StringFilter<"PatientResponse"> | string
    baseQuestionId?: StringFilter<"PatientResponse"> | string
    response?: StringFilter<"PatientResponse"> | string
    responseMeta?: JsonFilter<"PatientResponse">
    sessionId?: StringNullableFilter<"PatientResponse"> | string | null
    createdAt?: DateTimeFilter<"PatientResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PatientResponse"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
  }

  export type PatientResponseOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    baseQuestionId?: SortOrder
    response?: SortOrder
    responseMeta?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    baseQuestion?: BaseQuestionOrderByWithRelationInput
  }

  export type PatientResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_patient_response?: PatientResponseUnique_patient_responseCompoundUniqueInput
    AND?: PatientResponseWhereInput | PatientResponseWhereInput[]
    OR?: PatientResponseWhereInput[]
    NOT?: PatientResponseWhereInput | PatientResponseWhereInput[]
    patientId?: StringFilter<"PatientResponse"> | string
    baseQuestionId?: StringFilter<"PatientResponse"> | string
    response?: StringFilter<"PatientResponse"> | string
    responseMeta?: JsonFilter<"PatientResponse">
    sessionId?: StringNullableFilter<"PatientResponse"> | string | null
    createdAt?: DateTimeFilter<"PatientResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PatientResponse"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
  }, "id" | "unique_patient_response">

  export type PatientResponseOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    baseQuestionId?: SortOrder
    response?: SortOrder
    responseMeta?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientResponseCountOrderByAggregateInput
    _max?: PatientResponseMaxOrderByAggregateInput
    _min?: PatientResponseMinOrderByAggregateInput
  }

  export type PatientResponseScalarWhereWithAggregatesInput = {
    AND?: PatientResponseScalarWhereWithAggregatesInput | PatientResponseScalarWhereWithAggregatesInput[]
    OR?: PatientResponseScalarWhereWithAggregatesInput[]
    NOT?: PatientResponseScalarWhereWithAggregatesInput | PatientResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientResponse"> | string
    patientId?: StringWithAggregatesFilter<"PatientResponse"> | string
    baseQuestionId?: StringWithAggregatesFilter<"PatientResponse"> | string
    response?: StringWithAggregatesFilter<"PatientResponse"> | string
    responseMeta?: JsonWithAggregatesFilter<"PatientResponse">
    sessionId?: StringNullableWithAggregatesFilter<"PatientResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientResponse"> | Date | string
  }

  export type EhrSyncLogWhereInput = {
    AND?: EhrSyncLogWhereInput | EhrSyncLogWhereInput[]
    OR?: EhrSyncLogWhereInput[]
    NOT?: EhrSyncLogWhereInput | EhrSyncLogWhereInput[]
    id?: StringFilter<"EhrSyncLog"> | string
    patientId?: StringFilter<"EhrSyncLog"> | string
    clientId?: StringFilter<"EhrSyncLog"> | string
    ehrProviderCode?: StringFilter<"EhrSyncLog"> | string
    syncStatus?: EnumSyncStatusFilter<"EhrSyncLog"> | $Enums.SyncStatus
    requestPayload?: JsonNullableFilter<"EhrSyncLog">
    responsePayload?: JsonNullableFilter<"EhrSyncLog">
    errorDetails?: JsonNullableFilter<"EhrSyncLog">
    retryCount?: IntFilter<"EhrSyncLog"> | number
    nextRetryAt?: DateTimeNullableFilter<"EhrSyncLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
    updatedAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
  }

  export type EhrSyncLogOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    syncStatus?: SortOrder
    requestPayload?: SortOrderInput | SortOrder
    responsePayload?: SortOrderInput | SortOrder
    errorDetails?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    ehrProvider?: EhrProviderOrderByWithRelationInput
  }

  export type EhrSyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EhrSyncLogWhereInput | EhrSyncLogWhereInput[]
    OR?: EhrSyncLogWhereInput[]
    NOT?: EhrSyncLogWhereInput | EhrSyncLogWhereInput[]
    patientId?: StringFilter<"EhrSyncLog"> | string
    clientId?: StringFilter<"EhrSyncLog"> | string
    ehrProviderCode?: StringFilter<"EhrSyncLog"> | string
    syncStatus?: EnumSyncStatusFilter<"EhrSyncLog"> | $Enums.SyncStatus
    requestPayload?: JsonNullableFilter<"EhrSyncLog">
    responsePayload?: JsonNullableFilter<"EhrSyncLog">
    errorDetails?: JsonNullableFilter<"EhrSyncLog">
    retryCount?: IntFilter<"EhrSyncLog"> | number
    nextRetryAt?: DateTimeNullableFilter<"EhrSyncLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
    updatedAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
  }, "id">

  export type EhrSyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    syncStatus?: SortOrder
    requestPayload?: SortOrderInput | SortOrder
    responsePayload?: SortOrderInput | SortOrder
    errorDetails?: SortOrderInput | SortOrder
    retryCount?: SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EhrSyncLogCountOrderByAggregateInput
    _avg?: EhrSyncLogAvgOrderByAggregateInput
    _max?: EhrSyncLogMaxOrderByAggregateInput
    _min?: EhrSyncLogMinOrderByAggregateInput
    _sum?: EhrSyncLogSumOrderByAggregateInput
  }

  export type EhrSyncLogScalarWhereWithAggregatesInput = {
    AND?: EhrSyncLogScalarWhereWithAggregatesInput | EhrSyncLogScalarWhereWithAggregatesInput[]
    OR?: EhrSyncLogScalarWhereWithAggregatesInput[]
    NOT?: EhrSyncLogScalarWhereWithAggregatesInput | EhrSyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EhrSyncLog"> | string
    patientId?: StringWithAggregatesFilter<"EhrSyncLog"> | string
    clientId?: StringWithAggregatesFilter<"EhrSyncLog"> | string
    ehrProviderCode?: StringWithAggregatesFilter<"EhrSyncLog"> | string
    syncStatus?: EnumSyncStatusWithAggregatesFilter<"EhrSyncLog"> | $Enums.SyncStatus
    requestPayload?: JsonNullableWithAggregatesFilter<"EhrSyncLog">
    responsePayload?: JsonNullableWithAggregatesFilter<"EhrSyncLog">
    errorDetails?: JsonNullableWithAggregatesFilter<"EhrSyncLog">
    retryCount?: IntWithAggregatesFilter<"EhrSyncLog"> | number
    nextRetryAt?: DateTimeNullableWithAggregatesFilter<"EhrSyncLog"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EhrSyncLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EhrSyncLog"> | Date | string
  }

  export type BulkOperationWhereInput = {
    AND?: BulkOperationWhereInput | BulkOperationWhereInput[]
    OR?: BulkOperationWhereInput[]
    NOT?: BulkOperationWhereInput | BulkOperationWhereInput[]
    id?: StringFilter<"BulkOperation"> | string
    clientId?: StringFilter<"BulkOperation"> | string
    operationType?: EnumOperationTypeFilter<"BulkOperation"> | $Enums.OperationType
    status?: EnumSyncStatusFilter<"BulkOperation"> | $Enums.SyncStatus
    parameters?: JsonFilter<"BulkOperation">
    createdBy?: StringNullableFilter<"BulkOperation"> | string | null
    processedCount?: IntFilter<"BulkOperation"> | number
    totalCount?: IntFilter<"BulkOperation"> | number
    errorLog?: StringNullableFilter<"BulkOperation"> | string | null
    createdAt?: DateTimeFilter<"BulkOperation"> | Date | string
    updatedAt?: DateTimeFilter<"BulkOperation"> | Date | string
    completedAt?: DateTimeNullableFilter<"BulkOperation"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type BulkOperationOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    parameters?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type BulkOperationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulkOperationWhereInput | BulkOperationWhereInput[]
    OR?: BulkOperationWhereInput[]
    NOT?: BulkOperationWhereInput | BulkOperationWhereInput[]
    clientId?: StringFilter<"BulkOperation"> | string
    operationType?: EnumOperationTypeFilter<"BulkOperation"> | $Enums.OperationType
    status?: EnumSyncStatusFilter<"BulkOperation"> | $Enums.SyncStatus
    parameters?: JsonFilter<"BulkOperation">
    createdBy?: StringNullableFilter<"BulkOperation"> | string | null
    processedCount?: IntFilter<"BulkOperation"> | number
    totalCount?: IntFilter<"BulkOperation"> | number
    errorLog?: StringNullableFilter<"BulkOperation"> | string | null
    createdAt?: DateTimeFilter<"BulkOperation"> | Date | string
    updatedAt?: DateTimeFilter<"BulkOperation"> | Date | string
    completedAt?: DateTimeNullableFilter<"BulkOperation"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type BulkOperationOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    parameters?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: BulkOperationCountOrderByAggregateInput
    _avg?: BulkOperationAvgOrderByAggregateInput
    _max?: BulkOperationMaxOrderByAggregateInput
    _min?: BulkOperationMinOrderByAggregateInput
    _sum?: BulkOperationSumOrderByAggregateInput
  }

  export type BulkOperationScalarWhereWithAggregatesInput = {
    AND?: BulkOperationScalarWhereWithAggregatesInput | BulkOperationScalarWhereWithAggregatesInput[]
    OR?: BulkOperationScalarWhereWithAggregatesInput[]
    NOT?: BulkOperationScalarWhereWithAggregatesInput | BulkOperationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulkOperation"> | string
    clientId?: StringWithAggregatesFilter<"BulkOperation"> | string
    operationType?: EnumOperationTypeWithAggregatesFilter<"BulkOperation"> | $Enums.OperationType
    status?: EnumSyncStatusWithAggregatesFilter<"BulkOperation"> | $Enums.SyncStatus
    parameters?: JsonWithAggregatesFilter<"BulkOperation">
    createdBy?: StringNullableWithAggregatesFilter<"BulkOperation"> | string | null
    processedCount?: IntWithAggregatesFilter<"BulkOperation"> | number
    totalCount?: IntWithAggregatesFilter<"BulkOperation"> | number
    errorLog?: StringNullableWithAggregatesFilter<"BulkOperation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BulkOperation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BulkOperation"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"BulkOperation"> | Date | string | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actionType?: EnumActionTypeFilter<"AuditLog"> | $Enums.ActionType
    tableName?: StringNullableFilter<"AuditLog"> | string | null
    recordId?: StringNullableFilter<"AuditLog"> | string | null
    oldValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    performedAt?: DateTimeFilter<"AuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actionType?: SortOrder
    tableName?: SortOrderInput | SortOrder
    recordId?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actionType?: EnumActionTypeFilter<"AuditLog"> | $Enums.ActionType
    tableName?: StringNullableFilter<"AuditLog"> | string | null
    recordId?: StringNullableFilter<"AuditLog"> | string | null
    oldValues?: JsonNullableFilter<"AuditLog">
    newValues?: JsonNullableFilter<"AuditLog">
    performedBy?: StringNullableFilter<"AuditLog"> | string | null
    performedAt?: DateTimeFilter<"AuditLog"> | Date | string
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    userAgent?: StringNullableFilter<"AuditLog"> | string | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actionType?: SortOrder
    tableName?: SortOrderInput | SortOrder
    recordId?: SortOrderInput | SortOrder
    oldValues?: SortOrderInput | SortOrder
    newValues?: SortOrderInput | SortOrder
    performedBy?: SortOrderInput | SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actionType?: EnumActionTypeWithAggregatesFilter<"AuditLog"> | $Enums.ActionType
    tableName?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    recordId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    oldValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValues?: JsonNullableWithAggregatesFilter<"AuditLog">
    performedBy?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    performedAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
  }

  export type EhrMappingsCacheWhereInput = {
    AND?: EhrMappingsCacheWhereInput | EhrMappingsCacheWhereInput[]
    OR?: EhrMappingsCacheWhereInput[]
    NOT?: EhrMappingsCacheWhereInput | EhrMappingsCacheWhereInput[]
    id?: StringFilter<"EhrMappingsCache"> | string
    clientId?: StringFilter<"EhrMappingsCache"> | string
    ehrProviderCode?: StringFilter<"EhrMappingsCache"> | string
    baseQuestionId?: StringFilter<"EhrMappingsCache"> | string
    mappingData?: JsonFilter<"EhrMappingsCache">
    expiresAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    createdAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
  }

  export type EhrMappingsCacheOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    baseQuestionId?: SortOrder
    mappingData?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    ehrProvider?: EhrProviderOrderByWithRelationInput
    baseQuestion?: BaseQuestionOrderByWithRelationInput
  }

  export type EhrMappingsCacheWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_mapping_cache?: EhrMappingsCacheUnique_mapping_cacheCompoundUniqueInput
    AND?: EhrMappingsCacheWhereInput | EhrMappingsCacheWhereInput[]
    OR?: EhrMappingsCacheWhereInput[]
    NOT?: EhrMappingsCacheWhereInput | EhrMappingsCacheWhereInput[]
    clientId?: StringFilter<"EhrMappingsCache"> | string
    ehrProviderCode?: StringFilter<"EhrMappingsCache"> | string
    baseQuestionId?: StringFilter<"EhrMappingsCache"> | string
    mappingData?: JsonFilter<"EhrMappingsCache">
    expiresAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    createdAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ehrProvider?: XOR<EhrProviderScalarRelationFilter, EhrProviderWhereInput>
    baseQuestion?: XOR<BaseQuestionScalarRelationFilter, BaseQuestionWhereInput>
  }, "id" | "unique_mapping_cache">

  export type EhrMappingsCacheOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    baseQuestionId?: SortOrder
    mappingData?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EhrMappingsCacheCountOrderByAggregateInput
    _max?: EhrMappingsCacheMaxOrderByAggregateInput
    _min?: EhrMappingsCacheMinOrderByAggregateInput
  }

  export type EhrMappingsCacheScalarWhereWithAggregatesInput = {
    AND?: EhrMappingsCacheScalarWhereWithAggregatesInput | EhrMappingsCacheScalarWhereWithAggregatesInput[]
    OR?: EhrMappingsCacheScalarWhereWithAggregatesInput[]
    NOT?: EhrMappingsCacheScalarWhereWithAggregatesInput | EhrMappingsCacheScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EhrMappingsCache"> | string
    clientId?: StringWithAggregatesFilter<"EhrMappingsCache"> | string
    ehrProviderCode?: StringWithAggregatesFilter<"EhrMappingsCache"> | string
    baseQuestionId?: StringWithAggregatesFilter<"EhrMappingsCache"> | string
    mappingData?: JsonWithAggregatesFilter<"EhrMappingsCache">
    expiresAt?: DateTimeWithAggregatesFilter<"EhrMappingsCache"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EhrMappingsCache"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EhrMappingsCache"> | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutLanguageInput
    patients?: PatientCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutLanguageInput
    patients?: PatientUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutLanguageNestedInput
    patients?: PatientUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutLanguageNestedInput
    patients?: PatientUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrProviderCreateInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingCreateNestedManyWithoutEhrProviderInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderUncheckedCreateInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutEhrProviderInput
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUpdateManyWithoutEhrProviderNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutEhrProviderNestedInput
  }

  export type EhrProviderUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutEhrProviderNestedInput
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderNestedInput
  }

  export type EhrProviderCreateManyInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrProviderUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrProviderUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetCreateNestedManyWithoutClientInput
    patients?: PatientCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetUncheckedCreateNestedManyWithoutClientInput
    patients?: PatientUncheckedCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationUncheckedCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogUncheckedCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUpdateManyWithoutClientNestedInput
    patients?: PatientUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUncheckedUpdateManyWithoutClientNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUncheckedUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionSetCreateInput = {
    id?: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutQuestionSetsInput
    questions?: QuestionCreateNestedManyWithoutQuestionSetInput
  }

  export type QuestionSetUncheckedCreateInput = {
    id?: string
    clientId: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionSetInput
  }

  export type QuestionSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutQuestionSetsNestedInput
    questions?: QuestionUpdateManyWithoutQuestionSetNestedInput
  }

  export type QuestionSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionUncheckedUpdateManyWithoutQuestionSetNestedInput
  }

  export type QuestionSetCreateManyInput = {
    id?: string
    clientId: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type QuestionSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BaseQuestionCreateInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUncheckedCreateInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseUncheckedCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUncheckedUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionCreateManyInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutQuestionsInput
    questionSet: QuestionSetCreateNestedOneWithoutQuestionsInput
    language: LanguageCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    baseQuestionId: string
    questionSetId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutQuestionsNestedInput
    questionSet?: QuestionSetUpdateOneRequiredWithoutQuestionsNestedInput
    language?: LanguageUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    baseQuestionId: string
    questionSetId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingCreateInput = {
    id?: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutEhrMappingsInput
    ehrProvider: EhrProviderCreateNestedOneWithoutEhrMappingsInput
  }

  export type EhrMappingUncheckedCreateInput = {
    id?: string
    baseQuestionId: string
    ehrProviderCode: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutEhrMappingsNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutEhrMappingsNestedInput
  }

  export type EhrMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingCreateManyInput = {
    id?: string
    baseQuestionId: string
    ehrProviderCode: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutPatientsInput
    language?: LanguageCreateNestedOneWithoutPatientsInput
    responses?: PatientResponseCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    responses?: PatientResponseUncheckedCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutPatientsNestedInput
    language?: LanguageUpdateOneWithoutPatientsNestedInput
    responses?: PatientResponseUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: PatientResponseUncheckedUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientResponseCreateInput = {
    id?: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutResponsesInput
    baseQuestion: BaseQuestionCreateNestedOneWithoutPatientResponsesInput
  }

  export type PatientResponseUncheckedCreateInput = {
    id?: string
    patientId: string
    baseQuestionId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutResponsesNestedInput
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutPatientResponsesNestedInput
  }

  export type PatientResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseCreateManyInput = {
    id?: string
    patientId: string
    baseQuestionId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogCreateInput = {
    id?: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutSyncLogsInput
    client: ClientCreateNestedOneWithoutEhrSyncLogInput
    ehrProvider: EhrProviderCreateNestedOneWithoutSyncLogsInput
  }

  export type EhrSyncLogUncheckedCreateInput = {
    id?: string
    patientId: string
    clientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSyncLogsNestedInput
    client?: ClientUpdateOneRequiredWithoutEhrSyncLogNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutSyncLogsNestedInput
  }

  export type EhrSyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogCreateManyInput = {
    id?: string
    patientId: string
    clientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulkOperationCreateInput = {
    id?: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutBulkOperationsInput
  }

  export type BulkOperationUncheckedCreateInput = {
    id?: string
    clientId: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BulkOperationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutBulkOperationsNestedInput
  }

  export type BulkOperationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BulkOperationCreateManyInput = {
    id?: string
    clientId: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BulkOperationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BulkOperationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateInput = {
    id?: string
    actionType: $Enums.ActionType
    tableName?: string | null
    recordId?: string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actionType: $Enums.ActionType
    tableName?: string | null
    recordId?: string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    recordId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    recordId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actionType: $Enums.ActionType
    tableName?: string | null
    recordId?: string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: string | null
    performedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    recordId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actionType?: EnumActionTypeFieldUpdateOperationsInput | $Enums.ActionType
    tableName?: NullableStringFieldUpdateOperationsInput | string | null
    recordId?: NullableStringFieldUpdateOperationsInput | string | null
    oldValues?: NullableJsonNullValueInput | InputJsonValue
    newValues?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: NullableStringFieldUpdateOperationsInput | string | null
    performedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EhrMappingsCacheCreateInput = {
    id?: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEhrMappingsCacheInput
    ehrProvider: EhrProviderCreateNestedOneWithoutEhrMappingsCacheInput
    baseQuestion: BaseQuestionCreateNestedOneWithoutEhrMappingsCacheInput
  }

  export type EhrMappingsCacheUncheckedCreateInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
  }

  export type EhrMappingsCacheUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheCreateManyInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EhrMappingListRelationFilter = {
    every?: EhrMappingWhereInput
    some?: EhrMappingWhereInput
    none?: EhrMappingWhereInput
  }

  export type EhrSyncLogListRelationFilter = {
    every?: EhrSyncLogWhereInput
    some?: EhrSyncLogWhereInput
    none?: EhrSyncLogWhereInput
  }

  export type EhrMappingsCacheListRelationFilter = {
    every?: EhrMappingsCacheWhereInput
    some?: EhrMappingsCacheWhereInput
    none?: EhrMappingsCacheWhereInput
  }

  export type EhrMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EhrSyncLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EhrMappingsCacheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EhrProviderCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    authConfig?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrProviderMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrProviderMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    baseUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type QuestionSetListRelationFilter = {
    every?: QuestionSetWhereInput
    some?: QuestionSetWhereInput
    none?: QuestionSetWhereInput
  }

  export type BulkOperationListRelationFilter = {
    every?: BulkOperationWhereInput
    some?: BulkOperationWhereInput
    none?: BulkOperationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionSetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BulkOperationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalId?: SortOrder
    preferredEhr?: SortOrder
    defaultLanguage?: SortOrder
    metadata?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalId?: SortOrder
    preferredEhr?: SortOrder
    defaultLanguage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    externalId?: SortOrder
    preferredEhr?: SortOrder
    defaultLanguage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type QuestionSetCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionSetAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type QuestionSetMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionSetMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type QuestionSetSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type EnumResponseDataTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseDataType | EnumResponseDataTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseDataTypeFilter<$PrismaModel> | $Enums.ResponseDataType
  }

  export type PatientResponseListRelationFilter = {
    every?: PatientResponseWhereInput
    some?: PatientResponseWhereInput
    none?: PatientResponseWhereInput
  }

  export type PatientResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    internalCode?: SortOrder
    questionType?: SortOrder
    responseDataType?: SortOrder
    validationRules?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    internalCode?: SortOrder
    questionType?: SortOrder
    responseDataType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    internalCode?: SortOrder
    questionType?: SortOrder
    responseDataType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type EnumResponseDataTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseDataType | EnumResponseDataTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseDataTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResponseDataType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseDataTypeFilter<$PrismaModel>
    _max?: NestedEnumResponseDataTypeFilter<$PrismaModel>
  }

  export type BaseQuestionScalarRelationFilter = {
    is?: BaseQuestionWhereInput
    isNot?: BaseQuestionWhereInput
  }

  export type QuestionSetScalarRelationFilter = {
    is?: QuestionSetWhereInput
    isNot?: QuestionSetWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type QuestionUnique_question_translationCompoundUniqueInput = {
    baseQuestionId: string
    questionSetId: string
    languageCode: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    questionSetId?: SortOrder
    languageCode?: SortOrder
    questionText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    questionSetId?: SortOrder
    languageCode?: SortOrder
    questionText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    questionSetId?: SortOrder
    languageCode?: SortOrder
    questionText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrProviderScalarRelationFilter = {
    is?: EhrProviderWhereInput
    isNot?: EhrProviderWhereInput
  }

  export type EhrMappingUnique_question_ehr_mappingCompoundUniqueInput = {
    baseQuestionId: string
    ehrProviderCode: string
  }

  export type EhrMappingCountOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    ehrProviderCode?: SortOrder
    ehrFieldPath?: SortOrder
    ehrFieldType?: SortOrder
    transformationRule?: SortOrder
    ehrEndpoint?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    ehrProviderCode?: SortOrder
    ehrFieldPath?: SortOrder
    ehrFieldType?: SortOrder
    transformationRule?: SortOrder
    ehrEndpoint?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrMappingMinOrderByAggregateInput = {
    id?: SortOrder
    baseQuestionId?: SortOrder
    ehrProviderCode?: SortOrder
    ehrFieldPath?: SortOrder
    ehrFieldType?: SortOrder
    transformationRule?: SortOrder
    ehrEndpoint?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageNullableScalarRelationFilter = {
    is?: LanguageWhereInput | null
    isNot?: LanguageWhereInput | null
  }

  export type PatientUnique_client_patientCompoundUniqueInput = {
    clientId: string
    externalId: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    externalId?: SortOrder
    basicInfo?: SortOrder
    preferredLanguage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    externalId?: SortOrder
    preferredLanguage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    externalId?: SortOrder
    preferredLanguage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientResponseUnique_patient_responseCompoundUniqueInput = {
    patientId: string
    baseQuestionId: string
    sessionId: string
  }

  export type PatientResponseCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    baseQuestionId?: SortOrder
    response?: SortOrder
    responseMeta?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    baseQuestionId?: SortOrder
    response?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientResponseMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    baseQuestionId?: SortOrder
    response?: SortOrder
    sessionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSyncStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusFilter<$PrismaModel> | $Enums.SyncStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EhrSyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    syncStatus?: SortOrder
    requestPayload?: SortOrder
    responsePayload?: SortOrder
    errorDetails?: SortOrder
    retryCount?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrSyncLogAvgOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EhrSyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    syncStatus?: SortOrder
    retryCount?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrSyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    syncStatus?: SortOrder
    retryCount?: SortOrder
    nextRetryAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrSyncLogSumOrderByAggregateInput = {
    retryCount?: SortOrder
  }

  export type EnumSyncStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeFilter<$PrismaModel> | $Enums.OperationType
  }

  export type BulkOperationCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    parameters?: SortOrder
    createdBy?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BulkOperationAvgOrderByAggregateInput = {
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type BulkOperationMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BulkOperationMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    operationType?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type BulkOperationSumOrderByAggregateInput = {
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type EnumOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumOperationTypeFilter<$PrismaModel>
  }

  export type EnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    oldValues?: SortOrder
    newValues?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actionType?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    performedBy?: SortOrder
    performedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type EnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type EhrMappingsCacheUnique_mapping_cacheCompoundUniqueInput = {
    clientId: string
    ehrProviderCode: string
    baseQuestionId: string
  }

  export type EhrMappingsCacheCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    baseQuestionId?: SortOrder
    mappingData?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrMappingsCacheMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    baseQuestionId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EhrMappingsCacheMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    ehrProviderCode?: SortOrder
    baseQuestionId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutLanguageInput = {
    create?: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput> | QuestionCreateWithoutLanguageInput[] | QuestionUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLanguageInput | QuestionCreateOrConnectWithoutLanguageInput[]
    createMany?: QuestionCreateManyLanguageInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutLanguageInput = {
    create?: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput> | PatientCreateWithoutLanguageInput[] | PatientUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLanguageInput | PatientCreateOrConnectWithoutLanguageInput[]
    createMany?: PatientCreateManyLanguageInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput> | QuestionCreateWithoutLanguageInput[] | QuestionUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLanguageInput | QuestionCreateOrConnectWithoutLanguageInput[]
    createMany?: QuestionCreateManyLanguageInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput> | PatientCreateWithoutLanguageInput[] | PatientUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLanguageInput | PatientCreateOrConnectWithoutLanguageInput[]
    createMany?: PatientCreateManyLanguageInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput> | QuestionCreateWithoutLanguageInput[] | QuestionUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLanguageInput | QuestionCreateOrConnectWithoutLanguageInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutLanguageInput | QuestionUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: QuestionCreateManyLanguageInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutLanguageInput | QuestionUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutLanguageInput | QuestionUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput> | PatientCreateWithoutLanguageInput[] | PatientUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLanguageInput | PatientCreateOrConnectWithoutLanguageInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLanguageInput | PatientUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: PatientCreateManyLanguageInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLanguageInput | PatientUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLanguageInput | PatientUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput> | QuestionCreateWithoutLanguageInput[] | QuestionUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutLanguageInput | QuestionCreateOrConnectWithoutLanguageInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutLanguageInput | QuestionUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: QuestionCreateManyLanguageInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutLanguageInput | QuestionUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutLanguageInput | QuestionUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput> | PatientCreateWithoutLanguageInput[] | PatientUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutLanguageInput | PatientCreateOrConnectWithoutLanguageInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutLanguageInput | PatientUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: PatientCreateManyLanguageInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutLanguageInput | PatientUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutLanguageInput | PatientUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type EhrMappingCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput> | EhrMappingCreateWithoutEhrProviderInput[] | EhrMappingUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutEhrProviderInput | EhrMappingCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrMappingCreateManyEhrProviderInputEnvelope
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
  }

  export type EhrSyncLogCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput> | EhrSyncLogCreateWithoutEhrProviderInput[] | EhrSyncLogUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutEhrProviderInput | EhrSyncLogCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrSyncLogCreateManyEhrProviderInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type EhrMappingsCacheCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput> | EhrMappingsCacheCreateWithoutEhrProviderInput[] | EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput | EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrMappingsCacheCreateManyEhrProviderInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type EhrMappingUncheckedCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput> | EhrMappingCreateWithoutEhrProviderInput[] | EhrMappingUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutEhrProviderInput | EhrMappingCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrMappingCreateManyEhrProviderInputEnvelope
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
  }

  export type EhrSyncLogUncheckedCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput> | EhrSyncLogCreateWithoutEhrProviderInput[] | EhrSyncLogUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutEhrProviderInput | EhrSyncLogCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrSyncLogCreateManyEhrProviderInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type EhrMappingsCacheUncheckedCreateNestedManyWithoutEhrProviderInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput> | EhrMappingsCacheCreateWithoutEhrProviderInput[] | EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput | EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput[]
    createMany?: EhrMappingsCacheCreateManyEhrProviderInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type EhrMappingUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput> | EhrMappingCreateWithoutEhrProviderInput[] | EhrMappingUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutEhrProviderInput | EhrMappingCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrMappingUpsertWithWhereUniqueWithoutEhrProviderInput | EhrMappingUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrMappingCreateManyEhrProviderInputEnvelope
    set?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    disconnect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    delete?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    update?: EhrMappingUpdateWithWhereUniqueWithoutEhrProviderInput | EhrMappingUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrMappingUpdateManyWithWhereWithoutEhrProviderInput | EhrMappingUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
  }

  export type EhrSyncLogUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput> | EhrSyncLogCreateWithoutEhrProviderInput[] | EhrSyncLogUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutEhrProviderInput | EhrSyncLogCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutEhrProviderInput | EhrSyncLogUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrSyncLogCreateManyEhrProviderInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutEhrProviderInput | EhrSyncLogUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutEhrProviderInput | EhrSyncLogUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type EhrMappingsCacheUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput> | EhrMappingsCacheCreateWithoutEhrProviderInput[] | EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput | EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutEhrProviderInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrMappingsCacheCreateManyEhrProviderInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutEhrProviderInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutEhrProviderInput | EhrMappingsCacheUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type EhrMappingUncheckedUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput> | EhrMappingCreateWithoutEhrProviderInput[] | EhrMappingUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutEhrProviderInput | EhrMappingCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrMappingUpsertWithWhereUniqueWithoutEhrProviderInput | EhrMappingUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrMappingCreateManyEhrProviderInputEnvelope
    set?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    disconnect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    delete?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    update?: EhrMappingUpdateWithWhereUniqueWithoutEhrProviderInput | EhrMappingUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrMappingUpdateManyWithWhereWithoutEhrProviderInput | EhrMappingUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput> | EhrSyncLogCreateWithoutEhrProviderInput[] | EhrSyncLogUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutEhrProviderInput | EhrSyncLogCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutEhrProviderInput | EhrSyncLogUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrSyncLogCreateManyEhrProviderInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutEhrProviderInput | EhrSyncLogUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutEhrProviderInput | EhrSyncLogUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput> | EhrMappingsCacheCreateWithoutEhrProviderInput[] | EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput | EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutEhrProviderInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutEhrProviderInput[]
    createMany?: EhrMappingsCacheCreateManyEhrProviderInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutEhrProviderInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutEhrProviderInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutEhrProviderInput | EhrMappingsCacheUpdateManyWithWhereWithoutEhrProviderInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type QuestionSetCreateNestedManyWithoutClientInput = {
    create?: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput> | QuestionSetCreateWithoutClientInput[] | QuestionSetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuestionSetCreateOrConnectWithoutClientInput | QuestionSetCreateOrConnectWithoutClientInput[]
    createMany?: QuestionSetCreateManyClientInputEnvelope
    connect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutClientInput = {
    create?: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput> | PatientCreateWithoutClientInput[] | PatientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClientInput | PatientCreateOrConnectWithoutClientInput[]
    createMany?: PatientCreateManyClientInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type BulkOperationCreateNestedManyWithoutClientInput = {
    create?: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput> | BulkOperationCreateWithoutClientInput[] | BulkOperationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BulkOperationCreateOrConnectWithoutClientInput | BulkOperationCreateOrConnectWithoutClientInput[]
    createMany?: BulkOperationCreateManyClientInputEnvelope
    connect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
  }

  export type EhrSyncLogCreateNestedManyWithoutClientInput = {
    create?: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput> | EhrSyncLogCreateWithoutClientInput[] | EhrSyncLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutClientInput | EhrSyncLogCreateOrConnectWithoutClientInput[]
    createMany?: EhrSyncLogCreateManyClientInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type EhrMappingsCacheCreateNestedManyWithoutClientInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput> | EhrMappingsCacheCreateWithoutClientInput[] | EhrMappingsCacheUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutClientInput | EhrMappingsCacheCreateOrConnectWithoutClientInput[]
    createMany?: EhrMappingsCacheCreateManyClientInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type QuestionSetUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput> | QuestionSetCreateWithoutClientInput[] | QuestionSetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuestionSetCreateOrConnectWithoutClientInput | QuestionSetCreateOrConnectWithoutClientInput[]
    createMany?: QuestionSetCreateManyClientInputEnvelope
    connect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput> | PatientCreateWithoutClientInput[] | PatientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClientInput | PatientCreateOrConnectWithoutClientInput[]
    createMany?: PatientCreateManyClientInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type BulkOperationUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput> | BulkOperationCreateWithoutClientInput[] | BulkOperationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BulkOperationCreateOrConnectWithoutClientInput | BulkOperationCreateOrConnectWithoutClientInput[]
    createMany?: BulkOperationCreateManyClientInputEnvelope
    connect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
  }

  export type EhrSyncLogUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput> | EhrSyncLogCreateWithoutClientInput[] | EhrSyncLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutClientInput | EhrSyncLogCreateOrConnectWithoutClientInput[]
    createMany?: EhrSyncLogCreateManyClientInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput> | EhrMappingsCacheCreateWithoutClientInput[] | EhrMappingsCacheUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutClientInput | EhrMappingsCacheCreateOrConnectWithoutClientInput[]
    createMany?: EhrMappingsCacheCreateManyClientInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type QuestionSetUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput> | QuestionSetCreateWithoutClientInput[] | QuestionSetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuestionSetCreateOrConnectWithoutClientInput | QuestionSetCreateOrConnectWithoutClientInput[]
    upsert?: QuestionSetUpsertWithWhereUniqueWithoutClientInput | QuestionSetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuestionSetCreateManyClientInputEnvelope
    set?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    disconnect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    delete?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    connect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    update?: QuestionSetUpdateWithWhereUniqueWithoutClientInput | QuestionSetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuestionSetUpdateManyWithWhereWithoutClientInput | QuestionSetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuestionSetScalarWhereInput | QuestionSetScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutClientNestedInput = {
    create?: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput> | PatientCreateWithoutClientInput[] | PatientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClientInput | PatientCreateOrConnectWithoutClientInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClientInput | PatientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PatientCreateManyClientInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClientInput | PatientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClientInput | PatientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type BulkOperationUpdateManyWithoutClientNestedInput = {
    create?: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput> | BulkOperationCreateWithoutClientInput[] | BulkOperationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BulkOperationCreateOrConnectWithoutClientInput | BulkOperationCreateOrConnectWithoutClientInput[]
    upsert?: BulkOperationUpsertWithWhereUniqueWithoutClientInput | BulkOperationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BulkOperationCreateManyClientInputEnvelope
    set?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    disconnect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    delete?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    connect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    update?: BulkOperationUpdateWithWhereUniqueWithoutClientInput | BulkOperationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BulkOperationUpdateManyWithWhereWithoutClientInput | BulkOperationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BulkOperationScalarWhereInput | BulkOperationScalarWhereInput[]
  }

  export type EhrSyncLogUpdateManyWithoutClientNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput> | EhrSyncLogCreateWithoutClientInput[] | EhrSyncLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutClientInput | EhrSyncLogCreateOrConnectWithoutClientInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutClientInput | EhrSyncLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EhrSyncLogCreateManyClientInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutClientInput | EhrSyncLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutClientInput | EhrSyncLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type EhrMappingsCacheUpdateManyWithoutClientNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput> | EhrMappingsCacheCreateWithoutClientInput[] | EhrMappingsCacheUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutClientInput | EhrMappingsCacheCreateOrConnectWithoutClientInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutClientInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EhrMappingsCacheCreateManyClientInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutClientInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutClientInput | EhrMappingsCacheUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type QuestionSetUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput> | QuestionSetCreateWithoutClientInput[] | QuestionSetUncheckedCreateWithoutClientInput[]
    connectOrCreate?: QuestionSetCreateOrConnectWithoutClientInput | QuestionSetCreateOrConnectWithoutClientInput[]
    upsert?: QuestionSetUpsertWithWhereUniqueWithoutClientInput | QuestionSetUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: QuestionSetCreateManyClientInputEnvelope
    set?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    disconnect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    delete?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    connect?: QuestionSetWhereUniqueInput | QuestionSetWhereUniqueInput[]
    update?: QuestionSetUpdateWithWhereUniqueWithoutClientInput | QuestionSetUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: QuestionSetUpdateManyWithWhereWithoutClientInput | QuestionSetUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: QuestionSetScalarWhereInput | QuestionSetScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput> | PatientCreateWithoutClientInput[] | PatientUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutClientInput | PatientCreateOrConnectWithoutClientInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutClientInput | PatientUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PatientCreateManyClientInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutClientInput | PatientUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutClientInput | PatientUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type BulkOperationUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput> | BulkOperationCreateWithoutClientInput[] | BulkOperationUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BulkOperationCreateOrConnectWithoutClientInput | BulkOperationCreateOrConnectWithoutClientInput[]
    upsert?: BulkOperationUpsertWithWhereUniqueWithoutClientInput | BulkOperationUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BulkOperationCreateManyClientInputEnvelope
    set?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    disconnect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    delete?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    connect?: BulkOperationWhereUniqueInput | BulkOperationWhereUniqueInput[]
    update?: BulkOperationUpdateWithWhereUniqueWithoutClientInput | BulkOperationUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BulkOperationUpdateManyWithWhereWithoutClientInput | BulkOperationUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BulkOperationScalarWhereInput | BulkOperationScalarWhereInput[]
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput> | EhrSyncLogCreateWithoutClientInput[] | EhrSyncLogUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutClientInput | EhrSyncLogCreateOrConnectWithoutClientInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutClientInput | EhrSyncLogUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EhrSyncLogCreateManyClientInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutClientInput | EhrSyncLogUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutClientInput | EhrSyncLogUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput> | EhrMappingsCacheCreateWithoutClientInput[] | EhrMappingsCacheUncheckedCreateWithoutClientInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutClientInput | EhrMappingsCacheCreateOrConnectWithoutClientInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutClientInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: EhrMappingsCacheCreateManyClientInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutClientInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutClientInput | EhrMappingsCacheUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutQuestionSetsInput = {
    create?: XOR<ClientCreateWithoutQuestionSetsInput, ClientUncheckedCreateWithoutQuestionSetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutQuestionSetsInput
    connect?: ClientWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuestionSetInput = {
    create?: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput> | QuestionCreateWithoutQuestionSetInput[] | QuestionUncheckedCreateWithoutQuestionSetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionSetInput | QuestionCreateOrConnectWithoutQuestionSetInput[]
    createMany?: QuestionCreateManyQuestionSetInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuestionSetInput = {
    create?: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput> | QuestionCreateWithoutQuestionSetInput[] | QuestionUncheckedCreateWithoutQuestionSetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionSetInput | QuestionCreateOrConnectWithoutQuestionSetInput[]
    createMany?: QuestionCreateManyQuestionSetInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutQuestionSetsNestedInput = {
    create?: XOR<ClientCreateWithoutQuestionSetsInput, ClientUncheckedCreateWithoutQuestionSetsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutQuestionSetsInput
    upsert?: ClientUpsertWithoutQuestionSetsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutQuestionSetsInput, ClientUpdateWithoutQuestionSetsInput>, ClientUncheckedUpdateWithoutQuestionSetsInput>
  }

  export type QuestionUpdateManyWithoutQuestionSetNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput> | QuestionCreateWithoutQuestionSetInput[] | QuestionUncheckedCreateWithoutQuestionSetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionSetInput | QuestionCreateOrConnectWithoutQuestionSetInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuestionSetInput | QuestionUpsertWithWhereUniqueWithoutQuestionSetInput[]
    createMany?: QuestionCreateManyQuestionSetInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuestionSetInput | QuestionUpdateWithWhereUniqueWithoutQuestionSetInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuestionSetInput | QuestionUpdateManyWithWhereWithoutQuestionSetInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionSetNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput> | QuestionCreateWithoutQuestionSetInput[] | QuestionUncheckedCreateWithoutQuestionSetInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionSetInput | QuestionCreateOrConnectWithoutQuestionSetInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuestionSetInput | QuestionUpsertWithWhereUniqueWithoutQuestionSetInput[]
    createMany?: QuestionCreateManyQuestionSetInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuestionSetInput | QuestionUpdateWithWhereUniqueWithoutQuestionSetInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuestionSetInput | QuestionUpdateManyWithWhereWithoutQuestionSetInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput> | QuestionCreateWithoutBaseQuestionInput[] | QuestionUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutBaseQuestionInput | QuestionCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: QuestionCreateManyBaseQuestionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EhrMappingCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput> | EhrMappingCreateWithoutBaseQuestionInput[] | EhrMappingUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutBaseQuestionInput | EhrMappingCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: EhrMappingCreateManyBaseQuestionInputEnvelope
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
  }

  export type PatientResponseCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput> | PatientResponseCreateWithoutBaseQuestionInput[] | PatientResponseUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutBaseQuestionInput | PatientResponseCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: PatientResponseCreateManyBaseQuestionInputEnvelope
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
  }

  export type EhrMappingsCacheCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput> | EhrMappingsCacheCreateWithoutBaseQuestionInput[] | EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput | EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: EhrMappingsCacheCreateManyBaseQuestionInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput> | QuestionCreateWithoutBaseQuestionInput[] | QuestionUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutBaseQuestionInput | QuestionCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: QuestionCreateManyBaseQuestionInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type EhrMappingUncheckedCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput> | EhrMappingCreateWithoutBaseQuestionInput[] | EhrMappingUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutBaseQuestionInput | EhrMappingCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: EhrMappingCreateManyBaseQuestionInputEnvelope
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
  }

  export type PatientResponseUncheckedCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput> | PatientResponseCreateWithoutBaseQuestionInput[] | PatientResponseUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutBaseQuestionInput | PatientResponseCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: PatientResponseCreateManyBaseQuestionInputEnvelope
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
  }

  export type EhrMappingsCacheUncheckedCreateNestedManyWithoutBaseQuestionInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput> | EhrMappingsCacheCreateWithoutBaseQuestionInput[] | EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput | EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput[]
    createMany?: EhrMappingsCacheCreateManyBaseQuestionInputEnvelope
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
  }

  export type EnumQuestionTypeFieldUpdateOperationsInput = {
    set?: $Enums.QuestionType
  }

  export type EnumResponseDataTypeFieldUpdateOperationsInput = {
    set?: $Enums.ResponseDataType
  }

  export type QuestionUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput> | QuestionCreateWithoutBaseQuestionInput[] | QuestionUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutBaseQuestionInput | QuestionCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutBaseQuestionInput | QuestionUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: QuestionCreateManyBaseQuestionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutBaseQuestionInput | QuestionUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutBaseQuestionInput | QuestionUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type EhrMappingUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput> | EhrMappingCreateWithoutBaseQuestionInput[] | EhrMappingUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutBaseQuestionInput | EhrMappingCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: EhrMappingUpsertWithWhereUniqueWithoutBaseQuestionInput | EhrMappingUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: EhrMappingCreateManyBaseQuestionInputEnvelope
    set?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    disconnect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    delete?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    update?: EhrMappingUpdateWithWhereUniqueWithoutBaseQuestionInput | EhrMappingUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: EhrMappingUpdateManyWithWhereWithoutBaseQuestionInput | EhrMappingUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
  }

  export type PatientResponseUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput> | PatientResponseCreateWithoutBaseQuestionInput[] | PatientResponseUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutBaseQuestionInput | PatientResponseCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: PatientResponseUpsertWithWhereUniqueWithoutBaseQuestionInput | PatientResponseUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: PatientResponseCreateManyBaseQuestionInputEnvelope
    set?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    disconnect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    delete?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    update?: PatientResponseUpdateWithWhereUniqueWithoutBaseQuestionInput | PatientResponseUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: PatientResponseUpdateManyWithWhereWithoutBaseQuestionInput | PatientResponseUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
  }

  export type EhrMappingsCacheUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput> | EhrMappingsCacheCreateWithoutBaseQuestionInput[] | EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput | EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutBaseQuestionInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: EhrMappingsCacheCreateManyBaseQuestionInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutBaseQuestionInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutBaseQuestionInput | EhrMappingsCacheUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput> | QuestionCreateWithoutBaseQuestionInput[] | QuestionUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutBaseQuestionInput | QuestionCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutBaseQuestionInput | QuestionUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: QuestionCreateManyBaseQuestionInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutBaseQuestionInput | QuestionUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutBaseQuestionInput | QuestionUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type EhrMappingUncheckedUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput> | EhrMappingCreateWithoutBaseQuestionInput[] | EhrMappingUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingCreateOrConnectWithoutBaseQuestionInput | EhrMappingCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: EhrMappingUpsertWithWhereUniqueWithoutBaseQuestionInput | EhrMappingUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: EhrMappingCreateManyBaseQuestionInputEnvelope
    set?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    disconnect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    delete?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    connect?: EhrMappingWhereUniqueInput | EhrMappingWhereUniqueInput[]
    update?: EhrMappingUpdateWithWhereUniqueWithoutBaseQuestionInput | EhrMappingUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: EhrMappingUpdateManyWithWhereWithoutBaseQuestionInput | EhrMappingUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
  }

  export type PatientResponseUncheckedUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput> | PatientResponseCreateWithoutBaseQuestionInput[] | PatientResponseUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutBaseQuestionInput | PatientResponseCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: PatientResponseUpsertWithWhereUniqueWithoutBaseQuestionInput | PatientResponseUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: PatientResponseCreateManyBaseQuestionInputEnvelope
    set?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    disconnect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    delete?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    update?: PatientResponseUpdateWithWhereUniqueWithoutBaseQuestionInput | PatientResponseUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: PatientResponseUpdateManyWithWhereWithoutBaseQuestionInput | PatientResponseUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionNestedInput = {
    create?: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput> | EhrMappingsCacheCreateWithoutBaseQuestionInput[] | EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput[]
    connectOrCreate?: EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput | EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput[]
    upsert?: EhrMappingsCacheUpsertWithWhereUniqueWithoutBaseQuestionInput | EhrMappingsCacheUpsertWithWhereUniqueWithoutBaseQuestionInput[]
    createMany?: EhrMappingsCacheCreateManyBaseQuestionInputEnvelope
    set?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    disconnect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    delete?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    connect?: EhrMappingsCacheWhereUniqueInput | EhrMappingsCacheWhereUniqueInput[]
    update?: EhrMappingsCacheUpdateWithWhereUniqueWithoutBaseQuestionInput | EhrMappingsCacheUpdateWithWhereUniqueWithoutBaseQuestionInput[]
    updateMany?: EhrMappingsCacheUpdateManyWithWhereWithoutBaseQuestionInput | EhrMappingsCacheUpdateManyWithWhereWithoutBaseQuestionInput[]
    deleteMany?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
  }

  export type BaseQuestionCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<BaseQuestionCreateWithoutQuestionsInput, BaseQuestionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutQuestionsInput
    connect?: BaseQuestionWhereUniqueInput
  }

  export type QuestionSetCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuestionSetCreateWithoutQuestionsInput, QuestionSetUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionSetCreateOrConnectWithoutQuestionsInput
    connect?: QuestionSetWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<LanguageCreateWithoutQuestionsInput, LanguageUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutQuestionsInput
    connect?: LanguageWhereUniqueInput
  }

  export type BaseQuestionUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<BaseQuestionCreateWithoutQuestionsInput, BaseQuestionUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutQuestionsInput
    upsert?: BaseQuestionUpsertWithoutQuestionsInput
    connect?: BaseQuestionWhereUniqueInput
    update?: XOR<XOR<BaseQuestionUpdateToOneWithWhereWithoutQuestionsInput, BaseQuestionUpdateWithoutQuestionsInput>, BaseQuestionUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionSetUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<QuestionSetCreateWithoutQuestionsInput, QuestionSetUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuestionSetCreateOrConnectWithoutQuestionsInput
    upsert?: QuestionSetUpsertWithoutQuestionsInput
    connect?: QuestionSetWhereUniqueInput
    update?: XOR<XOR<QuestionSetUpdateToOneWithWhereWithoutQuestionsInput, QuestionSetUpdateWithoutQuestionsInput>, QuestionSetUncheckedUpdateWithoutQuestionsInput>
  }

  export type LanguageUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<LanguageCreateWithoutQuestionsInput, LanguageUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutQuestionsInput
    upsert?: LanguageUpsertWithoutQuestionsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutQuestionsInput, LanguageUpdateWithoutQuestionsInput>, LanguageUncheckedUpdateWithoutQuestionsInput>
  }

  export type BaseQuestionCreateNestedOneWithoutEhrMappingsInput = {
    create?: XOR<BaseQuestionCreateWithoutEhrMappingsInput, BaseQuestionUncheckedCreateWithoutEhrMappingsInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutEhrMappingsInput
    connect?: BaseQuestionWhereUniqueInput
  }

  export type EhrProviderCreateNestedOneWithoutEhrMappingsInput = {
    create?: XOR<EhrProviderCreateWithoutEhrMappingsInput, EhrProviderUncheckedCreateWithoutEhrMappingsInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutEhrMappingsInput
    connect?: EhrProviderWhereUniqueInput
  }

  export type BaseQuestionUpdateOneRequiredWithoutEhrMappingsNestedInput = {
    create?: XOR<BaseQuestionCreateWithoutEhrMappingsInput, BaseQuestionUncheckedCreateWithoutEhrMappingsInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutEhrMappingsInput
    upsert?: BaseQuestionUpsertWithoutEhrMappingsInput
    connect?: BaseQuestionWhereUniqueInput
    update?: XOR<XOR<BaseQuestionUpdateToOneWithWhereWithoutEhrMappingsInput, BaseQuestionUpdateWithoutEhrMappingsInput>, BaseQuestionUncheckedUpdateWithoutEhrMappingsInput>
  }

  export type EhrProviderUpdateOneRequiredWithoutEhrMappingsNestedInput = {
    create?: XOR<EhrProviderCreateWithoutEhrMappingsInput, EhrProviderUncheckedCreateWithoutEhrMappingsInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutEhrMappingsInput
    upsert?: EhrProviderUpsertWithoutEhrMappingsInput
    connect?: EhrProviderWhereUniqueInput
    update?: XOR<XOR<EhrProviderUpdateToOneWithWhereWithoutEhrMappingsInput, EhrProviderUpdateWithoutEhrMappingsInput>, EhrProviderUncheckedUpdateWithoutEhrMappingsInput>
  }

  export type ClientCreateNestedOneWithoutPatientsInput = {
    create?: XOR<ClientCreateWithoutPatientsInput, ClientUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPatientsInput
    connect?: ClientWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutPatientsInput = {
    create?: XOR<LanguageCreateWithoutPatientsInput, LanguageUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutPatientsInput
    connect?: LanguageWhereUniqueInput
  }

  export type PatientResponseCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput> | PatientResponseCreateWithoutPatientInput[] | PatientResponseUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutPatientInput | PatientResponseCreateOrConnectWithoutPatientInput[]
    createMany?: PatientResponseCreateManyPatientInputEnvelope
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
  }

  export type EhrSyncLogCreateNestedManyWithoutPatientInput = {
    create?: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput> | EhrSyncLogCreateWithoutPatientInput[] | EhrSyncLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutPatientInput | EhrSyncLogCreateOrConnectWithoutPatientInput[]
    createMany?: EhrSyncLogCreateManyPatientInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type PatientResponseUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput> | PatientResponseCreateWithoutPatientInput[] | PatientResponseUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutPatientInput | PatientResponseCreateOrConnectWithoutPatientInput[]
    createMany?: PatientResponseCreateManyPatientInputEnvelope
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
  }

  export type EhrSyncLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput> | EhrSyncLogCreateWithoutPatientInput[] | EhrSyncLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutPatientInput | EhrSyncLogCreateOrConnectWithoutPatientInput[]
    createMany?: EhrSyncLogCreateManyPatientInputEnvelope
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutPatientsNestedInput = {
    create?: XOR<ClientCreateWithoutPatientsInput, ClientUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPatientsInput
    upsert?: ClientUpsertWithoutPatientsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPatientsInput, ClientUpdateWithoutPatientsInput>, ClientUncheckedUpdateWithoutPatientsInput>
  }

  export type LanguageUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<LanguageCreateWithoutPatientsInput, LanguageUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutPatientsInput
    upsert?: LanguageUpsertWithoutPatientsInput
    disconnect?: LanguageWhereInput | boolean
    delete?: LanguageWhereInput | boolean
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutPatientsInput, LanguageUpdateWithoutPatientsInput>, LanguageUncheckedUpdateWithoutPatientsInput>
  }

  export type PatientResponseUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput> | PatientResponseCreateWithoutPatientInput[] | PatientResponseUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutPatientInput | PatientResponseCreateOrConnectWithoutPatientInput[]
    upsert?: PatientResponseUpsertWithWhereUniqueWithoutPatientInput | PatientResponseUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientResponseCreateManyPatientInputEnvelope
    set?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    disconnect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    delete?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    update?: PatientResponseUpdateWithWhereUniqueWithoutPatientInput | PatientResponseUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientResponseUpdateManyWithWhereWithoutPatientInput | PatientResponseUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
  }

  export type EhrSyncLogUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput> | EhrSyncLogCreateWithoutPatientInput[] | EhrSyncLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutPatientInput | EhrSyncLogCreateOrConnectWithoutPatientInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutPatientInput | EhrSyncLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EhrSyncLogCreateManyPatientInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutPatientInput | EhrSyncLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutPatientInput | EhrSyncLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type PatientResponseUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput> | PatientResponseCreateWithoutPatientInput[] | PatientResponseUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PatientResponseCreateOrConnectWithoutPatientInput | PatientResponseCreateOrConnectWithoutPatientInput[]
    upsert?: PatientResponseUpsertWithWhereUniqueWithoutPatientInput | PatientResponseUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PatientResponseCreateManyPatientInputEnvelope
    set?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    disconnect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    delete?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    connect?: PatientResponseWhereUniqueInput | PatientResponseWhereUniqueInput[]
    update?: PatientResponseUpdateWithWhereUniqueWithoutPatientInput | PatientResponseUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PatientResponseUpdateManyWithWhereWithoutPatientInput | PatientResponseUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput> | EhrSyncLogCreateWithoutPatientInput[] | EhrSyncLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: EhrSyncLogCreateOrConnectWithoutPatientInput | EhrSyncLogCreateOrConnectWithoutPatientInput[]
    upsert?: EhrSyncLogUpsertWithWhereUniqueWithoutPatientInput | EhrSyncLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: EhrSyncLogCreateManyPatientInputEnvelope
    set?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    disconnect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    delete?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    connect?: EhrSyncLogWhereUniqueInput | EhrSyncLogWhereUniqueInput[]
    update?: EhrSyncLogUpdateWithWhereUniqueWithoutPatientInput | EhrSyncLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: EhrSyncLogUpdateManyWithWhereWithoutPatientInput | EhrSyncLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutResponsesInput = {
    create?: XOR<PatientCreateWithoutResponsesInput, PatientUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutResponsesInput
    connect?: PatientWhereUniqueInput
  }

  export type BaseQuestionCreateNestedOneWithoutPatientResponsesInput = {
    create?: XOR<BaseQuestionCreateWithoutPatientResponsesInput, BaseQuestionUncheckedCreateWithoutPatientResponsesInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutPatientResponsesInput
    connect?: BaseQuestionWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<PatientCreateWithoutResponsesInput, PatientUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PatientCreateOrConnectWithoutResponsesInput
    upsert?: PatientUpsertWithoutResponsesInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutResponsesInput, PatientUpdateWithoutResponsesInput>, PatientUncheckedUpdateWithoutResponsesInput>
  }

  export type BaseQuestionUpdateOneRequiredWithoutPatientResponsesNestedInput = {
    create?: XOR<BaseQuestionCreateWithoutPatientResponsesInput, BaseQuestionUncheckedCreateWithoutPatientResponsesInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutPatientResponsesInput
    upsert?: BaseQuestionUpsertWithoutPatientResponsesInput
    connect?: BaseQuestionWhereUniqueInput
    update?: XOR<XOR<BaseQuestionUpdateToOneWithWhereWithoutPatientResponsesInput, BaseQuestionUpdateWithoutPatientResponsesInput>, BaseQuestionUncheckedUpdateWithoutPatientResponsesInput>
  }

  export type PatientCreateNestedOneWithoutSyncLogsInput = {
    create?: XOR<PatientCreateWithoutSyncLogsInput, PatientUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSyncLogsInput
    connect?: PatientWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutEhrSyncLogInput = {
    create?: XOR<ClientCreateWithoutEhrSyncLogInput, ClientUncheckedCreateWithoutEhrSyncLogInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEhrSyncLogInput
    connect?: ClientWhereUniqueInput
  }

  export type EhrProviderCreateNestedOneWithoutSyncLogsInput = {
    create?: XOR<EhrProviderCreateWithoutSyncLogsInput, EhrProviderUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutSyncLogsInput
    connect?: EhrProviderWhereUniqueInput
  }

  export type EnumSyncStatusFieldUpdateOperationsInput = {
    set?: $Enums.SyncStatus
  }

  export type PatientUpdateOneRequiredWithoutSyncLogsNestedInput = {
    create?: XOR<PatientCreateWithoutSyncLogsInput, PatientUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutSyncLogsInput
    upsert?: PatientUpsertWithoutSyncLogsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutSyncLogsInput, PatientUpdateWithoutSyncLogsInput>, PatientUncheckedUpdateWithoutSyncLogsInput>
  }

  export type ClientUpdateOneRequiredWithoutEhrSyncLogNestedInput = {
    create?: XOR<ClientCreateWithoutEhrSyncLogInput, ClientUncheckedCreateWithoutEhrSyncLogInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEhrSyncLogInput
    upsert?: ClientUpsertWithoutEhrSyncLogInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEhrSyncLogInput, ClientUpdateWithoutEhrSyncLogInput>, ClientUncheckedUpdateWithoutEhrSyncLogInput>
  }

  export type EhrProviderUpdateOneRequiredWithoutSyncLogsNestedInput = {
    create?: XOR<EhrProviderCreateWithoutSyncLogsInput, EhrProviderUncheckedCreateWithoutSyncLogsInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutSyncLogsInput
    upsert?: EhrProviderUpsertWithoutSyncLogsInput
    connect?: EhrProviderWhereUniqueInput
    update?: XOR<XOR<EhrProviderUpdateToOneWithWhereWithoutSyncLogsInput, EhrProviderUpdateWithoutSyncLogsInput>, EhrProviderUncheckedUpdateWithoutSyncLogsInput>
  }

  export type ClientCreateNestedOneWithoutBulkOperationsInput = {
    create?: XOR<ClientCreateWithoutBulkOperationsInput, ClientUncheckedCreateWithoutBulkOperationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBulkOperationsInput
    connect?: ClientWhereUniqueInput
  }

  export type EnumOperationTypeFieldUpdateOperationsInput = {
    set?: $Enums.OperationType
  }

  export type ClientUpdateOneRequiredWithoutBulkOperationsNestedInput = {
    create?: XOR<ClientCreateWithoutBulkOperationsInput, ClientUncheckedCreateWithoutBulkOperationsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBulkOperationsInput
    upsert?: ClientUpsertWithoutBulkOperationsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBulkOperationsInput, ClientUpdateWithoutBulkOperationsInput>, ClientUncheckedUpdateWithoutBulkOperationsInput>
  }

  export type EnumActionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActionType
  }

  export type ClientCreateNestedOneWithoutEhrMappingsCacheInput = {
    create?: XOR<ClientCreateWithoutEhrMappingsCacheInput, ClientUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEhrMappingsCacheInput
    connect?: ClientWhereUniqueInput
  }

  export type EhrProviderCreateNestedOneWithoutEhrMappingsCacheInput = {
    create?: XOR<EhrProviderCreateWithoutEhrMappingsCacheInput, EhrProviderUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutEhrMappingsCacheInput
    connect?: EhrProviderWhereUniqueInput
  }

  export type BaseQuestionCreateNestedOneWithoutEhrMappingsCacheInput = {
    create?: XOR<BaseQuestionCreateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutEhrMappingsCacheInput
    connect?: BaseQuestionWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutEhrMappingsCacheNestedInput = {
    create?: XOR<ClientCreateWithoutEhrMappingsCacheInput, ClientUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: ClientCreateOrConnectWithoutEhrMappingsCacheInput
    upsert?: ClientUpsertWithoutEhrMappingsCacheInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutEhrMappingsCacheInput, ClientUpdateWithoutEhrMappingsCacheInput>, ClientUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type EhrProviderUpdateOneRequiredWithoutEhrMappingsCacheNestedInput = {
    create?: XOR<EhrProviderCreateWithoutEhrMappingsCacheInput, EhrProviderUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: EhrProviderCreateOrConnectWithoutEhrMappingsCacheInput
    upsert?: EhrProviderUpsertWithoutEhrMappingsCacheInput
    connect?: EhrProviderWhereUniqueInput
    update?: XOR<XOR<EhrProviderUpdateToOneWithWhereWithoutEhrMappingsCacheInput, EhrProviderUpdateWithoutEhrMappingsCacheInput>, EhrProviderUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type BaseQuestionUpdateOneRequiredWithoutEhrMappingsCacheNestedInput = {
    create?: XOR<BaseQuestionCreateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedCreateWithoutEhrMappingsCacheInput>
    connectOrCreate?: BaseQuestionCreateOrConnectWithoutEhrMappingsCacheInput
    upsert?: BaseQuestionUpsertWithoutEhrMappingsCacheInput
    connect?: BaseQuestionWhereUniqueInput
    update?: XOR<XOR<BaseQuestionUpdateToOneWithWhereWithoutEhrMappingsCacheInput, BaseQuestionUpdateWithoutEhrMappingsCacheInput>, BaseQuestionUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumQuestionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeFilter<$PrismaModel> | $Enums.QuestionType
  }

  export type NestedEnumResponseDataTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseDataType | EnumResponseDataTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseDataTypeFilter<$PrismaModel> | $Enums.ResponseDataType
  }

  export type NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QuestionType | EnumQuestionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.QuestionType[] | ListEnumQuestionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumQuestionTypeWithAggregatesFilter<$PrismaModel> | $Enums.QuestionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQuestionTypeFilter<$PrismaModel>
    _max?: NestedEnumQuestionTypeFilter<$PrismaModel>
  }

  export type NestedEnumResponseDataTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseDataType | EnumResponseDataTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseDataType[] | ListEnumResponseDataTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseDataTypeWithAggregatesFilter<$PrismaModel> | $Enums.ResponseDataType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseDataTypeFilter<$PrismaModel>
    _max?: NestedEnumResponseDataTypeFilter<$PrismaModel>
  }

  export type NestedEnumSyncStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusFilter<$PrismaModel> | $Enums.SyncStatus
  }

  export type NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SyncStatus | EnumSyncStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SyncStatus[] | ListEnumSyncStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSyncStatusWithAggregatesFilter<$PrismaModel> | $Enums.SyncStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSyncStatusFilter<$PrismaModel>
    _max?: NestedEnumSyncStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumOperationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeFilter<$PrismaModel> | $Enums.OperationType
  }

  export type NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperationType | EnumOperationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperationType[] | ListEnumOperationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOperationTypeWithAggregatesFilter<$PrismaModel> | $Enums.OperationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperationTypeFilter<$PrismaModel>
    _max?: NestedEnumOperationTypeFilter<$PrismaModel>
  }

  export type NestedEnumActionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeFilter<$PrismaModel> | $Enums.ActionType
  }

  export type NestedEnumActionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActionType | EnumActionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActionType[] | ListEnumActionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionTypeFilter<$PrismaModel>
    _max?: NestedEnumActionTypeFilter<$PrismaModel>
  }

  export type QuestionCreateWithoutLanguageInput = {
    id?: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutQuestionsInput
    questionSet: QuestionSetCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutLanguageInput = {
    id?: string
    baseQuestionId: string
    questionSetId: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutLanguageInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput>
  }

  export type QuestionCreateManyLanguageInputEnvelope = {
    data: QuestionCreateManyLanguageInput | QuestionCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutLanguageInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutPatientsInput
    responses?: PatientResponseCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutLanguageInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    responses?: PatientResponseUncheckedCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutLanguageInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput>
  }

  export type PatientCreateManyLanguageInputEnvelope = {
    data: PatientCreateManyLanguageInput | PatientCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutLanguageInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutLanguageInput, QuestionUncheckedUpdateWithoutLanguageInput>
    create: XOR<QuestionCreateWithoutLanguageInput, QuestionUncheckedCreateWithoutLanguageInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutLanguageInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutLanguageInput, QuestionUncheckedUpdateWithoutLanguageInput>
  }

  export type QuestionUpdateManyWithWhereWithoutLanguageInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutLanguageInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    baseQuestionId?: StringFilter<"Question"> | string
    questionSetId?: StringFilter<"Question"> | string
    languageCode?: StringFilter<"Question"> | string
    questionText?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutLanguageInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutLanguageInput, PatientUncheckedUpdateWithoutLanguageInput>
    create: XOR<PatientCreateWithoutLanguageInput, PatientUncheckedCreateWithoutLanguageInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutLanguageInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutLanguageInput, PatientUncheckedUpdateWithoutLanguageInput>
  }

  export type PatientUpdateManyWithWhereWithoutLanguageInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutLanguageInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    clientId?: StringFilter<"Patient"> | string
    externalId?: StringNullableFilter<"Patient"> | string | null
    basicInfo?: JsonFilter<"Patient">
    preferredLanguage?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
  }

  export type EhrMappingCreateWithoutEhrProviderInput = {
    id?: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutEhrMappingsInput
  }

  export type EhrMappingUncheckedCreateWithoutEhrProviderInput = {
    id?: string
    baseQuestionId: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingCreateOrConnectWithoutEhrProviderInput = {
    where: EhrMappingWhereUniqueInput
    create: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrMappingCreateManyEhrProviderInputEnvelope = {
    data: EhrMappingCreateManyEhrProviderInput | EhrMappingCreateManyEhrProviderInput[]
    skipDuplicates?: boolean
  }

  export type EhrSyncLogCreateWithoutEhrProviderInput = {
    id?: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutSyncLogsInput
    client: ClientCreateNestedOneWithoutEhrSyncLogInput
  }

  export type EhrSyncLogUncheckedCreateWithoutEhrProviderInput = {
    id?: string
    patientId: string
    clientId: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogCreateOrConnectWithoutEhrProviderInput = {
    where: EhrSyncLogWhereUniqueInput
    create: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrSyncLogCreateManyEhrProviderInputEnvelope = {
    data: EhrSyncLogCreateManyEhrProviderInput | EhrSyncLogCreateManyEhrProviderInput[]
    skipDuplicates?: boolean
  }

  export type EhrMappingsCacheCreateWithoutEhrProviderInput = {
    id?: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEhrMappingsCacheInput
    baseQuestion: BaseQuestionCreateNestedOneWithoutEhrMappingsCacheInput
  }

  export type EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput = {
    id?: string
    clientId: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateOrConnectWithoutEhrProviderInput = {
    where: EhrMappingsCacheWhereUniqueInput
    create: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrMappingsCacheCreateManyEhrProviderInputEnvelope = {
    data: EhrMappingsCacheCreateManyEhrProviderInput | EhrMappingsCacheCreateManyEhrProviderInput[]
    skipDuplicates?: boolean
  }

  export type EhrMappingUpsertWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrMappingWhereUniqueInput
    update: XOR<EhrMappingUpdateWithoutEhrProviderInput, EhrMappingUncheckedUpdateWithoutEhrProviderInput>
    create: XOR<EhrMappingCreateWithoutEhrProviderInput, EhrMappingUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrMappingUpdateWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrMappingWhereUniqueInput
    data: XOR<EhrMappingUpdateWithoutEhrProviderInput, EhrMappingUncheckedUpdateWithoutEhrProviderInput>
  }

  export type EhrMappingUpdateManyWithWhereWithoutEhrProviderInput = {
    where: EhrMappingScalarWhereInput
    data: XOR<EhrMappingUpdateManyMutationInput, EhrMappingUncheckedUpdateManyWithoutEhrProviderInput>
  }

  export type EhrMappingScalarWhereInput = {
    AND?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
    OR?: EhrMappingScalarWhereInput[]
    NOT?: EhrMappingScalarWhereInput | EhrMappingScalarWhereInput[]
    id?: StringFilter<"EhrMapping"> | string
    baseQuestionId?: StringFilter<"EhrMapping"> | string
    ehrProviderCode?: StringFilter<"EhrMapping"> | string
    ehrFieldPath?: StringFilter<"EhrMapping"> | string
    ehrFieldType?: StringFilter<"EhrMapping"> | string
    transformationRule?: StringNullableFilter<"EhrMapping"> | string | null
    ehrEndpoint?: StringFilter<"EhrMapping"> | string
    isActive?: BoolFilter<"EhrMapping"> | boolean
    createdAt?: DateTimeFilter<"EhrMapping"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMapping"> | Date | string
  }

  export type EhrSyncLogUpsertWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrSyncLogWhereUniqueInput
    update: XOR<EhrSyncLogUpdateWithoutEhrProviderInput, EhrSyncLogUncheckedUpdateWithoutEhrProviderInput>
    create: XOR<EhrSyncLogCreateWithoutEhrProviderInput, EhrSyncLogUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrSyncLogUpdateWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrSyncLogWhereUniqueInput
    data: XOR<EhrSyncLogUpdateWithoutEhrProviderInput, EhrSyncLogUncheckedUpdateWithoutEhrProviderInput>
  }

  export type EhrSyncLogUpdateManyWithWhereWithoutEhrProviderInput = {
    where: EhrSyncLogScalarWhereInput
    data: XOR<EhrSyncLogUpdateManyMutationInput, EhrSyncLogUncheckedUpdateManyWithoutEhrProviderInput>
  }

  export type EhrSyncLogScalarWhereInput = {
    AND?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
    OR?: EhrSyncLogScalarWhereInput[]
    NOT?: EhrSyncLogScalarWhereInput | EhrSyncLogScalarWhereInput[]
    id?: StringFilter<"EhrSyncLog"> | string
    patientId?: StringFilter<"EhrSyncLog"> | string
    clientId?: StringFilter<"EhrSyncLog"> | string
    ehrProviderCode?: StringFilter<"EhrSyncLog"> | string
    syncStatus?: EnumSyncStatusFilter<"EhrSyncLog"> | $Enums.SyncStatus
    requestPayload?: JsonNullableFilter<"EhrSyncLog">
    responsePayload?: JsonNullableFilter<"EhrSyncLog">
    errorDetails?: JsonNullableFilter<"EhrSyncLog">
    retryCount?: IntFilter<"EhrSyncLog"> | number
    nextRetryAt?: DateTimeNullableFilter<"EhrSyncLog"> | Date | string | null
    createdAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
    updatedAt?: DateTimeFilter<"EhrSyncLog"> | Date | string
  }

  export type EhrMappingsCacheUpsertWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrMappingsCacheWhereUniqueInput
    update: XOR<EhrMappingsCacheUpdateWithoutEhrProviderInput, EhrMappingsCacheUncheckedUpdateWithoutEhrProviderInput>
    create: XOR<EhrMappingsCacheCreateWithoutEhrProviderInput, EhrMappingsCacheUncheckedCreateWithoutEhrProviderInput>
  }

  export type EhrMappingsCacheUpdateWithWhereUniqueWithoutEhrProviderInput = {
    where: EhrMappingsCacheWhereUniqueInput
    data: XOR<EhrMappingsCacheUpdateWithoutEhrProviderInput, EhrMappingsCacheUncheckedUpdateWithoutEhrProviderInput>
  }

  export type EhrMappingsCacheUpdateManyWithWhereWithoutEhrProviderInput = {
    where: EhrMappingsCacheScalarWhereInput
    data: XOR<EhrMappingsCacheUpdateManyMutationInput, EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderInput>
  }

  export type EhrMappingsCacheScalarWhereInput = {
    AND?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
    OR?: EhrMappingsCacheScalarWhereInput[]
    NOT?: EhrMappingsCacheScalarWhereInput | EhrMappingsCacheScalarWhereInput[]
    id?: StringFilter<"EhrMappingsCache"> | string
    clientId?: StringFilter<"EhrMappingsCache"> | string
    ehrProviderCode?: StringFilter<"EhrMappingsCache"> | string
    baseQuestionId?: StringFilter<"EhrMappingsCache"> | string
    mappingData?: JsonFilter<"EhrMappingsCache">
    expiresAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    createdAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
    updatedAt?: DateTimeFilter<"EhrMappingsCache"> | Date | string
  }

  export type QuestionSetCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionCreateNestedManyWithoutQuestionSetInput
  }

  export type QuestionSetUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questions?: QuestionUncheckedCreateNestedManyWithoutQuestionSetInput
  }

  export type QuestionSetCreateOrConnectWithoutClientInput = {
    where: QuestionSetWhereUniqueInput
    create: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput>
  }

  export type QuestionSetCreateManyClientInputEnvelope = {
    data: QuestionSetCreateManyClientInput | QuestionSetCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutClientInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    language?: LanguageCreateNestedOneWithoutPatientsInput
    responses?: PatientResponseCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutClientInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    responses?: PatientResponseUncheckedCreateNestedManyWithoutPatientInput
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutClientInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput>
  }

  export type PatientCreateManyClientInputEnvelope = {
    data: PatientCreateManyClientInput | PatientCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type BulkOperationCreateWithoutClientInput = {
    id?: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BulkOperationUncheckedCreateWithoutClientInput = {
    id?: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type BulkOperationCreateOrConnectWithoutClientInput = {
    where: BulkOperationWhereUniqueInput
    create: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput>
  }

  export type BulkOperationCreateManyClientInputEnvelope = {
    data: BulkOperationCreateManyClientInput | BulkOperationCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type EhrSyncLogCreateWithoutClientInput = {
    id?: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutSyncLogsInput
    ehrProvider: EhrProviderCreateNestedOneWithoutSyncLogsInput
  }

  export type EhrSyncLogUncheckedCreateWithoutClientInput = {
    id?: string
    patientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogCreateOrConnectWithoutClientInput = {
    where: EhrSyncLogWhereUniqueInput
    create: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput>
  }

  export type EhrSyncLogCreateManyClientInputEnvelope = {
    data: EhrSyncLogCreateManyClientInput | EhrSyncLogCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type EhrMappingsCacheCreateWithoutClientInput = {
    id?: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrProvider: EhrProviderCreateNestedOneWithoutEhrMappingsCacheInput
    baseQuestion: BaseQuestionCreateNestedOneWithoutEhrMappingsCacheInput
  }

  export type EhrMappingsCacheUncheckedCreateWithoutClientInput = {
    id?: string
    ehrProviderCode: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateOrConnectWithoutClientInput = {
    where: EhrMappingsCacheWhereUniqueInput
    create: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput>
  }

  export type EhrMappingsCacheCreateManyClientInputEnvelope = {
    data: EhrMappingsCacheCreateManyClientInput | EhrMappingsCacheCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type QuestionSetUpsertWithWhereUniqueWithoutClientInput = {
    where: QuestionSetWhereUniqueInput
    update: XOR<QuestionSetUpdateWithoutClientInput, QuestionSetUncheckedUpdateWithoutClientInput>
    create: XOR<QuestionSetCreateWithoutClientInput, QuestionSetUncheckedCreateWithoutClientInput>
  }

  export type QuestionSetUpdateWithWhereUniqueWithoutClientInput = {
    where: QuestionSetWhereUniqueInput
    data: XOR<QuestionSetUpdateWithoutClientInput, QuestionSetUncheckedUpdateWithoutClientInput>
  }

  export type QuestionSetUpdateManyWithWhereWithoutClientInput = {
    where: QuestionSetScalarWhereInput
    data: XOR<QuestionSetUpdateManyMutationInput, QuestionSetUncheckedUpdateManyWithoutClientInput>
  }

  export type QuestionSetScalarWhereInput = {
    AND?: QuestionSetScalarWhereInput | QuestionSetScalarWhereInput[]
    OR?: QuestionSetScalarWhereInput[]
    NOT?: QuestionSetScalarWhereInput | QuestionSetScalarWhereInput[]
    id?: StringFilter<"QuestionSet"> | string
    clientId?: StringFilter<"QuestionSet"> | string
    name?: StringFilter<"QuestionSet"> | string
    description?: StringNullableFilter<"QuestionSet"> | string | null
    version?: IntFilter<"QuestionSet"> | number
    isActive?: BoolFilter<"QuestionSet"> | boolean
    createdAt?: DateTimeFilter<"QuestionSet"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionSet"> | Date | string
    deletedAt?: DateTimeNullableFilter<"QuestionSet"> | Date | string | null
  }

  export type PatientUpsertWithWhereUniqueWithoutClientInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutClientInput, PatientUncheckedUpdateWithoutClientInput>
    create: XOR<PatientCreateWithoutClientInput, PatientUncheckedCreateWithoutClientInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutClientInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutClientInput, PatientUncheckedUpdateWithoutClientInput>
  }

  export type PatientUpdateManyWithWhereWithoutClientInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutClientInput>
  }

  export type BulkOperationUpsertWithWhereUniqueWithoutClientInput = {
    where: BulkOperationWhereUniqueInput
    update: XOR<BulkOperationUpdateWithoutClientInput, BulkOperationUncheckedUpdateWithoutClientInput>
    create: XOR<BulkOperationCreateWithoutClientInput, BulkOperationUncheckedCreateWithoutClientInput>
  }

  export type BulkOperationUpdateWithWhereUniqueWithoutClientInput = {
    where: BulkOperationWhereUniqueInput
    data: XOR<BulkOperationUpdateWithoutClientInput, BulkOperationUncheckedUpdateWithoutClientInput>
  }

  export type BulkOperationUpdateManyWithWhereWithoutClientInput = {
    where: BulkOperationScalarWhereInput
    data: XOR<BulkOperationUpdateManyMutationInput, BulkOperationUncheckedUpdateManyWithoutClientInput>
  }

  export type BulkOperationScalarWhereInput = {
    AND?: BulkOperationScalarWhereInput | BulkOperationScalarWhereInput[]
    OR?: BulkOperationScalarWhereInput[]
    NOT?: BulkOperationScalarWhereInput | BulkOperationScalarWhereInput[]
    id?: StringFilter<"BulkOperation"> | string
    clientId?: StringFilter<"BulkOperation"> | string
    operationType?: EnumOperationTypeFilter<"BulkOperation"> | $Enums.OperationType
    status?: EnumSyncStatusFilter<"BulkOperation"> | $Enums.SyncStatus
    parameters?: JsonFilter<"BulkOperation">
    createdBy?: StringNullableFilter<"BulkOperation"> | string | null
    processedCount?: IntFilter<"BulkOperation"> | number
    totalCount?: IntFilter<"BulkOperation"> | number
    errorLog?: StringNullableFilter<"BulkOperation"> | string | null
    createdAt?: DateTimeFilter<"BulkOperation"> | Date | string
    updatedAt?: DateTimeFilter<"BulkOperation"> | Date | string
    completedAt?: DateTimeNullableFilter<"BulkOperation"> | Date | string | null
  }

  export type EhrSyncLogUpsertWithWhereUniqueWithoutClientInput = {
    where: EhrSyncLogWhereUniqueInput
    update: XOR<EhrSyncLogUpdateWithoutClientInput, EhrSyncLogUncheckedUpdateWithoutClientInput>
    create: XOR<EhrSyncLogCreateWithoutClientInput, EhrSyncLogUncheckedCreateWithoutClientInput>
  }

  export type EhrSyncLogUpdateWithWhereUniqueWithoutClientInput = {
    where: EhrSyncLogWhereUniqueInput
    data: XOR<EhrSyncLogUpdateWithoutClientInput, EhrSyncLogUncheckedUpdateWithoutClientInput>
  }

  export type EhrSyncLogUpdateManyWithWhereWithoutClientInput = {
    where: EhrSyncLogScalarWhereInput
    data: XOR<EhrSyncLogUpdateManyMutationInput, EhrSyncLogUncheckedUpdateManyWithoutClientInput>
  }

  export type EhrMappingsCacheUpsertWithWhereUniqueWithoutClientInput = {
    where: EhrMappingsCacheWhereUniqueInput
    update: XOR<EhrMappingsCacheUpdateWithoutClientInput, EhrMappingsCacheUncheckedUpdateWithoutClientInput>
    create: XOR<EhrMappingsCacheCreateWithoutClientInput, EhrMappingsCacheUncheckedCreateWithoutClientInput>
  }

  export type EhrMappingsCacheUpdateWithWhereUniqueWithoutClientInput = {
    where: EhrMappingsCacheWhereUniqueInput
    data: XOR<EhrMappingsCacheUpdateWithoutClientInput, EhrMappingsCacheUncheckedUpdateWithoutClientInput>
  }

  export type EhrMappingsCacheUpdateManyWithWhereWithoutClientInput = {
    where: EhrMappingsCacheScalarWhereInput
    data: XOR<EhrMappingsCacheUpdateManyMutationInput, EhrMappingsCacheUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutQuestionSetsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutQuestionSetsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    patients?: PatientUncheckedCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationUncheckedCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogUncheckedCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutQuestionSetsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutQuestionSetsInput, ClientUncheckedCreateWithoutQuestionSetsInput>
  }

  export type QuestionCreateWithoutQuestionSetInput = {
    id?: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutQuestionsInput
    language: LanguageCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutQuestionSetInput = {
    id?: string
    baseQuestionId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutQuestionSetInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput>
  }

  export type QuestionCreateManyQuestionSetInputEnvelope = {
    data: QuestionCreateManyQuestionSetInput | QuestionCreateManyQuestionSetInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutQuestionSetsInput = {
    update: XOR<ClientUpdateWithoutQuestionSetsInput, ClientUncheckedUpdateWithoutQuestionSetsInput>
    create: XOR<ClientCreateWithoutQuestionSetsInput, ClientUncheckedCreateWithoutQuestionSetsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutQuestionSetsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutQuestionSetsInput, ClientUncheckedUpdateWithoutQuestionSetsInput>
  }

  export type ClientUpdateWithoutQuestionSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutQuestionSetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patients?: PatientUncheckedUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUncheckedUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuestionSetInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuestionSetInput, QuestionUncheckedUpdateWithoutQuestionSetInput>
    create: XOR<QuestionCreateWithoutQuestionSetInput, QuestionUncheckedCreateWithoutQuestionSetInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuestionSetInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuestionSetInput, QuestionUncheckedUpdateWithoutQuestionSetInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuestionSetInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuestionSetInput>
  }

  export type QuestionCreateWithoutBaseQuestionInput = {
    id?: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questionSet: QuestionSetCreateNestedOneWithoutQuestionsInput
    language: LanguageCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutBaseQuestionInput = {
    id?: string
    questionSetId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutBaseQuestionInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput>
  }

  export type QuestionCreateManyBaseQuestionInputEnvelope = {
    data: QuestionCreateManyBaseQuestionInput | QuestionCreateManyBaseQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EhrMappingCreateWithoutBaseQuestionInput = {
    id?: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrProvider: EhrProviderCreateNestedOneWithoutEhrMappingsInput
  }

  export type EhrMappingUncheckedCreateWithoutBaseQuestionInput = {
    id?: string
    ehrProviderCode: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingCreateOrConnectWithoutBaseQuestionInput = {
    where: EhrMappingWhereUniqueInput
    create: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput>
  }

  export type EhrMappingCreateManyBaseQuestionInputEnvelope = {
    data: EhrMappingCreateManyBaseQuestionInput | EhrMappingCreateManyBaseQuestionInput[]
    skipDuplicates?: boolean
  }

  export type PatientResponseCreateWithoutBaseQuestionInput = {
    id?: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutResponsesInput
  }

  export type PatientResponseUncheckedCreateWithoutBaseQuestionInput = {
    id?: string
    patientId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseCreateOrConnectWithoutBaseQuestionInput = {
    where: PatientResponseWhereUniqueInput
    create: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput>
  }

  export type PatientResponseCreateManyBaseQuestionInputEnvelope = {
    data: PatientResponseCreateManyBaseQuestionInput | PatientResponseCreateManyBaseQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EhrMappingsCacheCreateWithoutBaseQuestionInput = {
    id?: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEhrMappingsCacheInput
    ehrProvider: EhrProviderCreateNestedOneWithoutEhrMappingsCacheInput
  }

  export type EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateOrConnectWithoutBaseQuestionInput = {
    where: EhrMappingsCacheWhereUniqueInput
    create: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput>
  }

  export type EhrMappingsCacheCreateManyBaseQuestionInputEnvelope = {
    data: EhrMappingsCacheCreateManyBaseQuestionInput | EhrMappingsCacheCreateManyBaseQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutBaseQuestionInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutBaseQuestionInput, QuestionUncheckedUpdateWithoutBaseQuestionInput>
    create: XOR<QuestionCreateWithoutBaseQuestionInput, QuestionUncheckedCreateWithoutBaseQuestionInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutBaseQuestionInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutBaseQuestionInput, QuestionUncheckedUpdateWithoutBaseQuestionInput>
  }

  export type QuestionUpdateManyWithWhereWithoutBaseQuestionInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutBaseQuestionInput>
  }

  export type EhrMappingUpsertWithWhereUniqueWithoutBaseQuestionInput = {
    where: EhrMappingWhereUniqueInput
    update: XOR<EhrMappingUpdateWithoutBaseQuestionInput, EhrMappingUncheckedUpdateWithoutBaseQuestionInput>
    create: XOR<EhrMappingCreateWithoutBaseQuestionInput, EhrMappingUncheckedCreateWithoutBaseQuestionInput>
  }

  export type EhrMappingUpdateWithWhereUniqueWithoutBaseQuestionInput = {
    where: EhrMappingWhereUniqueInput
    data: XOR<EhrMappingUpdateWithoutBaseQuestionInput, EhrMappingUncheckedUpdateWithoutBaseQuestionInput>
  }

  export type EhrMappingUpdateManyWithWhereWithoutBaseQuestionInput = {
    where: EhrMappingScalarWhereInput
    data: XOR<EhrMappingUpdateManyMutationInput, EhrMappingUncheckedUpdateManyWithoutBaseQuestionInput>
  }

  export type PatientResponseUpsertWithWhereUniqueWithoutBaseQuestionInput = {
    where: PatientResponseWhereUniqueInput
    update: XOR<PatientResponseUpdateWithoutBaseQuestionInput, PatientResponseUncheckedUpdateWithoutBaseQuestionInput>
    create: XOR<PatientResponseCreateWithoutBaseQuestionInput, PatientResponseUncheckedCreateWithoutBaseQuestionInput>
  }

  export type PatientResponseUpdateWithWhereUniqueWithoutBaseQuestionInput = {
    where: PatientResponseWhereUniqueInput
    data: XOR<PatientResponseUpdateWithoutBaseQuestionInput, PatientResponseUncheckedUpdateWithoutBaseQuestionInput>
  }

  export type PatientResponseUpdateManyWithWhereWithoutBaseQuestionInput = {
    where: PatientResponseScalarWhereInput
    data: XOR<PatientResponseUpdateManyMutationInput, PatientResponseUncheckedUpdateManyWithoutBaseQuestionInput>
  }

  export type PatientResponseScalarWhereInput = {
    AND?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
    OR?: PatientResponseScalarWhereInput[]
    NOT?: PatientResponseScalarWhereInput | PatientResponseScalarWhereInput[]
    id?: StringFilter<"PatientResponse"> | string
    patientId?: StringFilter<"PatientResponse"> | string
    baseQuestionId?: StringFilter<"PatientResponse"> | string
    response?: StringFilter<"PatientResponse"> | string
    responseMeta?: JsonFilter<"PatientResponse">
    sessionId?: StringNullableFilter<"PatientResponse"> | string | null
    createdAt?: DateTimeFilter<"PatientResponse"> | Date | string
    updatedAt?: DateTimeFilter<"PatientResponse"> | Date | string
  }

  export type EhrMappingsCacheUpsertWithWhereUniqueWithoutBaseQuestionInput = {
    where: EhrMappingsCacheWhereUniqueInput
    update: XOR<EhrMappingsCacheUpdateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedUpdateWithoutBaseQuestionInput>
    create: XOR<EhrMappingsCacheCreateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedCreateWithoutBaseQuestionInput>
  }

  export type EhrMappingsCacheUpdateWithWhereUniqueWithoutBaseQuestionInput = {
    where: EhrMappingsCacheWhereUniqueInput
    data: XOR<EhrMappingsCacheUpdateWithoutBaseQuestionInput, EhrMappingsCacheUncheckedUpdateWithoutBaseQuestionInput>
  }

  export type EhrMappingsCacheUpdateManyWithWhereWithoutBaseQuestionInput = {
    where: EhrMappingsCacheScalarWhereInput
    data: XOR<EhrMappingsCacheUpdateManyMutationInput, EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionInput>
  }

  export type BaseQuestionCreateWithoutQuestionsInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUncheckedCreateWithoutQuestionsInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseUncheckedCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionCreateOrConnectWithoutQuestionsInput = {
    where: BaseQuestionWhereUniqueInput
    create: XOR<BaseQuestionCreateWithoutQuestionsInput, BaseQuestionUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionSetCreateWithoutQuestionsInput = {
    id?: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutQuestionSetsInput
  }

  export type QuestionSetUncheckedCreateWithoutQuestionsInput = {
    id?: string
    clientId: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionSetCreateOrConnectWithoutQuestionsInput = {
    where: QuestionSetWhereUniqueInput
    create: XOR<QuestionSetCreateWithoutQuestionsInput, QuestionSetUncheckedCreateWithoutQuestionsInput>
  }

  export type LanguageCreateWithoutQuestionsInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutQuestionsInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutQuestionsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutQuestionsInput, LanguageUncheckedCreateWithoutQuestionsInput>
  }

  export type BaseQuestionUpsertWithoutQuestionsInput = {
    update: XOR<BaseQuestionUpdateWithoutQuestionsInput, BaseQuestionUncheckedUpdateWithoutQuestionsInput>
    create: XOR<BaseQuestionCreateWithoutQuestionsInput, BaseQuestionUncheckedCreateWithoutQuestionsInput>
    where?: BaseQuestionWhereInput
  }

  export type BaseQuestionUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: BaseQuestionWhereInput
    data: XOR<BaseQuestionUpdateWithoutQuestionsInput, BaseQuestionUncheckedUpdateWithoutQuestionsInput>
  }

  export type BaseQuestionUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUncheckedUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionNestedInput
  }

  export type QuestionSetUpsertWithoutQuestionsInput = {
    update: XOR<QuestionSetUpdateWithoutQuestionsInput, QuestionSetUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuestionSetCreateWithoutQuestionsInput, QuestionSetUncheckedCreateWithoutQuestionsInput>
    where?: QuestionSetWhereInput
  }

  export type QuestionSetUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuestionSetWhereInput
    data: XOR<QuestionSetUpdateWithoutQuestionsInput, QuestionSetUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionSetUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutQuestionSetsNestedInput
  }

  export type QuestionSetUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LanguageUpsertWithoutQuestionsInput = {
    update: XOR<LanguageUpdateWithoutQuestionsInput, LanguageUncheckedUpdateWithoutQuestionsInput>
    create: XOR<LanguageCreateWithoutQuestionsInput, LanguageUncheckedCreateWithoutQuestionsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutQuestionsInput, LanguageUncheckedUpdateWithoutQuestionsInput>
  }

  export type LanguageUpdateWithoutQuestionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutQuestionsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type BaseQuestionCreateWithoutEhrMappingsInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUncheckedCreateWithoutEhrMappingsInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseUncheckedCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionCreateOrConnectWithoutEhrMappingsInput = {
    where: BaseQuestionWhereUniqueInput
    create: XOR<BaseQuestionCreateWithoutEhrMappingsInput, BaseQuestionUncheckedCreateWithoutEhrMappingsInput>
  }

  export type EhrProviderCreateWithoutEhrMappingsInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    syncLogs?: EhrSyncLogCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderUncheckedCreateWithoutEhrMappingsInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderCreateOrConnectWithoutEhrMappingsInput = {
    where: EhrProviderWhereUniqueInput
    create: XOR<EhrProviderCreateWithoutEhrMappingsInput, EhrProviderUncheckedCreateWithoutEhrMappingsInput>
  }

  export type BaseQuestionUpsertWithoutEhrMappingsInput = {
    update: XOR<BaseQuestionUpdateWithoutEhrMappingsInput, BaseQuestionUncheckedUpdateWithoutEhrMappingsInput>
    create: XOR<BaseQuestionCreateWithoutEhrMappingsInput, BaseQuestionUncheckedCreateWithoutEhrMappingsInput>
    where?: BaseQuestionWhereInput
  }

  export type BaseQuestionUpdateToOneWithWhereWithoutEhrMappingsInput = {
    where?: BaseQuestionWhereInput
    data: XOR<BaseQuestionUpdateWithoutEhrMappingsInput, BaseQuestionUncheckedUpdateWithoutEhrMappingsInput>
  }

  export type BaseQuestionUpdateWithoutEhrMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionUncheckedUpdateWithoutEhrMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUncheckedUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionNestedInput
  }

  export type EhrProviderUpsertWithoutEhrMappingsInput = {
    update: XOR<EhrProviderUpdateWithoutEhrMappingsInput, EhrProviderUncheckedUpdateWithoutEhrMappingsInput>
    create: XOR<EhrProviderCreateWithoutEhrMappingsInput, EhrProviderUncheckedCreateWithoutEhrMappingsInput>
    where?: EhrProviderWhereInput
  }

  export type EhrProviderUpdateToOneWithWhereWithoutEhrMappingsInput = {
    where?: EhrProviderWhereInput
    data: XOR<EhrProviderUpdateWithoutEhrMappingsInput, EhrProviderUncheckedUpdateWithoutEhrMappingsInput>
  }

  export type EhrProviderUpdateWithoutEhrMappingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncLogs?: EhrSyncLogUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutEhrProviderNestedInput
  }

  export type EhrProviderUncheckedUpdateWithoutEhrMappingsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderNestedInput
  }

  export type ClientCreateWithoutPatientsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetUncheckedCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationUncheckedCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogUncheckedCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPatientsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPatientsInput, ClientUncheckedCreateWithoutPatientsInput>
  }

  export type LanguageCreateWithoutPatientsInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutPatientsInput = {
    code: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutPatientsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutPatientsInput, LanguageUncheckedCreateWithoutPatientsInput>
  }

  export type PatientResponseCreateWithoutPatientInput = {
    id?: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    baseQuestion: BaseQuestionCreateNestedOneWithoutPatientResponsesInput
  }

  export type PatientResponseUncheckedCreateWithoutPatientInput = {
    id?: string
    baseQuestionId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseCreateOrConnectWithoutPatientInput = {
    where: PatientResponseWhereUniqueInput
    create: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput>
  }

  export type PatientResponseCreateManyPatientInputEnvelope = {
    data: PatientResponseCreateManyPatientInput | PatientResponseCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type EhrSyncLogCreateWithoutPatientInput = {
    id?: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutEhrSyncLogInput
    ehrProvider: EhrProviderCreateNestedOneWithoutSyncLogsInput
  }

  export type EhrSyncLogUncheckedCreateWithoutPatientInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogCreateOrConnectWithoutPatientInput = {
    where: EhrSyncLogWhereUniqueInput
    create: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput>
  }

  export type EhrSyncLogCreateManyPatientInputEnvelope = {
    data: EhrSyncLogCreateManyPatientInput | EhrSyncLogCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutPatientsInput = {
    update: XOR<ClientUpdateWithoutPatientsInput, ClientUncheckedUpdateWithoutPatientsInput>
    create: XOR<ClientCreateWithoutPatientsInput, ClientUncheckedCreateWithoutPatientsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPatientsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPatientsInput, ClientUncheckedUpdateWithoutPatientsInput>
  }

  export type ClientUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUncheckedUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUncheckedUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LanguageUpsertWithoutPatientsInput = {
    update: XOR<LanguageUpdateWithoutPatientsInput, LanguageUncheckedUpdateWithoutPatientsInput>
    create: XOR<LanguageCreateWithoutPatientsInput, LanguageUncheckedCreateWithoutPatientsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutPatientsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutPatientsInput, LanguageUncheckedUpdateWithoutPatientsInput>
  }

  export type LanguageUpdateWithoutPatientsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutPatientsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type PatientResponseUpsertWithWhereUniqueWithoutPatientInput = {
    where: PatientResponseWhereUniqueInput
    update: XOR<PatientResponseUpdateWithoutPatientInput, PatientResponseUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientResponseCreateWithoutPatientInput, PatientResponseUncheckedCreateWithoutPatientInput>
  }

  export type PatientResponseUpdateWithWhereUniqueWithoutPatientInput = {
    where: PatientResponseWhereUniqueInput
    data: XOR<PatientResponseUpdateWithoutPatientInput, PatientResponseUncheckedUpdateWithoutPatientInput>
  }

  export type PatientResponseUpdateManyWithWhereWithoutPatientInput = {
    where: PatientResponseScalarWhereInput
    data: XOR<PatientResponseUpdateManyMutationInput, PatientResponseUncheckedUpdateManyWithoutPatientInput>
  }

  export type EhrSyncLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: EhrSyncLogWhereUniqueInput
    update: XOR<EhrSyncLogUpdateWithoutPatientInput, EhrSyncLogUncheckedUpdateWithoutPatientInput>
    create: XOR<EhrSyncLogCreateWithoutPatientInput, EhrSyncLogUncheckedCreateWithoutPatientInput>
  }

  export type EhrSyncLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: EhrSyncLogWhereUniqueInput
    data: XOR<EhrSyncLogUpdateWithoutPatientInput, EhrSyncLogUncheckedUpdateWithoutPatientInput>
  }

  export type EhrSyncLogUpdateManyWithWhereWithoutPatientInput = {
    where: EhrSyncLogScalarWhereInput
    data: XOR<EhrSyncLogUpdateManyMutationInput, EhrSyncLogUncheckedUpdateManyWithoutPatientInput>
  }

  export type PatientCreateWithoutResponsesInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutPatientsInput
    language?: LanguageCreateNestedOneWithoutPatientsInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutResponsesInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutResponsesInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutResponsesInput, PatientUncheckedCreateWithoutResponsesInput>
  }

  export type BaseQuestionCreateWithoutPatientResponsesInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUncheckedCreateWithoutPatientResponsesInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutBaseQuestionInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionCreateOrConnectWithoutPatientResponsesInput = {
    where: BaseQuestionWhereUniqueInput
    create: XOR<BaseQuestionCreateWithoutPatientResponsesInput, BaseQuestionUncheckedCreateWithoutPatientResponsesInput>
  }

  export type PatientUpsertWithoutResponsesInput = {
    update: XOR<PatientUpdateWithoutResponsesInput, PatientUncheckedUpdateWithoutResponsesInput>
    create: XOR<PatientCreateWithoutResponsesInput, PatientUncheckedCreateWithoutResponsesInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutResponsesInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutResponsesInput, PatientUncheckedUpdateWithoutResponsesInput>
  }

  export type PatientUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutPatientsNestedInput
    language?: LanguageUpdateOneWithoutPatientsNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type BaseQuestionUpsertWithoutPatientResponsesInput = {
    update: XOR<BaseQuestionUpdateWithoutPatientResponsesInput, BaseQuestionUncheckedUpdateWithoutPatientResponsesInput>
    create: XOR<BaseQuestionCreateWithoutPatientResponsesInput, BaseQuestionUncheckedCreateWithoutPatientResponsesInput>
    where?: BaseQuestionWhereInput
  }

  export type BaseQuestionUpdateToOneWithWhereWithoutPatientResponsesInput = {
    where?: BaseQuestionWhereInput
    data: XOR<BaseQuestionUpdateWithoutPatientResponsesInput, BaseQuestionUncheckedUpdateWithoutPatientResponsesInput>
  }

  export type BaseQuestionUpdateWithoutPatientResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionUncheckedUpdateWithoutPatientResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutBaseQuestionNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionNestedInput
  }

  export type PatientCreateWithoutSyncLogsInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    client: ClientCreateNestedOneWithoutPatientsInput
    language?: LanguageCreateNestedOneWithoutPatientsInput
    responses?: PatientResponseCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutSyncLogsInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    responses?: PatientResponseUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutSyncLogsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutSyncLogsInput, PatientUncheckedCreateWithoutSyncLogsInput>
  }

  export type ClientCreateWithoutEhrSyncLogInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetCreateNestedManyWithoutClientInput
    patients?: PatientCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEhrSyncLogInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetUncheckedCreateNestedManyWithoutClientInput
    patients?: PatientUncheckedCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationUncheckedCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEhrSyncLogInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEhrSyncLogInput, ClientUncheckedCreateWithoutEhrSyncLogInput>
  }

  export type EhrProviderCreateWithoutSyncLogsInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderUncheckedCreateWithoutSyncLogsInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutEhrProviderInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderCreateOrConnectWithoutSyncLogsInput = {
    where: EhrProviderWhereUniqueInput
    create: XOR<EhrProviderCreateWithoutSyncLogsInput, EhrProviderUncheckedCreateWithoutSyncLogsInput>
  }

  export type PatientUpsertWithoutSyncLogsInput = {
    update: XOR<PatientUpdateWithoutSyncLogsInput, PatientUncheckedUpdateWithoutSyncLogsInput>
    create: XOR<PatientCreateWithoutSyncLogsInput, PatientUncheckedCreateWithoutSyncLogsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutSyncLogsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutSyncLogsInput, PatientUncheckedUpdateWithoutSyncLogsInput>
  }

  export type PatientUpdateWithoutSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutPatientsNestedInput
    language?: LanguageUpdateOneWithoutPatientsNestedInput
    responses?: PatientResponseUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutSyncLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: PatientResponseUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type ClientUpsertWithoutEhrSyncLogInput = {
    update: XOR<ClientUpdateWithoutEhrSyncLogInput, ClientUncheckedUpdateWithoutEhrSyncLogInput>
    create: XOR<ClientCreateWithoutEhrSyncLogInput, ClientUncheckedCreateWithoutEhrSyncLogInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEhrSyncLogInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEhrSyncLogInput, ClientUncheckedUpdateWithoutEhrSyncLogInput>
  }

  export type ClientUpdateWithoutEhrSyncLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUpdateManyWithoutClientNestedInput
    patients?: PatientUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEhrSyncLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUncheckedUpdateManyWithoutClientNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUncheckedUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput
  }

  export type EhrProviderUpsertWithoutSyncLogsInput = {
    update: XOR<EhrProviderUpdateWithoutSyncLogsInput, EhrProviderUncheckedUpdateWithoutSyncLogsInput>
    create: XOR<EhrProviderCreateWithoutSyncLogsInput, EhrProviderUncheckedCreateWithoutSyncLogsInput>
    where?: EhrProviderWhereInput
  }

  export type EhrProviderUpdateToOneWithWhereWithoutSyncLogsInput = {
    where?: EhrProviderWhereInput
    data: XOR<EhrProviderUpdateWithoutSyncLogsInput, EhrProviderUncheckedUpdateWithoutSyncLogsInput>
  }

  export type EhrProviderUpdateWithoutSyncLogsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutEhrProviderNestedInput
  }

  export type EhrProviderUncheckedUpdateWithoutSyncLogsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutEhrProviderNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderNestedInput
  }

  export type ClientCreateWithoutBulkOperationsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetCreateNestedManyWithoutClientInput
    patients?: PatientCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBulkOperationsInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetUncheckedCreateNestedManyWithoutClientInput
    patients?: PatientUncheckedCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogUncheckedCreateNestedManyWithoutClientInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutBulkOperationsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBulkOperationsInput, ClientUncheckedCreateWithoutBulkOperationsInput>
  }

  export type ClientUpsertWithoutBulkOperationsInput = {
    update: XOR<ClientUpdateWithoutBulkOperationsInput, ClientUncheckedUpdateWithoutBulkOperationsInput>
    create: XOR<ClientCreateWithoutBulkOperationsInput, ClientUncheckedCreateWithoutBulkOperationsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBulkOperationsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBulkOperationsInput, ClientUncheckedUpdateWithoutBulkOperationsInput>
  }

  export type ClientUpdateWithoutBulkOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUpdateManyWithoutClientNestedInput
    patients?: PatientUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBulkOperationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUncheckedUpdateManyWithoutClientNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput
    EhrMappingsCache?: EhrMappingsCacheUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutEhrMappingsCacheInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetCreateNestedManyWithoutClientInput
    patients?: PatientCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutEhrMappingsCacheInput = {
    id?: string
    name: string
    externalId?: string | null
    preferredEhr: string
    defaultLanguage: string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    questionSets?: QuestionSetUncheckedCreateNestedManyWithoutClientInput
    patients?: PatientUncheckedCreateNestedManyWithoutClientInput
    bulkOperations?: BulkOperationUncheckedCreateNestedManyWithoutClientInput
    EhrSyncLog?: EhrSyncLogUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutEhrMappingsCacheInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutEhrMappingsCacheInput, ClientUncheckedCreateWithoutEhrMappingsCacheInput>
  }

  export type EhrProviderCreateWithoutEhrMappingsCacheInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingCreateNestedManyWithoutEhrProviderInput
    syncLogs?: EhrSyncLogCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderUncheckedCreateWithoutEhrMappingsCacheInput = {
    code: string
    name: string
    baseUrl: string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutEhrProviderInput
    syncLogs?: EhrSyncLogUncheckedCreateNestedManyWithoutEhrProviderInput
  }

  export type EhrProviderCreateOrConnectWithoutEhrMappingsCacheInput = {
    where: EhrProviderWhereUniqueInput
    create: XOR<EhrProviderCreateWithoutEhrMappingsCacheInput, EhrProviderUncheckedCreateWithoutEhrMappingsCacheInput>
  }

  export type BaseQuestionCreateWithoutEhrMappingsCacheInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionUncheckedCreateWithoutEhrMappingsCacheInput = {
    id?: string
    internalCode: string
    questionType: $Enums.QuestionType
    responseDataType: $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutBaseQuestionInput
    ehrMappings?: EhrMappingUncheckedCreateNestedManyWithoutBaseQuestionInput
    patientResponses?: PatientResponseUncheckedCreateNestedManyWithoutBaseQuestionInput
  }

  export type BaseQuestionCreateOrConnectWithoutEhrMappingsCacheInput = {
    where: BaseQuestionWhereUniqueInput
    create: XOR<BaseQuestionCreateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedCreateWithoutEhrMappingsCacheInput>
  }

  export type ClientUpsertWithoutEhrMappingsCacheInput = {
    update: XOR<ClientUpdateWithoutEhrMappingsCacheInput, ClientUncheckedUpdateWithoutEhrMappingsCacheInput>
    create: XOR<ClientCreateWithoutEhrMappingsCacheInput, ClientUncheckedCreateWithoutEhrMappingsCacheInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutEhrMappingsCacheInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutEhrMappingsCacheInput, ClientUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type ClientUpdateWithoutEhrMappingsCacheInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUpdateManyWithoutClientNestedInput
    patients?: PatientUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutEhrMappingsCacheInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    preferredEhr?: StringFieldUpdateOperationsInput | string
    defaultLanguage?: StringFieldUpdateOperationsInput | string
    metadata?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questionSets?: QuestionSetUncheckedUpdateManyWithoutClientNestedInput
    patients?: PatientUncheckedUpdateManyWithoutClientNestedInput
    bulkOperations?: BulkOperationUncheckedUpdateManyWithoutClientNestedInput
    EhrSyncLog?: EhrSyncLogUncheckedUpdateManyWithoutClientNestedInput
  }

  export type EhrProviderUpsertWithoutEhrMappingsCacheInput = {
    update: XOR<EhrProviderUpdateWithoutEhrMappingsCacheInput, EhrProviderUncheckedUpdateWithoutEhrMappingsCacheInput>
    create: XOR<EhrProviderCreateWithoutEhrMappingsCacheInput, EhrProviderUncheckedCreateWithoutEhrMappingsCacheInput>
    where?: EhrProviderWhereInput
  }

  export type EhrProviderUpdateToOneWithWhereWithoutEhrMappingsCacheInput = {
    where?: EhrProviderWhereInput
    data: XOR<EhrProviderUpdateWithoutEhrMappingsCacheInput, EhrProviderUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type EhrProviderUpdateWithoutEhrMappingsCacheInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUpdateManyWithoutEhrProviderNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutEhrProviderNestedInput
  }

  export type EhrProviderUncheckedUpdateWithoutEhrMappingsCacheInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    authConfig?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutEhrProviderNestedInput
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutEhrProviderNestedInput
  }

  export type BaseQuestionUpsertWithoutEhrMappingsCacheInput = {
    update: XOR<BaseQuestionUpdateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedUpdateWithoutEhrMappingsCacheInput>
    create: XOR<BaseQuestionCreateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedCreateWithoutEhrMappingsCacheInput>
    where?: BaseQuestionWhereInput
  }

  export type BaseQuestionUpdateToOneWithWhereWithoutEhrMappingsCacheInput = {
    where?: BaseQuestionWhereInput
    data: XOR<BaseQuestionUpdateWithoutEhrMappingsCacheInput, BaseQuestionUncheckedUpdateWithoutEhrMappingsCacheInput>
  }

  export type BaseQuestionUpdateWithoutEhrMappingsCacheInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUpdateManyWithoutBaseQuestionNestedInput
  }

  export type BaseQuestionUncheckedUpdateWithoutEhrMappingsCacheInput = {
    id?: StringFieldUpdateOperationsInput | string
    internalCode?: StringFieldUpdateOperationsInput | string
    questionType?: EnumQuestionTypeFieldUpdateOperationsInput | $Enums.QuestionType
    responseDataType?: EnumResponseDataTypeFieldUpdateOperationsInput | $Enums.ResponseDataType
    validationRules?: JsonNullValueInput | InputJsonValue
    metadata?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutBaseQuestionNestedInput
    ehrMappings?: EhrMappingUncheckedUpdateManyWithoutBaseQuestionNestedInput
    patientResponses?: PatientResponseUncheckedUpdateManyWithoutBaseQuestionNestedInput
  }

  export type QuestionCreateManyLanguageInput = {
    id?: string
    baseQuestionId: string
    questionSetId: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyLanguageInput = {
    id?: string
    clientId: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type QuestionUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutQuestionsNestedInput
    questionSet?: QuestionSetUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutPatientsNestedInput
    responses?: PatientResponseUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: PatientResponseUncheckedUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EhrMappingCreateManyEhrProviderInput = {
    id?: string
    baseQuestionId: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogCreateManyEhrProviderInput = {
    id?: string
    patientId: string
    clientId: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateManyEhrProviderInput = {
    id?: string
    clientId: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutEhrMappingsNestedInput
  }

  export type EhrMappingUncheckedUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingUncheckedUpdateManyWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSyncLogsNestedInput
    client?: ClientUpdateOneRequiredWithoutEhrSyncLogNestedInput
  }

  export type EhrSyncLogUncheckedUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
  }

  export type EhrMappingsCacheUncheckedUpdateWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutEhrProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionSetCreateManyClientInput = {
    id?: string
    name: string
    description?: string | null
    version?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type PatientCreateManyClientInput = {
    id?: string
    externalId?: string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BulkOperationCreateManyClientInput = {
    id?: string
    operationType: $Enums.OperationType
    status?: $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: string | null
    processedCount?: number
    totalCount?: number
    errorLog?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    completedAt?: Date | string | null
  }

  export type EhrSyncLogCreateManyClientInput = {
    id?: string
    patientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateManyClientInput = {
    id?: string
    ehrProviderCode: string
    baseQuestionId: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionSetUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionUpdateManyWithoutQuestionSetNestedInput
  }

  export type QuestionSetUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    questions?: QuestionUncheckedUpdateManyWithoutQuestionSetNestedInput
  }

  export type QuestionSetUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PatientUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language?: LanguageUpdateOneWithoutPatientsNestedInput
    responses?: PatientResponseUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responses?: PatientResponseUncheckedUpdateManyWithoutPatientNestedInput
    syncLogs?: EhrSyncLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    basicInfo?: JsonNullValueInput | InputJsonValue
    preferredLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BulkOperationUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BulkOperationUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BulkOperationUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    operationType?: EnumOperationTypeFieldUpdateOperationsInput | $Enums.OperationType
    status?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    parameters?: JsonNullValueInput | InputJsonValue
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    errorLog?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EhrSyncLogUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutSyncLogsNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutSyncLogsNestedInput
  }

  export type EhrSyncLogUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
  }

  export type EhrMappingsCacheUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuestionSetInput = {
    id?: string
    baseQuestionId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutQuestionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutQuestionsNestedInput
    language?: LanguageUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutQuestionSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyBaseQuestionInput = {
    id?: string
    questionSetId: string
    languageCode: string
    questionText: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingCreateManyBaseQuestionInput = {
    id?: string
    ehrProviderCode: string
    ehrFieldPath: string
    ehrFieldType: string
    transformationRule?: string | null
    ehrEndpoint: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseCreateManyBaseQuestionInput = {
    id?: string
    patientId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrMappingsCacheCreateManyBaseQuestionInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    mappingData: JsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionSet?: QuestionSetUpdateOneRequiredWithoutQuestionsNestedInput
    language?: LanguageUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionSetId?: StringFieldUpdateOperationsInput | string
    languageCode?: StringFieldUpdateOperationsInput | string
    questionText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutEhrMappingsNestedInput
  }

  export type EhrMappingUncheckedUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingUncheckedUpdateManyWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    ehrFieldPath?: StringFieldUpdateOperationsInput | string
    ehrFieldType?: StringFieldUpdateOperationsInput | string
    transformationRule?: NullableStringFieldUpdateOperationsInput | string | null
    ehrEndpoint?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type PatientResponseUncheckedUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseUncheckedUpdateManyWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutEhrMappingsCacheNestedInput
  }

  export type EhrMappingsCacheUncheckedUpdateWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrMappingsCacheUncheckedUpdateManyWithoutBaseQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    mappingData?: JsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseCreateManyPatientInput = {
    id?: string
    baseQuestionId: string
    response: string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EhrSyncLogCreateManyPatientInput = {
    id?: string
    clientId: string
    ehrProviderCode: string
    syncStatus: $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: number
    nextRetryAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientResponseUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseQuestion?: BaseQuestionUpdateOneRequiredWithoutPatientResponsesNestedInput
  }

  export type PatientResponseUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientResponseUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseQuestionId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    responseMeta?: JsonNullValueInput | InputJsonValue
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutEhrSyncLogNestedInput
    ehrProvider?: EhrProviderUpdateOneRequiredWithoutSyncLogsNestedInput
  }

  export type EhrSyncLogUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EhrSyncLogUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    ehrProviderCode?: StringFieldUpdateOperationsInput | string
    syncStatus?: EnumSyncStatusFieldUpdateOperationsInput | $Enums.SyncStatus
    requestPayload?: NullableJsonNullValueInput | InputJsonValue
    responsePayload?: NullableJsonNullValueInput | InputJsonValue
    errorDetails?: NullableJsonNullValueInput | InputJsonValue
    retryCount?: IntFieldUpdateOperationsInput | number
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}