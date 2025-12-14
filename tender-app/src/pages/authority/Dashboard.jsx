import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, DollarSign, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
    const stats = [
        { title: 'Active Tenders', value: '12', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Pending Applications', value: '45', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
        { title: 'Escrow Balance', value: '$2.4M', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
        { title: 'Flagged Risks', value: '3', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
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
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500">Welcome back, Authority Admin</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`${stat.bg} p-3 rounded-lg`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Tenders</h2>
                    <div className="space-y-4">
                        {[
                            { name: 'Smart City Surveillance System', status: 'Open', bids: 8 },
                            { name: 'Municipal Waste Management', status: 'Reviewing', bids: 12 },
                            { name: 'Public Transport Automation', status: 'Draft', bids: 0 },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div>
                                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.bids} Bids Received</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'Open' ? 'bg-green-100 text-green-700' :
                                        item.status === 'Draft' ? 'bg-gray-200 text-gray-700' : 'bg-amber-100 text-amber-700'
                                    }`}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* AI Insights */}
                <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">AI Risk Alerts</h2>
                    <div className="space-y-4">
                        {[
                            { msg: 'Compliance mismatch detected in Vendor A-Corp application.', type: 'critical' },
                            { msg: 'Unusual bidding pattern observed in Road Infrastructure tender.', type: 'warning' },
                        ].map((alert, idx) => (
                            <div key={idx} className={`p-4 rounded-lg flex gap-3 ${alert.type === 'critical' ? 'bg-red-50 border border-red-100' : 'bg-amber-50 border border-amber-100'
                                }`}>
                                <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${alert.type === 'critical' ? 'text-red-600' : 'text-amber-600'
                                    }`} />
                                <p className={`text-sm ${alert.type === 'critical' ? 'text-red-700' : 'text-amber-700'
                                    }`}>{alert.msg}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
