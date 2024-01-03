import React,{ReactNode} from 'react';

export enum Size {
  full = 'w-full',
  half = "w-6/12",
}

const Card = ({children,size,width}:{children:ReactNode,size:Size|string,width?:number}) => {
  return (
    <div 
      className={`border flex flex-col items-center p-4 gap-2 ${size} rounded-lg h-46 hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition-all`}
      style={{minWidth:width+'px'}}
    >
      {children}
    </div>
  );
};

export default Card;