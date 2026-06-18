//app/components/Navbar.tsx

"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="lg:fixed top-0 left-0 w-full p-4 z-20 bg-black/90 backdrop-blur-md opacity-85">

            <div className="navbar max-w-[1700px] mx-auto flex justify-between items-center lg:items-start pt-6 lg:pt-18 px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <div className="logo-nav order-1 lg:order-2 lg:mt-12">
                    <div
                        className="h-10 w-32 sm:h-13 sm:w-44 bg-contain bg-no-repeat
                        bg-[url('/images/logo.png')] bg-cover bg-center"
                    />
                </div>

                {/* Nav links - desktop only */}
                <div className="nav-links order-2 lg:order-1 hidden lg:flex flex-col gap-14 text-white">
                    <div className="flex gap-10 text-l">
                        <a className="text-green-500" href='#'>Home</a>
                        <a href='#'>Jobs</a>
                        <a href='#'>Employers</a>
                        <a href='#'>Candidates</a>
                        <a href='#'>Job Packages</a>
                    </div>

                    <div className="text-l">
                        <a>Pages</a>
                    </div>
                </div>

                {/* Right buttons - desktop only */}
                <div className="form-div order-3 hidden lg:flex items-center gap-12 mt-8 text-xl">

                    <button className="text-white hover:text-green-500 transition">
                        Register
                    </button>

                    <button className="text-white">
                        Sign In
                    </button>

                    <button
                        className="px-10 py-5 border border-green-500 hover:bg-green-500 transition text-white"
                    >
                        Post New Job
                    </button>

                </div>

                {/* Mobile menu toggle */}
                <button
                    className="order-3 lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="lg:hidden bg-black/90 px-6 py-8 flex flex-col gap-6 text-white text-lg">
                    <a className="text-green-500">Home</a>
                    <a>Jobs</a>
                    <a>Employers</a>
                    <a>Candidates</a>
                    <a>Job Packages</a>
                    <a>Pages</a>

                    <hr className="border-white/20" />

                    <button className="text-left hover:text-green-500 text-lg transition">
                        Register
                    </button>
                    <button className="text-left hover:text-green-500 text-lg transition">
                        Sign In
                    </button>
                    <button className="px-6 py-3  border border-green-500 hover:bg-green-500 transition text-left w-fit text-lg">
                        Post New Job
                    </button>
                </div>
            )}

        </nav>
    )
}

export default Navbar