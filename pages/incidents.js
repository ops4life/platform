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
        <div className="space-y-6">
            {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="bg-white border-4 border-black rounded-lg p-4 flex justify-between items-center h-24">
                        <div className="w-1/2 space-y-2">
                           <Skeleton className="h-6 w-3/4 bg-gray-300" />
                           <Skeleton className="h-4 w-1/2 bg-gray-300" />
                        </div>
                         <Skeleton className="h-10 w-28 bg-gray-300" />
                    </div>
                  ))
                : incidents.map(incident => (
                    <IncidentItem key={incident.id} incident={incident} />
                ))
            }
        </div>
    );
}
