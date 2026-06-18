//app/components/JobCategories.tsx

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
    { title: "Automotive Jobs", icon: Car, span: "xl:col-span-3" },
    { title: "Education Training", icon: GraduationCap, span: "xl:col-span-3" },
    { title: "Sales & Marketing", icon: ChartNoAxesCombined, span: "xl:col-span-3" },
    { title: "Accounting", icon: Building2, span: "xl:col-span-3" },
    { title: "Telecoms", icon: RadioTower, span: "xl:col-span-3" },
    { title: "Health Care", icon: Hospital, span: "xl:col-span-5" },
    { title: "Construction", icon: HardHat, span: "xl:col-span-5" },
    { title: "3D Designer Jobs", icon: Palette, span: "xl:col-span-5" }
]

const JobCategories = () => {

    return (

        <section
            className="
            w-full
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-15
            auto-rows-[160px]
            sm:auto-rows-[190px]
            xl:auto-rows-[220px]
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
gap-3
sm:gap-4
xl:gap-6
p-2
text-center
`}
                    >

                        <Icon
                            className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16"
                            color="white"
                            strokeWidth={1}
                        />

                        <h3
                            className="
                            text-white
                            text-sm
                            sm:text-lg
                            xl:text-2xl
                            font-light
                            "
                        >
                            {item.title}
                        </h3>

                        <button
                            className="
                            bg-[#d7c21d]
                            w-8
                            h-8
                            sm:w-10
                            sm:h-10
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