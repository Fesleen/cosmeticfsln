import React, { useState } from 'react';
import NavbarLogo from '../../../images/navbar/Screenshot 2024-07-01 223741.png';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-4 flex justify-end">
        <CloseIcon onClick={toggleDrawer(anchor, false)} />
      </div>
      <Divider />
      <div className="p-4 flex flex-col space-y-4">
        <Link className="text-black font-playfair md:text-2xl" to="/">Home</Link>
        <Link className="text-black font-playfair md:text-2xl" to="/about">About Us</Link>
        <Link className="text-black font-playfair md:text-2xl" to="/blog">Blogs</Link>
        <Link className="text-black font-playfair md:text-2xl" to="/cosmetic">Cosmetics Info</Link>
        <Link className="text-black font-playfair md:text-2xl" to="/contact">Contact</Link>
      </div>
    </Box>
  );

  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="w-2/3 md:w-1/4">
          <Link to="/">
            <img className='m-0 p-0 w-2/3' src={NavbarLogo} alt="Navbar Logo" />
          </Link>
        </div>
        <ul className="hidden md:flex w-2/3 md:w-1/2 justify-between space-x-4">
          <li><Link to="/" className="text-black font-playfair md:text-2xl">Home</Link></li>
          <li><Link to="/about" className="text-black font-playfair md:text-2xl">About Us</Link></li>
          <li><Link to="/blog" className="text-black font-playfair md:text-2xl">Blogs</Link></li>
          <li><Link to="/cosmetic" className="text-black font-playfair md:text-2xl">Cosmetics Info</Link></li>
          <li><Link to="/contact" className="text-black font-playfair md:text-2xl">Contact</Link></li>
        </ul>
        <div className="md:hidden">
          <Button onClick={toggleDrawer('right', true)}> <MenuIcon className="text-black" /></Button>
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
