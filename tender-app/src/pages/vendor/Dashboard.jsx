import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, FileCheck, Clock, Zap, ArrowRight } from 'lucide-react';

const VendorDashboard = () => {
    const recommendedTenders = [
        {
            id: 1,
            title: 'Smart City Traffic Management',
            authority: 'Municipal Corp',
            budget: '$2.5M',
            matchScore: 92,
            deadline: '5 days left',
            tags: ['AI', 'Infrastructure', 'IoT']
        },
        {
            id: 2,
            title: 'Hospital Records Digitization',
            authority: 'Health Dept',
            budget: '$850K',
            matchScore: 88,
            deadline: '12 days left',
            tags: ['Cloud', 'Database', 'Security']
        },
        {
            id: 3,
            title: 'Public WiFi Expansion',
            authority: 'City Connect',
            budget: '$4.2M',
            matchScore: 75,
            deadline: '2 days left',
            tags: ['Network', 'Telecom']
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h1>
                <p className="text-gray-500">Here are the tenders best matched to your profile.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <motion.div variants={item} whileHover={{ y: -5 }} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                            <TrendingUp size={24} />
                        </div>
                        <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded backdrop-blur-sm">Last 30 days</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">85%</h3>
                    <p className="text-blue-100 text-sm">Win Rate via AI Matching</p>
                </motion.div>

                <motion.div variants={item} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                            <FileCheck size={24} />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">12</h3>
                    <p className="text-gray-500 text-sm">Active Applications</p>
                </motion.div>

                <motion.div variants={item} whileHover={{ y: -5 }} className="glass-card p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-amber-100 text-amber-600 p-2 rounded-lg">
                            <Clock size={24} />
                        </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">3</h3>
                    <p className="text-gray-500 text-sm">Pending Decisions</p>
                </motion.div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-6">AI-Matched Opportunities</h2>
            <div className="grid gap-6">
                {recommendedTenders.map((tender, index) => (
                    <motion.div
                        key={tender.id}
                        variants={item}
                        whileHover={{ scale: 1.01 }}
                        className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all relative overflow-hidden"
                    >
                        {/* Match Score Bar */}
                        <div className="absolute top-0 left-0 h-1 bg-gray-100 w-full">
                            <div
                                className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                                style={{ width: `${tender.matchScore}%` }}
                            ></div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded-full border border-blue-100 flex items-center gap-1">
                                        <Zap size={12} className="fill-blue-700" />
                                        {tender.matchScore}% Match
                                    </span>
                                    <span className="text-xs text-gray-500">{tender.deadline}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {tender.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">{tender.authority} • Budget: <span className="font-semibold text-gray-900">{tender.budget}</span></p>
                                <div className="flex gap-2">
                                    {tender.tags.map(tag => (
                                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10 active:scale-95 transform">
                                    Apply Now
                                </button>
                                <button className="p-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-500 hover:text-blue-600 transition-colors">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default VendorDashboard;
