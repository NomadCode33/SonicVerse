import { useState } from "react";
import "../../css/api-home/devnotes.css";

// ─── Tab Config ───────────────────────────────────────────────────────────────
const TABS = [
  { id: "progression", icon: "🚀", label: "Progression",    sublabel: "Updates & milestones", section: "PROGRESS" },
  { id: "future",      icon: "🔮", label: "Future Updates", sublabel: "Planned features",     section: "PROGRESS" },
  { id: "learned",     icon: "🧠", label: "What I Learned", sublabel: "Lessons & insights",   section: "PROGRESS" },
  { id: "bugs",        icon: "🐛", label: "Bug Log",         sublabel: "Issues & fixes",       section: "PROGRESS" },
  { id: "stack",       icon: "⚙️", label: "Tech Stack",     sublabel: "Tools & deps",         section: "REFERENCE" },
  { id: "snippets",    icon: "📎", label: "Code Snippets",  sublabel: "Reusable refs",        section: "REFERENCE" },
  { id: "resources",   icon: "🔗", label: "Resources",      sublabel: "Docs & links",         section: "REFERENCE" },
];

// ─── Content Data ─────────────────────────────────────────────────────────────
// HOW TO ADD MEDIA TO A CARD:
// Add a `mediaItems` array to any card entry. Each item in the array is one
// piece of media. They stack vertically in the order you list them, with
// spacing between each one. You can mix types freely — images, videos, iframes.
//
// CHANGED: was `media` (single object). Now `mediaItems` (array of objects).
// This lets you add as many media items as you need per card.
//
// Each media item has:
//   type:    "image" | "video" | "youtube"
//   src:     URL or path (for image/video)
//   id:      YouTube video ID e.g. "dQw4w9WgXcQ" (for youtube only)
//   caption: optional text shown below that specific item
//
// Examples:
//
// Single image:
//   mediaItems: [
//     { type: "image", src: "/images/screenshot.png", caption: "DevTools error" }
//   ]
//
// Multiple mixed media:
//   mediaItems: [
//     { type: "image",   src: "/images/before.png",  caption: "Before the fix" },
//     { type: "image",   src: "/images/after.png",   caption: "After the fix" },
//     { type: "youtube", id: "dQw4w9WgXcQ",          caption: "Video walkthrough" },
//     { type: "video",   src: "/videos/demo.mp4",    caption: "Local recording" },
//   ]
//
// Leave out `mediaItems` entirely if you don't want any media on that card.

