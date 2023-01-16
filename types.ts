export type WithId = {
    _id: string;
};

export type Person = WithId & {
    firstName: string;
    lastName?: string;
    timeZone: number;
};