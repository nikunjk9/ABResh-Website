import Image from 'next/image';


const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-svh flex items-center justify-center bg-gradient-to-r from-[#AA00FF] via-black  to-[#1E50FF]">

        <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#87878781] via-white to-[#FCA33D] text-transparent bg-clip-text">
                Frequently Asked Questions 
            </h1>
            <p className="mt-3 text-lg lg:text-xl max-w-4xl mx-auto text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            </p>
        </div>
    </section>
    );
};

export default HeroSection;
