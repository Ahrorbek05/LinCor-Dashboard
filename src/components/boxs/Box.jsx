import PropTypes from 'prop-types';

const StatCard = ({ number, label }) => {
    return (
        <div className="w-[320px] h-32 rounded-lg relative overflow-hidden bg-[#5B6B54] flex flex-col justify-center p-6 text-white">
            <div className="relative z-10">
                <div className="text-4xl font-bold mb-1">{number}</div>
                <div className="text-lg">{label}</div>
            </div>
            <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full transform -skew-x-12 translate-x-1/4 bg-green-900 opacity-80"></div>
                <div className="w-1/3 h-full transform -skew-x-12 translate-x-1/2 bg-red-900 opacity-80"></div>
                <div className="w-1/3 h-full transform -skew-x-12 translate-x-3/4 bg-[#8B7355] opacity-80"></div>
            </div>
        </div>
    );
};

// **PropTypes qo‘shildi**
StatCard.propTypes = {
    number: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired, // `label` tarkibida JSX bo‘lishi mumkinligi uchun `node` ishlatildi
};

const StatsContainer = () => {
    return (
        <div className="flex gap-12">
            <StatCard number="3 000" label="O'quvchilar soni" />
            <StatCard number="250" label="Video kurslar soni" />
            <StatCard number="1 200 000" label={<>Budjet <span className="text-sm">sum</span></>} />
        </div>
    );
};

export default StatsContainer;
