const photos = [
  {
    id: 1,
    title: "Snow Through a Soft Window",
    category: "Winter",
    location: "Canada",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A quiet winter scene photographed through a foggy or textured window, creating a soft, dreamlike layer over the snow and trees.",
    technical:
      "The photo uses obstruction and diffusion as part of the composition. The blurred top and bottom edges frame the snowy trees and make the scene feel distant and calm.",
    image: "/photos/blurrywindow.jpeg",
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
    image: "/photos/coffee.jpeg",
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
      "An abstract close-up of metallic ribbon shapes, using reflection and shadow to create a dramatic composition.",
    technical:
      "The narrow focus and dark background isolate the gold strips, creating contrast between reflective texture and negative space.",
    image: "/photos/decoration.jpeg",
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
      "A food photo capturing dumplings in a pan, with browned edges and a wooden spoon adding a natural cooking detail.",
    technical:
      "The photo uses a low kitchen angle and warm highlights to show texture, steam, and the contrast between soft dumpling skin and crisp browned edges.",
    image: "/photos/dumplings.jpeg",
    tags: ["food", "dumplings", "kitchen", "texture"],
  },
  {
    id: 5,
    title: "Fire in the Snow",
    category: "Night",
    location: "Backyard",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A nighttime photo of an outdoor heater glowing against snow and darkness.",
    technical:
      "The bright flame becomes the central subject, while the snow and black background create high contrast and a strong winter atmosphere.",
    image: "/photos/fireoutside.jpeg",
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
    image: "/photos/flamingoflower.jpeg",
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
      "A small vase with red flowers placed among houseplants, creating a quiet domestic still-life scene.",
    technical:
      "The composition uses layered objects and soft indoor light, with the red flowers acting as the visual focal point.",
    image: "/photos/flowerinvase.jpeg",
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
    image: "/photos/forestwindow.jpeg",
    tags: ["winter", "window", "forest", "light"],
  },
  {
    id: 9,
    title: "Garlic in Morning Light",
    category: "Still Life",
    location: "Kitchen",
    year: "2026",
    camera: "Canon / DSLR",
    description:
      "A still-life photo of garlic on a wooden surface, using warm light and shallow focus.",
    technical:
      "The main garlic bulb is sharply placed while the foreground and background blur, creating depth and a soft kitchen mood.",
    image: "/photos/garlic.jpeg",
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
    image: "/photos/IMG_2366.jpeg",
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
    image: "/photos/IMG_2374.jpeg",
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
    image: "/photos/IMG_2410.jpeg",
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
    image: "/photos/orchid.jpeg",
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
    image: "/photos/pinkflowerbutterflu.jpeg",
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
    image: "/photos/plant.jpeg",
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
    image: "/photos/redflower.jpeg",
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
    image: "/photos/squirrelinsnow.jpeg",
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
    image: "/photos/window.jpeg",
    tags: ["winter", "window", "snow", "geometry"],
  },
];