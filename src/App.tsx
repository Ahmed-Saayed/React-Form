// each returned components must return only one top level like div or Fragment contain all the sections
// component is a function returns JSX(javascript xml) and received only one parameter which is PROPS and the first name of the function name (the component) must be Capital
// in react project recommended to make a folder that hold all the components files and the component file the extension must be (.tsx)
// props the way that u send data from component to another
// useState() is a hook that allows you to add state to your component  in its first run it give the default value and update it if any change accures after rerendering

import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Navbr as MyNav } from './Navbar'    // export default must mention the exported between two curl prackets {} and can add many exported here but the export deafult must not put between it
import { FormLogin as Myform} from './form'
import { UserDetails } from './UserDetails'

function App() {
  const [count, setCount] = useState(0)
  const makeAvariable = 'Hello'
  const companyName = 'Microsoft'
  const address = '23 streeet elsadat'

  let [Login, setLogin] = useState(false)
  let [userData, setUserData] = useState({
    username: "PATO", 
    fullname:"Ahmed Sayed Farhan",
    Email: "ahmedPato@gmail.com",
    password: "***",
  });

  return (
    <>  
      <MyNav CompanyName={companyName} Address={address} login={Login} setlogin={setLogin}>
        <p> children props</p>
      </MyNav>
      {Login?<UserDetails user = {userData}/>:<Myform  setlogin={setLogin} userData={userData} setUserData={setUserData}/>}
      {makeAvariable}


      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
