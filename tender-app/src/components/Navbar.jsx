import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/70 backdrop-blur-lg border-b border-gray-100 shadow-sm' : 'bg-transparent border-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 p-2 rounded-lg text-white group-hover:shadow-lg group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-300">
                                <Shield size={24} />
                            </div>
                            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                                TenderAI
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#how-it-works" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">How it works</a>
                        <a href="/#benefits" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Benefits</a>

                        <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                            <Link to="/login" className="text-gray-900 font-medium hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">
                                Login
                            </Link>
                            <Link to="/signup" className="group bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-gray-900/20 hover:shadow-xl hover:shadow-gray-900/30 hover:-translate-y-0.5">
                                Get Started
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
