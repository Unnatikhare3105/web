import {
    UserCircle,
    Building2,
    SlidersHorizontal,
    BadgeCheck,
    MapPin
} from "lucide-react"
import { Check, X } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Create a Profile",
        description:
            "Reveal to us what you're searching for and we'll get caught up with coordinating your aptitudes to ongoing employing needs. In the event that we have the correct chances, managers will see you in their rundown of matches.",
        align: "left",
        visual: {
            type: "person",
            src: "https://i.pravatar.cc/300?img=47",
            caption: "UX designer with 5 years of experience. Looking to Start a new career.",
            captionIcon: null
        }
    },
    {
        number: "02",
        title: "Companies Apply to You",
        description:
            "Kick back and watch talk with solicitations come to you. In the interim, our group will work with you to prepare for meetings and offer their industry learning once you associate with customers.",
        align: "right",
        visual: {
            type: "person",
            src: "https://i.pravatar.cc/300?img=12",
            caption: "Let's Connect!",
            captionIcon: "connect"
        }
    },
    {
        number: "03",
        title: "You Run the Show.",
        description:
            "Catch up with the meeting demands that best match your profession objectives and compensation necessities, and push ahead with your top choices.",
        align: "left",
        visual: {
            type: "companies",
            companies: [
                { name: "Company A", accepted: true },
                { name: "Company B", accepted: false },
                { name: "Company C", accepted: true },
            ]
        }
    },
    {
        number: "04",
        title: "Accept an Offer",
        description:
            "Think about offers one next to the other, and inside weeks, say \"Yes!\" to the one you adore the most.",
        align: "right",
        visual: {
            type: "person",
            src: "https://i.pravatar.cc/300?img=32",
            caption: "Congrats on your new job!",
            captionIcon: null
        }
    },
]

const HowItWorks = () => {
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-0">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide">
                        How It Works
                    </h2>
                    <p className="mt-4 text-gray-500 text-base sm:text-lg">
                        Connecting outstanding people with the world's most
                    </p>
                    <div className="mt-5 flex justify-center">
                        <div className="w-16 h-1 bg-[#3faa00]" />
                    </div>
                </div>

                {/* Timeline container */}
                <div className="relative">

                    {/* Vertical center line — hidden on mobile */}
                    <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0" />

                    {/* Steps */}
                    <div className="flex flex-col gap-20 sm:gap-28">
                        {steps.map((step, index) => {

                            const isLeft = step.align === "left"

                            return (
                                <div
                                    key={index}
                                    className="relative flex flex-col sm:flex-row items-center gap-10 sm:gap-0"
                                >

                                    {/* ---- LEFT SIDE ---- */}
                                    <div className={`
                                        w-full sm:w-1/2
                                        flex justify-center
                                        ${isLeft ? "sm:justify-end sm:pr-16" : "sm:justify-start sm:pl-16 sm:order-3"}
                                    `}>

                                        {/* Text block */}
                                        {!isLeft && (
                                            <div className="text-center sm:text-left max-w-sm">
                                                <p className="text-[#3faa00] text-4xl sm:text-5xl font-black leading-none">
                                                    {step.number}
                                                </p>
                                                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Visual block (left-aligned steps) */}
                                        {isLeft && (
                                            <VisualBlock step={step} />
                                        )}

                                    </div>

                                    {/* ---- CENTER DOT ---- */}
                                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-gray-400 border-2 border-white shadow order-2" />

                                    {/* ---- RIGHT SIDE ---- */}
                                    <div className={`
                                        w-full sm:w-1/2
                                        flex justify-center
                                        ${isLeft ? "sm:justify-start sm:pl-16 sm:order-3" : "sm:justify-end sm:pr-16"}
                                    `}>

                                        {/* Text block */}
                                        {isLeft && (
                                            <div className="text-center sm:text-left max-w-sm">
                                                <p className="text-[#3faa00] text-4xl sm:text-5xl font-black leading-none">
                                                    {step.number}
                                                </p>
                                                <h3 className="mt-2 text-xl sm:text-2xl font-bold text-gray-900">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Visual block (right-aligned steps) */}
                                        {!isLeft && (
                                            <VisualBlock step={step} />
                                        )}

                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </section>
    )
}

/* ---- Visual Block Component ---- */
const VisualBlock = ({ step }: { step: typeof steps[0] }) => {

    const visual = step.visual

    /* Person image with caption card below */
    if (visual.type === "person" && "src" in visual) {
        return (
            <div className="flex flex-col items-center">

                {/* Circle Image */}
                <div className="
                    w-44 h-44
                    sm:w-52 sm:h-52
                    rounded-full
                    overflow-hidden
                    shadow-lg
                    ring-4
                    ring-gray-200
                    z-10
                    relative
                ">
                    <img
                        src={visual.src}
                        alt={step.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* White caption card below image */}
                <div className="
                    bg-white
                    shadow-md
                    rounded-lg
                    px-5
                    py-4
                    mt-[-12px]
                    relative
                    z-20
                    max-w-[200px]
                    text-center
                    border
                    border-gray-100
                ">
                    {/* Caption with icon for step 02 */}
                    {visual.captionIcon === "connect" ? (
                        <div className="flex items-center gap-2 justify-center">
                            <MapPin size={18} className="text-[#3faa00] flex-shrink-0" />
                            <p className="text-gray-600 text-sm font-medium">
                                {visual.caption}
                            </p>
                        </div>
                    ) : (
                        <p className="text-gray-600 text-sm leading-snug">
                            {visual.caption}
                        </p>
                    )}
                </div>

            </div>
        )
    }

    /* Company list rows with check/cross */
    if (visual.type === "companies" && "companies" in visual) {
        return (
            <div className="flex flex-col gap-3 w-full max-w-[260px]">
                {visual.companies?.map((company, i) => (
                    <div
                        key={i}
                        className="
                            bg-white
                            border
                            border-gray-100
                            shadow-sm
                            rounded-lg
                            px-4
                            py-3
                            flex
                            items-center
                            gap-3
                            justify-between
                        "
                    >
                        <div className="flex items-center gap-3">
                            <Building2
                                size={20}
                                className="text-[#3faa00] flex-shrink-0"
                                strokeWidth={1.5}
                            />
                            <span className="text-gray-700 text-sm font-medium">
                                {company.name}
                            </span>
                        </div>

                        {company.accepted ? (
                            <Check size={16} className="text-[#3faa00]" strokeWidth={2.5} />
                        ) : (
                            <X size={16} className="text-red-400" strokeWidth={2.5} />
                        )}
                    </div>
                ))}
            </div>
        )
    }

    return null
}

export default HowItWorks