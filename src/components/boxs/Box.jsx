import React from 'react';

const StatCard = ({ number, label }) => {
    return (
        <div className="w-[350px] h-32 rounded-lg relative overflow-hidden bg-[#5B6B54] flex flex-col justify-center p-6 text-white">
            <div className="relative z-10">
                <div className="text-4xl font-bold mb-1">{number}</div>
                <div className="text-lg">{label}</div>
            </div>
            <div className="absolute inset-0 flex">
                <div className="w-full h-full transform -skew-x-12 translate-x-1/4 bg-green-900 opacity-90"></div>
                <div className="w-full h-full transform -skew-x-12 translate-x-1/4 bg-red-900 opacity-90"></div>
                <div className="w-full h-full transform -skew-x-12 translate-x-1/4 bg-[#8B7355] opacity-90"></div>
            </div>
        </div>
    );
};

const StatsContainer = () => {
    return (
        <div className="flex gap-12">
            <StatCard
                number="3 000"
                label="O'quvchilar soni"
            />
            <StatCard
                number="250"
                label="Video kurslar soni"
            />
            <StatCard
                number="1 200 000"
                label={<>Budjet <span className="text-sm">so'm</span></>}
            />
        </div>
    );
};

export default StatsContainer;