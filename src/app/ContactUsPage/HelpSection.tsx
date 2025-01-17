import React, { useState, ReactNode, useCallback, memo } from 'react';
import { MapPin, Mail, Phone, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

// Constants
const ANIMATION_DURATION = 0.3;
const BACKGROUND_ANIMATION_DURATION = 15;

const PHONE_NUMBERS = [
    { number: "+91 7888404757", department: "General Inquiries" },
    { number: "+91 8090706050", department: "Technical Support" },
    { number: "+91 9887766554", department: "Sales Department" },
] as const;

const EMAIL_CLIENTS = [
    { name: "Gmail", url: "https://mail.google.com/mail/?view=cm&fs=1&to=info@company.com" },
    { name: "Outlook", url: "https://outlook.office.com/mail/deeplink/compose?to=info@company.com" },
] as const;

// Types
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

interface ContactDetail {
    icon: ReactNode;
    title: string;
    description: string;
    action: () => void;
    buttonText: string;
}

// Animations
const modalBackdropAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: ANIMATION_DURATION }
};

const modalContentAnimation = {
    initial: { scale: 0.95, opacity: 0, y: 20 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.95, opacity: 0, y: 20 },
    transition: { type: "spring", duration: 0.5 }
};

// Reusable components
const CloseButton = memo(({ onClose }: { onClose: () => void }) => (
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-purple-800/30 hover:bg-purple-800/50 rounded-full text-white transition-colors duration-300"
        aria-label="Close modal"
    >
        <X className="w-5 h-5" />
    </motion.button>
));
CloseButton.displayName = 'CloseButton';

const Modal = memo<ModalProps>(({ isOpen, onClose, children }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                {...modalBackdropAnimation}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg"
            >
                <motion.div
                    {...modalContentAnimation}
                    className="relative w-full max-w-2xl bg-[#0A0A0A] rounded-2xl overflow-hidden shadow-2xl border border-purple-800/30"
                >
                    <CloseButton onClose={onClose} />
                    {children}
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
));
Modal.displayName = 'Modal';

const ContactCard = memo(({ detail, index, isHovered, onHover }: {
    detail: ContactDetail;
    index: number;
    isHovered: boolean;
    onHover: (index: number | null) => void;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        onHoverStart={() => onHover(index)}
        onHoverEnd={() => onHover(null)}
    >
        <motion.div
            whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group h-full bg-[#0A0A0A] border border-purple-400 rounded-xl p-8
                hover:border-purple-400/70 hover:shadow-xl hover:shadow-purple-400/30
                transition-all duration-300 ease-out"
        >
            <div className="flex flex-col h-full">
                <motion.div
                    animate={isHovered ? {
                        scale: [1, 1.1, 1.05],
                        rotate: [0, 3, 0],
                    } : {}}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-purple-800/30 p-4 rounded-xl mb-6 w-fit"
                >
                    <div className="text-purple-400">{detail.icon}</div>
                </motion.div>

                <motion.h3 
                    className="text-2xl font-bold text-white mb-3"
                    animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {detail.title}
                </motion.h3>
                <p className="text-gray-400/80 text-lg leading-relaxed mb-6 flex-grow whitespace-pre-line">
                    {detail.description}
                </p>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={detail.action}
                    className="w-full px-6 py-3 bg-purple-600/30 text-white/90 rounded-xl text-sm 
                        border border-purple-400/20 tracking-wide
                        hover:bg-purple-500/50 hover:border-purple-400/50
                        hover:shadow-lg hover:shadow-purple-400/20
                        transition-all duration-300 ease-out"
                >
                    {detail.buttonText}
                </motion.button>
            </div>
        </motion.div>
    </motion.div>
));
ContactCard.displayName = 'ContactCard';

const HelpSection: React.FC = () => {
    const [modalStates, setModalStates] = useState({
        map: false,
        phone: false,
        mail: false
    });
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const toggleModal = useCallback((modal: keyof typeof modalStates) => {
        setModalStates(prev => ({ ...prev, [modal]: !prev[modal] }));
    }, []);

    const contactDetails: ContactDetail[] = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Our Office",
            description: "Company name Ltd.\n86 Beehive Lane, New Delhi,\nIndia",
            action: () => toggleModal('map'),
            buttonText: "View on map",
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Mail for Work",
            description: "info@Company.com",
            action: () => toggleModal('mail'),
            buttonText: "Send Email",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            description: "Mon to Sat\n9 am to 5 pm",
            action: () => toggleModal('phone'),
            buttonText: "View Contact Numbers",
        },
        {
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Live Chat",
            description: "Get instant support\nthrough live chat",
            action: () => window.location.href = "mailto:support@abresh.com",
            buttonText: "Start Chat",
        },
    ];

    return (
        <section className="relative bg-black min-h-screen py-20 px-4 flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: BACKGROUND_ANIMATION_DURATION,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: BACKGROUND_ANIMATION_DURATION,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </div>

            <div className="relative w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8 md:mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl tracking-tight font-bold mb-4 md:mb-6  text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400"
                    >
                        We&apos;re here to help
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg px-4 text-gray-400 max-w-3xl mx-auto "
                    >
                        Reach out through any of these channels ask question, get solution and we&apos;ll be happy to assist you.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
                    {contactDetails.map((detail, index) => (
                        <ContactCard
                            key={index}
                            detail={detail}
                            index={index}
                            isHovered={hoveredCard === index}
                            onHover={setHoveredCard}
                        />
                    ))}
                </div>
            </div>

            <Modal isOpen={modalStates.map} onClose={() => toggleModal('map')}>
                <div className="h-[500px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004989505!2d77.06889754725781!3d28.527581157047927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1705507411205!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Modal>

            <Modal isOpen={modalStates.phone} onClose={() => toggleModal('phone')}>
                <div className="p-8">
                    <h3 className="text-2xl font-light text-white mb-6">Contact Numbers</h3>
                    <div className="space-y-4">
                        {PHONE_NUMBERS.map((phone, index) => (
                            <motion.a
                                key={index}
                                href={`tel:${phone.number.replace(/\s+/g, '')}`}
                                whileHover={{ x: 10, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                                className="flex items-center justify-between p-4 rounded-xl bg-purple-800/20 
                                    border border-purple-500/20 transition-colors duration-300"
                            >
                                <div>
                                    <p className="text-white">{phone.number}</p>
                                    <p className="text-sm text-gray-400">{phone.department}</p>
                                </div>
                                <Phone className="w-5 h-5 text-purple-400" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Modal>

            <Modal isOpen={modalStates.mail} onClose={() => toggleModal('mail')}>
                <div className="p-8">
                    <h3 className="text-2xl font-light text-white mb-6">Choose Email Client</h3>
                    <div className="space-y-4">
                        {EMAIL_CLIENTS.map((client, index) => (
                            <motion.a
                                key={index}
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 10, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
                                className="flex items-center justify-between p-4 rounded-xl bg-purple-800/20 
                                    border border-purple-500/20 transition-colors duration-300"
                            >
                                <p className="text-white">{client.name}</p>
                                <Mail className="w-5 h-5 text-purple-400" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default HelpSection;