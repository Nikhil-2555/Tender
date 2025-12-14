import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Search, FileCheck, BarChart3, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

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
        <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="absolute inset-0 bg-white">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
                    <motion.div
                        style={{ y }}
                        className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none"
                    />
                    <motion.div
                        style={{ y }}
                        className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={container}
                    >
                        <motion.div variants={item}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 font-medium text-sm mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                AI-Powered Tender Analysis Platform
                            </div>
                        </motion.div>

                        <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-8">
                            Tenders Made <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Smart & Secure</span>
                        </motion.h1>

                        <motion.p variants={item} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Transforming government procurement with AI-driven analysis, Blockchain transparency, and Automated Escrow payments.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/signup" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                                Get Started
                                <ArrowRight size={20} />
                            </Link>
                            <Link to="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                Learn More
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-20 mx-auto max-w-6xl rounded-2xl p-1 bg-gradient-to-b from-gray-200 to-gray-50 shadow-2xl border border-gray-200"
                    >
                        <div className="bg-gray-50 rounded-xl overflow-hidden aspect-[16/9] md:aspect-[21/9] relative flex flex-col shadow-inner">
                            {/* Mock Browser/App Header */}
                            <div className="h-10 bg-white border-b border-gray-200 flex items-center px-4 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="ml-4 flex-1 max-w-sm h-6 bg-gray-100 rounded-md flex items-center px-3 text-xs text-gray-400 font-mono">
                                    app.tenderai.gov/dashboard
                                </div>
                            </div>

                            <div className="flex-1 flex overflow-hidden">
                                {/* Mock Sidebar */}
                                <div className="w-16 md:w-56 bg-white border-r border-gray-200 flex flex-col p-4 hidden md:flex">
                                    <div className="flex items-center gap-2 mb-8 px-2">
                                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                                        <div className="text-sm font-bold text-gray-800">TenderAI</div>
                                    </div>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Overview', active: true },
                                            { label: 'Tenders', active: false },
                                            { label: 'Applications', active: false },
                                            { label: 'Payments', active: false }
                                        ].map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${item.active ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-500'}`}>
                                                <div className={`w-4 h-4 rounded-sm ${item.active ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mock Content Area */}
                                <div className="flex-1 p-6 md:p-8 overflow-hidden bg-gray-50/50">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <div className="text-lg font-bold text-gray-900">Dashboard Overview</div>
                                            <div className="text-xs text-gray-500">Welcome back, Administrator</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-600 font-medium">Filter</div>
                                            <div className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium">Create Tender</div>
                                        </div>
                                    </div>

                                    {/* Mock Stats Grid */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        {[
                                            { label: 'Active Tenders', val: '12', color: 'bg-blue-500 text-blue-600' },
                                            { label: 'Pending Apps', val: '45', color: 'bg-indigo-500 text-indigo-600' },
                                            { label: 'Escrow Balance', val: '$2.4M', color: 'bg-green-500 text-green-600' },
                                            { label: 'Risks Flagged', val: '3', color: 'bg-red-500 text-red-600' }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className={`w-2 h-2 rounded-full ${stat.color.split(' ')[0]}`}></div>
                                                    <div className="text-[10px] uppercase font-bold text-gray-400">{stat.label}</div>
                                                </div>
                                                <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.val}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6 h-full">
                                        {/* Mock Chart Area */}
                                        <div className="md:col-span-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                                            <div className="flex justify-between mb-4">
                                                <div className="text-sm font-bold text-gray-800">Tender Analytics</div>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2 h-32">
                                                {[40, 65, 45, 80, 40, 60, 75, 50].map((h, i) => (
                                                    <div key={i} className="w-full bg-blue-50 rounded-t-sm relative group overflow-hidden h-full flex flex-col justify-end">
                                                        <div className="w-full bg-blue-500 rounded-t-sm transition-all duration-1000" style={{ height: `${h}%`, animation: `growUp 1s ease-out ${i * 0.1}s forwards` }}></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Mock List Area */}
                                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                            <div className="text-sm font-bold text-gray-800 mb-3">Recent Activity</div>
                                            <div className="space-y-3">
                                                {[
                                                    { title: 'Smart City Cam', status: 'Active' },
                                                    { title: 'Waste Mgmt', status: 'Review' },
                                                    { title: 'Road Repair', status: 'Draft' }
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3 border-b border-gray-50 pb-2 last:border-0">
                                                        <div className="w-6 h-6 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                                            {item.title[0]}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="text-xs font-medium text-gray-900 truncate">{item.title}</div>
                                                            <div className="text-[10px] text-gray-500">{item.status}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Key Benefits</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Why Choose TenderAI?</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Built for trust, speed, and accuracy. Experience a new standard in government procurement.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Zap className="w-8 h-8 text-amber-500" />,
                                title: "AI Analysis",
                                desc: "Instant evaluation of tender documents using advanced NLP to score compliance and risk.",
                                color: "border-amber-100 hover:border-amber-200"
                            },
                            {
                                icon: <Lock className="w-8 h-8 text-blue-500" />,
                                title: "Blockchain Security",
                                desc: "Immutable audit logs ensure 100% transparency in the bidding and selection process.",
                                color: "border-blue-100 hover:border-blue-200"
                            },
                            {
                                icon: <Shield className="w-8 h-8 text-green-500" />,
                                title: "Smart Escrow",
                                desc: "Automated payment release based on milestone verification and contract terms.",
                                color: "border-green-100 hover:border-green-200"
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover={{ y: -10 }}
                                className={`group p-8 rounded-3xl bg-white border-2 ${feature.color} shadow-lg shadow-gray-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                            >
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gray-50 rounded-full group-hover:bg-gray-100 transition-colors duration-300"></div>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 bg-white border border-gray-100 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed relative z-10">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works - Animated Steps */}
            <section id="how-it-works" className="py-32 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>

                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-12"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Process</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-2">Streamlined Workflow</h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">From tender creation to final payment, every step is optimized.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Create", desc: "Authority posts tender with AI assistance" },
                            { step: "02", title: "Match", desc: "Vendors get AI-matched recommendations" },
                            { step: "03", title: "Evaluate", desc: "AI scores proposals on technical compliance" },
                            { step: "04", title: "Award", desc: "Transparent selection and escrow payment" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative group h-full"
                            >
                                <div className="text-8xl font-black text-gray-800/50 group-hover:text-blue-900/50 transition-colors absolute -top-10 -left-6 -z-10 select-none">
                                    {item.step}
                                </div>
                                <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 p-8 rounded-3xl hover:border-blue-500 text-center hover:bg-gray-800 transition-all duration-300 shadow-2xl h-full flex flex-col items-center">
                                    <div className="w-14 h-14 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center mb-6 group-hover:border-blue-500 group-hover:bg-blue-900/20 transition-all shadow-lg">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Gradient Background */}
            <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8"
                    >
                        Ready to modernize procurement?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/signup?role=authority" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                            Join as Authority
                        </Link>
                        <Link to="/signup?role=vendor" className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg hover:-translate-y-1">
                            Join as Vendor
                        </Link>
                    </motion.div>
                </div>
            </section>

            <footer className="bg-gray-50 py-12 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4 opacity-50 hover:opacity-100 transition-opacity duration-300">
                        <Shield size={24} className="text-blue-600" />
                        <span className="font-bold text-xl text-gray-900">TenderAI</span>
                    </div>
                    <p className="text-gray-500">© 2024 TenderAI Analysis Platform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
