import { Fragment } from "react/jsx-runtime";
import { formInputList } from "./Data";
import type { ChangeEvent } from "react";
import type { IUserData } from "./Interfaces";

interface IProps {
  setlogin: (value: boolean) => void
  userData: IUserData,
  setUserData: (user: IUserData) => void
}

export const FormLogin = ({ setlogin, userData, setUserData }: IProps) => {

  // changeHandler
  const onChangeHanlder = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  };

  // Renderdata                                               //!!! the key must be writeen in the first element in map (go back to last video in react basics key video)
  const RenderFormData = formInputList.map(input => (
    <div className="input-wrapper">
      <label htmlFor={input.id}>{input.label}:</label>
      <input type={input.type}
        name={input.name}
        id={input.id}
        value={userData[input.name]}
        onChange={onChangeHanlder}
      />
    </div>
  ))

  //=============================================================================================================
  return (
    <Fragment>

      {RenderFormData}
      <button style={{ backgroundColor: "cyan", color: "black" }} onClick={() => setlogin(true)}>Login</button>
    </Fragment>
  )
};
