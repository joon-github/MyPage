import React from 'react';

const Header = () => {
  return (
    <header
      className={`h-14 z-10 flex justify-around items-center`}
    >
      <p className='whiteText'>RESUME</p>
      <p className='whiteText'>PROJECT</p>
      <p className='whiteText'>BLOG</p>
    </header>
  );
};

export default Header;