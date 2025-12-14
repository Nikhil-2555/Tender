import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const FindTenders = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const tenders = [
        { id: 1, title: 'Regional Highway Expansion', location: 'New York, USA', budget: '$150M', deadline: '2025-03-30', category: 'Infrastructure' },
        { id: 2, title: 'Government Office Solar Installation', location: 'California, USA', budget: '$2.5M', deadline: '2025-01-15', category: 'Energy' },
        { id: 3, title: 'Cybersecurity Audit Services', location: 'Washington DC, USA', budget: '$500K', deadline: '2024-12-31', category: 'IT Services' },
        { id: 4, title: 'Public Park Landscaping', location: 'Texas, USA', budget: '$1.2M', deadline: '2025-02-20', category: 'Environment' },
        { id: 5, title: 'City Fleet EV Charging Stations', location: 'Oregon, USA', budget: '$3.8M', deadline: '2025-04-10', category: 'Energy' },
    ];

    const filteredTenders = tenders.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            <div className="mb-8 ">
                <h1 className="text-2xl font-bold text-gray-900">Find Tenders</h1>
                <p className="text-gray-500">Search and filter government tenders available for bidding.</p>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search tenders by keyword..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100">
                        <Filter size={18} /> Filters
                    </button>
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Search</button>
                </div>
            </div>

            {/* Tender Grid */}
            <div className="grid gap-4">
                {filteredTenders.length > 0 ? (
                    filteredTenders.map((tender, index) => (
                        <motion.div
                            key={tender.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow group"
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">{tender.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{tender.title}</h3>

                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <MapPin size={16} className="text-gray-400" />
                                            {tender.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <DollarSign size={16} className="text-gray-400" />
                                            {tender.budget}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={16} className="text-gray-400" />
                                            Deadline: {tender.deadline}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <button className="w-full md:w-auto px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        No tenders found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindTenders;
