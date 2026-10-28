import type { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

/* 
 export const NavbarItems = [
    {text: "Learn", href: "Learn.come"},
    {text: "Reference", href: "ref.come"}
]*/

interface IProps {          // i can write them into the parameter direct but the interface is professional 
    CompanyName: string,
    Address: string,
    children: ReactNode,
    login: boolean,
    setlogin: (value: boolean) => void  
}
export const Navbr = ({ CompanyName, Address, children, login, setlogin }: IProps) => {    // this is a function i can write instead function test() 

    //const {CompanyName, Address, children} = props;   another way
    // JSX
    return (
        <Fragment>
            <nav>Nav</nav>
            <span>{CompanyName}</span>
            <p>{Address}</p>
            {children}

            <button onClick={() => {
                setlogin(!login);
            }}>

                {login?"Logout":"Login"}
            </button>
<hr />
            <br />
        </Fragment>
    );
};

// export default Navbr;  to make it export default