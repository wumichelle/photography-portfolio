import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Code2,
  Github,
  Mail,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import "./styles.css";

const photos = [
  {
    id: 1,
    title: "Golden Hour Street",
    category: "Street",
    location: "Toronto, Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "Warm light and city movement create a cinematic street scene.",
    technical:
      "This photo focuses on side lighting, leading lines, and background separation.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    tags: ["street", "golden hour", "urban"],
  },
  {
    id: 2,
    title: "Quiet Forest Path",
    category: "Nature",
    location: "Ontario, Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "A calm nature scene focused on texture, depth, and natural light.",
    technical:
      "The centered composition and repeated vertical tree lines guide the viewer's eye.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    tags: ["nature", "forest", "calm"],
  },
  {
    id: 3,
    title: "City Reflection",
    category: "Architecture",
    location: "Kitchener-Waterloo, Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "Glass, symmetry, and reflection create a structured urban image.",
    technical:
      "The image uses geometric balance and contrast between the sky and building edges.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    tags: ["architecture", "city", "reflection"],
  },
  {
    id: 4,
    title: "Macro Details",
    category: "Macro",
    location: "Waterloo, Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "A close-up study of texture, contrast, and small visual details.",
    technical:
      "Close framing and soft light emphasize surface texture without harsh shadows.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    tags: ["macro", "texture", "details"],
  },
  {
    id: 5,
    title: "Evening Skyline",
    category: "City",
    location: "Toronto, Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "A skyline photo focused on mood, atmosphere, and evening color.",
    technical:
      "Highlights and shadows are balanced to preserve both skyline detail and sky color.",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1600&q=80",
    tags: ["city", "skyline", "evening"],
  },
  {
    id: 6,
    title: "Portrait in Soft Light",
    category: "Portrait",
    location: "Canada",
    year: "2026",
    camera: "Replace with your camera",
    description: "A simple portrait concept using soft light and clean background separation.",
    technical:
      "Diffused light, negative space, and a simple background keep attention on the subject.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1600&q=80",
    tags: ["portrait", "soft light", "people"],
  },
];

const categories = ["All", ...Array.from(new Set(photos.map((photo) => photo.category)))];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      const matchesCategory =
        selectedCategory === "All" || photo.category === selectedCategory;

      const searchableText = `${photo.title} ${photo.category} ${photo.location} ${photo.tags.join(
        " "
      )}`.toLowerCase();

      const matchesSearch = searchableText.includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const selectedPhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  function openPhoto(photo) {
    const index = filteredPhotos.findIndex((item) => item.id === photo.id);
    setSelectedPhotoIndex(index);
  }

  function closePhoto() {
    setSelectedPhotoIndex(null);
  }

  function goNext() {
    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + 1) % filteredPhotos.length;
    });
  }

  function goPrevious() {
    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    });
  }

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="site-header">
        <nav className="nav">
          <div className="brand">
            <div className="brand-icon">
              <Camera size={22} />
            </div>
            <div>
              <p>Photography × Code</p>
              <h1>Michelle Wu</h1>
            </div>
          </div>

          <div className="nav-links">
            <a href="#gallery">Gallery</a>
            <a href="#project">Project</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button className="theme-button" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light" : "Dark"}
          </button>
        </nav>

        <section className="hero">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="eyebrow">Incoming CS student building frontend projects</span>
            <h2>A photography portfolio built to show coding skill.</h2>
            <p>
              This site combines photography, UI design, structured data, filtering,
              search, responsive layout, animations, and an interactive image viewer.
              It is designed as a personal portfolio project for future software
              development opportunities.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#gallery">
                View gallery
              </a>
              <a className="secondary-button" href="#project">
                See coding features
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-grid"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {photos.slice(0, 4).map((photo, index) => (
              <div
                className={index === 0 || index === 3 ? "hero-image tall" : "hero-image"}
                key={photo.id}
              >
                <img src={photo.image} alt={photo.title} />
              </div>
            ))}
          </motion.div>
        </section>
      </header>

      <main>
        <section id="gallery" className="section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Interactive Gallery</p>
              <h3>Photos with searchable metadata</h3>
            </div>

            <div className="search-box">
              <Search size={18} />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search photos..."
              />
            </div>
          </div>

          <div className="category-row">
            {categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? "category active" : "category"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="photo-grid">
            {filteredPhotos.map((photo) => (
              <motion.button
                layout
                key={photo.id}
                className="photo-card"
                onClick={() => openPhoto(photo)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img src={photo.image} alt={photo.title} />
                <div className="photo-card-content">
                  <div className="card-title-row">
                    <h4>{photo.title}</h4>
                    <span>{photo.category}</span>
                  </div>
                  <p className="muted">{photo.location}</p>
                  <p>{photo.description}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </section>

        <section id="project" className="section project-section">
          <div>
            <p className="section-kicker">Coding Project</p>
            <h3>What this site demonstrates</h3>
            <p className="muted large">
              This portfolio is meant to show practical frontend skills, not only
              photography. Each feature was chosen to demonstrate a skill that future
              employers, clubs, and recruiters can understand quickly.
            </p>
          </div>

          <div className="feature-grid">
            {[
              ["Responsive UI", "Works across phone, tablet, and desktop using a flexible grid layout."],
              ["Search and filtering", "Photo data is stored as structured objects and filtered by category or text."],
              ["Interactive modal", "Users can open photos, view metadata, and navigate between images."],
              ["Dark mode", "Theme state changes the visual system across the whole application."],
              ["Reusable code", "Gallery cards, photo data, filters, and UI sections are organized for expansion."],
              ["Deployment-ready", "This can be pushed to GitHub and deployed on Vercel as a live portfolio."],
            ].map(([title, text]) => (
              <div className="feature-card" key={title}>
                <Code2 size={24} />
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div>
            <p className="section-kicker">About</p>
            <h3>Incoming Computer Science student</h3>
          </div>
          <p>
            I am interested in software development, design, and photography. I built
            this website to practice frontend development and to show how coding can
            turn a simple photo collection into an interactive user experience. My goal
            is to keep adding projects, improve the code, and use this as a portfolio
            for future internships, clubs, and coding opportunities.
          </p>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <h3>Let’s connect</h3>
            <p>
            </p>
          </div>
          <div className="contact-links">
            <a href="https://github.com/wumichelle" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/michelle-wu-649383304/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:wucmichelle@gmail.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </section>
      </main>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
            >
              <button className="modal-close" onClick={closePhoto}>
                <X size={20} />
              </button>

              <div className="modal-layout">
                <img src={selectedPhoto.image} alt={selectedPhoto.title} />

                <div className="modal-info">
                  <div>
                    <span className="modal-category">{selectedPhoto.category}</span>
                    <h3>{selectedPhoto.title}</h3>
                    <p className="muted">
                      {selectedPhoto.location} · {selectedPhoto.year}
                    </p>
                    <p>{selectedPhoto.description}</p>

                    <div className="technical-note">
                      <h4>Technical note</h4>
                      <p>{selectedPhoto.technical}</p>
                    </div>

                    <p className="muted">Camera: {selectedPhoto.camera}</p>

                    <div className="tag-row">
                      {selectedPhoto.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-buttons">
                    <button onClick={goPrevious}>
                      <ChevronLeft size={18} /> Previous
                    </button>
                    <button onClick={goNext}>
                      Next <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
