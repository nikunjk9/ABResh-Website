"use client";

import React, { useState } from "react";

const AskSection = () => {
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the form submission here, e.g., send data to an API
        console.log({ email, question });
    };

    return (
        <section className="bg-[#272727] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="space-y-6 text-center">
                    {/* Heading with responsive font sizes and spacing */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
                        Don&apos;t Find The Answer?
                        <span className="block mt-2 lg:inline lg:mt-0"> Contact Us Now</span>
                    </h2>
                    
                    {/* Description text with responsive width and spacing */}
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Form container with responsive padding and width */}
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                            {/* Form inputs with responsive sizing */}
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-white rounded-lg bg-black
                                    text-white placeholder-white focus:outline-none focus:ring-2 
                                    focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Your Question"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 border border-white rounded-lg bg-black 
                                    text-white placeholder-white focus:outline-none focus:ring-2 
                                    focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                                />
                            </div>
                            {/* Submit button with responsive width */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-purple-600 text-white font-medium 
                                rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 
                                focus:ring-offset-2 focus:ring-offset-[#272727] transition-all duration-200 
                                whitespace-nowrap flex-shrink-0"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AskSection;

// "use client";

// import React, { useState } from "react";

// const AskSection = () => {
//     const [email, setEmail] = useState("");
//     const [question, setQuestion] = useState("");

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle the form submission here, e.g., send data to an API
//         console.log({ email, question });
//     };

//     return (
//         <section className="bg-[#272727] text-white py-16 ">
//             <div className="container mx-auto max-w-7xl text-center">
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//                     Don’t Find The Answer? Contact Us Now
//                 </h2>
//                 <p className="text-white text-xl mb-10">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna aliqua.
//                 </p>
//                 <div className="max-w-4xl mx-auto">
//                     <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
//                         <input
//                             type="email"
//                             placeholder="Your Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             className="w-full md:w-auto flex-1 px-4 py-3 border border-white rounded-lg bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                         <input
//                             type="text"
//                             placeholder="Your Question"
//                             value={question}
//                             onChange={(e) => setQuestion(e.target.value)}
//                             required
//                             className="w-full md:w-auto flex-1 px-4 py-3 border border-white rounded-lg bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-500"
//                         />
//                         <button
//                             type="submit"
//                             className="w-full md:w-auto px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AskSection;
