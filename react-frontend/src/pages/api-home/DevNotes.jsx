import { useState } from "react";
import "../../css/api-home/devnotes.css";

// ─── Tab Config ───────────────────────────────────────────────────────────────
const TABS = [
  {
    id: "progression",
    icon: "🚀",
    label: "Progression",
    sublabel: "Updates & milestones",
    section: "MAIN",
  },
  {
    id: "future",
    icon: "🔮",
    label: "Future Updates",
    sublabel: "Planned features",
    section: "MAIN",
  },
  {
    id: "learned",
    icon: "🧠",
    label: "What I Learned",
    sublabel: "Lessons & insights",
    section: "MAIN",
  },
  {
    id: "bugs",
    icon: "🐛",
    label: "Bug Log",
    sublabel: "Issues & fixes",
    section: "MAIN",
  },
  {
    id: "stack",
    icon: "⚙️",
    label: "Tech Stack",
    sublabel: "Tools & dependencies",
    section: "REFERENCE",
  },
  {
    id: "snippets",
    icon: "📎",
    label: "Code Snippets",
    sublabel: "Reusable references",
    section: "REFERENCE",
  },
  {
    id: "resources",
    icon: "🔗",
    label: "Resources",
    sublabel: "Docs & links",
    section: "REFERENCE",
  },
];

// ─── Seed Data ────────────────────────────────────────────────────────────────
const SEED = {
  progression: [
    {
      id: 1,
      date: "2026-03-25",
      title: "Fixed Render deployment — stale Vite cache",
      body: "Root-level npm install was missing from the Render build command, causing stale hashed filenames to break production. Fixed by clearing cache and updating build command to: npm install && cd react-frontend && npm install && npm run build.",
      tag: "deployment",
    },
    {
      id: 2,
      date: "2026-03-20",
      title: "Characters page live",
      body: "Characters nested route under /verse-hub is live, pulling data from MongoDB via the Express API.",
      tag: "feature",
    },
    {
      id: 3,
      date: "2026-03-10",
      title: "Initial SonicVerse deploy",
      body: "React + Vite frontend served by Express backend. Successfully deployed to Render with MongoDB Atlas connection.",
      tag: "deployment",
    },
  ],
  future: [
    {
      id: 1,
      title: "Quiz Page",
      priority: "high",
      body: "Route is commented out in App.jsx. Build a Sonic trivia quiz with score tracking and leaderboard.",
    },
    {
      id: 2,
      title: "Transformations Page",
      priority: "medium",
      body: "Document all Sonic transformations (Super, Hyper, Dark, etc.) with stats and lore entries.",
    },
    {
      id: 3,
      title: "Admin / API Home",
      priority: "medium",
      body: "A dedicated admin panel route to manage content and monitor the API. Dev Notes could eventually nest here.",
    },
    {
      id: 4,
      title: "User Auth",
      priority: "low",
      body: "Allow users to create accounts, save favorite characters, and track quiz scores.",
    },
  ],
  learned: [
    {
      id: 1,
      topic: "Render Build Cache",
      body: "Render caches the build directory between deploys. Vite hashes output filenames on every build — if old dist/ artifacts are served from cache, the HTML references filenames that no longer exist. Always clear cache when production diverges from local.",
    },
    {
      id: 2,
      topic: "nodemon is dev-only",
      body: "nodemon restarts the server on file changes — useful in dev, wrong in production. Render's start script must use `node server.js`. nodemon belongs only in the dev script.",
    },
    {
      id: 3,
      topic: "React Router Nested Routes",
      body: "Layout routes wrap child routes via <Outlet />. The parent renders the layout; children render inside it at the Outlet position. Index routes handle the default child when no sub-path is matched.",
    },
  ],
  bugs: [
    {
      id: 1,
      title: "MIME type error in production",
      status: "fixed",
      body: "JS files served with wrong MIME type. Root cause: stale Vite build cache on Render serving outdated hashed filenames. Fixed by clearing Render cache and correcting the build command.",
      date: "2026-03-25",
    },
    {
      id: 2,
      title: "nodemon/node scripts swapped in package.json",
      status: "fixed",
      body: "The `start` script had nodemon and `dev` had node — completely backwards. Corrected so `start` uses node (for Render) and `dev` uses nodemon.",
      date: "2026-03-25",
    },
  ],
  stack: [
    { id: 1, name: "React 19", icon: "⚛️", version: "^19.2.0", role: "Frontend UI library" },
    { id: 2, name: "Vite 7", icon: "⚡", version: "^7.2.4", role: "Frontend build tool & dev server" },
    { id: 3, name: "React Router", icon: "🧭", version: "^7.12.0", role: "Client-side routing" },
    { id: 4, name: "Tailwind CSS v4", icon: "🎨", version: "^4.1.18", role: "Utility-first styling" },
    { id: 5, name: "Express", icon: "🖥️", version: "backend", role: "Node.js web server" },
    { id: 6, name: "MongoDB", icon: "🍃", version: "Atlas", role: "NoSQL database" },
    { id: 7, name: "EJS", icon: "📄", version: "backend", role: "Server-side templating" },
    { id: 8, name: "Render", icon: "☁️", version: "hosting", role: "Deployment & hosting platform" },
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
      body: "Serve the Vite dist folder from Express. Must come after API routes.",
      code: `import path from 'path';\nimport { fileURLToPath } from 'url';\n\nconst __dirname = path.dirname(fileURLToPath(import.meta.url));\napp.use(express.static(path.join(__dirname, 'react-frontend/dist')));\n\napp.get('*', (req, res) => {\n  res.sendFile(path.join(__dirname, 'react-frontend/dist/index.html'));\n});`,
    },
  ],
  resources: [
    {
      id: 1,
      title: "Vite Docs",
      url: "https://vite.dev",
      category: "build",
      note: "Official Vite documentation — config, plugins, and deployment guides.",
    },
    {
      id: 2,
      title: "React Router v7 Docs",
      url: "https://reactrouter.com",
      category: "routing",
      note: "Full API reference for nested routes, loaders, and actions.",
    },
    {
      id: 3,
      title: "Render Docs",
      url: "https://render.com/docs",
      category: "deployment",
      note: "Build settings, environment variables, and cache management.",
    },
    {
      id: 4,
      title: "Tailwind CSS v4 Docs",
      url: "https://tailwindcss.com/docs",
      category: "styling",
      note: "v4 uses @theme in CSS instead of tailwind.config.js.",
    },
  ],
};

