// routes/api.js
// When doing the request it goes to the router to route to specific controller
import express from 'express';
import {
  getCategories,
  getCategoryIndex,
  getCharacterSummary,
  getSubcategories,
  getSubcategoryIndex,
  getSubcategoryItem,
  getAllSubcategoryItems,
  getAllSubcategoryItemSearch,
  resolveCategoryOrSubcategory
} from '../controllers/api.js';

const router = express.Router();

// RETURNS A LIST OF TOP-LEVEL CATEGORIES
router.get('/', getCategories);

// GRABS THE SPECIFIC CATEGORY INDEX YOU SELECTED
router.get('/:category', getCategoryIndex);


// SUBCATEGORY ROUTES (SPECIFIC — MUST COME FIRST)
// Returns all subcategories for a category (e.g: gameplay-features)
router.get('/:category/subcategories', getSubcategories);

// Returns the index of that specific subcategory
router.get('/:category/subcategories/:subcategory', getSubcategoryIndex);

// Returns a specific item from inside that subcategory
router.get('/:category/subcategories/:subcategory/:item', getSubcategoryItem);


// ALL MERGED SUBCATEGORY ITEMS ROUTE
// Merges all items from all subcategories into a single object and returns it
router.get('/:category/all', getAllSubcategoryItems);

// Allows searching for a specific item inside the merged object
router.get('/:category/all/:item', getAllSubcategoryItemSearch);


// SMART RESOLVER (GENERIC — MUST COME LAST)
// A catch-all resolver for /:category/:slug
// Handles cases like /api/characters/sonic-the-hedgehog
// Works for flat categories or for subcategory names that weren’t handled by the more specific routes.
// It must come after /all and subcategory routes; otherwise /all or /subcategories would be treated as a slug.
//router.get('/characters/:slug', getCharacterSummary);
router.get('/:category/:slug', resolveCategoryOrSubcategory);

// DIRECT SUBCATEGORY ITEM (NO "subcategories" IN URL)
// This is essentially the same as the subcategory item route above but without the subcategories keyword in the URL.
//Example: /api/gameplay-features/powerups/color-powers.
// Allows a shorter URL to access items directly.
router.get('/:category/:subcategory/:item', getSubcategoryItem);

export default router;

