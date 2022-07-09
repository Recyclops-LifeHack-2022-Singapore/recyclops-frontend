export interface Resources {
  id: number;
  name: string;
  link: string;
}

export const resources: Resources[] = [
  {
    id: 1,
    name: 'Learn More about Recycling!',
    link: 'https://www.cgs.gov.sg/recycleright/how-to-recycle-right',
  },
  {
    id: 2,
    name: 'Electronic waste disposal locations',
    link: 'https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste',
  },
  {
    id: 3,
    name: 'Why is it important to dispose batteries properly',
    link: 'https://gsiwaste.com/battery-recycling-is-important-for-environmental-health/#:~:text=While%20throwing%20away%20batteries%20may,cadmium%2C%20lithium%2C%20and%20lead.',
  },
  {
    id: 4,
    name: 'Plastics and the danger to the ocean',
    link: 'https://www.biologicaldiversity.org/campaigns/ocean_plastics/#:~:text=Plastics%20pollution%20has%20a%20direct,or%20getting%20entangled%20in%20it.',
  },
  {
    id: 5,
    name: 'Donate to clean up the ocean!',
    link: 'https://teamseas.org/',
  },
];
