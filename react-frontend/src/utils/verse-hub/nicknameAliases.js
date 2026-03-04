// Explicit nickname mappings scoped by API endpoint
// key = endpoint path, value = { index: [aliases] }
// scoped so aliases only apply to the correct endpoint's map
export const NICKNAME_ALIASES = {
  "/api/characters/": {
    "doctor-eggman": ["eggman", 
      "robotnik", 
      "ivo", 
      "doctor robotnik", 
      "dr eggman", 
      "dr. eggman",
      "dr robotnik",
      "dr. robotnik"
    ],
    "miles-tails-prower": ["tails"],
    "amy-rose": ["rose", 
      "rosy the rascal", 
      "princess sally", 
      "sally"
    ],
    "shadow-the-hedgehog": ["ultimate life form", "the ultimate life form"],
  },
  /*add new endpoints here as you add them e.g:
  "/api/transformations/": {
    "some-index": ["alias1", "alias2"],
  },*/
  /*
  "/api/gameplay-features/all": {
    "some-feature-index": ["alias1", "alias2"],
  },*/
};