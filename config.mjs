// What to track. Edit this file to add Reclub clubs or change the areas.

export const DAYS_AHEAD = 7;
export const TIMEZONE = 'Asia/Singapore';

// Areas are matched first by name in the venue name/address, then by
// postal sector, then by coordinates. The first match wins.
export const AREAS = [
  {
    name: 'Jalan Kayu',
    // Not 'sports arina' alone: TSA also runs halls at Expo (East).
    keywords: ['jalan kayu', 'tsa jalan', 'seletar'],
    postalSectors: [],
    // Jalan Kayu / Seletar Hills / Seletar Aerospace.
    circle: { lat: 1.398, lng: 103.872, km: 3 },
  },
  {
    name: 'East',
    keywords: [
      'bedok', 'tampines', 'pasir ris', 'changi', 'simei', 'tanah merah', 'expo',
      'loyang', 'east coast', 'marine parade', 'siglap', 'katong', 'joo chiat',
      'kembangan', 'eunos', 'chai chee', 'kaki bukit', 'ubi', 'paya lebar', 'upper east',
      'aljunied',
    ],
    // 42-45 Katong/Marine Parade, 46-48 Bedok/Upper East Coast,
    // 49-50 + 81 Changi/Loyang, 51-52 Tampines/Pasir Ris.
    postalSectors: ['42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '81'],
    // East of Paya Lebar, south of Punggol/Sengkang.
    box: { minLng: 103.895, maxLat: 1.395, minLat: 1.28 },
  },
];

export const PLAYTOMIC = {
  // Tried in order; the first that answers the club search is used.
  // api.playtomic.io had no DNS record and playtomic.com/api answered 403
  // from GitHub's runners (Oct 2026).
  bases: ['https://playtomic.io/api/v1', 'https://api.playtomic.io/v1', 'https://playtomic.com/api/v1'],
  sportId: 'PICKLEBALL',
  // Centre of Singapore; 30 km covers the whole island.
  coordinate: { lat: 1.3521, lng: 103.8198 },
  radiusMeters: 30000,
};

// Reclub has no public search API, so the tracker reads the meets listed on
// these club pages (reclub.co/clubs/@<slug>) and keeps the ones in the areas
// above. Add clubs you follow here.
export const RECLUB = {
  base: 'https://reclub.co',
  clubs: [
    'east-coast-plan',
    'pickleball-players-sg',
  ],
};
