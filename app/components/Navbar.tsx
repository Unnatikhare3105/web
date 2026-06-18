const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-20">

            <div className="navbar max-w-[1700px] mx-auto flex justify-between items-start pt-18 px-10">
                <div className="nav-links flex flex-col gap-14 text-white">
                    <div className="flex gap-10 text-xl">
                        <a className="text-green-500">Home</a>
                        <a>Jobs</a>
                        <a>Employers</a>
                        <a>Candidates</a>
                        <a>Job Packages</a>
                    </div>

                    <div className="text-xl">
                        <a>Pages</a>
                    </div>
                </div>

                <div className="logo-nav mt-12">
                    <div
                        className="h-13 w-44 bg-contain bg-no-repeat
                        bg-[url('/images/logo.png')] bg-cover bg-center"
                    />
                </div>

                <div className="form-div flex items-center gap-12 mt-8 text-xl">

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

            </div>

        </nav>
    )
}

export default Navbar