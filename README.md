# Photography + Code Portfolio

This is a custom photography portfolio website built with React and Vite.

## What it shows

- Responsive photo gallery
- Search and category filters
- Interactive image modal
- Previous/next navigation
- Dark/light mode
- Project section explaining the coding features
- About and contact sections

## How to run locally

```bash
npm install
npm run dev
```

## How to deploy on Vercel

1. Create a new GitHub repository.
2. Upload these files.
3. Go to Vercel.
4. Import the GitHub repository.
5. Use the default Vite settings.
6. Click Deploy.

## How to replace the sample photos

Open:

```text
src/main.jsx
```

Find the `photos` array near the top. Replace each `image` URL with your own image URL.

For real photos, easiest options:
- Put images in `public/photos/`
- Use paths like `/photos/my-photo.jpg`
- Or upload images to a service and use their URLs

Example:

```js
image: "/photos/waterloo-sunset.jpg"
```

## What to customize

- Replace `Michelle Wu` with your preferred name.
- Replace GitHub, LinkedIn, and email links.
- Replace sample photos and descriptions.
- Add more photos by copying one object inside the `photos` array.
