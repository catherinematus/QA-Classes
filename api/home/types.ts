export interface Post {
    title: string,
    body: string,
    userId: number,
    [key: string]: string | number
}