const DATA = {
  progression: [
    {
      id: 1,
      date: "Mar 25, 2026",
      title: "Fixed Render deployment — stale Vite cache",
      body: "Root-level npm install was missing from the Render build command, causing stale hashed filenames to break production. Fixed by clearing cache and updating the build command to: npm install && cd react-frontend && npm install && npm run build.",
      tag: "deployment",
      /*mediaItems: [
        { type: "image",   src: "/img/hero-images/SA2_Cast_Japan.webp", caption: "The MIME error in DevTools" },
        { type: "image",   src: "/img/hero-images/SADX_Cast.webp", caption: "The MIME error in DevTools" }
      ]*/
      // Example — uncomment and fill in to add media to this card:
      // mediaItems: [
      //   { type: "image", src: "/images/your-screenshot.png", caption: "Optional caption" },
      //   { type: "image", src: "/images/another.png" },
      // ]
    },
    {
      id: 2,
      date: "Mar 20, 2026",
      title: "Characters page live",
      body: "Characters nested route under /verse-hub is live, pulling data from MongoDB via the Express API.",
      tag: "feature",
    },
    {
      id: 3,
      date: "Mar 10, 2026",
      title: "Initial SonicVerse deploy",
      body: "React + Vite frontend served by Express backend. Successfully deployed to Render with MongoDB Atlas connection.",
      tag: "deployment",
    },
  ],

  future: [
    { id: 1, title: "Quiz Page",            priority: "high",   body: "Route is already set up in the codebase. A full Sonic trivia quiz with score tracking and a leaderboard." },
    { id: 2, title: "Transformations Page", priority: "medium", body: "Document all Sonic transformations — Super, Hyper, Dark Sonic, and more — with stats and lore entries." },
    { id: 3, title: "Admin / API Home",     priority: "medium", body: "A dedicated admin panel route for managing content and monitoring the Express API." },
    { id: 4, title: "User Auth",            priority: "low",    body: "Allow users to create accounts, save favourite characters, and track quiz scores." },
  ],

  learned: [
    { id: 1, topic: "Render Build Cache",         body: "Render caches the build directory between deploys. Vite hashes output filenames on every build — if old dist/ artifacts are served from cache, the HTML references filenames that no longer exist. Always clear cache when production diverges from local." },
    { id: 2, topic: "nodemon is dev-only",         body: "nodemon restarts the server on every file change — useful in development, wrong in production. Render's start script must use node server.js. nodemon belongs only in the dev script." },
    { id: 3, topic: "React Router Nested Routes", body: "Layout routes wrap child routes via Outlet. The parent renders the layout and children render inside it. Index routes handle the default child when no sub-path is matched." },
  ],

  bugs: [
    { id: 1, title: "MIME type error in production",                status: "fixed", date: "Mar 25, 2026", body: "JS files served with the wrong MIME type. Root cause: stale Vite build cache on Render serving outdated hashed filenames. Fixed by clearing cache and correcting the build command." },
    { id: 2, title: "nodemon/node scripts swapped in package.json", status: "fixed", date: "Mar 25, 2026", body: "The start script had nodemon and dev had node — completely backwards. Corrected so start uses node for Render and dev uses nodemon." },
  ],

  stack: [
    { id: 1, name: "React 19",     icon: "⚛️", version: "^19.2.0",  role: "Frontend UI library" },
    { id: 2, name: "Vite 7",       icon: "⚡", version: "^7.2.4",   role: "Build tool & dev server" },
    { id: 3, name: "React Router", icon: "🧭", version: "^7.12.0",  role: "Client-side routing" },
    { id: 4, name: "Tailwind v4",  icon: "🎨", version: "^4.1.18",  role: "Utility-first styling" },
    { id: 5, name: "Express",      icon: "🖥️", version: "backend",  role: "Node.js web server" },
    { id: 6, name: "MongoDB",      icon: "🍃", version: "Atlas",    role: "NoSQL database" },
    { id: 7, name: "EJS",          icon: "📄", version: "backend",  role: "Server-side templates" },
    { id: 8, name: "Render",       icon: "☁️", version: "hosting",  role: "Deployment platform" },
  ],

  snippets: [
    {
      id: 1,
      title: "Render Build Command",
      lang: "bash",
      body: "Correct build command — root install must be explicit or Render cache will skip it.",
      code: "npm install && cd react-frontend && npm install && npm run build",
    },
    {
      id: 2,
      title: "Express Static Serve (Vite build)",
      lang: "js",
      body: "Serve the Vite dist folder from Express. Must come after all API routes.",
      code: `import path from 'path';\nimport { fileURLToPath } from 'url';\n\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));\n\napp.use(express.static(path.join(__dirname, 'react-frontend/dist')));\n\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, 'react-frontend/dist/index.html'));\n});`,
    },
  ],

  resources: [
    { id: 1, title: "Vite Docs",            url: "https://vite.dev",             category: "build",      note: "Official Vite documentation — config, plugins, and deployment guides." },
    { id: 2, title: "React Router v7 Docs", url: "https://reactrouter.com",      category: "routing",    note: "Full API reference for nested routes, loaders, and actions." },
    { id: 3, title: "Render Docs",          url: "https://render.com/docs",      category: "deployment", note: "Build settings, environment variables, and cache management." },
    { id: 4, title: "Tailwind CSS v4 Docs", url: "https://tailwindcss.com/docs", category: "styling",    note: "v4 uses @theme in CSS instead of tailwind.config.js." },
  ],
};

// ─── Style maps ───────────────────────────────────────────────────────────────
const TAG_STYLES = {
  deployment: { bg: "rgba(0,180,255,0.1)",   color: "#00b4ff", border: "rgba(0,180,255,0.25)" },
  feature:    { bg: "rgba(0,229,160,0.1)",   color: "#00e5a0", border: "rgba(0,229,160,0.25)" },
  fix:        { bg: "rgba(255,201,60,0.1)",  color: "#ffc93c", border: "rgba(255,201,60,0.25)" },
  refactor:   { bg: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "rgba(167,139,250,0.25)" },
};

const PRIORITY_STYLES = {
  high:   { color: "#ff4d6a", label: "▲ High priority" },
  medium: { color: "#ffc93c", label: "◆ Medium priority" },
  low:    { color: "#00e5a0", label: "● Low priority" },
};

// ─── Tag helper ───────────────────────────────────────────────────────────────
const Tag = ({ type }) => {
  const s = TAG_STYLES[type] || TAG_STYLES.feature;
  return (
    <span className="dn-tag" style={{ background: s.bg, color: s.color, borderColor: s.border }}>
      {type}
    </span>
  );
};

