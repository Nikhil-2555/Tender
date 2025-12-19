import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-[#030014]/50 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-600 blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                <div className="relative bg-gradient-to-tr from-purple-600 to-blue-600 p-2 rounded-lg text-white group-hover:scale-105 transition-all duration-300">
                                    <Shield size={24} />
                                </div>
                            </div>
                            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                TenderAI
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/#how-it-works" className="text-gray-400 hover:text-white font-medium transition-colors text-sm tracking-wide">process</Link>
                        <Link to="/#benefits" className="text-gray-400 hover:text-white font-medium transition-colors text-sm tracking-wide">benefits</Link>

                        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                            <Link to="/login" className="text-gray-300 font-medium hover:text-white transition-colors text-sm">
                                Login
                            </Link>
                            <Link to="/signup" className="group relative px-5 py-2.5 rounded-full font-medium text-white transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute -inset-[1px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-sm opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                <div className="relative flex items-center gap-2">
                                    Get Started
                                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-white hover:text-purple-400 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-3xl border-b border-white/10 md:hidden p-4 flex flex-col gap-4">
                    <Link to="/#how-it-works" className="text-gray-400 hover:text-white font-medium text-lg">Process</Link>
                    <Link to="/#benefits" className="text-gray-400 hover:text-white font-medium text-lg">Benefits</Link>
                    <div className="h-px bg-white/10 my-2"></div>
                    <Link to="/login" className="text-gray-300 font-medium hover:text-white">Login</Link>
                    <Link to="/signup" className="bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-xl text-center font-medium text-white">Get Started</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
