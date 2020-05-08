import 'mocha';
import { typeCheck } from './utils';

/* eslint-disable @typescript-eslint/no-explicit-any */

describe('utils', () => {
  describe('typeCheck', () => {
    it('number', () => {
      typeCheck<number, number>('ok');
      typeCheck<number, 1>(1 as number);
      typeCheck<number, boolean>(1);
      typeCheck<number, string>(1);
      typeCheck<number, object>(1);
      typeCheck<number, never>(1);
      typeCheck<number, any>(1);
      typeCheck<number, {}>(1);
      typeCheck<[number], [boolean]>([1]);
    });

    it('1', () => {
      typeCheck<1, 1>('ok');
      typeCheck<1, number>(1);
      typeCheck<1, never>(1);
      typeCheck<1, any>(1);
      typeCheck<1, {}>(1);
    });

    it('boolean', () => {
      typeCheck<boolean, boolean>('ok');
      typeCheck<boolean, true>(true);
      typeCheck<boolean, false>(true);
      typeCheck<boolean, {}>(true);
      typeCheck<boolean, object>(true);
      typeCheck<boolean, string>(true);
      typeCheck<boolean, any>(true);
      typeCheck<boolean, 1>(true);
    });

    it('true', () => {
      typeCheck<true, true>('ok');
      typeCheck<true, false>(true);
      typeCheck<true, boolean>(true);
      typeCheck<true, number>(true);
      typeCheck<true, any>(true);
      typeCheck<true, {}>(true);
    });

    it('[number]', () => {
      typeCheck<[number], [number]>('ok');
      typeCheck<[number], [1]>([1]);
      typeCheck<[number], number[]>([1]);
      typeCheck<[number], [boolean]>([1]);
      typeCheck<[number], object>([1]);
      typeCheck<[number], []>([1]);
      typeCheck<[number], [any]>([1]);
      typeCheck<[number], any[]>([1]);
    });

    it('number[]]', () => {
      typeCheck<number[], number[]>('ok');
      typeCheck<number[], [1]>([1]);
      typeCheck<number[], [number]>([1]);
      typeCheck<number[], any[]>([1]);
      typeCheck<number[], unknown[]>([1]);
      typeCheck<number[], never[]>([1]);
    });

    it('[1]', () => {
      typeCheck<[1], [1]>('ok');
      typeCheck<[1], [2]>([1]);
      typeCheck<[1], [number]>([1]);
      typeCheck<[1], [boolean]>([1]);
      typeCheck<[1], object>([1]);
      typeCheck<[1], []>([1]);
    });

    it('unknown', () => {
      typeCheck<unknown, unknown>('ok');
      typeCheck<unknown, never>('any');
      typeCheck<unknown, any>('any');
      typeCheck<unknown, boolean>('any');
      typeCheck<unknown, string>('any');
      typeCheck<unknown, {}>('any');
      typeCheck<unknown, true>('any');
      typeCheck<unknown, 1>('any');
    });

    it('any', () => {
      typeCheck<any, any>('ok');
      typeCheck<any, never>('any');
      typeCheck<any, boolean>('any');
      typeCheck<any, string>('any');
      typeCheck<any, unknown>('any');
      typeCheck<any, object>('any');
      typeCheck<any, {}>('any');
      typeCheck<any, true>('any');
      typeCheck<any, 1>('any');
    });

    it('[any]', () => {
      typeCheck<[any], [any]>('ok');
      typeCheck<[any], [never]>(['any']);
      typeCheck<[any], any>(['any']);
      typeCheck<[any], any[]>(['any']);
      typeCheck<[any], [unknown]>(['any']);
      typeCheck<[any], [number]>(['any']);
      typeCheck<[any], [string]>(['any']);
    });

    it('never', () => {
      typeCheck<never, never>('ok');
    });
  });
});