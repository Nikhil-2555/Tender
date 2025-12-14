import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Shield, Clock, CheckCircle, FileText, Lock } from 'lucide-react';

const AuditLog = () => {
    const logs = [
        { id: 'TX-9821', action: 'Contract Smart Contract Deployed', user: 'System (Automated)', time: '2 mins ago', hash: '0x8f...2a1b', status: 'Verified' },
        { id: 'TX-9820', action: 'Tender Evaluation: T-2024-001', user: 'AI Engine v2.4', time: '15 mins ago', hash: '0x7c...3b2c', status: 'Verified' },
        { id: 'TX-9819', action: 'New Tender Published: City Traffic', user: 'Authority Admin', time: '1 hour ago', hash: '0x6d...4c3d', status: 'Verified' },
        { id: 'TX-9818', action: 'Vendor Registration: TechSolutions', user: 'Vendor User', time: '3 hours ago', hash: '0x5e...5d4e', status: 'Verified' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="mb-8 text-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-2 inline-block">Blockchain Verified</span>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Transparency Audit Log</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Real-time immutable record of all tender activities, secured by blockchain technology.</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Blockchain Visual Header */}
                    <div className="bg-gray-900 p-6 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 p-2 rounded-lg">
                                <Lock className="text-green-400" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold">Mainnet Connected</h3>
                                <p className="text-xs text-gray-400">Block Height: 18,242,931 • Latency: 24ms</p>
                            </div>
                        </div>
                        <div className="hidden sm:block text-right">
                            <p className="text-xs text-gray-400 font-mono">LATEST HASH</p>
                            <p className="font-mono text-sm text-blue-400">0x7f2c...9a1b</p>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Executed By</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Timestamp</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Blockchain Hash</th>
                                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {logs.map((log, index) => (
                                    <motion.tr
                                        key={log.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="hover:bg-blue-50/50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-mono text-sm font-medium text-gray-900">{log.id}</td>
                                        <td className="px-6 py-4 text-sm text-gray-700 flex items-center gap-2">
                                            {log.action.includes('Tender') ? <FileText size={16} className="text-blue-500" /> :
                                                log.action.includes('Contract') ? <Shield size={16} className="text-purple-500" /> :
                                                    <CheckCircle size={16} className="text-gray-400" />}
                                            {log.action}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">{log.user}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 flex items-center gap-1">
                                            <Clock size={14} />
                                            {log.time}
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-blue-600 bg-blue-50/50 rounded">{log.hash}</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {log.status}
                                            </span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuditLog;
