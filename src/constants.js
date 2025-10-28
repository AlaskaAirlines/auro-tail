import { OneWorld } from './assets/badges/OneWorld.js';

export const BADGE_LOGOS = {
  oneworld: {
    icon: OneWorld,
    alt: 'OneWorld Alliance',
  },
};

// Sizes that should display hyperlinks
export const LINKS_SIZES = ['md', 'lg', 'xl', '2xl'];

// Sizes that should display badges
export const BADGES_SIZES = ['md', 'lg', 'xl', '2xl'];

// Sizes that should be used in groups
export const GROUPS_SIZES = ['xs', 'sm', 'md', 'lg'];

// Maximum number of tails allowed in a group
export const MAX_TAILS_IN_GROUP = 2;

// Default airline name (EN/i18n)
export const DEFAULT_AIRLINE_NAME = 'Airline';

// Aria label (EN/i18n)
export const ARIA_LABELS = {
  tailLivery: 'Tail livery',
  tailLiveryWithBadge: 'Tail livery, {badgeAlt} member'
};
