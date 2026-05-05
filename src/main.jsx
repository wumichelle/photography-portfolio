import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Code2,
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
    title: "Snow Through a Soft Window",
    category: "Winter",
    location: "Canada",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A quiet winter scene photographed through window blinds, creating a soft, dreamlike layer over the snow and trees.",
    technical:
      "The photo uses obstruction and diffusion as part of the composition. The blurred top and bottom edges frame the snowy trees and make the scene feel distant and calm.",
    image: "/photos/blurrywindow.jpg",
    tags: ["winter", "window", "soft-focus", "snow"],
  },
  {
    id: 2,
    title: "Coffee Beans in Focus",
    category: "Still Life",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A close still-life photo of coffee beans with a shallow depth of field and warm indoor tones.",
    technical:
      "The focus is placed on the beans inside the container while the background falls out of focus, showing control of depth and visual emphasis.",
    image: "/photos/coffee.jpg",
    tags: ["coffee", "still-life", "depth-of-field", "warm"],
  },
  {
    id: 3,
    title: "Gold Ribbons",
    category: "Abstract",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "An abstract close-up of metallic ribbon decoration, using reflection and shadow to create a dramatic composition.",
    technical:
      "The narrow focus and dark background isolate the gold strips, creating contrast between reflective texture and negative space.",
    image: "/photos/decoration.jpg",
    tags: ["abstract", "gold", "reflection", "macro"],
  },
  {
    id: 4,
    title: "Pan-Fried Dumplings",
    category: "Food",
    location: "Home Kitchen",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A food photo capturing my mom's dumplings in a pan, with browned edges and a wooden spoon adding a natural cooking detail.",
    technical:
      "The photo uses a low kitchen angle and warm highlights to show texture, steam, and the contrast between soft dumpling skin and crisp browned edges.",
    image: "/photos/dumplings.jpg",
    tags: ["food", "dumplings", "kitchen", "texture"],
  },
  {
    id: 5,
    title: "Fire in the Snow",
    category: "Night",
    location: "Porch",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A nighttime photo of an outdoor heater glowing against snow and darkness.",
    technical:
      "The bright flame becomes the central subject, while the snow and black background create high contrast and a strong winter atmosphere.",
    image: "/photos/fireoutside.jpg",
    tags: ["night", "fire", "snow", "contrast"],
  },
  {
    id: 6,
    title: "Red Anthurium",
    category: "Plants",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A bright red anthurium flower photographed against large green leaves.",
    technical:
      "The strong red-green color contrast makes the flower stand out, while the shallow depth of field softens the surrounding leaves.",
    image: "/photos/flamingoflower.jpg",
    tags: ["flower", "plants", "red", "green"],
  },
  {
    id: 7,
    title: "Small Vase, Red Flowers",
    category: "Still Life",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A small vase with red flowers placed among houseplants, creating a quiet still-life scene.",
    technical:
      "The composition uses layered objects and soft indoor light, with the red flowers acting as the visual focal point.",
    image: "/photos/flowerinvase.jpg",
    tags: ["still-life", "flowers", "vase", "home"],
  },
  {
    id: 8,
    title: "Forest Behind Glass",
    category: "Winter",
    location: "Canada",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A bright winter forest seen through a window, with the dark frame creating a natural border around the scene.",
    technical:
      "The window frame creates contrast and structure, while the overexposed snowy background gives the photo a washed, atmospheric feeling.",
    image: "/photos/forestwindow.jpg",
    tags: ["winter", "window", "forest", "light"],
  },
  {
    id: 9,
    title: "Garlic",
    category: "Still Life",
    location: "Kitchen",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A still-life photo of garlic on a wooden cutting board, using warm light and shallow focus.",
    technical:
      "The main garlic bulb is sharply placed while the foreground and background blur, creating depth and a soft kitchen mood.",
    image: "/photos/garlic.jpg",
    tags: ["garlic", "still-life", "kitchen", "warm-light"],
  },
  {
    id: 10,
    title: "Coffee Sample Tubes",
    category: "Still Life",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A still-life arrangement of coffee beans stored in glass tubes on a wooden stand.",
    technical:
      "The repeated vertical glass tubes create rhythm, while the warm brown tones connect the wood, beans, and background.",
    image: "/photos/IMG_2366.jpg",
    tags: ["coffee", "still-life", "glass", "wood"],
  },
  {
    id: 11,
    title: "Single Light Bulb",
    category: "Abstract",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A glowing bulb surrounded by blurred reflections and warm darkness.",
    technical:
      "The image uses bokeh and shallow focus to isolate the bulb, turning a simple object into a dramatic abstract composition.",
    image: "/photos/IMG_2374.jpg",
    tags: ["light", "abstract", "bokeh", "warm"],
  },
  {
    id: 12,
    title: "Squirrel Peeking",
    category: "Wildlife",
    location: "Backyard",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A squirrel peeks around a wooden post, creating a playful wildlife moment.",
    technical:
      "The post acts as a strong foreground shape, while the squirrel's eye contact creates personality and visual focus.",
    image: "/photos/IMG_2410.jpg",
    tags: ["wildlife", "squirrel", "backyard", "winter"],
  },
  {
    id: 13,
    title: "Pink Orchid Close-Up",
    category: "Plants",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A close-up of pink orchid petals with strong texture and color detail.",
    technical:
      "The frame fills with the orchid petals, emphasizing pattern, symmetry, and the fine lines in the flower.",
    image: "/photos/orchid.jpg",
    tags: ["orchid", "flower", "pink", "macro"],
  },
  {
    id: 14,
    title: "Orchid and Butterfly",
    category: "Plants",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "Pink orchids photographed with a butterfly decoration in the background, creating a layered floral composition.",
    technical:
      "The butterfly sits out of focus while the orchids remain sharp, using depth to separate foreground and background.",
    image: "/photos/pinkflowerbutterflu.jpg",
    tags: ["orchid", "butterfly", "plants", "depth"],
  },
  {
    id: 15,
    title: "Backlit Green Leaves",
    category: "Plants",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "Green leaves catching bright indoor light, creating a fresh and energetic plant study.",
    technical:
      "Backlighting highlights the edges of the leaves and creates separation from the darker background.",
    image: "/photos/plant.jpg",
    tags: ["plants", "green", "backlight", "indoor"],
  },
  {
    id: 16,
    title: "Red Flower Silhouette",
    category: "Plants",
    location: "Home",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A red flower photographed against window light, framed by surrounding leaves.",
    technical:
      "The backlight reveals the veins of the red petal and uses the darker leaves as a natural frame.",
    image: "/photos/redflower.jpg",
    tags: ["flower", "red", "backlight", "plants"],
  },
  {
    id: 17,
    title: "Squirrel in Snow",
    category: "Wildlife",
    location: "Backyard",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A squirrel standing in fresh snow beside a wooden post.",
    technical:
      "The subject stands out against the white snow, and the nearby post adds scale and structure to the composition.",
    image: "/photos/squirrelinsnow.jpg",
    tags: ["wildlife", "squirrel", "snow", "backyard"],
  },
  {
    id: 18,
    title: "Snow Lines Through the Window",
    category: "Winter",
    location: "Canada",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A snowy outdoor scene viewed through a dark window frame and branch lines.",
    technical:
      "The dark window grid contrasts with the bright snow, creating a framed geometric composition.",
    image: "/photos/window.jpg",
    tags: ["winter", "window", "snow", "geometry"],
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
            <span className="eyebrow">Currently a senior in highschool</span>
            <h2>My photography portfolio 2026</h2>
            <p>
              This site combines photography, UI design, structured data, filtering,
              search, responsive layout, animations, and an interactive image viewer.
              It is designed as a fun personal photography portfolio project!
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
              <h3>Photo Gallery</h3>
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
              This portfolio is meant to show some of my favourite photos with the addition of some practical frontend skills :)
            </p>
          </div>

          <div className="feature-grid">
            {[
              ["Responsive UI", "Works across phone, tablet, and desktop using a flexible grid layout."],
              ["Search and filtering", "Photo data is stored as structured objects and filtered by category or text."],
              ["Interactive modal", "Users can open photos, view information about the photos, and navigate between images."],
              ["Dark/light mode mode", "Customizable theme state changes the visual system across the whole application."],
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
            Hi, thanks for visiting my photography portfolio! I am interested in
            software development, design, art, photography, hackathons, piano, and
            ice skating. I built this website to practice frontend development turn
            my photography collection into an interactive user experience. My goal
            is to keep adding photos and improve the website. Feel free to send
            me an email at wucmichelle@gmail.com if you want to connect!
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
              GitHub
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
