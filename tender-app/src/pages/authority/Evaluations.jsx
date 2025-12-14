import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, FileText, ChevronDown } from 'lucide-react';

const Evaluations = () => {
    const evaluations = [
        {
            id: 'E-101',
            vendor: 'TechFlow Solutions',
            tender: 'Smart City Surveillance',
            score: 94,
            status: 'Recommended',
            compliance: { technical: 98, financial: 90, risk: 'Low' },
            date: '2024-12-14'
        },
        {
            id: 'E-102',
            vendor: 'Urban Infra Corp',
            tender: 'Municipal Waste Management',
            score: 78,
            status: 'Qualified',
            compliance: { technical: 85, financial: 70, risk: 'Medium' },
            date: '2024-12-13'
        },
        {
            id: 'E-103',
            vendor: 'CyberGuard Inc',
            tender: 'Smart City Surveillance',
            score: 45,
            status: 'Rejected',
            compliance: { technical: 90, financial: 0, risk: 'High' },
            date: '2024-12-12'
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">AI Evaluations</h1>
                <p className="text-gray-500">Review AI-scored proposals and compliance analysis.</p>
            </div>

            <div className="grid gap-6">
                {evaluations.map((evalItem, index) => (
                    <motion.div
                        key={evalItem.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${evalItem.score >= 90 ? 'bg-green-100 text-green-600' :
                                        evalItem.score >= 70 ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    <span className="text-xl font-bold">{evalItem.score}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{evalItem.vendor}</h3>
                                    <p className="text-sm text-gray-500">Tender: {evalItem.tender}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${evalItem.status === 'Recommended' ? 'bg-green-100 text-green-700' :
                                        evalItem.status === 'Qualified' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {evalItem.status}
                                </div>
                                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500">
                                    <ChevronDown size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Technical Compliance</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500" style={{ width: `${evalItem.compliance.technical}%` }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">{evalItem.compliance.technical}%</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Financial Health</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500" style={{ width: `${evalItem.compliance.financial}%` }}></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">{evalItem.compliance.financial}%</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Risk Assessment</p>
                                <div className="flex items-center gap-2">
                                    {evalItem.compliance.risk === 'Low' ? <CheckCircle size={16} className="text-green-500" /> :
                                        evalItem.compliance.risk === 'Medium' ? <AlertTriangle size={16} className="text-amber-500" /> :
                                            <XCircle size={16} className="text-red-500" />}
                                    <span className={`text-sm font-bold ${evalItem.compliance.risk === 'Low' ? 'text-green-700' :
                                            evalItem.compliance.risk === 'Medium' ? 'text-amber-700' : 'text-red-700'
                                        }`}>
                                        {evalItem.compliance.risk} Risk
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 text-sm font-medium">View Proposal</button>
                            {evalItem.status !== 'Rejected' && (
                                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-medium">Verify Documents</button>
                            )}
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Evaluations;
