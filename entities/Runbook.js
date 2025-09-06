// Mock Runbook entity for demo purposes
export class Runbook {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.content = data.content;
    this.created_date = data.created_date;
  }

  static async list(sortBy = "title") {
    // Mock data for demo
    const mockRunbooks = [
      {
        id: 1,
        title: "Database Connection Issues",
        content: `# Database Connection Issues

## Overview
This runbook covers troubleshooting steps for database connection problems.

## Symptoms
- High connection timeout errors
- Slow query responses
- Connection pool exhaustion

## Immediate Actions

### 1. Check Database Status
\`\`\`bash
# Check database connectivity
pg_isready -h your-db-host -p 5432

# Check active connections
psql -h your-db-host -c "SELECT count(*) FROM pg_stat_activity;"
\`\`\`

### 2. Review Connection Pool Settings
- Check max_connections in postgresql.conf
- Verify application connection pool configuration
- Monitor connection usage patterns

### 3. Check System Resources
\`\`\`bash
# Check memory usage
free -h

# Check disk space
df -h

# Check CPU usage
top -p \$(pgrep postgres)
\`\`\`

## Resolution Steps

1. **Scale Connection Pool**: Increase max_connections if needed
2. **Optimize Queries**: Identify and optimize slow queries
3. **Add Read Replicas**: Distribute read load
4. **Monitor and Alert**: Set up proper monitoring

## Prevention
- Regular connection pool monitoring
- Query performance analysis
- Capacity planning reviews`,
        created_date: new Date('2024-01-15')
      },
      {
        id: 2,
        title: "API Gateway Rate Limiting",
        content: `# API Gateway Rate Limiting

## Overview
Handling rate limiting issues in the API Gateway service.

## Symptoms
- 429 Too Many Requests errors
- API response timeouts
- Client application failures

## Immediate Actions

### 1. Check Rate Limit Configuration
\`\`\`bash
# Check current rate limits
curl -H "Authorization: Bearer \$TOKEN" \\
  https://api-gateway.company.com/rate-limits

# Check current usage
curl -H "Authorization: Bearer \$TOKEN" \\
  https://api-gateway.company.com/usage
\`\`\`

### 2. Identify High-Traffic Sources
- Review access logs for unusual patterns
- Check for potential DDoS attacks
- Identify misconfigured clients

### 3. Temporary Mitigation
- Increase rate limits temporarily
- Implement circuit breakers
- Add request queuing

## Resolution Steps

1. **Adjust Rate Limits**: Increase limits for legitimate traffic
2. **Implement Caching**: Reduce API calls with proper caching
3. **Client Education**: Guide clients on proper usage patterns
4. **Monitoring**: Set up alerts for rate limit breaches

## Prevention
- Regular rate limit reviews
- Client usage monitoring
- Gradual limit increases`,
        created_date: new Date('2024-01-12')
      },
      {
        id: 3,
        title: "CDN Cache Issues",
        content: `# CDN Cache Issues

## Overview
Troubleshooting CDN cache problems and performance issues.

## Symptoms
- High cache miss rates
- Slow content delivery
- Inconsistent content across regions

## Immediate Actions

### 1. Check Cache Status
\`\`\`bash
# Check cache hit ratio
curl -H "Authorization: Bearer \$TOKEN" \\
  https://cdn-api.company.com/stats

# Purge specific content
curl -X POST -H "Authorization: Bearer \$TOKEN" \\
  https://cdn-api.company.com/purge \\
  -d '{"urls": ["https://cdn.company.com/asset.js"]}'
\`\`\`

### 2. Review Cache Headers
- Check Cache-Control headers
- Verify ETag configuration
- Review TTL settings

### 3. Monitor Performance
- Check response times by region
- Review bandwidth usage
- Analyze error rates

## Resolution Steps

1. **Purge Cache**: Clear problematic content
2. **Adjust TTL**: Optimize cache duration
3. **Fix Headers**: Ensure proper cache headers
4. **Scale Resources**: Add more edge locations if needed

## Prevention
- Regular cache performance reviews
- Proper cache header implementation
- Content versioning strategies`,
        created_date: new Date('2024-01-10')
      },
      {
        id: 4,
        title: "Payment Gateway Failures",
        content: `# Payment Gateway Failures

## Overview
Handling payment processing failures and transaction issues.

## Symptoms
- Payment processing timeouts
- Transaction failures
- Customer payment errors

## Immediate Actions

### 1. Check Gateway Status
\`\`\`bash
# Check payment gateway health
curl -H "Authorization: Bearer \$TOKEN" \\
  https://payments-api.company.com/health

# Check recent transactions
curl -H "Authorization: Bearer \$TOKEN" \\
  https://payments-api.company.com/transactions?status=failed
\`\`\`

### 2. Review Error Logs
- Check payment gateway logs
- Review application error logs
- Analyze transaction patterns

### 3. Verify Configuration
- Check API credentials
- Verify webhook endpoints
- Review retry policies

## Resolution Steps

1. **Retry Failed Transactions**: Implement proper retry logic
2. **Fix Configuration**: Update API settings if needed
3. **Contact Provider**: Escalate to payment gateway support
4. **Implement Fallbacks**: Add alternative payment methods

## Prevention
- Regular health checks
- Proper error handling
- Transaction monitoring
- Backup payment methods`,
        created_date: new Date('2024-01-08')
      }
    ];

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));

    return mockRunbooks.map(runbook => new Runbook(runbook));
  }
}
