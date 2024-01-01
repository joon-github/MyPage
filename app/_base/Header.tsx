import React from 'react';

const Header = () => {
  return (
    <header
      className={`h-14 z-10 flex justify-around items-center`}
    >
      <p className='text-xl'>RESUME</p>
      <p className='text-xl'>PROJECT</p>
      <p className='text-xl'>BLOG</p>
    </header>
  );
};

export default Header;