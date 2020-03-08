import { Input, Output } from './Type';
import { ValidatorOutput } from './Schema';

type AssertEqual<T, R> = R extends T ? (T extends R ? 'ok' : never) : never;

// type tests
/* eslint-disable @typescript-eslint/no-unused-vars */

const stringConst: AssertEqual<Output<StringConstructor>, string> = 'ok';
const numberConst: AssertEqual<Output<NumberConstructor>, number> = 'ok';
const booleanConst: AssertEqual<Output<BooleanConstructor>, boolean> = 'ok';
const objConst: AssertEqual<
  Output<ObjectConstructor>,
  ReturnType<ObjectConstructor>
> = 'ok';
const symbolConstructor: AssertEqual<Output<SymbolConstructor>, symbol> = 'ok';

const stringType: AssertEqual<Output<string>, string> = 'ok';
const numberType: AssertEqual<Output<number>, number> = 'ok';
const booleanType: AssertEqual<Output<boolean>, boolean> = 'ok';
const objectType: AssertEqual<Output<object>, object> = 'ok';
const symbolType: AssertEqual<Output<symbol>, symbol> = 'ok';
const undefinedType: AssertEqual<Output<undefined>, undefined> = 'ok';

const exactStr: AssertEqual<Output<'hello'>, 'hello'> = 'ok';
const exact123: AssertEqual<Output<123>, 123> = 'ok';
const exactTrue: AssertEqual<Output<true>, true> = 'ok';
const exactFalse: AssertEqual<Output<false>, false> = 'ok';

const stringValidator: AssertEqual<Output<() => string>, string> = 'ok';
const numberValidator: AssertEqual<Output<() => number>, number> = 'ok';
const exactNumberValidator: AssertEqual<Output<() => 123>, 123> = 'ok';
const exactStringValidator: AssertEqual<Output<() => 'foo'>, 'foo'> = 'ok';

const numSchema: AssertEqual<Output<{ num: number }>, { num: number }> = 'ok';
const strSchema: AssertEqual<Output<{ str: string }>, { str: string }> = 'ok';
const fnSchema: AssertEqual<Output<{ fn: () => 1 }>, { fn: 1 }> = 'ok';

const schemaSchema: AssertEqual<
  Output<{ foo: { fn: () => 1 } }>,
  { foo: { fn: 1 } }
> = 'ok';

const strOut: AssertEqual<ValidatorOutput<StringConstructor>, string> = 'ok';
const numOut: AssertEqual<ValidatorOutput<NumberConstructor>, number> = 'ok';

// FIXME: https://github.com/microsoft/TypeScript/issues/37279
// const boolOut: AssertEqual<ValidatorOutput<BooleanConstructor>, boolean> = 'ok';

const strAsyncOut: AssertEqual<
  ValidatorOutput<() => Promise<string>>,
  PromiseLike<string>
> = 'ok';

const recStrAsyncOut: AssertEqual<
  ValidatorOutput<{ foo: { bar: () => Promise<string> } }>,
  PromiseLike<{ foo: { bar: string } }>
> = 'ok';

const numInput: AssertEqual<Input<number>, number> = 'ok';
const strInput: AssertEqual<Input<string>, string> = 'ok';
const boolInput: AssertEqual<Input<boolean>, boolean> = 'ok';

const valConsInput: AssertEqual<Input<(input: 'foo') => never>, 'foo'> = 'ok';
const unkConsInput: AssertEqual<Input<(input: unknown) => never>, unknown> =
  'ok';