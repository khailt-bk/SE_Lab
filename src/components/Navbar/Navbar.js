import React from 'react';
export const Navbar = () => {
    return (
        <div className='flex  h-14 bg-[#536F4A] relative w-full'>
            <div className='w-3/5 flex-nowrap font-bold ml-10 mt-3 text-xl '>Home
            </div>
            <div className=' w-2/5 flex-nowrap font-bold  text-xl  mt-3 '>Admin
            </div>
        </div>
    );
}