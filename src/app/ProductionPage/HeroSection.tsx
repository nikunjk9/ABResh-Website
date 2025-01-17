import Image from 'next/image';
import productionHero from '@/assets/images/ProductionHero.png'; // Update if needed based on your actual project structure

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src={productionHero}
                    alt="Music Services Background"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50 blur-none"
                    priority
                />
            </div>

            {/* Centered Content */}
            {/* <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
                Crafting Excellence, <br/>
                Every Step of the Way
                </h1>
                <p className="text-gray-200 mt-3 text-lg lg:text-xl max-w-4xl mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </p>
            </div> */}
            <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-white to-[#FCA33D] text-transparent bg-clip-text">
                    Crafting Excellence, <br />
                    Every Step of the Way
                </h1>
                <p className="mt-3 text-lg lg:text-xl max-w-4xl mx-auto bg-gradient-to-r  from-white via-white to-[#FCA33D] text-transparent bg-clip-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
