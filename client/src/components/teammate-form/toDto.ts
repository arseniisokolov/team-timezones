import crypto from 'crypto';
import { Person } from "../../../../types";
import { FormFields } from "./use-teammate-form";

export function toDto(fields: FormFields): Omit<Person, 'uuid'> {
    return {
        firstName: fields.firstName,
        lastName: fields.lastName,
        timeZone: Number(fields.timezone),
    };
}