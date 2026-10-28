import type { IUserData } from "./Interfaces"

interface IProps{
    user:IUserData
}
export const UserDetails = ({user}: IProps)=> {
    return (
        <div style = {{margin:30}}>
            <h3>UserName: {user.username}</h3>
            <h3>UserFullName: {user.fullname}</h3>
            <h3>UserEmail: {user.Email}</h3>
            <h3>UserPassword: {user.password}</h3>
        </div>
    )
}