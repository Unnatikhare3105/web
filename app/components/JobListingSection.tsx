//app/components/JobListingSection.tsx

"use client"

import { useState } from "react"
import {
    Briefcase,
    MapPin,
    Wallet,
    Calendar
} from "lucide-react"

type Job = {
    title: string
    company: string
    category: string
    location: string
    salary: string
    daysAgo: number
    logo: string
}

const jobs: Job[] = [
    {
        title: "Need Charted Accountant",
        company: "Mx Digital Entertainment",
        category: "Automotive Jobs",
        location: "Kemah, Turkey",
        salary: "$230 - $321",
        daysAgo: 2,
        logo: "https://ui-avatars.com/api/?name=Mx+Digital&background=3faa00&color=fff&size=128&bold=true"
    },
    {
        title: "Expert For Charity",
        company: "Ebiquity Maxi",
        category: "Accounting",
        location: "Pangai, Tonga",
        salary: "$451 - $542",
        daysAgo: 5,
        logo: "https://ui-avatars.com/api/?name=Ebiquity+Maxi&background=d6c313&color=000&size=128&bold=true"
    },
    {
        title: "Senior Print Media",
        company: "Reliable Movers",
        category: "Telecoms",
        location: "Jibla, Yemen",
        salary: "$522 - $655",
        daysAgo: 9,
        logo: "https://ui-avatars.com/api/?name=Reliable+Movers&background=7d7373&color=fff&size=128&bold=true"
    },
    {
        title: "Property Agent Required",
        company: "Likeot Hiring Co",
        category: "Education Training",
        location: "Chiredzi, Zimbabwe",
        salary: "$800 - $965",
        daysAgo: 12,
        logo: "https://ui-avatars.com/api/?name=Likeot+Hiring&background=222222&color=fff&size=128&bold=true"
    },
    {
        title: "Marketing Lead Wanted",
        company: "Northwind Traders",
        category: "Sales & Marketing",
        location: "Austin, USA",
        salary: "$600 - $750",
        daysAgo: 1,
        logo: "https://ui-avatars.com/api/?name=Northwind+Traders&background=2563eb&color=fff&size=128&bold=true"
    },
    {
        title: "Staff Nurse Opening",
        company: "Solaris Health Group",
        category: "Health Care",
        location: "Lagos, Nigeria",
        salary: "$700 - $880",
        daysAgo: 4,
        logo: "https://ui-avatars.com/api/?name=Solaris+Health&background=dc2626&color=fff&size=128&bold=true"
    },
    {
        title: "Site Supervisor Needed",
        company: "BuildRight Construction",
        category: "Construction",
        location: "Manchester, UK",
        salary: "$550 - $690",
        daysAgo: 7,
        logo: "https://ui-avatars.com/api/?name=BuildRight&background=78350f&color=fff&size=128&bold=true"
    },
    {
        title: "3D Character Artist",
        company: "Pixel Forge Studio",
        category: "3D Designer Jobs",
        location: "Toronto, Canada",
        salary: "$480 - $610",
        daysAgo: 14,
        logo: "https://ui-avatars.com/api/?name=Pixel+Forge&background=7c3aed&color=fff&size=128&bold=true"
    },
    {
        title: "Fleet Manager",
        company: "Vertex Logistics",
        category: "Automotive Jobs",
        location: "Berlin, Germany",
        salary: "$390 - $520",
        daysAgo: 18,
        logo: "https://ui-avatars.com/api/?name=Vertex+Logistics&background=0f766e&color=fff&size=128&bold=true"
    },
    {
        title: "Senior Auditor",
        company: "Crestline Financial",
        category: "Accounting",
        location: "Dubai, UAE",
        salary: "$900 - $1100",
        daysAgo: 22,
        logo: "https://ui-avatars.com/api/?name=Crestline&background=b45309&color=fff&size=128&bold=true"
    },
    {
        title: "Network Technician",
        company: "ConnectWave Telecom",
        category: "Telecoms",
        location: "Mumbai, India",
        salary: "$410 - $530",
        daysAgo: 27,
        logo: "https://ui-avatars.com/api/?name=ConnectWave&background=0369a1&color=fff&size=128&bold=true"
    },
    {
        title: "School Counselor",
        company: "BrightPath Academy",
        category: "Education Training",
        location: "Sydney, Australia",
        salary: "$350 - $470",
        daysAgo: 31,
        logo: "https://ui-avatars.com/api/?name=BrightPath&background=ca8a04&color=fff&size=128&bold=true"
    },
    {
        title: "Regional Sales Manager",
        company: "Apex Sales Group",
        category: "Sales & Marketing",
        location: "Toronto, Canada",
        salary: "$620 - $780",
        daysAgo: 35,
        logo: "https://ui-avatars.com/api/?name=Apex+Sales&background=4338ca&color=fff&size=128&bold=true"
    },
    {
        title: "Physiotherapist",
        company: "MediCare Plus",
        category: "Health Care",
        location: "Cape Town, South Africa",
        salary: "$730 - $890",
        daysAgo: 40,
        logo: "https://ui-avatars.com/api/?name=MediCare+Plus&background=e11d48&color=fff&size=128&bold=true"
    },
    {
        title: "Civil Engineer",
        company: "Skyline Builders",
        category: "Construction",
        location: "Dubai, UAE",
        salary: "$580 - $710",
        daysAgo: 45,
        logo: "https://ui-avatars.com/api/?name=Skyline+Builders&background=475569&color=fff&size=128&bold=true"
    }
]