// ─── Tag / Priority Styles ────────────────────────────────────────────────────
const TAG_STYLES = {
  deployment: { bg: "rgba(0,180,255,0.1)", color: "#00b4ff", border: "rgba(0,180,255,0.25)" },
  feature: { bg: "rgba(0,229,160,0.1)", color: "#00e5a0", border: "rgba(0,229,160,0.25)" },
  fix: { bg: "rgba(255,201,60,0.1)", color: "#ffc93c", border: "rgba(255,201,60,0.25)" },
  refactor: { bg: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "rgba(167,139,250,0.25)" },
};

const PRIORITY_STYLES = {
  high: { bg: "rgba(255,77,106,0.1)", color: "#ff4d6a", border: "rgba(255,77,106,0.25)" },
  medium: { bg: "rgba(255,201,60,0.1)", color: "#ffc93c", border: "rgba(255,201,60,0.25)" },
  low: { bg: "rgba(0,229,160,0.1)", color: "#00e5a0", border: "rgba(0,229,160,0.25)" },
};

// ─── Helper: Inline Tag ───────────────────────────────────────────────────────
const Tag = ({ style, children }) => (
  <span
    className="dn-tag"
    style={{
      background: style.bg,
      color: style.color,
      borderColor: style.border,
    }}
  >
    {children}
  </span>
);

