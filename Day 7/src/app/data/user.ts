import { Todos } from "./todos";

export interface User{
    $key: string,
    email: string,
    pwd: string,
    todo: Todos
}