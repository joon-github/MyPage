import React,{ReactNode} from 'react';

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div 
      className={`border flex flex-col items-center p-4 gap-2  rounded-lg h-46 hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition-all`}
    >
      {children}
    </div>
  );
};

export default Card;