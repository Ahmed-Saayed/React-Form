import type { IFormInput } from "../Interfaces";

export const formInputList: IFormInput[] = [
    {
        label: "Username",
        type: "text",
        id: "username",
        name: "username"
    },
    {
        label: "FullName",
        type: "text",
        id: "fullname",
        name: "fullname"
        
    },
    {
        label:"Email",
        type:"email",
        id:"email",
        name:"Email" 
    },
    {
        label: "Password",
        type: "password",
        id: "password",
        name:"password"
    }
]