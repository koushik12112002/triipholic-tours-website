import { motion } from 'framer-motion'

export default function WhatsAppButton() {
    const phoneNumber = '919641849372'
    const message = encodeURIComponent("Hi! I'm interested in booking a tour. Can you please help me with the details?")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                    "0 0 0 0 rgba(37, 211, 102, 0.7)",
                    "0 0 0 10px rgba(37, 211, 102, 0)",
                ]
            }}
            transition={{
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
                boxShadow: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-white"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.54 1.932.835 3.034.836h.001c3.181 0 5.768-2.587 5.769-5.767.001-3.181-2.584-5.768-5.763-5.768h-.235zm7.394 13.155c-1.921 1.708-4.437 2.673-7.165 2.674-2.529-.001-4.908-.813-6.936-2.22l-6.173 1.621 1.649-6.027c-1.571-2.091-2.404-4.593-2.405-7.207.002-6.602 5.37-11.972 11.975-11.972 3.199.001 6.206 1.247 8.467 3.51 2.261 2.261 3.506 5.27 3.506 8.469-.001 4.776-2.738 8.879-2.918 11.152zm-3.051-7.069c-.394-.197-2.329-1.15-2.69-1.281-.36-.131-.623-.197-.885.197-.263.394-1.018 1.281-1.247 1.543-.23.263-.46.296-.853.099-1.895-.95-3.04-1.572-4.364-3.858-.164-.283.164-.262.471-.873.066-.131.033-.246-.016-.345-.05-.099-.444-1.067-.607-1.461-.159-.384-.321-.331-.443-.338h-.378c-.131 0-.344.049-.525.246-.181.197-.689.673-.689 1.642 0 .969.705 1.904.804 2.035.099.131 1.387 2.118 3.36 2.97 1.973.853 1.973.569 2.333.535.361-.033 1.164-.476 1.328-.936.164-.46.164-.853.115-.936-.049-.083-.181-.131-.394-.23z" />
            </svg>

            {/* Tooltip on hover (optional, keeping it simple for now) */}
        </motion.a>
    )
}
