// controllers/apiController.js
import { categories } from '../models/apiData/mainVerse/sonicRepository/apiCategory.js'; // <-- import using ES module syntax
import { charIndex } from '../models/apiData/mainVerse/index/characterIndex.js';
import { characters } from '../models/apiData/mainVerse/sonicRepository/characters.js';
import { transIndex } from '../models/apiData/mainVerse/index/transformationIndex.js';
import { transformations } from '../models/apiData/mainVerse/sonicRepository/transformations.js';
import { zoneIndex } from '../models/apiData/mainVerse/index/zoneIndex.js';
import { zones } from '../models/apiData/mainVerse/sonicRepository/zones.js';
import { gameIndex } from '../models/apiData/mainVerse/index/gamesIndex.js';
import { games } from '../models/apiData/mainVerse/sonicRepository/games.js';
import { songsIndex } from '../models/apiData/mainVerse/index/songsIndex.js';
import { songs } from '../models/apiData/mainVerse/sonicRepository/songs.js';
import { gameplayFeaturesIndex } from '../models/apiData/mainVerse/index/gameplayFeaturesIndex.js';
import { gameplayFeatures } from '../models/apiData/mainVerse/sonicRepository/gameplayFeatures.js';

// A central registry mapping top-level category names to their respective data
const collections = {
  characters: { index: charIndex, items: characters, hasSubcategories: false },
  transformations: { index: transIndex, items: transformations, hasSubcategories: false },
  zones: { index: zoneIndex, items: zones, hasSubcategories: false },
  games: { index: gameIndex, items: games, hasSubcategories: false },
  songs: { index: songsIndex, items: songs, hasSubcategories: false },
  'gameplay-features': {
    index: gameplayFeaturesIndex,
    items: gameplayFeatures,
    hasSubcategories: true
  }
};

// /api
// Returns a list of top-level categories
export const getCategories = (req, res) => {
  res.json(categories);
};

// /api/:category
// Returns the index of the specified category
// (flat categories or subcategory listing)
// Example: /api/characters → returns charIndex
export const getCategoryIndex = (req, res) => {
  const category = req.params.category;
  const collection = collections[category];

  // If the category doesn’t exist → 404
  if (!collection) {
    return res.status(404).json({ error: 'Category not found' });
  }

  return res.json(collection.index);
};

// /api/:category/all
// Merges all subcategory items into one flat object (and returns it)
export const getAllSubcategoryItems = (req, res) => {
  const { category } = req.params;
  const collection = collections[category];

  if (!collection || !collection.hasSubcategories) {
    return res.status(404).json({ error: 'Category does not have subcategories' });
  }

  // Merge all subcategory items into one object
  const merged = {};

  // Object.values(collection.items) → iterates over all subcategories
  // Object.entries(subcategory) → iterates over items in each subcategory
  // Adds each item to merged
  Object.values(collection.items).forEach(subcategory => {
    Object.entries(subcategory).forEach(([key, value]) => {
      merged[key] = value;
    });
  });

  res.json(merged);
};

// /api/:category/all/:item
// Search for a specific item across all subcategories in a category
export const getAllSubcategoryItemSearch = (req, res) => {
  const { category, item } = req.params;
  const collection = collections[category];

  if (!collection || !collection.hasSubcategories) {
    return res.status(404).json({ error: 'Category does not have subcategories' });
  }

  // Merge all subcategory items (same as getAllSubcategoryItems)
  const merged = {};
  Object.values(collection.items).forEach(subcategory => {
    Object.entries(subcategory).forEach(([key, value]) => {
      merged[key] = value;
    });
  });

  // Search for item in the merged object
  // Return 404 if item is not found
  const result = merged[item];
  if (!result) {
    return res.status(404).json({ error: 'Item not found in all subcategories' });
  }

  res.json(result);
};

// /api/:category/:item  (FLAT ONLY)
// Dynamically handles both flat categories and categories with subcategories
export const resolveCategoryOrSubcategory = (req, res) => {
  const { category, slug } = req.params;
  const collection = collections[category];

  // Checks if category exists
  if (!collection) {
    return res.status(404).json({ error: 'Category not found' });
  }

  // CATEGORY WITH SUBCATEGORIES (gameplay-features)
  // If it has subcategories → checks if slug matches a subcategory → returns all items in that subcategory
  if (collection.hasSubcategories) {

    // slug === subcategory → return index
    if (collection.items[slug]) {
      const results = Object.values(collection.items[slug]);

      return res.json({
        count: results.length,
        results
      });
    }

    return res.status(404).json({ error: 'Subcategory not found' });
  }

  // FLAT CATEGORY
  // If flat category → checks if slug matches an item → returns item
  const item = collection.items[slug];
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  return res.json(item);
};


// /api/:category/subcategories
// Return the index of subcategories for a category (like /api/gameplay-features/subcategories)
export const getSubcategories = (req, res) => {
  const category = req.params.category;
  const collection = collections[category];

  if (!collection || !collection.hasSubcategories) {
    return res.status(404).json({ error: 'No subcategories available' });
  }

  res.json(collection.index);
};

// /api/:category/subcategories/:subcategory
// Return all items in a specific subcategory
export const getSubcategoryIndex = (req, res) => {
  const { category, subcategory } = req.params;
  const collection = collections[category];

  if (!collection || !collection.hasSubcategories) {
    return res.status(404).json({ error: 'Invalid category' });
  }

  // Gets the subcategory object → returns its items as results.
  const sub = collection.items[subcategory];
  if (!sub) {
    return res.status(404).json({ error: 'Subcategory not found' });
  }

  const results = Object.values(sub);

  res.json({
    count: results.length,
    results
  });
};

// /api/:category/subcategories/:subcategory/:item
// Return a single item in a subcategory
// Checks category → subcategory → item → returns JSON
export const getSubcategoryItem = (req, res) => {
  const { category, subcategory, item } = req.params;
  const collection = collections[category];

  if (!collection || !collection.hasSubcategories) {
    return res.status(404).json({ error: 'Invalid category' });
  }

  const sub = collection.items[subcategory];
  if (!sub || !sub[item]) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(sub[item]);
};