// ─── Tab: Progression ─────────────────────────────────────────────────────────
function ProgressionTab({ items, onAdd, onDelete }) {
  const today = new Date().toISOString().slice(0, 10);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", tag: "feature", date: today });

  const handleSave = () => {
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", body: "", tag: "feature", date: today });
    setAdding(false);
  };

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            🚀 <span>Progression</span>
          </div>
          <div className="dn-content-desc">Track every milestone, fix, and feature shipped.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="dn-stats-bar">
            <div className="dn-stat">
              <span className="dn-stat-num">{items.length}</span> updates
            </div>
          </div>
          <button
            className={`dn-add-btn${adding ? " cancel" : ""}`}
            onClick={() => setAdding(!adding)}
          >
            {adding ? "✕ Cancel" : "+ Log Update"}
          </button>
        </div>
      </div>

      {adding && (
        <div className="dn-form-card">
          <input
            className="dn-input"
            placeholder="Update title..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="dn-input dn-textarea"
            placeholder="Describe what changed..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <div className="dn-input-row">
            <input
              type="date"
              className="dn-input"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <select
              className="dn-input"
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
            >
              {Object.keys(TAG_STYLES).map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button className="dn-save-btn" onClick={handleSave}>
            Save Update
          </button>
        </div>
      )}

      <div className="dn-cards">
        {[...items].reverse().map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-top">
              <div>
                <div className="dn-card-meta">
                  <Tag style={TAG_STYLES[item.tag] || TAG_STYLES.feature}>{item.tag}</Tag>
                  <span className="dn-date">{item.date}</span>
                </div>
                <div className="dn-card-title">{item.title}</div>
              </div>
              <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
            </div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">🚀</div>
            <div className="dn-empty-text">No updates logged yet. Ship something!</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: Future Updates ──────────────────────────────────────────────────────
function FutureTab({ items, onAdd, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", priority: "medium" });

  const handleSave = () => {
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", body: "", priority: "medium" });
    setAdding(false);
  };

  const byPriority = (p) => items.filter((i) => i.priority === p);

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            🔮 <span>Future Updates</span>
          </div>
          <div className="dn-content-desc">Features and ideas queued for future versions.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="dn-stats-bar">
            <div className="dn-stat">
              <span className="dn-stat-num">{items.filter((i) => i.priority === "high").length}</span> high
            </div>
            <div className="dn-stat">
              <span className="dn-stat-num">{items.length}</span> total
            </div>
          </div>
          <button
            className={`dn-add-btn${adding ? " cancel" : ""}`}
            onClick={() => setAdding(!adding)}
          >
            {adding ? "✕ Cancel" : "+ Add Feature"}
          </button>
        </div>
      </div>

      {adding && (
        <div className="dn-form-card">
          <input
            className="dn-input"
            placeholder="Feature name..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="dn-input dn-textarea"
            placeholder="Describe it..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <select
            className="dn-input"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
          >
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
          <button className="dn-save-btn" onClick={handleSave}>
            Add to Backlog
          </button>
        </div>
      )}

      <div className="dn-cards">
        {["high", "medium", "low"].map((p) =>
          byPriority(p).length > 0 ? (
            <div key={p} className="dn-priority-group">
              <div className="dn-priority-label">
                <Tag style={PRIORITY_STYLES[p]}>{p} priority</Tag>
              </div>
              {byPriority(p).map((item) => (
                <div className="dn-card" key={item.id}>
                  <div className="dn-card-top">
                    <div className="dn-card-title">{item.title}</div>
                    <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
                  </div>
                  {item.body && <div className="dn-card-body">{item.body}</div>}
                </div>
              ))}
            </div>
          ) : null
        )}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">🔮</div>
            <div className="dn-empty-text">Backlog is empty. What's next?</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: What I Learned ──────────────────────────────────────────────────────
function LearnedTab({ items, onAdd, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ topic: "", body: "" });

  const handleSave = () => {
    if (!form.topic.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ topic: "", body: "" });
    setAdding(false);
  };

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            🧠 <span>What I Learned</span>
          </div>
          <div className="dn-content-desc">Lessons, gotchas, and insights from building SonicVerse.</div>
        </div>
        <button
          className={`dn-add-btn${adding ? " cancel" : ""}`}
          onClick={() => setAdding(!adding)}
        >
          {adding ? "✕ Cancel" : "+ Add Lesson"}
        </button>
      </div>

      {adding && (
        <div className="dn-form-card">
          <input
            className="dn-input"
            placeholder="Topic / concept..."
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
          />
          <textarea
            className="dn-input dn-textarea"
            placeholder="What did you learn? Be specific..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
            style={{ minHeight: "110px" }}
          />
          <button className="dn-save-btn" onClick={handleSave}>
            Save Lesson
          </button>
        </div>
      )}

      <div className="dn-cards">
        {items.map((item, i) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-top">
              <div>
                <div className="dn-card-meta">
                  <span style={{ color: "#00b4ff", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="dn-card-title">{item.topic}</div>
              </div>
              <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
            </div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">🧠</div>
            <div className="dn-empty-text">Nothing logged yet. Every bug is a lesson waiting.</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: Bug Log ─────────────────────────────────────────────────────────────
function BugsTab({ items, onAdd, onDelete, onToggleStatus }) {
  const today = new Date().toISOString().slice(0, 10);
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", body: "", status: "open", date: today });

  const handleSave = () => {
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", body: "", status: "open", date: today });
    setAdding(false);
  };

  const open = items.filter((i) => i.status === "open").length;
  const fixed = items.filter((i) => i.status === "fixed").length;

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            🐛 <span>Bug Log</span>
          </div>
          <div className="dn-content-desc">Track issues, their status, and how they got fixed.</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="dn-stats-bar">
            <div className="dn-stat">
              <span className="dn-stat-num" style={{ color: "#ff4d6a" }}>{open}</span> open
            </div>
            <div className="dn-stat">
              <span className="dn-stat-num" style={{ color: "#00e5a0" }}>{fixed}</span> fixed
            </div>
          </div>
          <button
            className={`dn-add-btn${adding ? " cancel" : ""}`}
            onClick={() => setAdding(!adding)}
          >
            {adding ? "✕ Cancel" : "+ Log Bug"}
          </button>
        </div>
      </div>

      {adding && (
        <div className="dn-form-card">
          <input
            className="dn-input"
            placeholder="Bug title..."
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="dn-input dn-textarea"
            placeholder="Describe the bug and fix..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <div className="dn-input-row">
            <input
              type="date"
              className="dn-input"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <select
              className="dn-input"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="open">Open</option>
              <option value="investigating">Investigating</option>
              <option value="fixed">Fixed</option>
            </select>
          </div>
          <button className="dn-save-btn" onClick={handleSave}>Log Bug</button>
        </div>
      )}

      <div className="dn-cards">
        {items.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-top">
              <div>
                <div className="dn-card-meta">
                  <span className={`dn-bug-status ${item.status}`}>
                    {item.status === "open" ? "● " : item.status === "fixed" ? "✓ " : "◌ "}
                    {item.status}
                  </span>
                  {item.date && <span className="dn-date">{item.date}</span>}
                </div>
                <div className="dn-card-title">{item.title}</div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                <button
                  className="dn-delete-btn"
                  style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", color: "#00e5a0", borderRadius: "4px" }}
                  onClick={() => onToggleStatus(item.id)}
                  title="Toggle status"
                >
                  {item.status === "fixed" ? "↺ reopen" : "✓ fix"}
                </button>
                <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
              </div>
            </div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">🐛</div>
            <div className="dn-empty-text">No bugs logged. Either you're clean or you haven't found them yet.</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: Tech Stack ──────────────────────────────────────────────────────────
function StackTab({ items, onAdd, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ name: "", icon: "📦", version: "", role: "" });

  const handleSave = () => {
    if (!form.name.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ name: "", icon: "📦", version: "", role: "" });
    setAdding(false);
  };

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            ⚙️ <span>Tech Stack</span>
          </div>
          <div className="dn-content-desc">Every tool, library, and service powering SonicVerse.</div>
        </div>
        <button
          className={`dn-add-btn${adding ? " cancel" : ""}`}
          onClick={() => setAdding(!adding)}
        >
          {adding ? "✕ Cancel" : "+ Add Tech"}
        </button>
      </div>

      {adding && (
        <div className="dn-form-card">
          <div className="dn-input-row">
            <input
              className="dn-input"
              placeholder="Emoji icon"
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              style={{ maxWidth: "80px" }}
            />
            <input
              className="dn-input"
              placeholder="Name (e.g. React)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="dn-input"
              placeholder="Version"
              value={form.version}
              onChange={(e) => setForm({ ...form, version: e.target.value })}
              style={{ maxWidth: "120px" }}
            />
          </div>
          <input
            className="dn-input"
            placeholder="Role / what it does..."
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          />
          <button className="dn-save-btn" onClick={handleSave}>Add to Stack</button>
        </div>
      )}

      <div className="dn-stack-grid">
        {items.map((item) => (
          <div className="dn-stack-card" key={item.id}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="dn-stack-icon">{item.icon}</div>
              <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
            </div>
            <div className="dn-stack-name">{item.name}</div>
            {item.version && <div className="dn-stack-version">{item.version}</div>}
            {item.role && <div className="dn-stack-role">{item.role}</div>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty" style={{ gridColumn: "1/-1" }}>
            <div className="dn-empty-icon">⚙️</div>
            <div className="dn-empty-text">No stack entries yet.</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: Code Snippets ───────────────────────────────────────────────────────
function SnippetsTab({ items, onAdd, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", lang: "js", body: "", code: "" });

  const handleSave = () => {
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", lang: "js", body: "", code: "" });
    setAdding(false);
  };

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            📎 <span>Code Snippets</span>
          </div>
          <div className="dn-content-desc">Reusable patterns and reference code for the project.</div>
        </div>
        <button
          className={`dn-add-btn${adding ? " cancel" : ""}`}
          onClick={() => setAdding(!adding)}
        >
          {adding ? "✕ Cancel" : "+ Add Snippet"}
        </button>
      </div>

      {adding && (
        <div className="dn-form-card">
          <div className="dn-input-row">
            <input
              className="dn-input"
              placeholder="Snippet title..."
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <select
              className="dn-input"
              value={form.lang}
              onChange={(e) => setForm({ ...form, lang: e.target.value })}
              style={{ maxWidth: "100px" }}
            >
              {["js", "jsx", "css", "bash", "json", "html", "ts"].map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <input
            className="dn-input"
            placeholder="Short description..."
            value={form.body}
            onChange={(e) => setForm({ ...form, body: e.target.value })}
          />
          <textarea
            className="dn-input dn-textarea"
            placeholder="Paste your code here..."
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            style={{ fontFamily: "monospace", minHeight: "120px" }}
          />
          <button className="dn-save-btn" onClick={handleSave}>Save Snippet</button>
        </div>
      )}

      <div className="dn-cards">
        {items.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-top">
              <div>
                <div className="dn-card-meta">
                  <span className="dn-snippet-lang">{item.lang}</span>
                </div>
                <div className="dn-card-title">{item.title}</div>
              </div>
              <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
            </div>
            {item.body && <div className="dn-card-body">{item.body}</div>}
            {item.code && <pre className="dn-code-block">{item.code}</pre>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">📎</div>
            <div className="dn-empty-text">No snippets saved. Add useful code patterns here.</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Tab: Resources ───────────────────────────────────────────────────────────
function ResourcesTab({ items, onAdd, onDelete }) {
  const [adding, setAdding] = useState(false);
  const [form, setForm] = useState({ title: "", url: "", category: "docs", note: "" });

  const handleSave = () => {
    if (!form.title.trim()) return;
    onAdd({ ...form, id: Date.now() });
    setForm({ title: "", url: "", category: "docs", note: "" });
    setAdding(false);
  };

  return (
    <>
      <div className="dn-content-header">
        <div>
          <div className="dn-content-title">
            🔗 <span>Resources</span>
          </div>
          <div className="dn-content-desc">Documentation, tutorials, and useful links.</div>
        </div>
        <button
          className={`dn-add-btn${adding ? " cancel" : ""}`}
          onClick={() => setAdding(!adding)}
        >
          {adding ? "✕ Cancel" : "+ Add Resource"}
        </button>
      </div>

      {adding && (
        <div className="dn-form-card">
          <div className="dn-input-row">
            <input
              className="dn-input"
              placeholder="Title..."
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <select
              className="dn-input"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              style={{ maxWidth: "130px" }}
            >
              {["docs", "tutorial", "tool", "reference", "routing", "build", "styling", "deployment"].map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <input
            className="dn-input"
            placeholder="URL..."
            value={form.url}
            onChange={(e) => setForm({ ...form, url: e.target.value })}
          />
          <input
            className="dn-input"
            placeholder="Short note..."
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
          />
          <button className="dn-save-btn" onClick={handleSave}>Save Resource</button>
        </div>
      )}

      <div className="dn-cards">
        {items.map((item) => (
          <div className="dn-card" key={item.id}>
            <div className="dn-card-top">
              <div>
                <div className="dn-card-meta">
                  <span className="dn-resource-category">{item.category}</span>
                </div>
                <div className="dn-card-title" style={{ marginTop: "0.25rem" }}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dn-resource-link"
                      style={{ fontFamily: "var(--font-display)", fontSize: "1rem", letterSpacing: "0.04em" }}
                    >
                      {item.title} ↗
                    </a>
                  ) : (
                    item.title
                  )}
                </div>
              </div>
              <button className="dn-delete-btn" onClick={() => onDelete(item.id)}>✕</button>
            </div>
            {item.note && <div className="dn-card-body">{item.note}</div>}
          </div>
        ))}
        {items.length === 0 && (
          <div className="dn-empty">
            <div className="dn-empty-icon">🔗</div>
            <div className="dn-empty-text">No resources saved yet.</div>
          </div>
        )}
      </div>
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const DevNotes = () => {
  const [activeTab, setActiveTab] = useState("progression");
  const [data, setData] = useState(SEED);

  const addItem = (tab, item) =>
    setData((prev) => ({ ...prev, [tab]: [...prev[tab], item] }));

  const deleteItem = (tab, id) =>
    setData((prev) => ({ ...prev, [tab]: prev[tab].filter((i) => i.id !== id) }));

  const toggleBugStatus = (id) =>
    setData((prev) => ({
      ...prev,
      bugs: prev.bugs.map((b) =>
        b.id === id
          ? { ...b, status: b.status === "fixed" ? "open" : b.status === "open" ? "investigating" : "fixed" }
          : b
      ),
    }));

  const getCount = (tab) => data[tab]?.length ?? 0;

  const sections = [...new Set(TABS.map((t) => t.section))];

  return (
    <div className="dn-page">
      {/* Top Bar */}
      <header className="dn-topbar">
        <div className="dn-topbar-left">
          <div className="dn-logo-dot" />
          <span className="dn-topbar-title">
            Sonic<span>Verse</span> — Dev Notes
          </span>
        </div>
        <span className="dn-topbar-meta">
          {new Date().toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
        </span>
      </header>

      {/* Body */}
      <div className="dn-body">
        {/* Sidebar */}
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

        {/* Main Content */}
        <main className="dn-main">
          {activeTab === "progression" && (
            <ProgressionTab
              items={data.progression}
              onAdd={(item) => addItem("progression", item)}
              onDelete={(id) => deleteItem("progression", id)}
            />
          )}
          {activeTab === "future" && (
            <FutureTab
              items={data.future}
              onAdd={(item) => addItem("future", item)}
              onDelete={(id) => deleteItem("future", id)}
            />
          )}
          {activeTab === "learned" && (
            <LearnedTab
              items={data.learned}
              onAdd={(item) => addItem("learned", item)}
              onDelete={(id) => deleteItem("learned", id)}
            />
          )}
          {activeTab === "bugs" && (
            <BugsTab
              items={data.bugs}
              onAdd={(item) => addItem("bugs", item)}
              onDelete={(id) => deleteItem("bugs", id)}
              onToggleStatus={toggleBugStatus}
            />
          )}
          {activeTab === "stack" && (
            <StackTab
              items={data.stack}
              onAdd={(item) => addItem("stack", item)}
              onDelete={(id) => deleteItem("stack", id)}
            />
          )}
          {activeTab === "snippets" && (
            <SnippetsTab
              items={data.snippets}
              onAdd={(item) => addItem("snippets", item)}
              onDelete={(id) => deleteItem("snippets", id)}
            />
          )}
          {activeTab === "resources" && (
            <ResourcesTab
              items={data.resources}
              onAdd={(item) => addItem("resources", item)}
              onDelete={(id) => deleteItem("resources", id)}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default DevNotes;
