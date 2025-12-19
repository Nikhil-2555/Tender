import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Shield, Zap, Sparkles, Users, Lock, TrendingUp, Play, CheckCircle, ArrowUpRight, FileText, Award, Clock, Target, Eye, Briefcase, Globe, Heart, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Enhanced custom cursor
const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    const springConfig = { damping: 25, stiffness: 500 };
    const smoothSpring = { damping: 35, stiffness: 150 };

    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
    const outerXSpring = useSpring(cursorX, smoothSpring);
    const outerYSpring = useSpring(cursorY, smoothSpring);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closest('a, button, [role="button"], .cursor-pointer, .interactive')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="fixed rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isClicking ? 8 : isHovering ? 12 : 10,
                    height: isClicking ? 8 : isHovering ? 12 : 10,
                    backgroundColor: isHovering ? '#a855f7' : '#ffffff',
                    boxShadow: isHovering ? '0 0 20px #a855f7' : '0 0 10px rgba(255,255,255,0.5)',
                }}
                transition={{ duration: 0.15 }}
            />

            {/* Outer ring */}
            <motion.div
                className="fixed rounded-full border-2 pointer-events-none z-[9998] hidden md:block"
                style={{
                    x: outerXSpring,
                    y: outerYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isClicking ? 35 : isHovering ? 60 : 45,
                    height: isClicking ? 35 : isHovering ? 60 : 45,
                    borderColor: isHovering ? 'rgba(168, 85, 247, 0.8)' : 'rgba(168, 85, 247, 0.3)',
                    boxShadow: isHovering
                        ? '0 0 30px rgba(168, 85, 247, 0.4), inset 0 0 30px rgba(168, 85, 247, 0.1)'
                        : '0 0 15px rgba(168, 85, 247, 0.15)',
                }}
                transition={{ duration: 0.25 }}
            />
        </>
    );
};

// Animated counter
const AnimatedCounter = ({ value, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const end = parseInt(value);
            const step = Math.ceil(end / 40);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(current);
                }
            }, 30);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
};

// Magnetic button
const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x, { damping: 20, stiffness: 200 });
    const ySpring = useSpring(y, { damping: 20, stiffness: 200 });

    const handleMouse = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
            y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ x: xSpring, y: ySpring }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Floating orb
const FloatingOrb = ({ className, color = "violet", delay = 0 }) => {
    const colors = {
        violet: "from-violet-600/40 to-purple-900/30",
        indigo: "from-indigo-600/30 to-blue-900/20",
        cyan: "from-cyan-500/30 to-teal-900/20",
        pink: "from-pink-500/30 to-rose-900/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 1.5 }}
            className={`absolute rounded-full bg-gradient-to-br ${colors[color]} blur-[80px] pointer-events-none ${className}`}
        />
    );
};

// Particles
const Particles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-violet-400/40 rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{
                    y: [0, -600],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 10 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                }}
            />
        ))}
    </div>
);

