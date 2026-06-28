'use strict';
import React from 'react';
// Removed CardBody from the imports below
import { Card, Button, Chip } from '@heroui/react';
import { Rocket, Briefcase, Users, Calendar, Award, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { StatCard } from '../StatCard';

// Dummy Data
const startups = [
    { id: 1, name: "NovaAI", founder: "Sarah Jenkins", industry: "Artificial Intelligence", teamSize: 3 },
    { id: 2, name: "EcoSphere", founder: "Alex Rivera", industry: "CleanTech", teamSize: 2 },
    { id: 3, name: "QuantPay", founder: "Tasrif Hassan", industry: "FinTech", teamSize: 4 },
];

const opportunities = [
    { id: 1, title: "Frontend Engineer (React)", startup: "NovaAI", skills: ["React", "Tailwind", "Next.js"], deadline: "Jul 15, 2026" },
    { id: 2, title: "Product Designer", startup: "EcoSphere", skills: ["Figma", "UI/UX", "Prototyping"], deadline: "Jul 22, 2026" },
    { id: 3, title: "Backend Developer", startup: "QuantPay", skills: ["Node.js", "Express", "MongoDB"], deadline: "Aug 01, 2026" },
];

export default function StartupForgeDashboard() {
    return (
        <div className="min-h-screen bg-[#09090b] text-neutral-100 p-6 md:p-12 font-sans selection:bg-neutral-800">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                
                {/* Header Section */}
                <header className="animate-fade-in">
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-2 bg-gradient-to-r from-white to-neutral-500 bg-clip-text text-transparent">
                        StartupForge Hub
                    </h1>
                    <p className="text-neutral-400">Build teams, find opportunities, and scale ideas.</p>
                </header>

                {/* Additional Section 1: Startup Statistics */}
                <section className="animate-slide-up [animation-delay:100ms]">
                    <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                        <TrendingUp className="text-neutral-400" size={20} /> StartupForge Statistics
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard title="Total Startups Launching" value="1,248" icon={Rocket} />
                        <StatCard title="Open Active Roles" value="482" icon={Briefcase} />
                        <StatCard title="Talent Matched" value="8,920" icon={Users} />
                        <StatCard title="Funding Raised" value="$42M" icon={Award} />
                    </div>
                </section>

                {/* Dynamic Section 1: Featured Startups */}
                <section className="animate-slide-up [animation-delay:200ms]">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-white">Featured Startups</h2>
                        <span className="text-xs text-neutral-500 animate-pulse bg-neutral-900 px-2 py-1 rounded-full border border-neutral-800">
                            Live Updates
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {startups.map((startup) => (
                            <Card key={startup.id} className="bg-[#121214] border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                                <div className="p-6 flex flex-col gap-4">
                                    <div>
                                        <Chip size="sm" variant="flat" className="bg-neutral-800 text-neutral-300 border border-neutral-700 mb-3">
                                            {startup.industry}
                                        </Chip>
                                        <h3 className="text-lg font-semibold text-white">{startup.name}</h3>
                                        <p className="text-xs text-neutral-400 mt-1">Founded by {startup.founder}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800/60">
                                        <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                                            <Users size={14} /> Need: {startup.teamSize} members
                                        </span>
                                        <Button size="sm" variant="light" className="text-xs text-white font-medium hover:bg-neutral-800">
                                            View Profile
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Dynamic Section 2: Featured Opportunities */}
                <section className="animate-slide-up [animation-delay:300ms]">
                    <h2 className="text-xl font-semibold text-white mb-6">Featured Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {opportunities.map((opp) => (
                            <Card key={opp.id} className="bg-[#121214] border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
                                <div className="p-6 flex flex-col justify-between gap-6">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold text-white leading-tight">{opp.title}</h3>
                                        <p className="text-sm text-neutral-400">{opp.startup}</p>
                                        
                                        {/* Skill Tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {opp.skills.map((skill, index) => (
                                                <span key={index} className="text-[11px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800/60">
                                        <span className="text-[11px] text-neutral-500 flex items-center gap-1">
                                            <Calendar size={12} /> Deadline: {opp.deadline}
                                        </span>
                                        <Button size="sm" className="bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors">
                                            Apply Now
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Additional Section 2: Why Join StartupForge */}
                <section className="animate-slide-up [animation-delay:400ms] bg-[#121214] border border-neutral-800 rounded-3xl p-8 md:p-12">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-white mb-4">Why Join StartupForge?</h2>
                        <p className="text-neutral-400 mb-8 text-sm md:text-base leading-relaxed">
                            Skip the corporate bureaucracy. Connect directly with visionary founders, work on cutting-edge stacks, and claim absolute ownership over your code and products.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="p-2 h-9 w-9 shrink-0 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                                    <Zap size={16} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">Fast-Track Matching</h4>
                                    <p className="text-xs text-neutral-400 leading-relaxed">Direct channels to decision-makers without resume black holes.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-2 h-9 w-9 shrink-0 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
                                    <ShieldCheck size={16} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-white mb-1">Vetted Ecosystem</h4>
                                    <p className="text-xs text-neutral-400 leading-relaxed">Every listed venture is thoroughly verified for viability and funding clarity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
