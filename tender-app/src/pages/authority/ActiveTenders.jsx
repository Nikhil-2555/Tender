import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Users, ChevronRight, MoreHorizontal } from 'lucide-react';

const ActiveTenders = () => {
    const tenders = [
        { id: 'T-2024-001', title: 'Smart City Surveillance System', dept: 'Public Safety', status: 'Active', bids: 12, deadline: '2024-12-25' },
        { id: 'T-2024-002', title: 'Municipal Waste Management', dept: 'Sanitation', status: 'Reviewing', bids: 8, deadline: '2024-12-20' },
        { id: 'T-2024-003', title: 'Public School Digital Infrastructure', dept: 'Education', status: 'Active', bids: 24, deadline: '2025-01-15' },
        { id: 'T-2024-004', title: 'City Hospital Cloud Migration', dept: 'Health', status: 'Draft', bids: 0, deadline: '2025-02-01' },
        { id: 'T-2024-005', title: 'Green Energy Park Construction', dept: 'Infrastructure', status: 'Paused', bids: 5, deadline: '2024-12-30' },
    ];

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Active Tenders</h1>
                    <p className="text-gray-500">Manage and monitor ongoing tender processes.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 font-medium">Filter</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Export Report</button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tender ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Project Title</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Bids</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Deadline</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {tenders.map((tender, index) => (
                                <motion.tr
                                    key={tender.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{tender.id}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-medium text-gray-900">{tender.title}</span>
                                            <span className="text-xs text-gray-500">{tender.dept} Department</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tender.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                tender.status === 'Reviewing' ? 'bg-blue-100 text-blue-800' :
                                                    tender.status === 'Draft' ? 'bg-gray-100 text-gray-800' : 'bg-amber-100 text-amber-800'
                                            }`}>
                                            {tender.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <Users size={16} className="text-gray-400" />
                                            {tender.bids}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={16} className="text-gray-400" />
                                            {tender.deadline}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between text-sm text-gray-500">
                    <p>Showing 5 of 12 active tenders</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded bg-white disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 border border-gray-200 rounded bg-white hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveTenders;
