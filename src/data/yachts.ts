export interface YachtSpec {
  label: string;
  value: string;
}

export interface YachtCategory {
  name: string;
  specs: YachtSpec[];
}

export interface Yacht {
  id: string;
  name: string;
  tagline: string;
  quickSpecs: YachtSpec[];
  fullSpecs: YachtCategory[];
}

export const yachts: Yacht[] = [
  {
    id: 'ocean-eclipse',
    name: 'OCEAN ECLIPSE',
    tagline: 'REFINED CRUISING FOR THE DISCERNING FEW',
    quickSpecs: [
      { label: 'LENGTH', value: '28M' },
      { label: 'BEAM', value: '6.8M' },
      { label: 'CRUISING SPEED', value: '22 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 12' },
      { label: 'CABINS', value: '4 EN-SUITE' },
      { label: 'CREW', value: '5' }
    ],
    fullSpecs: [
      {
        name: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '28.0m' },
          { label: 'Beam', value: '6.8m' },
          { label: 'Draft', value: '1.9m' },
          { label: 'Displacement', value: '95 tonnes' }
        ]
      },
      {
        name: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '22 knots' },
          { label: 'Maximum Speed', value: '28 knots' },
          { label: 'Range', value: '1,800 nm' },
          { label: 'Fuel Capacity', value: '8,500L' }
        ]
      },
      {
        name: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'Aluminium' },
          { label: 'Superstructure', value: 'Carbon Fiber' },
          { label: 'Builder', value: 'YORCH Shipyards' },
          { label: 'Designer', value: 'Naval Architects Ltd' }
        ]
      },
      {
        name: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Cabins', value: '4 en-suite' },
          { label: 'Crew Cabins', value: '5' },
          { label: 'Guest Capacity', value: '12' },
          { label: 'Crew Capacity', value: '5' }
        ]
      },
      {
        name: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Integrated GPS' },
          { label: 'Radar', value: 'X-Band 4kW' },
          { label: 'Safety Equipment', value: 'SOLAS Compliant' },
          { label: 'Stabilizers', value: 'Active Fin' }
        ]
      }
    ]
  },
  {
    id: 'black-sovereign',
    name: 'BLACK SOVEREIGN',
    tagline: 'POWER AND PRECISION REDEFINED',
    quickSpecs: [
      { label: 'LENGTH', value: '32M' },
      { label: 'BEAM', value: '7.4M' },
      { label: 'TOP SPEED', value: '28 KNOTS' },
      { label: 'GUESTS', value: 'UP TO 10' },
      { label: 'CABINS', value: '5 EN-SUITE' },
      { label: 'CREW', value: '6' }
    ],
    fullSpecs: [
      {
        name: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '32.0m' },
          { label: 'Beam', value: '7.4m' },
          { label: 'Draft', value: '2.1m' },
          { label: 'Displacement', value: '115 tonnes' }
        ]
      },
      {
        name: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '24 knots' },
          { label: 'Maximum Speed', value: '28 knots' },
          { label: 'Range', value: '2,200 nm' },
          { label: 'Fuel Capacity', value: '12,000L' }
        ]
      },
      {
        name: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'Steel' },
          { label: 'Superstructure', value: 'Aluminium' },
          { label: 'Builder', value: 'YORCH Shipyards' },
          { label: 'Designer', value: 'Naval Architects Ltd' }
        ]
      },
      {
        name: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Cabins', value: '5 en-suite' },
          { label: 'Crew Cabins', value: '6' },
          { label: 'Guest Capacity', value: '10' },
          { label: 'Crew Capacity', value: '6' }
        ]
      },
      {
        name: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Integrated GPS' },
          { label: 'Radar', value: 'X-Band 6kW' },
          { label: 'Safety Equipment', value: 'SOLAS Compliant' },
          { label: 'Stabilizers', value: 'Active Fin' }
        ]
      }
    ]
  },
  {
    id: 'azure-horizon',
    name: 'AZURE HORIZON',
    tagline: 'WHERE THE SEA MEETS THE SKY',
    quickSpecs: [
      { label: 'LENGTH', value: '25M' },
      { label: 'BEAM', value: '6.2M' },
      { label: 'RANGE', value: '4100NM' },
      { label: 'GUESTS', value: '8+12 CREW' },
      { label: 'DECK', value: 'SUN DECK WITH JACUZZI' },
      { label: 'BUILD', value: '2021' }
    ],
    fullSpecs: [
      {
        name: 'DIMENSIONS',
        specs: [
          { label: 'Length Overall', value: '25.0m' },
          { label: 'Beam', value: '6.2m' },
          { label: 'Draft', value: '1.7m' },
          { label: 'Displacement', value: '82 tonnes' }
        ]
      },
      {
        name: 'PERFORMANCE',
        specs: [
          { label: 'Cruising Speed', value: '18 knots' },
          { label: 'Maximum Speed', value: '22 knots' },
          { label: 'Range', value: '4,100 nm' },
          { label: 'Fuel Capacity', value: '7,200L' }
        ]
      },
      {
        name: 'CONSTRUCTION',
        specs: [
          { label: 'Hull', value: 'Fiberglass' },
          { label: 'Superstructure', value: 'Carbon Fiber' },
          { label: 'Builder', value: 'YORCH Shipyards' },
          { label: 'Designer', value: 'Naval Architects Ltd' }
        ]
      },
      {
        name: 'ONBOARD COMFORT',
        specs: [
          { label: 'Guest Cabins', value: '4 en-suite' },
          { label: 'Crew Cabins', value: '4' },
          { label: 'Guest Capacity', value: '8' },
          { label: 'Crew Capacity', value: '4' }
        ]
      },
      {
        name: 'NAVIGATION & SAFETY',
        specs: [
          { label: 'Navigation System', value: 'Integrated GPS' },
          { label: 'Radar', value: 'X-Band 4kW' },
          { label: 'Safety Equipment', value: 'SOLAS Compliant' },
          { label: 'Stabilizers', value: 'Active Fin' }
        ]
      }
    ]
  }
];
