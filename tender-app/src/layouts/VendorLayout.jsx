import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Building2, LayoutDashboard, Search, FileCheck, DollarSign, Settings, LogOut } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const VendorLayout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { path: '/vendor/dashboard', icon: LayoutDashboard, label: 'Overview' },
        { path: '/vendor/tenders', icon: Search, label: 'Find Tenders' },
        { path: '/vendor/applications', icon: FileCheck, label: 'My Applications' },
        { path: '/vendor/payments', icon: DollarSign, label: 'Payments' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            <Building2 size={18} />
                        </div>
                        <span className="font-bold text-lg text-gray-900">TenderAI <span className="text-xs font-normal text-gray-500">Vendor</span></span>
                    </Link>
                </div>

                <div className="flex-1 py-6 flex flex-col justify-between">
                    <nav className="px-4 space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive(item.path)
                                    ? 'bg-blue-50 text-blue-700 font-medium'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="px-4 space-y-1">
                        <Link to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all">
                            <Settings size={20} />
                            Settings
                        </Link>
                        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all">
                            <LogOut size={20} />
                            Logout
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>
        </div>
    );
};

export default VendorLayout;
