export interface IUserData{
    username: string,
    fullname:string
    Email:string, 
    password:string,
};

export interface IFormInput{
    label:string,
    type: string,
    id: string,
    name: keyof IUserData
};