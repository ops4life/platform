import React from 'react';

const statusStyles = {
  operational: { bg: 'bg-green-500', text: 'Operational' },
  degraded: { bg: 'bg-yellow-400', text: 'Degraded' },
  outage: { bg: 'bg-red-500', text: 'Outage' },
  maintenance: { bg: 'bg-blue-500', text: 'Maintenance' },
};

export default function ServiceStatusCard({ service }) {
  const status = statusStyles[service.status] || statusStyles.operational;

  return (
    <div className="bg-white border-4 border-black rounded-lg p-3 lg:p-4 h-40 lg:h-48 flex flex-col justify-between transition-all duration-200 hover:shadow-[6px_6px_0px_#000000]">
      <div>
        <h3 className="text-lg lg:text-xl font-bold mb-2 truncate">{service.name}</h3>
        <div className={`inline-block px-2 lg:px-3 py-1 text-xs lg:text-sm font-bold border-2 border-black rounded-md ${status.bg} text-white`}>
          {status.text}
        </div>
      </div>

      <div className="space-y-1 lg:space-y-2">
        <div className="flex justify-between text-xs lg:text-sm">
          <span className="font-bold">Uptime:</span>
          <span className="truncate ml-2">{service.uptime}</span>
        </div>
        <div className="flex justify-between text-xs lg:text-sm">
          <span className="font-bold">Response:</span>
          <span className="truncate ml-2">{service.responseTime}</span>
        </div>
        <div className="flex justify-between text-xs lg:text-sm">
          <span className="font-bold">Last Incident:</span>
          <span className="text-xs truncate ml-2">{service.lastIncident}</span>
        </div>
      </div>
    </div>
  );
}
