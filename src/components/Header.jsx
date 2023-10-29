import React from 'react'

const Header = () => {
  return (
    <header className='w-screen h-25 bg-gray'>
        <div className='container mx-auto'>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center ">
                <div class="bg-blue p-4 text-center col-span-2">Column 1</div>
                <div class="bg-red p-4 text-center col-span-2">Column 2</div>
            </div>
        </div>
    </header>
  )
}

export default Header