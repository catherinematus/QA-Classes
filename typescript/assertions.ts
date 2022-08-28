/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * Checks if T1 equals to T2.
 */
export type IsTypeEqual<T1, T2> = IsNotAny<T1> extends false ? false : (
    IsNotAny<T2> extends false ? false : (
        [T1] extends [T2] ? ([T2] extends [T1] ? true : false) : false
    )
);

/**
 * Returns `false` if `any` is specified, otherwise returns `true`.
 * @see https://stackoverflow.com/a/49928360/3406963
 */
export type IsNotAny<T> = 0 extends (1 & T) ? false : true;

/**
 * Extracts and returns the first argument of the specified function.
 */
export type FirstArgument<T> = T extends (arg1: infer A, ...args: any[]) => any ? A : never;

/**
 * A simple type assertion function which always expects a true-type.
 */
export function typeAssert<T extends true>() { }