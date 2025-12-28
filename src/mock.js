export const companyInfo = {
  name: 'KÂRAGreen',
  tagline: 'Turning Waste into Dependable Energy',
  email: 'info@karagreen.com',
  phone: '+91 98765 XXXXX',
  address: 'Industrial Area, India',
};

export const heroContent = {
  headline: 'Transforming Agricultural Waste into Clean Industrial Fuel',
  subheadline: 'Sustainable biomass pellets for India\'s energy transition',
  description: 'We convert agricultural residue into high-quality biomass pellets, providing industries with a reliable, cleaner alternative to coal.',
};

export const impactPoints = [
  {
    id: 1,
    title: 'Waste Reduction',
    description: 'Converting agricultural residue into valuable energy resource',
    value: '10,000+ tonnes',
  },
  {
    id: 2,
    title: 'Lower Emissions',
    description: 'Significant reduction in carbon footprint compared to coal',
    value: '40-50% reduction',
  },
  {
    id: 3,
    title: 'Industrial Energy',
    description: 'Dependable fuel substitution for thermal applications',
    value: '4,000+ GCV',
  },
];

export const aboutContent = {
  mission: 'To transform agricultural waste into dependable energy solutions, supporting India\'s industrial sector in its transition toward sustainable fuel alternatives.',
  vision: 'To be a trusted partner in India\'s journey away from coal dependency, enabling industries to adopt cleaner energy without compromising operational efficiency.',
  values: [
    {
      id: 1,
      title: 'Sustainability',
      description: 'Committed to circular economy principles and environmental stewardship',
    },
    {
      id: 2,
      title: 'Reliability',
      description: 'Consistent quality and supply to meet industrial requirements',
    },
    {
      id: 3,
      title: 'Scalability',
      description: 'Building infrastructure for long-term, large-scale operations',
    },
  ],
};

export const biomassPelletsInfo = {
  definition: 'Biomass pellets are cylindrical fuel units made from compressed agricultural residue such as rice husk, groundnut shells, cotton stalks, and other crop waste. They are processed to uniform size and density, making them suitable for industrial combustion.',
  benefits: [
    'Higher energy density compared to raw biomass',
    'Easier to store and transport',
    'Consistent burning characteristics',
    'Lower moisture content (8-12%)',
    'Reduced handling costs',
    'Compatible with existing boiler systems',
  ],
  specifications: [
    { parameter: 'Gross Calorific Value (GCV)', value: '3,800 - 4,200 kcal/kg' },
    { parameter: 'Moisture Content', value: '8 - 12%' },
    { parameter: 'Ash Content', value: '2 - 8%' },
    { parameter: 'Diameter', value: '6 - 8 mm' },
    { parameter: 'Length', value: '10 - 30 mm' },
    { parameter: 'Bulk Density', value: '550 - 650 kg/m³' },
  ],
};

export const processSteps = [
  {
    id: 1,
    title: 'Agricultural Residue Sourcing',
    description: 'Collection of crop residue from farming regions, focusing on consistent quality raw material.',
  },
  {
    id: 2,
    title: 'Drying & Size Reduction',
    description: 'Moisture removal and mechanical grinding to achieve uniform particle size for pelletization.',
  },
  {
    id: 3,
    title: 'Pelletization',
    description: 'High-pressure compression through dies to form dense, uniform pellets without additives.',
  },
  {
    id: 4,
    title: 'Cooling & Screening',
    description: 'Controlled cooling process and removal of fines to ensure quality consistency.',
  },
  {
    id: 5,
    title: 'Storage & Dispatch',
    description: 'Protected storage and systematic dispatch to maintain pellet integrity during transport.',
  },
];

export const applications = [
  {
    id: 1,
    title: 'Industrial Boilers',
    description: 'Steam generation for manufacturing processes, textile units, and food processing facilities.',
    benefit: 'Direct coal substitution with minimal modification',
  },
  {
    id: 2,
    title: 'Thermal Power Plants',
    description: 'Co-firing with coal to reduce emissions and meet renewable energy obligations.',
    benefit: 'Compliance with environmental norms',
  },
  {
    id: 3,
    title: 'Cement & Steel Plants',
    description: 'Process heat generation in energy-intensive manufacturing operations.',
    benefit: 'Significant reduction in fossil fuel consumption',
  },
  {
    id: 4,
    title: 'Process Heat Industries',
    description: 'Thermal energy for drying, heating, and other industrial applications.',
    benefit: 'Cost-effective and cleaner fuel alternative',
  },
];

export const whyKaragreen = [
  {
    id: 1,
    title: 'Quality Consistency',
    description: 'Systematic quality control at every stage ensures uniform pellet characteristics suitable for industrial operations.',
  },
  {
    id: 2,
    title: 'Industrial Understanding',
    description: 'We understand the operational requirements and fuel specifications needed for continuous industrial processes.',
  },
  {
    id: 3,
    title: 'Scalable Production',
    description: 'Infrastructure designed for growth, capable of meeting increasing demand while maintaining quality standards.',
  },
  {
    id: 4,
    title: 'Policy Alignment',
    description: 'Our operations support India\'s clean energy policies and industrial decarbonization objectives.',
  },
  {
    id: 5,
    title: 'Responsible Sourcing',
    description: 'Ethical procurement practices that create value in rural areas while ensuring sustainable supply chains.',
  },
];

export const sustainabilityImpact = [
  {
    id: 1,
    title: 'Reduction in Open-Field Burning',
    description: 'Agricultural residue is utilized productively instead of being burned in fields, reducing air pollution and particulate matter.',
  },
  {
    id: 2,
    title: 'Carbon Emission Avoidance',
    description: 'Biomass pellets are carbon-neutral, as the CO2 released during combustion is part of the natural carbon cycle.',
  },
  {
    id: 3,
    title: 'Circular Economy',
    description: 'Converts waste into resource, creating a sustainable loop that adds value at every stage.',
  },
  {
    id: 4,
    title: 'Rural Value Creation',
    description: 'Provides additional income to farming communities through residue collection and supply networks.',
  },
];

export const inquiryTypes = [
  'Bulk Purchase',
  'Long-term Supply Contract',
  'Trial Order',
  'Technical Specifications',
  'Partnership Opportunity',
  'General Inquiry',
];

export const mockInquiries = [];

export const saveInquiry = (inquiry) => {
  const timestamp = new Date().toISOString();
  const newInquiry = { ...inquiry, id: Date.now(), timestamp };
  mockInquiries.push(newInquiry);
  
  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem('karagreen_inquiries') || '[]');
  existing.push(newInquiry);
  localStorage.setItem('karagreen_inquiries', JSON.stringify(existing));
  
  return newInquiry;
};