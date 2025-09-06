import React from 'react';

const statusStyles = {
    healthy: {
        bg: 'bg-lime-400',
        text: 'HEALTHY'
    },
    degraded: {
        bg: 'bg-yellow-400',
        text: 'DEGRADED'
    },
    down: {
        bg: 'bg-pink-500',
        text: 'DOWN'
    }
};

export default function ServiceStatusCard({ service }) {
    const style = statusStyles[service.status] || statusStyles.degraded;

    return (
        <div className="bg-white border-4 border-black rounded-lg p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-[8px_8px_0px_#000000]">
            <div>
                <h3 className="text-xl font-bold truncate">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.owner}</p>
                <div className={`inline-block px-3 py-1 text-lg font-bold border-4 border-black rounded-md ${style.bg}`}>
                    {style.text}
                </div>
            </div>
            <div className="mt-6 flex justify-between text-sm font-bold">
                <span>LAT: {service.latency}ms</span>
                <span>ERR: {service.error_rate}%</span>
            </div>
        </div>
    );
}
