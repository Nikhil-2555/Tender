import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Download, Lock, CheckCircle, Clock } from 'lucide-react';

const Payments = () => {
    const transactions = [
        { id: 'TX-2024-88', project: 'Hospital Records Digitization', milestone: 'Phase 1 Completion', amount: '$85,000', date: '2024-12-01', status: 'Releaased' },
        { id: 'TX-2024-92', project: 'City Park Maintenance', milestone: 'Mobilization Advance', amount: '$25,000', date: '2024-12-10', status: 'In Escrow' },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Payments & Escrow</h1>
                <p className="text-gray-500">Track incoming payments and escrow releases.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-3xl font-bold text-gray-900">$110,000</h3>
                    <p className="text-gray-500 text-sm mb-1">Total Earnings</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                    <p className="text-blue-600 text-sm mb-1 flex items-center gap-1"><Lock size={12} /> Locked in Escrow</p>
                    <h3 className="text-3xl font-bold text-blue-700">$25,000</h3>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <p className="text-gray-500 text-sm mb-1">Pending Invoices</p>
                    <h3 className="text-3xl font-bold text-gray-900">0</h3>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900">Transaction History</h3>
                </div>
                <div className="divide-y divide-gray-100">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-xl ${tx.status === 'Releaased' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                    <DollarSign size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{tx.project}</h4>
                                    <p className="text-sm text-gray-500">{tx.milestone}</p>
                                    <p className="text-xs text-gray-400 mt-1">Ref: {tx.id} • {tx.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="text-right">
                                    <p className="font-bold text-gray-900 text-lg">{tx.amount}</p>
                                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${tx.status === 'Releaased' ? 'text-green-600' : 'text-amber-600'
                                        }`}>
                                        {tx.status === 'Releaased' ? <CheckCircle size={10} /> : <Lock size={10} />}
                                        {tx.status}
                                    </span>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
                                    <Download size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Payments;
