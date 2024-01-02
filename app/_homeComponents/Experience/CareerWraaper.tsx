import React from 'react';

type CareerWrapperPorps ={
  children : React.ReactNode
}

const CareerWraaper = ({children}:CareerWrapperPorps) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <div>┌</div>
        <div className='flex-1'/>
        <div className='-mt-1'>└</div>
      </div>
      {children}
      <div className='flex flex-col items-center justify-center'>
        <div>┐</div>
        <div className='flex-1'/>
        <div className='-mt-1'>┘</div>
      </div>
    </>
  );
};

export default CareerWraaper;