// ─── CardMedia helper ─────────────────────────────────────────────────────────
// CHANGED: was CardMedia({ media }) accepting a single object.
// Now accepts `mediaItems` — an array of media objects.
// Renders each item stacked vertically with spacing via .dn-card-media-item.
// Each item can be image, video, or youtube independently.
// If mediaItems is missing or empty, renders nothing.
const CardMedia = ({ mediaItems }) => {
  if (!mediaItems || mediaItems.length === 0) return null;

  return (
    // CHANGED: outer wrapper now contains multiple .dn-card-media-item children
    <div className="dn-card-media">
      {mediaItems.map((media, index) => (
        // CHANGED: each media item gets its own .dn-card-media-item wrapper
        // which handles the spacing between stacked items
        <div className="dn-card-media-item" key={index}>

          {media.type === "image" && (
            <img src={media.src} alt={media.caption || ""} loading="lazy" />
          )}

          {media.type === "video" && (
            <video controls preload="metadata">
              <source src={media.src} />
              Your browser does not support the video tag.
            </video>
          )}

          {media.type === "youtube" && (
            <iframe
              src={`https://www.youtube.com/embed/${media.id}`}
              title={media.caption || "YouTube video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {media.caption && (
            <div className="dn-card-media-caption">{media.caption}</div>
          )}

        </div>
      ))}
    </div>
  );
};

// ─── Tab Panes ────────────────────────────────────────────────────────────────

function ProgressionPane() {
  const items = DATA.progression;
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">🚀 <span>Progression</span></div>
        <div className="dn-content-desc">Every milestone, fix, and feature shipped so far.</div>
        <div className="dn-count-line"><span>{items.length}</span> updates logged</div>
      </div>
      <div className="dn-cards">
        {items.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-meta">
              <Tag type={item.tag} />
              <span className="dn-date">{item.date}</span>
            </div>
            <div className="dn-card-title">{item.title}</div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
            {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
            <CardMedia mediaItems={item.mediaItems} />
          </div>
        ))}
      </div>
    </>
  );
}

function FuturePane() {
  const items = DATA.future;
  const byPriority = (p) => items.filter((i) => i.priority === p);
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">🔮 <span>Future Updates</span></div>
        <div className="dn-content-desc">What's coming next for SonicVerse.</div>
        <div className="dn-count-line"><span>{items.length}</span> features planned</div>
      </div>
      {["high", "medium", "low"].map((p) =>
        byPriority(p).length > 0 ? (
          <div className="dn-priority-group" key={p}>
            <div className="dn-priority-label" style={{ color: PRIORITY_STYLES[p].color }}>
              {PRIORITY_STYLES[p].label}
            </div>
            <div className="dn-cards">
              {byPriority(p).map((item) => (
                <div className="dn-card" key={item.id}>
                  <div className="dn-card-title">{item.title}</div>
                  {item.body && <div className="dn-card-body">{item.body}</div>}
                  {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
                  <CardMedia mediaItems={item.mediaItems} />
                </div>
              ))}
            </div>
          </div>
        ) : null
      )}
    </>
  );
}

function LearnedPane() {
  const items = DATA.learned;
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">🧠 <span>What I Learned</span></div>
        <div className="dn-content-desc">Lessons and insights picked up while building SonicVerse.</div>
        <div className="dn-count-line"><span>{items.length}</span> lessons logged</div>
      </div>
      <div className="dn-cards">
        {items.map((item, i) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-meta">
              <span style={{ color: "#00b4ff", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                #{String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="dn-card-title">{item.topic}</div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
            {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
            <CardMedia mediaItems={item.mediaItems} />
          </div>
        ))}
      </div>
    </>
  );
}

function BugsPane() {
  const items = DATA.bugs;
  const open  = items.filter((i) => i.status === "open").length;
  const fixed = items.filter((i) => i.status === "fixed").length;
  const statusClass = (s) => s === "fixed" ? "dn-bug-fixed" : s === "open" ? "dn-bug-open" : "dn-bug-investigating";
  const statusLabel = (s) => s === "fixed" ? "✓ fixed" : s === "open" ? "● open" : "◌ investigating";
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">🐛 <span>Bug Log</span></div>
        <div className="dn-content-desc">Issues encountered and how they were resolved.</div>
        <div className="dn-count-line">
          <span style={{ color: "#ff4d6a" }}>{open} open</span>
          <span style={{ color: "#00e5a0" }}>{fixed} fixed</span>
        </div>
      </div>
      <div className="dn-cards">
        {items.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-meta">
              <span className={`dn-bug-status ${statusClass(item.status)}`}>{statusLabel(item.status)}</span>
              {item.date && <span className="dn-date">{item.date}</span>}
            </div>
            <div className="dn-card-title">{item.title}</div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
            {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
            <CardMedia mediaItems={item.mediaItems} />
          </div>
        ))}
      </div>
    </>
  );
}

