"use client"

import { useState, useEffect } from "react"

const candidates = [
    {
        name: "Wanda Montgo",
        role: "Charted Accountant",
        location: "",
        sector: "3D Designer Jobs",
        salary: "Salary $ 40 /Hr",
        photo: "https://i.pravatar.cc/300?img=53"
    },
    {
        name: "Lori Ramos",
        role: "Property Agent",
        location: "",
        sector: "Sales & Marketing",
        salary: "Salary $ 60 /Hr",
        photo: "https://i.pravatar.cc/300?img=11"
    },
    {
        name: "Linda",
        role: "Print Media Designer",
        location: "",
        sector: "Education Training",
        salary: "Salary $ 14000 /Monthly",
        photo: "https://i.pravatar.cc/300?img=9"
    },
    {
        name: "Kathleen",
        role: "Marketing Expert",
        location: "",
        sector: "Automotive Jobs",
        salary: "Salary $ 1200 /Weekly",
        photo: "https://i.pravatar.cc/300?img=47"
    },
    {
        name: "Martha Griffin",
        role: "Business Analyst",
        location: "",
        sector: "Accounting",
        salary: "Salary $ 85 /Hr",
        photo: "https://i.pravatar.cc/300?img=20"
    },
    {
        name: "James Holloway",
        role: "Civil Engineer",
        location: "",
        sector: "Construction",
        salary: "Salary $ 950 /Weekly",
        photo: "https://i.pravatar.cc/300?img=57"
    },
    {
        name: "Sophia Turner",
        role: "Network Technician",
        location: "",
        sector: "Telecoms",
        salary: "Salary $ 55 /Hr",
        photo: "https://i.pravatar.cc/300?img=25"
    },
    {
        name: "Daniel Brooks",
        role: "3D Character Artist",
        location: "",
        sector: "3D Designer Jobs",
        salary: "Salary $ 70 /Hr",
        photo: "https://i.pravatar.cc/300?img=60"
    }
]

const PopularCandidates = () => {
    const [startIndex, setStartIndex] = useState(0)
    const [cardsPerPage, setCardsPerPage] = useState(4)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1)
            } else if (window.innerWidth < 1024) {
                setCardsPerPage(2)
            } else {
                setCardsPerPage(4)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleNext = () => {
        if (startIndex + cardsPerPage < candidates.length) {
            setStartIndex(startIndex + cardsPerPage)
        }
    }

    const handleBack = () => {
        if (startIndex - cardsPerPage >= 0) {
            setStartIndex(startIndex - cardsPerPage)
        }
    }

    const visibleCandidates = candidates.slice(startIndex, startIndex + cardsPerPage)

    const canGoBack = startIndex > 0
    const canGoNext = startIndex + cardsPerPage < candidates.length

    return (
        <section className="relative py-20 sm:py-28 overflow-hidden bg-black/80">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('/images/careerfy-rating-list-bg.jpg')] bg-cover bg-center "
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/85" />

            {/* Content */}
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
                        Popular Candidates
                    </h2>
                    <p className="mt-4 text-white/70 text-base sm:text-lg">
                        Connecting outstanding people with the world's most
                    </p>
                    <div className="mt-5 flex justify-center">
                        <div className="w-16 h-1 bg-[#3faa00]" />
                    </div>
                </div>

                {/* Slider Row */}
                <div className="flex items-center gap-3 sm:gap-4 lg:gap-8">

                    {/* BACK */}
                    <button
                        onClick={handleBack}
                        disabled={!canGoBack}
                        className={`
                            flex-shrink-0
                            flex items-center gap-1 sm:gap-2
                            text-white text-xs sm:text-sm lg:text-base font-semibold
                            uppercase tracking-widest
                            transition-opacity duration-200
                            whitespace-nowrap
                            ${canGoBack ? "opacity-100 hover:text-[#3faa00]" : "opacity-30 cursor-not-allowed"}
                        `}
                    >
                        ← BACK
                    </button>

                    {/* Cards */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {visibleCandidates.map((candidate, index) => (

                            <div
                                key={index}
                                className="bg-white flex flex-col overflow-hidden"
                            >

                                {/* Photo */}
                                <div className="flex justify-center pt-6 sm:pt-8 pb-3 sm:pb-4 px-4">
                                    <div className="
                                        w-24 sm:w-28
                                        h-24 sm:h-28
                                        rounded-full
                                        overflow-hidden
                                        ring-4
                                        ring-gray-200
                                        shadow
                                    ">
                                        <img
                                            src={candidate.photo}
                                            alt={candidate.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="flex flex-col items-center px-3 sm:px-4 pb-4 sm:pb-5 flex-1 text-center">

                                    {/* Name */}
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                        {candidate.name}
                                    </h3>

                                    {/* Role — green */}
                                    <p className="text-[#3faa00] text-xs sm:text-sm font-medium mt-1">
                                        {candidate.role}
                                    </p>

                                    {/* Location + Sector */}
                                    <div className="mt-2 sm:mt-3 text-gray-400 text-xs space-y-1">
                                        <p>Location: {candidate.location}</p>
                                        <p>Sector: {candidate.sector}</p>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex items-center gap-3 mt-3 sm:mt-4">

                                        {/* Facebook */}
                                        <a href="#" className="text-gray-500 hover:text-[#3faa00] transition-colors">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </a>

                                        {/* X / Twitter */}
                                        <a href="#" className="text-gray-500 hover:text-[#3faa00] transition-colors">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                                            </svg>
                                        </a>

                                        {/* LinkedIn */}
                                        <a href="#" className="text-gray-500 hover:text-[#3faa00] transition-colors">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                <rect x="2" y="9" width="4" height="12" />
                                                <circle cx="4" cy="4" r="2" />
                                            </svg>
                                        </a>

                                    </div>

                                </div>

                                {/* Salary — green full width button */}
                                <button className="
                                    w-full
                                    bg-[#3faa00]
                                    hover:bg-[#359200]
                                    transition-colors
                                    text-white
                                    font-semibold
                                    text-xs sm:text-sm
                                    py-3 sm:py-4
                                    text-center
                                ">
                                    {candidate.salary}
                                </button>

                            </div>

                        ))}
                    </div>

                    {/* NEXT */}
                    <button
                        onClick={handleNext}
                        disabled={!canGoNext}
                        className={`
                            flex-shrink-0
                            flex items-center gap-1 sm:gap-2
                            text-white text-xs sm:text-sm lg:text-base font-semibold
                            uppercase tracking-widest
                            transition-opacity duration-200
                            whitespace-nowrap
                            ${canGoNext ? "opacity-100 hover:text-[#3faa00]" : "opacity-30 cursor-not-allowed"}
                        `}
                    >
                        NEXT →
                    </button>

                </div>

            </div>

        </section>
    )
}

export default PopularCandidates