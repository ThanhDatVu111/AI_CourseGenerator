import CategoryList from '@/app/_shared/CategoryList'
import React from 'react'
import Image from 'next/image'

const SelectCategory = () => {
    return (
        <div className='px-10 md:px-20'>
            <h2 className='my-8'> Select the Course Category</h2>
                <div className='grid grid-cols-4 gap-3 md:gap-10'>   
                    {CategoryList.map((item,index)=>(
                        <div className= 'flex flex-col p-5 border items-center rounded-xl hover:border-primary hover:bg-gray-200 cursor-pointer'>
                            <Image src={item.icon} width={50} height={50}/>
                            <h2 className='text-sm hidden md:block'>{item.name}</h2>
                        </div>
                    ))}
                </div>
        </div>
    )
}


export default SelectCategory