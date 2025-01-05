import React from 'react'
import ThemeToggler from './ThemeToggler'
import Nav from './Nav'

export default function Header() {
    return (
        <section className='shadow-md border-white bottom-b-5'>
            <div className='container mx-auto h-[60px] flex justify-between items-center px-4'>
                <ThemeToggler />
                <Nav
              containerstyles="flex gap-x-8 items-center"
              linkStyle="relative hover:text-primary transition-all"
              underlinkStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            </div>
        </section>
    )
}
