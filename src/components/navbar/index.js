import React, { useEffect, useRef, useState } from 'react'
import NavbarItem from '../navbarItem'
import { Link } from 'react-router-dom'
import Sandbox from '../sandbox'
const Navbar = (props) => {
  
  let value = props.which == "ONE" ? true : true;
  let isFirstRender = useRef(value)

    let [state, setState] = useState(0)
    let [data, setData] = useState(null)
    let [clicked, setClicked] = useState(false)

    let call = async () => {
      setData(await (await fetch("/data")).json())
     }
    console.log("rednering... is first??? >", isFirstRender.current, data);

    // effect runs twice
    useEffect(() => {
      console.log("useEffect START, firstRender: ", isFirstRender.current);
      if (isFirstRender.current) {
        isFirstRender.current = false;
          console.log(new Date().getMilliseconds())
          console.log("MAKING CALL");
          call()
          // if (props.which == "ONE") {
          //   setData("THIS IS ONE")

          // } else {
          //   setData("TWOOOO")

          // }

      }
     console.log("useEffect END");
     return () => {
      console.log("UNMOUNTING...");
     }
    }, [])


  return (
    <div onClick={() => setState(state+1)}>
      <Link to="/contact">
      <NavbarItem state={state} setState={setState}  />
        <div>
          {data ? JSON.stringify(data): "loading... "}
        </div>
        <Sandbox />
      </Link>
   
    </div>

  )
}

export default Navbar