import {
    Car,
    GraduationCap,
    ChartNoAxesCombined,
    Building2,
    RadioTower,
    Hospital,
    HardHat,
    Palette
} from "lucide-react"

const categories = [
    {
        title: "Automotive Jobs",
        icon: Car,
        span: "col-span-3"
    },
    {
        title: "Education Training",
        icon: GraduationCap,
        span: "col-span-3"
    },
    {
        title: "Sales & Marketing",
        icon: ChartNoAxesCombined,
        span: "col-span-3"
    },
    {
        title: "Accounting",
        icon: Building2,
        span: "col-span-3"
    },
    {
        title: "Telecoms",
        icon: RadioTower,
        span: "col-span-3"
    },
    {
        title: "Health Care",
        icon: Hospital,
        span: "col-span-5"
    },
    {
        title: "Construction",
        icon: HardHat,
        span: "col-span-5"
    },
    {
        title: "3D Designer Jobs",
        icon: Palette,
        span: "col-span-5"
    }
]

const JobCategories = () => {

    return (

        <section
            className="
            w-full
            grid
            grid-cols-15
auto-rows-[220px]
            "
        >

            {categories.map((item, index) => {

                const Icon = item.icon

                return (

                    <div
                        key={index}
                        className={`
${item.span}
bg-[#3faa00]
border
border-white/30
flex
flex-col
justify-center
items-center
gap-6
`}
                    >

                        <Icon
                            size={65}
                            color="white"
                            strokeWidth={1}
                        />

                        <h3
                            className="
                            text-white
                            text-2xl
                            font-light
                            "
                        >
                            {item.title}
                        </h3>

                        <button
                            className="
                            bg-[#d7c21d]
                            w-10
                            h-10
                            rounded
                            text-black
                            "
                        >
                            ↗
                        </button>

                    </div>

                )

            })}

        </section>

    )

}

export default JobCategories