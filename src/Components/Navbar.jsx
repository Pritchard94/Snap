import React,{useState} from 'react'
import logo from '/Users/bigmac/Desktop/Programming/Snap/snap/src/assets/images/logo.svg'
import arrowdown from '/Users/bigmac/Desktop/Programming/Snap/snap/src/assets/images/icon-arrow-down.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {RxCaretDown, RxCaretUp} from 'react-icons/rx'

const Navbar = () => {
  const [nav, setNav] = useState(true)
  const [drop, setDrop] = useState(true)

  const handleNav = () =>{
    setNav(!nav)
  }
  const dropDown =() => {
    setDrop(!drop)
  }
  
  
    return (
      <div className="w-full">
        <div className="flex justify-between items-center p-4">
          <div className="flex">
            <img className="mr-10" src={logo} alt="logo" />
            <div>
              <ul className="hidden md:flex">
                <li className="flex mr-4 items-center">
                  Features <RxCaretDown size={20} />
                </li>
                <li className="flex mr-4 items-center">
                  Company <RxCaretDown size={20} />{" "}
                </li>
                <li className="mr-2">Careers</li>
                <li className="mr-2">About</li>
              </ul>
            </div>
          </div>

          {/* buttons */}
          <div className="hidden md:flex">
            <button className="text-gray-600">Login</button>
            <button className="ml-8 border-[2px] text-gray-600 rounded-2xl pt-1 pb-1 pl-3 pr-3">
              Register
            </button>
          </div>
          {/* burger */}
          <div onClick={handleNav} className="burger block md:hidden">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={
              !nav
                ? "fixed bg-white top-[50px] w-[60%] p-4 right-0 h-full ease-out duration-500"
                : "fixed -right-[100%]"
            }
          >
            <ul>
              <li className="flex mr-4 mb-5 items-center">
                Features
                <div onClick={dropDown} className="cursor-pointer">
                  {drop ? <RxCaretDown size={20} /> : <RxCaretUp size={20} />}
                </div>
              </li>
              <li className="flex mb-5 mr-4 items-center">
                Company
                <div className="cursor-pointer">
                  <RxCaretDown size={20} />
                </div>{" "}
              </li>
              <li className="mb-5">Careers</li>
              <li className="">About</li>
            </ul>
            <div className="grid mt-[80px]">
              <button>Login</button>
              <button className="mt-3 py-2 px-4 border-2 rounded-xl">
                Register
              </button>
            </div>
          </div>
          {/* <div className=" hidden bg-white p-3">
            <div className="flex justify-between items-center">
              <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 3v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 1 1Zm-2 3H2v1h10V6Zm0 3H2v1h10V9Zm0 3H2v1h10v-1Z"
                  fill="#726CEE"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-500">Todo List</p>
            </div>
            <div className="flex justify-between items-center">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.667 8.667h-4v4h4v-4ZM11.334 0v1.333H4.667V0h-2v1.333h-1C.75 1.333 0 2.083 0 3v11.333C0 15.25.75 16 1.667 16h12.667C15.25 16 16 15.25 16 14.333V3c0-.917-.75-1.667-1.666-1.667h-1V0h-2Zm3 14.333H1.667V5.5h12.667v8.833Z"
                  fill="#4BB1DA"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-500">Calendar</p>
            </div>
            <div className="flex justify-between items-center">
              <svg width="13" height="17" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.408 13.916c-3.313 0-6-1.343-6-3 0-.612.371-1.18 1-1.654V7.916a5 5 0 0 1 3.041-4.6 2 2 0 0 1 3.507-1.664 2 2 0 0 1 .411 1.664 5.002 5.002 0 0 1 3.041 4.6v1.346c.629.474 1 1.042 1 1.654 0 1.657-2.687 3-6 3Zm0 1c.694 0 1.352-.066 1.984-.16.004.054.016.105.016.16a2 2 0 0 1-4 0c0-.055.012-.106.016-.16.633.094 1.29.16 1.984.16Z"
                  fill="#EDD556"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-500">Reminder</p>
            </div>
            <div className="flex justify-between items-center">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 2.133a5.867 5.867 0 1 0 0 11.734A5.867 5.867 0 0 0 8 2.133ZM8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm-.533 2.667a.533.533 0 0 0-.534.533v2.133c0 .295.24.534.534.534h3.2a.533.533 0 0 0 0-1.067H8V6.4a.533.533 0 0 0-.533-.533Z"
                  fill="#8E4CB6"
                />
              </svg>
              <p className="ml-3 text-sm text-gray-500">Reminder</p>
            </div>
          </div> */}
        </div>
      </div>
    );
}

export default Navbar
