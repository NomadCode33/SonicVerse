# SonicVerse
SonicVerse is a fully responsive, full-stack web app — a one-stop interactive encyclopedia for the Sonic the Hedgehog universe, featuring a sleek frontend true to the franchise's aesthetic, a clean MVC backend, and a custom RESTful API that enables dynamic search across multiple pages and content categories. More than a fan page, it's a deliberately built learning resource for developers who want practical, real-world exposure to how APIs are designed and consumed in production-level applications.

**Link to project:** https://sonicverse-y2s6.onrender.com/

<img src="./assets/SonicVerse-home-page" img alt = "SonicVerse Front Page"/>

## How It's Made:

**Tech used:** <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer"> <img alt="HTML5 Badge" src="https://img.shields.io/badge/-HTML5-000000?style=flat&logo=HTML5"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer"> <img alt="CSS3 Badge" src="https://img.shields.io/badge/-CSS3-000000?style=flat&logo=CSS"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img alt="JavaScript Badge" src="https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=JavaScript"></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img alt="Node.js Badge" src="https://img.shields.io/badge/-Node-000000?style=flat&logo=Node.js"></a>
<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img alt="React Badge" src="https://img.shields.io/badge/-React-000000?style=flat&logo=React"></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img alt="Express Badge" src="https://img.shields.io/badge/-Express-000000?style=flat&logo=Express"></a>
<a href="https://render.com/" target="_blank" rel="noreferrer"> <img alt="Render Badge" src="https://img.shields.io/badge/-Render-000000?style=flat&logo=Render"></a>

I built this project because I wanted a working Sonic API — and simply put, one didn't exist. The goal was to create something educational: a resource that teaches developers how to consume APIs and integrate them into their own projects. I intentionally designed it at an intermediate difficulty level, using more complex data patterns to reflect what you'd encounter in real-world, industry-standard APIs. If you already have a foundational understanding of how APIs work, this is a natural next step. If you're the type who likes jumping into the deep end, that works too — either way, you'll come out with sharper API skills.

On the backend, I started by building out the character data, which became the foundation for all the other routes. I followed MVC architecture to keep everything cleanly organized — routes, controllers, models, and data each in their proper place. I also introduced subcategory routes to logically group related topics (like gameplayFeatures) under a single category. The JSON structures were designed with intention: some objects have empty properties, others are missing properties altogether, pushing users to think critically rather than just pattern-match their way through. Each API request flows from a category list → selected category → index page → fetched item.
**API URL:** https://sonicverse-y2s6.onrender.com/api/

On the frontend, I started with vanilla JavaScript before migrating to React — and that decision changed everything. React let me build components faster, reuse them efficiently, and keep the codebase organized in a way that's easy to navigate, reference, and debug. It was a learning curve, but absolutely worth it.

## Lessons Learned:
React isn't optional for projects at this scale — it's necessary. When I was building the frontend in vanilla JavaScript, it felt like pushing through mud. Switching to React didn't just speed things up; it made the entire process more sustainable. I estimate it would've taken five times as long to complete the home and characters pages without it. Going forward, I'll be using frameworks like React for all my projects, and I plan to deepen my understanding of what each major framework does well so I can make the right call for each project's scope.

Routing was another major insight. My initial instinct was to create separate files for each page, but I quickly realized that approach would bloat the project and introduce a lot of redundancy — every page shared the same structure and design philosophy anyway. Instead, I refactored the SearchBox.jsx component to detect the current page and filter the API accordingly. This alone cut memory usage by roughly 20% and, more importantly, made the project scalable and automated: adding a new API endpoint and its corresponding route is all it takes to support a new page. No manual page-building required.

## Docs & Updates
#### *Updates will be shown in the dev log regarding its progress
**Development Log:** https://sonicverse-y2s6.onrender.com/dev-notes
**API Documentation:** *coming soon*
**API URL:** https://sonicverse-y2s6.onrender.com/api/

## More Projects:
Feel free to explore some of my other projects in my portfolio:

**D&D Compendium:** [D&D Compendium](https://github.com/NomadCode33/DevChronicles/tree/main/dnd-compendium)

**Ayesha Hair Salon:** [Ayesha Hair Salon](https://github.com/NomadCode33/DevChronicles/tree/main/Ayesha-Hair-Salon)

## Repositories
**Profile:** [NomadCode33](https://github.com/NomadCode33)

**Main Repository:** [DevChronicles](https://github.com/NomadCode33/DevChronicles)
