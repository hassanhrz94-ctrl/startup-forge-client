import React from 'react';
import { Card } from '@heroui/react';

export const StatCard = ({ title, value, icon: Icon, className = "" }) => {
    return (
        <Card
            className={`bg-[#18181b] border border-neutral-800 rounded-2xl p-2 transition-transform duration-300 hover:scale-[1.02] ${className}`}
        >
            {/* Using a div instead of CardBody to prevent export issues */}
            <div className="flex flex-col gap-6 justify-between p-4">
                {/* Icon Wrapper */}
                {Icon && (
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800 text-neutral-300">
                        <Icon size={20} />
                    </div>
                )}

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-neutral-400">
                        {title}
                    </span>
                    <span className="text-3xl font-semibold text-white tracking-tight">
                        {value}
                    </span>
                </div>
            </div>
        </Card>
    );
};