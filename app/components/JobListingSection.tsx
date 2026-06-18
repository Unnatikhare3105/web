import {
    Briefcase,
    MapPin,
    Wallet,
    Calendar
} from "lucide-react"

const jobs = [
    {
        title: "Need charted accountant",
        company: "Mx Digital Entertainment",
        category: "Automotive Jobs",
        location: "Kemah, Turkey",
        salary: "$230 - $321",
        logo: "/images/company1.png"
    },

    {
        title: "Expert For Charity",
        company: "Ebiquity Maxi",
        category: "Accounting",
        location: "Pangai Tonga",
        salary: "$451 - $542",
        logo: "/images/company2.png"
    },

    {
        title: "Senior Print Media",
        company: "Reliable Movers",
        category: "Telecoms",
        location: "Jibla, Yemen",
        salary: "$522 - $655",
        logo: "/images/company3.png"
    },

    {
        title: "Property Agent Required",
        company: "Likeot Hiring Co",
        category: "Education Training",
        location: "Chiredzi Zimbabwe",
        salary: "$800 - $965",
        logo: "/images/company4.png"
    }
]

const JobListingSection = () => {

    return (

        <section
            className="
            bg-[#f3f3f3]
            py-28
            "
        >

            <div className="max-w-[1100px] mx-auto">

                {/* Tabs */}

                <div className="flex justify-center gap-3">

                    <button
                        className="
                        px-12
                        py-5
                        bg-[#7d7373]
                        text-white
                        "
                    >
                        Recent Jobs
                    </button>

                    <button
                        className="
                        px-12
                        py-5
                        bg-[#7d7373]
                        text-white
                        "
                    >
                        Featured Jobs
                    </button>

                </div>

                {/* Job Cards */}

                <div className="mt-16 space-y-3">

                    {jobs.map((job, index) => (

                        <div
                            key={index}
                            className="
                            bg-[#ececec]
                            flex
                            items-center
                            px-8
                            py-7
                            justify-between
                            "
                        >

                            {/* Left */}

                            <div className="flex items-center gap-6">

                                <img
                                    src={job.logo}
                                    className="
                                    w-16
                                    h-16
                                    rounded-full
                                    object-cover
                                    "
                                />

                                <div>

                                    <h3 className="text-lg">
                                        {job.title}
                                    </h3>

                                    <p className="text-gray-600">
                                        {job.company}
                                    </p>

                                </div>

                            </div>

                            {/* Middle */}

                            <div className="flex gap-10 text-sm">

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
                                    3 Dec
                                </div>

                            </div>

                            {/* Button */}

                            <button
                                className="
                                border
                                border-green-500
                                px-10
                                py-3
                                hover:bg-green-500
                                hover:text-white
                                "
                            >
                                View
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}

export default JobListingSection