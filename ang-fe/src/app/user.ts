import { UserAddress } from "./user-address"

export interface User {
    username: string,
    password: string,
    confirmPassword: string,
    fullname: string,
    phone: string
    street: string,
    city: string,
    state: string,
    zip: number,
    country: string
}
