export interface RoomHub {
  slug: string;
  title: string;
  icon: string;
  iconClass: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  /** Real content-collection slugs only. Verified against src/content/blog. */
  postSlugs: string[];
  /** Slugs of other hubs to cross-link to from this hub. */
  relatedHubSlugs: string[];
}

/**
 * Curated room hub config. Automatic filtering by title/category was not
 * reliable here because posts do not carry a room tag in their frontmatter,
 * so each hub lists real, verified post slugs directly. A post can appear
 * in more than one hub when it genuinely fits more than one room or theme
 * (for example a small kitchen post belongs in both Kitchen Decor and
 * Small Space Living).
 */
export const roomHubs: RoomHub[] = [
  {
    slug: 'bedroom-decor',
    title: 'Bedroom Decor',
    icon: '🛏️',
    iconClass: 'ci-1',
    seoTitle: 'Bedroom Decor Ideas | InterestDecor',
    metaDescription: 'Warm, calming bedroom decor ideas including sage green, white and terracotta, and butter yellow color palettes, paint shades, and styling tips.',
    intro: 'A bedroom should feel like a place to exhale. These guides cover the color palettes, textures, and small styling choices that turn a bedroom into a genuine sanctuary, from calming sage green to warm terracotta and cheerful butter yellow.',
    postSlugs: [
      'sage-green-bedroom-ideas',
      'white-terracotta-bedroom-ideas',
      'butter-yellow-bedroom-ideas',
    ],
    relatedHubSlugs: ['bathroom-decor', 'living-room-ideas'],
  },
  {
    slug: 'bathroom-decor',
    title: 'Bathroom Decor',
    icon: '🛁',
    iconClass: 'ci-2',
    seoTitle: 'Bathroom Decor Ideas | InterestDecor',
    metaDescription: 'Bathroom decor ideas covering sage green palettes and small bathroom layout tricks that make any bathroom feel calmer and more open.',
    intro: 'The bathroom is one of the smallest rooms in a home but one of the easiest to transform. These guides focus on calming color, smart layout choices, and the small changes that make a bathroom feel considered rather than cramped.',
    postSlugs: [
      'sage-green-bathroom-ideas',
      'small-bathroom-ideas',
    ],
    relatedHubSlugs: ['small-space-living', 'bedroom-decor'],
  },
  {
    slug: 'kitchen-decor',
    title: 'Kitchen Decor',
    icon: '🍳',
    iconClass: 'ci-3',
    seoTitle: 'Kitchen Decor Ideas | InterestDecor',
    metaDescription: 'Kitchen decor ideas covering olive green, deep plum, and navy blue cabinet colors, plus small kitchen layout and storage tricks.',
    intro: 'From bold cabinet colors to smart storage in a tight footprint, these guides cover what actually makes a kitchen feel warmer, more organized, and more expensive, whether you are repainting cabinets or just rearranging what you already have.',
    postSlugs: [
      'navy-blue-kitchen-ideas',
      'olive-green-kitchen-ideas',
      'deep-plum-kitchen-ideas',
      'small-kitchen-ideas-2026',
    ],
    relatedHubSlugs: ['small-space-living', 'living-room-ideas'],
  },
  {
    slug: 'living-room-ideas',
    title: 'Living Room Ideas',
    icon: '🛋️',
    iconClass: 'ci-4',
    seoTitle: 'Living Room Ideas | InterestDecor',
    metaDescription: 'Living room ideas covering warm minimalism, olive green styling, houseplants, and small living room layouts that feel bigger and brighter.',
    intro: 'The living room carries the most daily use of any room in the home. These guides cover warm minimalist styling, color stories like olive green, houseplant picks, and the layout tricks that make a small living room feel twice the size.',
    postSlugs: [
      '7-minimalist-living-room-ideas-that-feel-warm-not-cold',
      'olive-green-living-room-ideas',
      'bright-small-living-room-feel-bigger',
      'best-houseplants-for-living-room',
      'small-living-room-ideas-renters-under-200',
    ],
    relatedHubSlugs: ['small-space-living', 'bedroom-decor'],
  },
  {
    slug: 'small-space-living',
    title: 'Small Space Living',
    icon: '📐',
    iconClass: 'ci-1',
    seoTitle: 'Small Space Living Ideas | InterestDecor',
    metaDescription: 'Small space living ideas for compact living rooms, kitchens, and bathrooms, renter-friendly decorating, and windowsill herb gardens.',
    intro: 'Small square footage is not a limitation, it is a design challenge with real solutions. These guides gather every small-space idea on the site, from compact kitchens and bathrooms to renter-friendly living rooms and a windowsill herb garden that fits anywhere.',
    postSlugs: [
      'room-decoration-ideas-small-spaces',
      'bright-small-living-room-feel-bigger',
      'small-kitchen-ideas-2026',
      'small-bathroom-ideas',
      'small-living-room-ideas-renters-under-200',
      'apartment-herb-garden-windowsill-gardening',
    ],
    relatedHubSlugs: ['living-room-ideas', 'kitchen-decor'],
  },
];
