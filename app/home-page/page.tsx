import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

const page = () => {
    return (
        <div className="relative h-screen">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-[url('/images/fourteen-banner-1.jpg')] bg-cover bg-center"
            />

            {/* Dark Transparent Layer */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <Navbar />
            <HeroSection />
        </div>
    )
}

export default page