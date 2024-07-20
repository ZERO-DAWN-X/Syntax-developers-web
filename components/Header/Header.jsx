import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { FaMendeley } from "react-icons/fa6";
function Header() {
    const [toggle,setToggle] = useState(false);

    const onToggle = () => {
      setToggle(!toggle)
    }
  return (
    <div className="flex items-center justify-between">
      <img src="./syntax-logo.png" alt="Logo" className="w-24" />
      <i className="text-3xl cursor-pointer" onClick={onToggle}>
        {toggle ? <FaMendeley />: <FiMenu />}
      </i>
    </div>
  );
}

export default Header