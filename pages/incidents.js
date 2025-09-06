import React, { useState, useEffect } from "react";
import { Incident } from "@/entities/Incident";
import { Skeleton } from "@/components/ui/skeleton";
import IncidentItem from "@/components/incidents/IncidentItem";

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchIncidents = async () => {
            setIsLoading(true);
            const incidentData = await Incident.list("-created_date");
            setIncidents(incidentData);
            setIsLoading(false);
        };
        fetchIncidents();
    }, []);

    return (
        <div className="space-y-4 lg:space-y-6">
            {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="bg-white border-4 border-black rounded-lg p-3 lg:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 min-h-20 lg:h-24">
                        <div className="flex-1 space-y-2">
                           <Skeleton className="h-5 lg:h-6 w-3/4 bg-gray-300" />
                           <Skeleton className="h-3 lg:h-4 w-1/2 bg-gray-300" />
                        </div>
                         <Skeleton className="h-8 lg:h-10 w-20 lg:w-28 bg-gray-300 self-start sm:self-center" />
                    </div>
                  ))
                : incidents.map(incident => (
                    <IncidentItem key={incident.id} incident={incident} />
                ))
            }
        </div>
    );
}
