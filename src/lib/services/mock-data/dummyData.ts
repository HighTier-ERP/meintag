export const COMPANY_DATA = {
  contact_phone: '123-123-1234',
  company_name: 'Consortium Networks',
  company_description: 'We make things more secure',
  employees_count: '10-50',
  company_logo_url:
    'https://consortium.net/wp-content/uploads/2019/02/Consortium-Networks-logo.png',
  location: 'America',
}

export const CHART_DATA = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 6 },
]

export const MTM_DASH_DATA = [{ amount: 225000 }, { amount: 75000 }, { amount: 540000 }]

export const MTM_THREAT_DATA = [
  {
    category: 'Theft/Fraud',
    threats: 1,
    riskScore: 25,
    projectedLoss: { amount: '$2-5K', type: 'low' },
  },
  {
    category: 'Data Loss/Breach',
    threats: 48,
    riskScore: 55,
    projectedLoss: { amount: '$50-100K', type: 'moderate' },
  },
  {
    category: 'Misuse/Human Error',
    threats: 10,
    riskScore: 85,
    projectedLoss: { amount: '$1-2M', type: 'high' },
  },
  {
    category: 'Business Disruption',
    threats: 12,
    riskScore: 20,
    projectedLoss: { amount: '$2-5M', type: 'low' },
  },
  {
    category: 'Malware',
    threats: 20,
    riskScore: 1,
    projectedLoss: { amount: '$5-10M', type: 'moderate' },
  },
  {
    category: 'Hacking',
    threats: 71,
    riskScore: 15,
    projectedLoss: { amount: '$0-1K', type: 'low' },
  },
  {
    category: 'Third Party Risk',
    threats: 8,
    riskScore: 80,
    projectedLoss: { amount: '$1-2K', type: 'high' },
  },
  {
    category: 'Social Engineering',
    threats: 3,
    riskScore: 50,
    projectedLoss: { amount: '$5-10K', type: 'moderate' },
  },
]
export const MTM_CONTROLS_DATA = [
  {
    category: '3rd Party/Supply Chain Risk Management',
    controls: 1,
    avgMaturity: 2.9,
    spend: '$120K',
  },
  {
    category: 'Asset Management',
    controls: 34,
    avgMaturity: 4.5,
    spend: '$5K',
  },
  {
    category: 'Backup Management',
    controls: 10,
    avgMaturity: 3.5,
    spend: '$20K',
  },
  { category: 'Change Control', controls: 20, avgMaturity: 4.0, spend: '$1K' },
  {
    category: 'Cybersecurity Insurance',
    controls: 48,
    avgMaturity: 4.0,
    spend: '$120K',
  },
  {
    category: 'Database Audit Monitoring',
    controls: 40,
    avgMaturity: 3.7,
    spend: '$50K',
  },
  { category: 'DMARC/DKIM', controls: 48, avgMaturity: 4.8, spend: '$80K' },
  {
    category: 'EDR (Endpoint Detection & Response)',
    controls: 12,
    avgMaturity: 1.0,
    spend: '$1K',
  },
  { category: 'Honeypot', controls: 22, avgMaturity: 5.0, spend: '$20K' },
  {
    category: 'Identity Protection',
    controls: 12,
    avgMaturity: 3.1,
    spend: '$10K',
  },
  {
    category: 'Risk Assessment',
    controls: 0,
    avgMaturity: 0.0,
    spend: '$0',
    disabled: true,
  },
  {
    category: 'SDLC (Software Development Lifecycle)',
    controls: 0,
    avgMaturity: 0.0,
    spend: '$0',
    disabled: true,
  },
]
export const MTM_NIST_DATA = [
  {
    id: 'ID.AM',
    category: 'Asset Management',
    coverage: 80,
    avgMaturity: 3.0,
    riskScore: 10,
  },
  {
    id: 'ID.BE',
    category: 'Business Environment',
    coverage: 55,
    avgMaturity: 2.0,
    riskScore: 55,
  },
  {
    id: 'ID.GV',
    category: 'Governance',
    coverage: 80,
    avgMaturity: 2.9,
    riskScore: 17,
  },
  {
    id: 'ID.RA',
    category: 'Risk Assessment',
    coverage: 45,
    avgMaturity: 1.5,
    riskScore: 90,
  },
  {
    id: 'PR.AC',
    category: 'Identity Management and Access Control',
    coverage: 90,
    avgMaturity: 2.2,
    riskScore: 22,
  },
  {
    id: 'PR.AT',
    category: 'Awareness and Training',
    coverage: 20,
    avgMaturity: 4.0,
    riskScore: 94,
  },
]
