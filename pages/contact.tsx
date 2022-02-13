import React, { ReactElement } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

export default function contact() {
  return (
    <>
        <div className='w-2/3 gap-6 h-[50vh] mx-auto rounded-xl mt-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-rows-3'>
            <div className='bg-theme-primary-500 rounded-xl col-span-2 flex justify-center items-center'>
                <h1 className='font-bold text-8xl text-center'>Contact</h1>
            </div>
            <div className='bg-theme-primary-300 p-12 rounded-xl col-span-2 row-span-2 flex flex-col justify-start items-center'>
                <span>
                    <h2 className='font-medium text-xl text-center'><b>Tel:</b> <a href='tel:+31636589487'>+31 6 365 89 487</a></h2>
                    <h2 className='font-medium text-xl text-center'><b>Email:</b> <a href='mailto:thijnvandenbergh@gmail.com'>thijnvandenbergh@gmail.com</a></h2>
                </span>
            </div>
        </div>
    </>
  )
}

contact.getLayout = (page: ReactElement) => {
    return <DefaultLayout>
        {page}
    </DefaultLayout>
}
