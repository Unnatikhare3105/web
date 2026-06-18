import Link from "next/link";

interface ExploreItem {
    label: string;
    href: string;
}

interface ExploreColumn {
    title: string;
    items: ExploreItem[];
    moreLink?: string;
}

const exploreData: ExploreColumn[] = [
    {
        title: "Jobs by Industry",
        moreLink: "/employer-listing",
        items: [
            { label: "Mix Digital Entertainment", href: "/employer-listing?job_posted_by=Mix Digital Entertainment" },
            { label: "Ebiquity Maxi", href: "/employer-listing?job_posted_by=Ebiquity Maxi" },
            { label: "Likeotl Hiring Co", href: "/employer-listing?job_posted_by=Likeotl Hiring Co" },
            { label: "Reliable Movers", href: "/employer-listing?job_posted_by=Reliable Movers" },
            { label: "Lasmoix Ltd", href: "/employer-listing?job_posted_by=Lasmoix Ltd" },
            { label: "Ladbrokesed Limited", href: "/employer-listing?job_posted_by=Ladbrokesed Limited" },
            { label: "Kellermite Group", href: "/employer-listing?job_posted_by=Kellermite Group" },
            { label: "Schrodersty Property", href: "/employer-listing?job_posted_by=Schrodersty Property" },
            { label: "Marexot Spectron", href: "/employer-listing?job_posted_by=Marexot Spectron" },
            { label: "Feverty Media", href: "/employer-listing?job_posted_by=Feverty Media" },
            { label: "Gemop Diamonds", href: "/employer-listing?job_posted_by=Gemop Diamonds" },
        ],
    },
    {
        title: "Jobs by Skill",
        moreLink: "/jobs-listing",
        items: [
            { label: "17th edition", href: "/17th-edition-jobs/" },
            { label: "asd", href: "/asd-jobs/" },
            { label: "AutoCAD", href: "/autocad-jobs/" },
            { label: "Civils", href: "/civils-jobs/" },
            { label: "cloudwaysapp", href: "/cloudwaysapp-jobs/" },
            { label: "electrical", href: "/electrical-jobs/" },
            { label: "engineer", href: "/engineer-jobs/" },
            { label: "engineering", href: "/engineering-jobs/" },
            { label: "food", href: "/food-jobs/" },
            { label: "hyperjojo", href: "/hyperjojo-jobs/" },
            { label: "jojo", href: "/jojo-jobs/" },
        ],
    },
    {
        title: "Jobs by Designation",
        items: [
            { label: "Telecoms", href: "/telecommunications-jobs/" },
            { label: "Sales & Marketing", href: "/sales-marketing-jobs/" },
            { label: "Restaurant / Food Services", href: "/restaurant-food-services-jobs/" },
            { label: "Health Care", href: "/health-care-jobs/" },
            { label: "Education Training", href: "/education-training-jobs/" },
            { label: "Construction", href: "/construction-facilities-jobs/" },
            { label: "Automotive Jobs", href: "/automotive-jobs-jobs/" },
            { label: "Accounting", href: "/accounting-finance-jobs/" },
            { label: "3D Designer Jobs", href: "/3d-designer-jobs-jobs/" },
        ],
    },
    {
        title: "Jobs by Type",
        items: [
            { label: "Temporary", href: "/temporary-jobs/" },
            { label: "Part time", href: "/part-time-jobs/" },
            { label: "Full time", href: "/full-time-jobs/" },
            { label: "Freelance", href: "/freelance-jobs/" },
        ],
    },
];

export default function ExploreSection() {
    return (
        <section className="bg-[#f7f7f7] px-5 py-14 md:py-16">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-6xl md:text-3xl  font-bold text-[#222] tracking-widest uppercase mb-2">
                    Explore Jobs
                </h2>
                <p className="text-sm text-gray-400">
                    Connecting outstanding people with the world&apos;s most
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {exploreData.map((col) => (
                    <div key={col.title}>
                        {/* Column Title */}
                        <h3 className="text-lg font-bold text-[#222] tracking-wide pb-3 mb-4 border-b-2 border-gray-200">
                            {col.title}
                        </h3>

                        {/* Links List */}
                        <ul className="space-y-2.5">
                            {col.items.map((item) => {
                                const slugHref = `/${encodeURIComponent(item.label)}`;
                                return (
                                    <li key={item.label}>
                                        <Link
                                            href={slugHref}
                                            className="text-sm text-gray-500 hover:text-[#e74c3c] transition-colors duration-200"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}