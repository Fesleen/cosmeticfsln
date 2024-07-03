import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';

const MainNavbar = () => {
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
        <Link className="text-black font-playfair text-2xl" to="/">Home</Link>
        <Link className="text-black font-playfair text-2xl" to="/about">About Us</Link>
        <Link className="text-black font-playfair text-2xl" to="/blog">Blogs</Link>
        <Link className="text-black font-playfair text-2xl" to="/cosmetic">Cosmetics Info</Link>
        <Link className="text-black font-playfair text-2xl" to="/contact">Contact</Link>
      </div>
    </Box>
  );

  return (
    <>
      <div className="section bg-cover bg-center h-screen w-full" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/makeup-products-striped-cosmetic-bag-dusty-dark-background_23-2148181476.jpg')` }}>
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="w-2/3 md:w-1/4">
            <Link to="/">
              <h1 className="text-white font-playfair text-2xl m-0 p-0">INFO BAO</h1>
            </Link>
          </div>
          <ul className="hidden md:flex w-2/3 md:w-1/2 justify-between space-x-4">
            <li><Link to="/" className="text-white font-playfair text-2xl">Home</Link></li>
            <li><Link to="/about" className="text-white font-playfair text-2xl">About Us</Link></li>
            <li><Link to="/blog" className="text-white font-playfair text-2xl">Blogs</Link></li>
            <li><Link to="/cosmetic" className="text-white font-playfair text-2xl">Cosmetics Info</Link></li>
            <li><Link to="/contact" className="text-white font-playfair text-2xl">Contact</Link></li>
          </ul>
          <div className="md:hidden">
            <Button onClick={toggleDrawer('right', true)}> <MenuIcon className="text-white" /></Button>
            <Drawer
              anchor='right'
              open={state['right']}
              onClose={toggleDrawer('right', false)}
            >
              {list('right')}
            </Drawer>
          </div>
        </div>
        <div className="w-1/2 relative">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold absolute top-48 -right-1/3 mb-20">About Cosmetics</h1>
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-playfair font-semibold absolute top-64 -right-3/4 mb-20">Learn more about other cosmetics with INFO BAO</h1>
          <button className="text-white border-2 border-white text-xl sm:text-2xl md:text-3xl font-playfair font-semibold p-1 absolute top-80 -right-1/3 mb-20">
            <Link to="/about">More information</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
