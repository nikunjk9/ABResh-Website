import Image from 'next/image';
import daljit from '@/assets/images/Daljit.png'


const teamMembers = [
    { name: 'Daljit Singh', img: daljit },
    { name: 'Shilpa Roy', img: daljit },
    { name: 'Sihan Singh', img: daljit },
    { name: 'Daljeet Kaur', img: daljit },
    { name: 'Sharmila Roy', img: daljit },
    { name: 'Jitendar Singh', img: daljit },
    { name: 'Ganpat Sharma', img: daljit },
    { name: 'Sukanya Singhaniya', img: daljit },
    { name: 'Jassu Sharma', img: daljit },
    { name: 'Nittya John', img: daljit },
];

const WhyMusicServices: React.FC = () => {
    return (
        <section className="bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Why Music Service</h2>
                <p className="text-gray-400 text-xl mb-10">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br/>Velit officia
                    consequat duis enim velit mollit.
                </p>

                {/* Team Members */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-10">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 overflow-hidden shadow-lg text-center"
                        >
                            <div className="relative w-full h-44">
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="bg-[#A044FF] py-2 text-white font-semibold">{member.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyMusicServices;
