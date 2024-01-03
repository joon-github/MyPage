import React,{ReactNode} from 'react';

export enum Size {
  full = 'w-full',
  half = "w-6/12",
}

const Card = ({children,size}:{children:ReactNode,size:Size|string}) => {
  return (
    <div className={`border flex flex-col items-center p-4 gap-2 ${size} rounded-lg h-46 hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition-all`}>
      {children}
    </div>
  );
};

export default Card;