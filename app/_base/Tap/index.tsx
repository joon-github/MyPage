'use client'
import React, { useState } from 'react';

type items = {
  key:string,
  label:string,
  children:React.ReactNode
}

type TapProps = {
  items : items[];
}

const Tap = ({items}:TapProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const onClickLable = (label:string) => {
    const findcChildren = items.find((item)=>item.label === label);
    if(findcChildren){
      setSelectedItem(findcChildren);
    }
  }
  return (
    <div className='flex flex-col gap-4 w-full'>
      <div className='flex gap-4 justify-center'>
        {items.map(({key,label}) => {
          const isCurrentSelectItem = selectedItem.label === label
          return(
          <div key={key}>
            <button 
              className={
                `${isCurrentSelectItem ?
                  'font-bold text-blue-900':
                  "text-gray-400"
                } 
                text-lg`
              } 
              onClick={()=>{onClickLable(label)}}>{label}</button>
          </div>
          )
        })}
      </div>
      <div className='w-full h-full'>
        {selectedItem.children}
      </div>
    </div>
  );
};

export default Tap;