// Mock Service entity for demo purposes
export class Service {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.status = data.status;
    this.uptime = data.uptime;
    this.responseTime = data.responseTime;
    this.lastIncident = data.lastIncident;
    this.created_date = data.created_date;
  }

  static async list(sortBy = "-created_date") {
    // Mock data for demo
    const mockServices = [
      {
        id: 1,
        name: "API Gateway",
        status: "operational",
        uptime: "99.9%",
        responseTime: "120ms",
        lastIncident: "2 days ago",
        created_date: new Date('2024-01-15')
      },
      {
        id: 2,
        name: "Database",
        status: "operational",
        uptime: "99.8%",
        responseTime: "45ms",
        lastIncident: "1 week ago",
        created_date: new Date('2024-01-10')
      },
      {
        id: 3,
        name: "CDN",
        status: "degraded",
        uptime: "98.5%",
        responseTime: "200ms",
        lastIncident: "3 hours ago",
        created_date: new Date('2024-01-20')
      },
      {
        id: 4,
        name: "Auth Service",
        status: "operational",
        uptime: "99.7%",
        responseTime: "80ms",
        lastIncident: "5 days ago",
        created_date: new Date('2024-01-12')
      },
      {
        id: 5,
        name: "Payment Gateway",
        status: "operational",
        uptime: "99.9%",
        responseTime: "150ms",
        lastIncident: "1 month ago",
        created_date: new Date('2024-01-05')
      },
      {
        id: 6,
        name: "Notification Service",
        status: "outage",
        uptime: "95.2%",
        responseTime: "500ms",
        lastIncident: "1 hour ago",
        created_date: new Date('2024-01-18')
      },
      {
        id: 7,
        name: "File Storage",
        status: "operational",
        uptime: "99.6%",
        responseTime: "90ms",
        lastIncident: "2 weeks ago",
        created_date: new Date('2024-01-08')
      },
      {
        id: 8,
        name: "Analytics",
        status: "operational",
        uptime: "99.4%",
        responseTime: "110ms",
        lastIncident: "3 days ago",
        created_date: new Date('2024-01-14')
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return mockServices.map(service => new Service(service));
  }
}
