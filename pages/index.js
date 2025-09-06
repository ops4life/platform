import React, { useState, useEffect } from "react";
import { Service } from "@/entities/Service";
import { Skeleton } from "@/components/ui/skeleton";
import ServiceStatusCard from "@/components/dashboard/ServiceStatusCard";

export default function Dashboard() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
            const serviceData = await Service.list("-created_date");
            setServices(serviceData);
            setIsLoading(false);
        };
        fetchServices();
    }, []);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="bg-white border-4 border-black rounded-lg p-4 h-48">
                              <Skeleton className="h-6 w-3/4 mb-4 bg-gray-300" />
                              <Skeleton className="h-10 w-24 mb-6 bg-gray-300" />
                              <div className="flex justify-between">
                                  <Skeleton className="h-4 w-1/3 bg-gray-300" />
                                  <Skeleton className="h-4 w-1/3 bg-gray-300" />
                              </div>
                          </div>
                      ))
                    : services.map(service => (
                        <ServiceStatusCard key={service.id} service={service} />
                    ))
                }
            </div>
        </div>
    );
}
