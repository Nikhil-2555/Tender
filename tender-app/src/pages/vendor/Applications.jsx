import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

const Applications = () => {
    const applications = [
        {
            id: 'APP-801',
            tenderTitle: 'Smart City Traffic Management',
            authority: 'Municipal Corp',
            submittedDate: '2024-12-10',
            status: 'Under Review',
            stage: 'Technical Eval'
        },
        {
            id: 'APP-755',
            tenderTitle: 'Hospital Records Digitization',
            authority: 'Health Dept',
            submittedDate: '2024-11-25',
            status: 'Shortlisted',
            stage: 'Financial Eval'
        },
        {
            id: 'APP-620',
            tenderTitle: 'City Park Maintenance 2024',
            authority: 'Parks & Rec',
            submittedDate: '2024-10-15',
            status: 'Rejected',
            stage: 'Final Decision'
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
                <p className="text-gray-500">Track status of your submitted tender proposals.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Application ID</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tender</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Authority</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Current Stage</th>
                                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {applications.map((app, index) => (
                                <motion.tr
                                    key={app.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 font-mono text-sm text-gray-500">{app.id}</td>
                                    <td className="px-6 py-4 font-medium text-gray-900">{app.tenderTitle}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{app.authority}</td>
                                    <td className="px-6 py-4 text-sm text-gray-600">{app.submittedDate}</td>
                                    <td className="px-6 py-4 text-sm text-blue-600 font-medium">{app.stage}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${app.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                                                app.status === 'Under Review' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                            {app.status === 'Shortlisted' && <CheckCircle size={12} />}
                                            {app.status === 'Under Review' && <Clock size={12} />}
                                            {app.status === 'Rejected' && <XCircle size={12} />}
                                            {app.status}
                                        </span>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Applications;
