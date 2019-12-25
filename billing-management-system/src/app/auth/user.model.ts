export interface User {

    id?: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    createddate: Date;
    updateddate: Date;
    role: string,
    profile: string;
    status: boolean
}