import { useState } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className=' px-12 pt-8 border text-medium-grey'>
      <div className='flex'>
        <div className='pr-8'>
          <img src={logo} alt='snap' />
        </div>
        <section className='grid w-full grid-cols-2 my-auto border'>
          <div className='flex space-x-5 '>
            <p>Features</p>
            <p>Company</p>
            <p>Careers</p>
            <p>About</p>
          </div>
          <div className='flex justify-end  space-x-5'>
            <p>Login</p>
            <button className="">Register</button>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
