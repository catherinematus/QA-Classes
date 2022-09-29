/* eslint-disable @typescript-eslint/no-explicit-any */
import Ajv from "ajv";
import { expect } from "@jest/globals";

const ajv = new Ajv({ allErrors: true });

export function validateSchema(schema: any, data: any) {
    try {
        expect(ajv.validate(schema, data)).toBeTruthy();
    } catch (err: any) {
        throw new Error(ajv.errorsText())
    }
}