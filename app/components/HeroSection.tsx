import SearchSection from "./SearchSection"

const HeroSection = () => {
    return (

        <section className="relative min-h-screen flex flex-col">

            {/* BG */}
            <div
                className="absolute inset-0 bg-[url('/images/fourteen-banner-1.jpg')] bg-cover bg-center"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/75"
            />

            {/* Content */}
            <div
                className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 sm:px-6 text-center"
            >

                <h1
                    className="mt-28 sm:mt-20 lg:mt-16 text-white text-3xl sm:text-5xl lg:text-7xl font-bold text-center leading-tight"
                >
                    FIND THE JOB THAT
                    <br />
                    FITS YOUR LIFE
                </h1>

                <p className="text-white mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl">
                    Connecting outstanding people with innovative companies.
                </p>

                <SearchSection />
            </div>

        </section>

    )
}

export default HeroSection