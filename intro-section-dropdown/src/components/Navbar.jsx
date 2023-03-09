import { useState } from "react";
import logo from "../assets/logo.svg";
import upArrow from "../assets/icon-arrow-up.svg";
import downArrow from "../assets/icon-arrow-down.svg";
import calendar from "../assets/icon-calendar.svg";
import todo from "../assets/icon-todo.svg";
import reminders from "../assets/icon-reminders.svg";
import planning from "../assets/icon-planning.svg";
import hamburger from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-close-menu.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropDown, setDropDown] = useState(true);
  const [dropDown2, setDropDown2] = useState(true);

  return (
    <nav className='grid h-[80px] items-center px-2 text-medium-grey md:px-12'>
      <div className='flex items-center justify-between'>
        <div className='pr-3'>
          <img src={logo} alt='snap' className='' />
        </div>
        <div className='cursor-pointer place-items-end sm:hidden'>
          <button onClick={() => setNav(!nav)}>
            <img src={hamburger} alt='menu' />
          </button>
        </div>
        {/* mobile menu */}
        {nav ? (
          <section className=' absolute right-0 bottom-0 z-10 min-h-[100%]  w-[65%] bg-[#FFF] p-6  sm:hidden '>
            <div className='flex justify-end'>
              <button onClick={() => setNav(!nav)}>
                <img src={closeMenu} alt='X' />
              </button>
            </div>
            <ul className='my-8 space-y-4'>
              <li className='flex'>
                <button
                  onClick={() => setDropDown(!dropDown)}
                  className='navtextmobile'
                >
                  Features
                </button>
                {dropDown ? (
                  <img src={downArrow} alt='' className='my-auto ml-2' />
                ) : (
                  <img src={upArrow} alt='' className='my-auto ml-2' />
                )}
              </li>
              <ul className={dropDown ? "hidden" : "space-y-4"}>
                <li className='navtext mb-2 flex'>
                  <span className='mr-3'>
                    <img src={todo} alt='' />
                  </span>
                  Todo List
                </li>
                <li className='navtext mb-2 flex'>
                  <span className='mr-3'>
                    <img src={calendar} alt='' />
                  </span>
                  Calendar
                </li>
                <li className='navtext mb-2 flex'>
                  <span className='mr-3'>
                    <img src={reminders} alt='' />
                  </span>
                  Reminders
                </li>
                <li className='navtext flex'>
                  <span className='mr-3'>
                    <img src={planning} alt='' />
                  </span>
                  Planning
                </li>
              </ul>
              <li className='flex'>
                <button
                  onClick={() => setDropDown2(!dropDown2)}
                  className='navtextmobile'
                >
                  Company
                </button>
                {dropDown2 ? (
                  <img src={downArrow} alt='' className='my-auto ml-2' />
                ) : (
                  <img src={upArrow} alt='' className='my-auto ml-2' />
                )}
              </li>
              <ul className={dropDown2 ? "hidden" : "space-y-4"}>
                <li className='navtext mb-2 flex'>History</li>
                <li className='navtext mb-2 flex'>Our Team</li>
                <li className='navtext flex'>Blog</li>
              </ul>
              <li>
                <p className='navtextmobile'>Careers</p>
              </li>
              <li>
                <p className='navtextmobile'>About</p>
              </li>
            </ul>
            <div className='mb-4 flex justify-center'>
              <p className='navtext'>Login</p>
            </div>
            <div className='flex justify-center'>
              <button className='navtext w-full rounded-2xl border border-medium-grey py-2 px-3 hover:border-almost-black'>
                Register
              </button>
            </div>
          </section>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "absolute left-0 bottom-0 min-h-full w-[35%] bg-almost-black opacity-60 sm:hidden"
              : "hidden"
          }
        ></div>
        <section className='top-0 my-auto hidden w-full grid-cols-2 items-center justify-center sm:grid'>
          <div className='ml-6 flex space-x-6 md:space-x-10'>
            <div className='flex'>
              {/* Features toggle */}
              <button
                onClick={() => setDropDown(!dropDown)}
                className='navtext'
              >
                Features
              </button>
              {dropDown ? (
                <img src={downArrow} alt='' className='my-auto ml-2' />
              ) : (
                <img src={upArrow} alt='' className='my-auto ml-2' />
              )}

              {/* Dropdown */}
              <div
                className={
                  dropDown
                    ? "hidden"
                    : "absolute mt-10 -ml-16 rounded-xl  bg-almost-white p-6 text-sm drop-shadow-2xl"
                }
              >
                <ul>
                  <li className='navtext mb-2 flex'>
                    <span className='mr-3'>
                      <img src={todo} alt='' />
                    </span>
                    Todo List
                  </li>
                  <li className='navtext mb-2 flex'>
                    <span className='mr-3'>
                      <img src={calendar} alt='' />
                    </span>
                    Calendar
                  </li>
                  <li className='navtext mb-2 flex'>
                    <span className='mr-3'>
                      <img src={reminders} alt='' />
                    </span>
                    Reminders
                  </li>
                  <li className='navtext flex'>
                    <span className='mr-3'>
                      <img src={planning} alt='' />
                    </span>
                    Planning
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex'>
              <button
                onClick={() => setDropDown2(!dropDown2)}
                className='navtext'
              >
                Company
              </button>
              {dropDown2 ? (
                <img src={downArrow} alt='' className='my-auto ml-2' />
              ) : (
                <img src={upArrow} alt='' className='my-auto ml-2' />
              )}
              <div
                className={
                  dropDown2
                    ? "hidden"
                    : "absolute mt-10  rounded-xl  bg-almost-white p-6 text-sm drop-shadow-2xl"
                }
              >
                <ul>
                  <li className='navtext mb-2 flex'>History</li>
                  <li className='navtext mb-2 flex'>Our Team</li>
                  <li className='navtext flex'>Blog</li>
                </ul>
              </div>
            </div>
            <p className='navtext'>Careers</p>
            <p className='navtext'>About</p>
          </div>
          <div className='flex justify-end space-x-6 md:space-x-10'>
            <p className='navtext my-auto'>Login</p>
            <button className='navtext rounded-2xl border border-medium-grey py-2 px-3 hover:border-almost-black'>
              Register
            </button>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
