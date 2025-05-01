export function getSubdomain(req) {
  const host = req?.headers?.host || '';

  // Strip port if running on localhost
  const cleanHost = host.split(':')[0];

  const domainParts = cleanHost.split('.');

  if (domainParts.length < 3) {
    // No subdomain (e.g. thescottwedding.co.uk or thescottwedding.local)
    return null;
  }

  // Return the first part (e.g. "evening" from evening.thescottwedding.co.uk)
  return domainParts[0];
}
