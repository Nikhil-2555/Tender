import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Download, Save, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const CreateTender = () => {
    const [loading, setLoading] = useState(false);
    const [generated, setGenerated] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        budget: '',
        deadline: '',
        description: '',
    });

    const handleGenerate = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate AI generation delay
        setTimeout(() => {
            setLoading(false);
            setGenerated(true);
        }, 2000);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Create New Tender</h1>
                <p className="text-gray-500">Use AI to generate comprehensive tender documents from simple inputs.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                            Project Details
                        </h2>

                        <form onSubmit={handleGenerate} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Smart City Traffic System"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($)</label>
                                    <input
                                        type="number"
                                        required
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        placeholder="500000"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                                    <input
                                        type="date"
                                        required
                                        value={formData.deadline}
                                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
                                <textarea
                                    rows={4}
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Describe the core requirements..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-70"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Generating Tender...
                                    </>
                                ) : (
                                    <>
                                        <Wand2 size={20} />
                                        Generate with AI
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* AI Preview */}
                <div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="bg-purple-100 text-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                            AI Generated Document
                        </h2>

                        {!generated ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-lg p-8">
                                <Wand2 size={48} className="mb-4 opacity-20" />
                                <p>Fill details and click Generate to see the AI preview</p>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex-1 flex flex-col"
                            >
                                <div className="flex-1 bg-gray-50 rounded-lg p-6 border border-gray-200 font-mono text-sm leading-relaxed overflow-y-auto mb-4 max-h-[500px]">
                                    <h3 className="font-bold text-gray-900 text-lg mb-4 text-center border-b pb-2">REQUEST FOR PROPOSAL</h3>
                                    <p className="font-bold mb-2">PROJECT: {formData.title || 'Untitled Project'}</p>
                                    <p className="mb-4">REF: TENDER-{Math.floor(Math.random() * 10000)}/2024</p>

                                    <p className="font-bold mt-4">1. SCOPE OF WORK</p>
                                    <p className="mb-2 text-gray-700">The Authority seeks a qualified vendor to execute the following: {formData.description}</p>
                                    <p className="text-gray-700">Detailed deliverables include system architecture design, implementation, and 3-year maintenance contract.</p>

                                    <p className="font-bold mt-4">2. ELIGIBILITY CRITERIA</p>
                                    <ul className="list-disc ml-4 space-y-1 text-gray-700">
                                        <li>Minimum annual turnover of ${(Number(formData.budget) * 0.4).toLocaleString()}</li>
                                        <li>ISO 27001 Certification required</li>
                                        <li>Previous experience in government contracts</li>
                                    </ul>

                                    <p className="font-bold mt-4">3. BUDGET & TIMELINE</p>
                                    <p className="text-gray-700">Total estimated budget: ${Number(formData.budget).toLocaleString()}</p>
                                    <p className="text-gray-700">Submission deadline: {formData.deadline}</p>

                                    <div className="mt-6 flex items-center gap-2 text-xs text-blue-600 bg-blue-50 p-2 rounded border border-blue-100">
                                        <Wand2 size={12} />
                                        Generated by TenderAI Neural Engine v2.4
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                                        <Save size={18} />
                                        Publish Tender
                                    </button>
                                    <button className="px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
                                        <Download size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTender;
