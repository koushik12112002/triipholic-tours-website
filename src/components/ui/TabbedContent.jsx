import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn.js'

export default function TabbedContent({ tabs }) {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            {/* Tab Headers */}
            <div className="flex border-b border-white/10">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={cn(
                            'relative flex-1 px-4 py-3 text-sm font-medium transition',
                            activeTab === index
                                ? 'text-wine-light'
                                : 'text-wine-muted hover:text-wine-light'
                        )}
                    >
                        {tab.label}
                        {activeTab === index && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-wine-accent"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-5">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {tabs[activeTab].content}
                </motion.div>
            </div>
        </div>
    )
}
