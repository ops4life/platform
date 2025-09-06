// Mock Incident entity for demo purposes
export class Incident {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.service_affected = data.service_affected;
    this.status = data.status;
    this.severity = data.severity;
    this.created_date = data.created_date;
  }

  static async list(sortBy = "-created_date") {
    // Mock data for demo
    const mockIncidents = [
      {
        id: 1,
        title: "High CPU usage on notification service",
        service_affected: "Notification Service",
        status: "investigating",
        severity: "sev1",
        created_date: new Date('2024-01-25T10:30:00')
      },
      {
        id: 2,
        title: "Database connection timeout",
        service_affected: "Database",
        status: "resolved",
        severity: "sev2",
        created_date: new Date('2024-01-24T15:45:00')
      },
      {
        id: 3,
        title: "CDN cache miss rate increased",
        service_affected: "CDN",
        status: "monitoring",
        severity: "sev3",
        created_date: new Date('2024-01-23T09:15:00')
      },
      {
        id: 4,
        title: "API Gateway rate limiting issues",
        service_affected: "API Gateway",
        status: "identified",
        severity: "sev2",
        created_date: new Date('2024-01-22T14:20:00')
      },
      {
        id: 5,
        title: "Payment processing delays",
        service_affected: "Payment Gateway",
        status: "resolved",
        severity: "sev1",
        created_date: new Date('2024-01-21T11:30:00')
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    return mockIncidents.map(incident => new Incident(incident));
  }
}
