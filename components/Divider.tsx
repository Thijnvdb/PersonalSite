import React from 'react'

interface dividerProps {
  title: string,
  hidden?: Boolean
}

export default function Divider({title, hidden = false}:dividerProps) {
  return (<div className={'flex justify-center items-center flex-col w-full mb-[4vh]'}>
    <a id={title} className={'capitalize flex items-center justify-center select-none h-[10vh]'}/>
    {
      !hidden &&
      <h1 className='text-4xl h-[8vh] capitalize text-theme-muted-50 w-5/6 text-center border-theme-muted-700 border-b-2'>{title}</h1>
    }
  </div>
  )
}
