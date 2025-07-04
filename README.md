# YouTube Clone (Frontend Only)

This is a simple YouTube-inspired video browsing app built using React and Tailwind CSS. It was developed as part of a frontend development assignment, and includes core features like a video feed, like button, and watch later list. There is no backend — everything runs in the browser using sessionStorage.

## Features

- Home page with a video feed using reusable video cards
- Like functionality using useState
- Add to Watch Later and remove from it
- Watch Later page showing only saved videos
- Navbar with site title, search input, and watch later count
- Clean, responsive design using Tailwind

## Folder Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── VideoCard.jsx
├── pages/
│ ├── Home.jsx
│ └── WatchLater.jsx
├── data/
│ └── dummyVideos.js
├── App.jsx
└── index.css


## Tech Stack

- React (created using Vite)
- Tailwind CSS for styling
- React Router for navigation
- sessionStorage for state persistence

## How State is Handled

- useState is used to manage likes and watch later lists
- sessionStorage is used to retain state between page visits
- React Router is used for switching between Home and Watch Later pages

## Data

The videos are loaded from a static file `dummyVideos.js` and displayed as cards. Each card contains a title, channel name, views, and a thumbnail image.

## Notes

- There is no backend or database
- All data is temporary and stored in sessionStorage
- The UI is intentionally kept clean and functional without too many animations 

## Author

Shreeram Jadhav  
GitHub: [https://github.com/Shreeram26](https://github.com/Shreeram26)

---