// Turns "daysAgo" into an actual readable date, calculated from today
const formatDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short" })
}

const JobListingSection = () => {

    const [activeTab, setActiveTab] = useState<"recent" | "featured">("recent")

    // Jobs posted within the last 14 days, newest first, top 5 only
    const recentJobs = jobs
        .filter((job) => job.daysAgo <= 14)
        .sort((a, b) => a.daysAgo - b.daysAgo)
        .slice(0, 5)

    // Featured tab shows the full listing
    const featuredJobs = jobs

    const displayedJobs = activeTab === "recent" ? recentJobs : featuredJobs

    return (

        <section
            className="
            bg-[#f3f3f3]
            py-16
            sm:py-20
            lg:py-28
            "
        >

            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-0">

                {/* Tabs */}

                <div className="flex flex-col sm:flex-row justify-center gap-3">

                    <button
                        onClick={() => setActiveTab("recent")}
                        className={`
                        px-8
                        sm:px-12
                        py-4
                        sm:py-5
                        text-white
                        transition
                        ${activeTab === "recent" ? "bg-green-600" : "bg-[#7d7373]"}
                        `}
                    >
                        Recent Jobs
                    </button>

                    <button
                        onClick={() => setActiveTab("featured")}
                        className={`
                        px-8
                        sm:px-12
                        py-4
                        sm:py-5
                        text-white
                        transition
                        ${activeTab === "featured" ? "bg-green-600" : "bg-[#7d7373]"}
                        `}
                    >
                        Featured Jobs
                    </button>

                </div>

                {/* Job Cards */}

                <div className="mt-10 sm:mt-16 space-y-3">

                    {displayedJobs.map((job, index) => (

                        <div
                            key={index}
                            className="
                            bg-[#ececec]
                            flex
                            flex-col
                            lg:flex-row
                            lg:items-center
                            gap-5
                            lg:gap-0
                            px-5
                            sm:px-8
                            py-6
                            sm:py-7
                            lg:justify-between
                            "
                        >

                            {/* Left */}

                            <div className="flex items-center gap-4 sm:gap-6">

                                <img
                                    src={job.logo}
                                    className="
                                    w-12
                                    h-12
                                    sm:w-16
                                    sm:h-16
                                    rounded-full
                                    object-cover
                                    "
                                />

                                <div>

                                    <h3 className="text-base sm:text-lg">
                                        {job.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm sm:text-base">
                                        {job.company}
                                    </p>

                                </div>

                            </div>

                            {/* Middle */}

                            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 text-sm">

                                <div className="flex items-center gap-2">
                                    <Briefcase size={14} />
                                    {job.category}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin size={14} />
                                    {job.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Wallet size={14} />
                                    {job.salary}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Calendar size={14} />
                                    {formatDate(job.daysAgo)}
                                </div>

                            </div>

                            {/* Button */}

                            <button
                                className="
                                border
                                border-green-500
                                px-8
                                sm:px-10
                                py-3
                                hover:bg-green-500
                                hover:text-white
                                w-fit
                                "
                            >
                                View
                            </button>

                        </div>

                    ))}

                    {activeTab === "recent" && recentJobs.length === 0 && (
                        <p className="text-center text-gray-500 py-10">
                            No jobs posted in the last 2 weeks.
                        </p>
                    )}

                </div>

            </div>

        </section>

    )

}

export default JobListingSection