function StackPane() {
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">⚙️ <span>Tech Stack</span></div>
        <div className="dn-content-desc">Every tool and service powering SonicVerse.</div>
      </div>
      <div className="dn-stack-grid">
        {DATA.stack.map((item) => (
          <div className="dn-stack-card" key={item.id}>
            <div className="dn-stack-icon">{item.icon}</div>
            <div className="dn-stack-name">{item.name}</div>
            {item.version && <div className="dn-stack-version">{item.version}</div>}
            {item.role    && <div className="dn-stack-role">{item.role}</div>}
          </div>
        ))}
      </div>
    </>
  );
}

function SnippetsPane() {
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">📎 <span>Code Snippets</span></div>
        <div className="dn-content-desc">Useful patterns and reference code from the project.</div>
      </div>
      <div className="dn-cards">
        {DATA.snippets.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-meta">
              <span className="dn-snippet-lang">{item.lang}</span>
            </div>
            <div className="dn-card-title">{item.title}</div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
            {item.code  && <pre className="dn-code-block">{item.code}</pre>}
            {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
            <CardMedia mediaItems={item.mediaItems} />
          </div>
        ))}
      </div>
    </>
  );
}

function ResourcesPane() {
  return (
    <>
      <div className="dn-content-header">
        <div className="dn-content-title">🔗 <span>Resources</span></div>
        <div className="dn-content-desc">Documentation and useful links referenced during development.</div>
      </div>
      <div className="dn-cards">
        {DATA.resources.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-meta">
              <span className="dn-resource-category">{item.category}</span>
            </div>
            <div className="dn-card-title" style={{ marginTop: "0.25rem" }}>
              {item.url
                ? <a href={item.url} target="_blank" rel="noopener noreferrer" className="dn-resource-link">{item.title} ↗</a>
                : item.title
              }
            </div>
            {item.note && <div className="dn-card-body">{item.note}</div>}
            {/* CHANGED: was media={item.media} — now mediaItems={item.mediaItems} */}
            <CardMedia mediaItems={item.mediaItems} />
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Pane Map ─────────────────────────────────────────────────────────────────
const PANES = {
  progression: <ProgressionPane />,
  future:      <FuturePane />,
  learned:     <LearnedPane />,
  bugs:        <BugsPane />,
  stack:       <StackPane />,
  snippets:    <SnippetsPane />,
  resources:   <ResourcesPane />,
};

// ─── Main Component ───────────────────────────────────────────────────────────
const DevNotes = () => {
  const [activeTab, setActiveTab] = useState("progression");
  const sections = [...new Set(TABS.map((t) => t.section))];
  const getCount = (id) => { const d = DATA[id]; return Array.isArray(d) ? d.length : 0; };
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short", year: "numeric", month: "short", day: "numeric",
  });

  return (
    <div className="dn-page">
      <header className="dn-topbar">
        <div className="dn-topbar-left">
          <div className="dn-logo-dot" />
          <span className="dn-topbar-title">Sonic<span>Verse</span> — Dev Notes</span>
        </div>
        <div className="dn-topbar-right">
          <span className="dn-live-badge">● live</span>
          <span className="dn-topbar-date">{formattedDate}</span>
        </div>
      </header>

      <div className="dn-body">
        <nav className="dn-sidebar">
          {sections.map((section) => (
            <div key={section}>
              <div className="dn-sidebar-section-label">{section}</div>
              {TABS.filter((t) => t.section === section).map((tab) => (
                <button
                  key={tab.id}
                  className={`dn-tab${activeTab === tab.id ? " active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="dn-tab-icon">{tab.icon}</span>
                  <span className="dn-tab-text">
                    <span className="dn-tab-label">{tab.label}</span>
                    <span className="dn-tab-sub">{tab.sublabel}</span>
                  </span>
                  {getCount(tab.id) > 0 && (
                    <span className="dn-tab-badge">{getCount(tab.id)}</span>
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>

        <main className="dn-main">
          {TABS.map((tab) => (
            <div key={tab.id} className={`dn-pane${activeTab === tab.id ? " active" : ""}`}>
              {activeTab === tab.id && PANES[tab.id]}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default DevNotes;
