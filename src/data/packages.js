export const tourPackages = [
  {
    id: 'kenya-east-africa',
    slug: 'kenya-east-africa',
    title: 'Kenya - East Africa',
    tagline: 'I Packed, I Flew, I Lived It',
    location: 'Nairobi • Maasai Mara • Nakuru • Amboseli',
    duration: '8N / 9D',
    priceFrom: 214999,
    priceOriginal: 249599,
    image:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Safari game drives', 'Maasai Mara wildlife', 'Lake Nakuru', 'Mount Kilimanjaro views'],
    pickupDrop: 'Pickup from Kolkata and Drop to Kolkata',
    inclusions: [
      'Round-trip economy airfare (CCU – NBO – CCU)',
      'Airport arrival & departure assistance',
      'Hotel accommodations',
      'All transfers in air-conditioned coach',
      'Game drives in 4×4 Land Cruiser',
      'Daily breakfast, lunch, and dinner',
      'All mentioned sightseeing and activities',
      'Professional driver/guide',
      'All national park entry fees',
      'Visa charges',
      'Travel insurance (up to 70 years of age)',
    ],
    exclusions: ['Tips', 'Personal expenses', 'Additional activities not mentioned'],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Nairobi',
        description:
          'Arrive at Jomo Kenyatta International Airport. Meet and greet by our representative. Transfer to your hotel in Nairobi. Evening at leisure to relax after your journey.',
      },
      {
        day: 2,
        title: 'Maasai Mara Game Drive',
        description:
          'After breakfast, depart for Maasai Mara National Reserve. Arrive and check in to your lodge. Afternoon game drive to spot the Big Five and other wildlife. Return to lodge for dinner.',
      },
      {
        day: 3,
        title: 'Maasai Mara Extended Drive',
        description:
          'Full day game drive in Maasai Mara with packed lunch. Explore the vast savannah and witness the incredible wildlife. Optional visit to a Maasai village. Return to lodge for dinner.',
      },
      {
        day: 4,
        title: 'Maasai Mara - Nakuru',
        description:
          'Morning game drive in Maasai Mara. After breakfast, drive to Lake Nakuru. Check in to your hotel. Evening at leisure to enjoy the beautiful surroundings.',
      },
      {
        day: 5,
        title: 'Nakuru Park – Lake Naivasha',
        description:
          'Morning game drive at Lake Nakuru National Park, famous for flamingos and rhinos. After lunch, proceed to Lake Naivasha. Optional boat ride to see hippos and birds. Overnight at hotel.',
      },
      {
        day: 6,
        title: 'Lake Naivasha – Amboseli',
        description:
          'After breakfast, drive to Amboseli National Park with stunning views of Mount Kilimanjaro. Arrive and check in. Afternoon game drive. Dinner and overnight at lodge.',
      },
      {
        day: 7,
        title: 'Amboseli Extensive',
        description:
          'Full day exploring Amboseli with morning and afternoon game drives. Witness large herds of elephants against the backdrop of Kilimanjaro. Packed lunch during the day. Return to lodge.',
      },
      {
        day: 8,
        title: 'Amboseli – Nairobi',
        description:
          'Early morning game drive for last wildlife sightings. After breakfast, drive back to Nairobi. Check in to hotel. Evening at leisure for shopping or relaxation.',
      },
      {
        day: 9,
        title: 'Return Back to India',
        description:
          'After breakfast, transfer to the airport for your flight back to Kolkata. Depart with wonderful memories of your Kenyan safari adventure.',
      },
    ],
    tripDates: [
      { date: 'Feb 15-23, 2026', availability: 'Limited slots' },
      { date: 'Mar 10-18, 2026', availability: 'Available' },
      { date: 'Apr 5-13, 2026', availability: 'Available' },
    ],
    hotelDetails: 'Premium 3-4 star hotels and safari lodges with modern amenities',
    notes: [
      'Passport must be valid for at least 6 months from travel date',
      'Yellow fever vaccination certificate required',
      'Travel insurance included up to 70 years of age',
      'Prices subject to change based on availability',
    ],
    relatedPackages: ['goa-sun-sand', 'rajasthan-royal-trails'],
  },
  {
    id: 'kerala-backwaters-bliss',
    slug: 'kerala-backwaters-bliss',
    title: 'Kerala Backwaters Bliss',
    tagline: 'Discover God\'s Own Country',
    location: 'Kochi • Munnar • Alleppey',
    duration: '5D / 4N',
    priceFrom: 18999,
    priceOriginal: 24999,
    image:
      'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Houseboat stay', 'Tea estate tour', 'Local cuisine experiences'],
    pickupDrop: 'Pickup and drop from Kochi Airport/Railway Station',
    inclusions: ['Hotel stays', 'Daily breakfast', 'All transfers', 'Sightseeing (as per itinerary)'],
    exclusions: ['Air/Train tickets', 'Personal expenses', 'Entry tickets (if any)'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kochi & sunset promenade',
        description:
          'Arrive in Kochi, check-in, then head to Fort Kochi for a relaxed evening walk and local cafes.',
      },
      {
        day: 2,
        title: 'Drive to Munnar • tea estate viewpoints',
        description:
          'Scenic transfer to Munnar. Explore tea plantations, photo stops, and misty viewpoints.',
      },
      {
        day: 3,
        title: 'Munnar sightseeing • waterfalls & parks',
        description:
          'Visit popular attractions, enjoy the cool climate, and return for a calm evening at your stay.',
      },
      {
        day: 4,
        title: 'Alleppey houseboat • backwater cruise',
        description:
          'Check in to a premium houseboat and cruise serene backwaters with lunch and sunset views.',
      },
      {
        day: 5,
        title: 'Departure • transfer to Kochi',
        description:
          'After breakfast, transfer back to Kochi for your onward journey with memories to keep.',
      },
    ],
    tripDates: [
      { date: 'Every Weekend', availability: 'Available' },
    ],
    hotelDetails: '3-star hotels and premium houseboat',
    notes: [
      'Best time to visit: October to March',
      'Carry light woolens for Munnar',
    ],
    relatedPackages: ['goa-sun-sand', 'rajasthan-royal-trails'],
  },
  {
    id: 'goa-sun-sand',
    slug: 'goa-sun-sand',
    title: 'Goa Sun & Sand Escape',
    tagline: 'Beach Vibes & Coastal Dreams',
    location: 'North Goa • South Goa',
    duration: '4D / 3N',
    priceFrom: 14999,
    priceOriginal: 19999,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Beach hopping', 'Sunset cruise', 'Local markets'],
    pickupDrop: 'Airport pickup & drop included',
    inclusions: ['Hotel stays', 'Daily breakfast', 'Airport pickup & drop', 'Sightseeing (as per itinerary)'],
    exclusions: ['Flights', 'Personal expenses', 'Water sports (optional)'],
    itinerary: [
      { day: 1, title: 'Arrival & leisure', description: 'Check-in and relax by the beach at your own pace.' },
      {
        day: 2,
        title: 'North Goa tour',
        description: 'Explore iconic beaches, forts, and evening markets with optional water sports.',
      },
      {
        day: 3,
        title: 'South Goa • sunset cruise',
        description: 'Visit heritage churches and enjoy a premium sunset cruise experience.',
      },
      { day: 4, title: 'Departure', description: 'Breakfast, checkout, and transfer for your onward journey.' },
    ],
    tripDates: [
      { date: 'Every Friday', availability: 'Available' },
    ],
    hotelDetails: 'Beach-facing 3-star resort',
    notes: [
      'Best time: November to February',
      'Water sports charges extra',
    ],
    relatedPackages: ['kerala-backwaters-bliss', 'rajasthan-royal-trails'],
  },
  {
    id: 'rajasthan-royal-trails',
    slug: 'rajasthan-royal-trails',
    title: 'Rajasthan Royal Trails',
    tagline: 'Experience Royal Heritage',
    location: 'Jaipur • Jodhpur • Jaisalmer',
    duration: '6D / 5N',
    priceFrom: 26999,
    priceOriginal: 34999,
    image:
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80',
    highlights: ['Heritage forts', 'Desert safari', 'Cultural evenings'],
    pickupDrop: 'Pickup and drop from Jaipur',
    inclusions: ['Hotel stays', 'Daily breakfast', 'All transfers', 'Sightseeing (as per itinerary)'],
    exclusions: ['Flights/Trains', 'Personal expenses', 'Monument fees (if any)'],
    itinerary: [
      { day: 1, title: 'Jaipur arrival • city lights', description: 'Arrive and enjoy a relaxed evening in Jaipur.' },
      { day: 2, title: 'Amber Fort • Pink City', description: 'Explore iconic forts and bazaars.' },
      { day: 3, title: 'Jodhpur transfer', description: 'Drive to Jodhpur and explore local markets.' },
      { day: 4, title: 'Jaisalmer • desert dunes', description: 'Reach Jaisalmer and head for dune experiences.' },
      { day: 5, title: 'Safari • cultural evening', description: 'Desert safari with music and a premium dinner.' },
      { day: 6, title: 'Departure', description: 'Checkout and continue your onward journey.' },
    ],
    tripDates: [
      { date: 'Feb 20-25, 2026', availability: 'Available' },
      { date: 'Mar 15-20, 2026', availability: 'Available' },
    ],
    hotelDetails: 'Heritage hotels and desert camps',
    notes: [
      'Best time: October to March',
      'Carry sunscreen and comfortable shoes',
    ],
    relatedPackages: ['kerala-backwaters-bliss', 'goa-sun-sand'],
  },
]

export function getPackageBySlug(slug) {
  return tourPackages.find((p) => p.slug === slug)
}

export function getRelatedPackages(slugs) {
  return tourPackages.filter((p) => slugs.includes(p.slug))
}

