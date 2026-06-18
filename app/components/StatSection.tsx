const StatsSection = () => {
    return (
        <section
            className="
            relative
            w-full
            h-25
            justify-center
            items-center
            flex
            py-20
            sm:py-24
            "
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('/images/careerfy-rating-list-bg.jpg')] bg-cover bg-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80" />

            {/* Stats Grid */}
            <div
                className="
                relative z-10
                max-w-[1500px]
                mx-auto
                px-6
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-0
                divide-y
                sm:divide-y-0
                sm:divide-x
                divide-white/30
                "
            >

                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                        $50+Million
                    </span>
                    <p className="text-white/70 text-sm sm:text-base tracking-wide">
                    in Posted Projects
                    </p>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center py-6 sm:py-8  text-center ">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                        1,000+ companies
                    </span>
                    <p className="text-white/70 text-sm sm:text-base tracking-wide">
                        in Posted Projects
                    </p>
                </div>

                {/* Stat 3 */}
                <div className="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
                    <span className="text-3xl flex justify-center items-center sm:text-4xl font-bold text-white">
                        4.8<span className="text-[#FFAF00] text-xl sm:text-3xl">★★★★★</span>
                    </span>
                    <p className="text-white/70 text-sm sm:text-base tracking-wide">
                        Average Rating out of 5 Stars
                    </p>
                </div>

            </div>

        </section>
    )
}

export default StatsSection