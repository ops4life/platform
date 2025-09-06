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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, i) => (
                          <div key={i} className="bg-white border-4 border-black rounded-lg p-3 lg:p-4 h-40 lg:h-48">
                              <Skeleton className="h-5 lg:h-6 w-3/4 mb-3 lg:mb-4 bg-gray-300" />
                              <Skeleton className="h-8 lg:h-10 w-20 lg:w-24 mb-4 lg:mb-6 bg-gray-300" />
                              <div className="flex justify-between">
                                  <Skeleton className="h-3 lg:h-4 w-1/3 bg-gray-300" />
                                  <Skeleton className="h-3 lg:h-4 w-1/3 bg-gray-300" />
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