// 3D Card
const Card3D = ({ children, className }) => {
    const ref = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const x = (e.clientY - rect.top - rect.height / 2) * -0.02;
            const y = (e.clientX - rect.left - rect.width / 2) * 0.02;
            setRotate({ x, y });
        }
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={() => setRotate({ x: 0, y: 0 })}
            animate={{ rotateX: rotate.x, rotateY: rotate.y }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

// Feature Card
const FeatureCard = ({ icon: Icon, title, description, gradient, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Card3D className="group h-full">
                <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 h-full hover:bg-white/[0.06] hover:border-violet-500/30 transition-all duration-500">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{description}</p>
                    <ArrowUpRight className="absolute bottom-6 right-6 w-5 h-5 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            </Card3D>
        </motion.div>
    );
};

// Benefit Card
const BenefitCard = ({ icon: Icon, title, description, color, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
        >
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

// Process Step
const ProcessStep = ({ number, title, description, icon: Icon, isLast, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex gap-6"
        >
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-violet-500/50 rounded-full blur-lg" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-xl">
                        {number}
                    </div>
                </div>
                {!isLast && <div className="w-0.5 h-16 bg-gradient-to-b from-violet-500/50 to-transparent mt-3" />}
            </div>
            <div className="flex-1 pb-8">
                <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-violet-400" />
                    <h4 className="text-lg font-bold text-white">{title}</h4>
                </div>
                <p className="text-gray-400">{description}</p>
            </div>
        </motion.div>
    );
};

// Stat Card
const StatCard = ({ value, suffix, label, icon: Icon, color, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all"
        >
            <Icon className={`w-8 h-8 ${color} mx-auto mb-3`} />
            <div className={`text-4xl font-black ${color} mb-1`}>
                <AnimatedCounter value={value} suffix={suffix} />
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">{label}</div>
        </motion.div>
    );
};

const Landing = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const features = [
        { icon: Target, title: "Smart Matching", description: "Auto-match vendors to tenders based on capability and track record.", gradient: "from-violet-600 to-purple-600" },
        { icon: FileText, title: "Document Automation", description: "Generate compliant bids with smart templates and validation.", gradient: "from-indigo-600 to-blue-600" },
        { icon: Shield, title: "Secure Escrow", description: "Milestone-based payments with built-in dispute resolution.", gradient: "from-cyan-600 to-teal-600" },
        { icon: Eye, title: "Live Dashboard", description: "Real-time tracking of tender status and evaluation progress.", gradient: "from-pink-600 to-rose-600" },
        { icon: Award, title: "Compliance Scoring", description: "Automated checks with detailed improvement suggestions.", gradient: "from-amber-600 to-orange-600" },
        { icon: Clock, title: "Deadline Alerts", description: "Never miss a submission with smart timeline tracking.", gradient: "from-emerald-600 to-green-600" }
    ];

    const benefits = [
        { icon: Zap, title: "Lightning Fast", description: "Process tenders 10x faster with automation.", color: "bg-amber-500" },
        { icon: Shield, title: "Bank-Grade Security", description: "Enterprise encryption protects your data.", color: "bg-emerald-500" },
        { icon: Globe, title: "Access Anywhere", description: "Cloud-native platform works on any device.", color: "bg-blue-500" },
        { icon: Heart, title: "24/7 Support", description: "Dedicated team ready to help anytime.", color: "bg-pink-500" },
        { icon: Rocket, title: "Scale Infinitely", description: "Handle thousands of tenders effortlessly.", color: "bg-violet-500" },
        { icon: Briefcase, title: "All-in-One", description: "Everything from bid to award in one place.", color: "bg-cyan-500" },
    ];

    const stats = [
        { value: "500", suffix: "+", label: "Organizations", color: "text-violet-400", icon: Users },
        { value: "98", suffix: "%", label: "Success Rate", color: "text-emerald-400", icon: TrendingUp },
        { value: "2", suffix: "M+", label: "Processed", color: "text-cyan-400", icon: FileText },
        { value: "73", suffix: "%", label: "Time Saved", color: "text-amber-400", icon: Clock },
    ];

    const process = [
        { title: "Create Account", description: "Sign up as Authority or Vendor in under 2 minutes.", icon: Users },
        { title: "Post or Discover", description: "Create tenders or get matched to opportunities.", icon: FileText },
        { title: "Smart Evaluation", description: "Automated scoring streamlines the review process.", icon: Target },
        { title: "Award & Pay", description: "Secure contracts with escrow-protected payments.", icon: Award },
    ];

    return (
        <div className="min-h-screen bg-[#050510] overflow-hidden selection:bg-violet-500/30">
            <CustomCursor />
            <Navbar />

            {/* Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 aurora opacity-50" />
                <FloatingOrb className="w-[800px] h-[800px] -top-[300px] -left-[200px] floating-orb-slow" color="violet" />
                <FloatingOrb className="w-[600px] h-[600px] top-[30%] -right-[150px] floating-orb" color="indigo" delay={0.3} />
                <FloatingOrb className="w-[400px] h-[400px] bottom-[10%] left-[30%] floating-orb-fast" color="cyan" delay={0.5} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]" />
                <Particles />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510]" />
            </div>

            {/* Hero */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 z-10 min-h-screen flex items-center">
                <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center max-w-5xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-xl">
                                <Sparkles className="w-4 h-4 text-violet-400 animate-pulse" />
                                <span className="text-violet-300 text-sm font-medium">Smart Tender Management Platform</span>
                            </span>
                        </motion.div>

                        {/* Headline - Fixed visibility */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8"
                        >
                            Transform Your
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                                Tender Process
                            </span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
                        >
                            Streamline your <span className="text-white font-semibold">tender management</span> with{' '}
                            <span className="text-white font-semibold">smart automation</span> — from bid submission
                            to contract award.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <MagneticButton>
                                <Link to="/signup" className="interactive group px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl font-bold text-lg text-white glow-button flex items-center gap-3">
                                    <span>Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </MagneticButton>

                            <MagneticButton>
                                <Link to="#demo" className="interactive group px-8 py-4 glass-dark rounded-xl font-bold text-lg text-white flex items-center gap-3 hover:bg-white/5 transition-all">
                                    <Play className="w-5 h-5" />
                                    <span>Watch Demo</span>
                                </Link>
                            </MagneticButton>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex flex-wrap justify-center gap-6 text-gray-500"
                        >
                            {[
                                { icon: CheckCircle, text: "No credit card required", color: "text-emerald-400" },
                                { icon: Zap, text: "Setup in 2 minutes", color: "text-amber-400" },
                                { icon: Shield, text: "Enterprise security", color: "text-violet-400" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <item.icon className={`w-4 h-4 ${item.color}`} />
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dashboard Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 max-w-5xl mx-auto"
                    >
                        <Card3D className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/30">
                            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />

                            <div className="relative bg-[#0a0a15]/95 backdrop-blur-xl">
                                <div className="h-12 bg-black/50 border-b border-white/5 flex items-center px-4 gap-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                    </div>
                                    <div className="flex-1 max-w-sm h-7 bg-white/5 rounded-lg flex items-center px-3">
                                        <Lock className="w-3 h-3 text-green-400 mr-2" />
                                        <span className="text-xs text-gray-500 font-mono">tender.ai/dashboard</span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-4 gap-3 mb-6">
                                        {[
                                            { label: "Active Tenders", value: "24", color: "text-violet-400" },
                                            { label: "Success Rate", value: "98%", color: "text-emerald-400" },
                                            { label: "Processing", value: "0.4s", color: "text-cyan-400" },
                                            { label: "Saved", value: "$2.4M", color: "text-amber-400" }
                                        ].map((stat, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 1.2 + i * 0.1 }}
                                                className="bg-white/5 border border-white/10 rounded-lg p-4"
                                            >
                                                <div className="text-xs text-gray-500 mb-1">{stat.label}</div>
                                                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                                        <div className="text-sm text-gray-400 mb-3">Performance</div>
                                        <div className="flex items-end gap-1.5 h-32">
                                            {[40, 65, 45, 80, 55, 90, 50, 85, 60, 95].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    animate={{ height: `${h}%` }}
                                                    transition={{ delay: 1.5 + i * 0.05, duration: 0.6 }}
                                                    className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-indigo-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card3D>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="py-20 relative z-10">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <StatCard key={i} {...stat} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block px-4 py-1.5 bg-violet-500/10 border border-violet-500/30 rounded-full text-violet-400 text-sm font-semibold uppercase tracking-wider mb-4"
                        >
                            Features
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white mb-4"
                        >
                            Powerful <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Tools</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl text-gray-400 max-w-2xl mx-auto"
                        >
                            Everything you need to manage tenders efficiently.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <FeatureCard key={i} {...feature} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="py-24 relative z-10">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-4"
                        >
                            Benefits
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white mb-4"
                        >
                            Why Choose <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">TenderAI</span>?
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <BenefitCard key={i} {...benefit} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-24 relative z-10">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4"
                        >
                            How It Works
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black text-white"
                        >
                            Simple <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">4-Step</span> Process
                        </motion.h2>
                    </div>

                    <div>
                        {process.map((step, i) => (
                            <ProcessStep key={i} number={i + 1} {...step} isLast={i === process.length - 1} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-indigo-600/30 to-cyan-600/30" />
                        <div className="absolute inset-0 aurora opacity-40" />
                        <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-600/40 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/40 rounded-full blur-[100px]" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                Ready to <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Get Started</span>?
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                                Join hundreds of organizations transforming their tender process.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <MagneticButton>
                                    <Link to="/signup" className="interactive px-10 py-5 bg-white text-gray-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl">
                                        Start Free Trial
                                    </Link>
                                </MagneticButton>
                                <MagneticButton>
                                    <Link to="/contact" className="interactive px-10 py-5 glass-dark rounded-xl font-bold text-lg text-white hover:bg-white/10 transition-all">
                                        Contact Sales
                                    </Link>
                                </MagneticButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                            <Shield className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-white">TenderAI</span>
                    </div>
                    <p className="text-gray-500 text-sm">© 2024 TenderAI. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
