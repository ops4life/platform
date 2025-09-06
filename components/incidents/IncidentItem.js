import React from 'react';

const severityStyles = {
    sev0: { bg: 'bg-pink-500', text: 'SEV0' },
    sev1: { bg: 'bg-orange-500', text: 'SEV1' },
    sev2: { bg: 'bg-yellow-400', text: 'SEV2' },
    sev3: { bg: 'bg-lime-400', text: 'SEV3' },
};

const statusStyles = {
    investigating: 'text-blue-600',
    identified: 'text-purple-600',
    monitoring: 'text-teal-600',
    resolved: 'text-green-700',
};

export default function IncidentItem({ incident }) {
    const severity = severityStyles[incident.severity] || severityStyles.sev2;
    const status = statusStyles[incident.status] || 'text-gray-600';

    return (
        <div className="bg-white border-4 border-black rounded-lg p-3 lg:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 transition-all duration-200 hover:shadow-[6px_6px_0px_#000000]">
            <div className="flex-1 min-w-0">
                <h3 className="text-lg lg:text-2xl font-bold truncate">{incident.title}</h3>
                <p className="text-sm lg:text-md text-gray-700 truncate">Service: <span className="font-bold">{incident.service_affected}</span></p>
                <p className={`text-sm lg:text-md font-bold uppercase ${status} truncate`}>Status: {incident.status}</p>
            </div>
            <div className={`px-3 lg:px-4 py-2 text-lg lg:text-xl font-bold border-4 border-black rounded-md ${severity.bg} self-start sm:self-center flex-shrink-0`}>
                {severity.text}
            </div>
        </div>
    );
}
