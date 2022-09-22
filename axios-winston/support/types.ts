/* eslint-disable @typescript-eslint/no-explicit-any */
export interface requestDataType {
    url: string;
    body?: any;
    headers?: any
}

export interface Post {
    title: string,
    body: string,
    userId: number,
    [key: string]: string | number
}

export enum METHODS {
    POST = "POST",
    GET = "GET",
    DELETE = "DELETE",
    PATCH = "PATCH",
    PUT = "PUT"
}