import SearchSection from "./SearchSection"

const HeroSection = () => {
    return (

        <section className="relative h-screen">

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
                className="relative z-10 h-full flex flex-col justify-center items-center"
            >

                <h1
                    className="mt-16 text-white text-7xl font-bold text-center"
                >
                    FIND THE JOB THAT
                    <br />
                    FITS YOUR LIFE
                </h1>

                <p className="text-white mt-6 text-xl">
                    Connecting outstanding people with innovative companies.
                </p>


                <SearchSection />
            </div>

        </section>

    )
}

export default HeroSection