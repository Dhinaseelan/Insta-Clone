📸 Insta Clone — Single File Demo
A compact, single‑file Instagram‑style demo built with React (UMD) and plain CSS.
This file is ready to copy & paste into a single HTML file and open in your browser. It demonstrates a responsive feed, stories, suggestions, and a simple profile editor with graceful fallbacks when image URLs are missing.

🚀 Features
- Responsive, mobile‑first layout (desktop sidebar + mobile bottom nav)
- Posts feed that can fetch from a local JSON API (/posts)
- Stories bar with horizontal swipe on small screens
- Suggestions panel and profile editor with initials fallback for missing images
- No build tools required for the single‑file demo — open the HTML directly

📦 What’s included
- Single HTML file with:
- Inline CSS for layout and responsive styles
- Inline JavaScript using React UMD (no bundler required)
- Components: LeftNav, Stories, Posts, Suggestions, ProfileCard
- Fetch calls to http://localhost:3001 for optional live data

▶️ Quick start (single file)
- Create a file named insta-single.html.
- Copy & paste the single‑file HTML content (the demo I provided earlier) into insta-single.html.
- Open insta-single.html in your browser (double‑click or drag into the browser).
- Optional: Run a local JSON API to see live data (instructions below).

🧩 Optional: Run a local JSON API (json-server)
If you want the demo to fetch real data, use json-server:
- Install json-server (if needed):
npm install -g json-server


- Create a db.json file in the same folder with this minimal content:
{
  "posts": [
    {
      "id": 1,
      "user": { "username": "alice", "profilePic": "" },
      "imageUrl": "https://via.placeholder.com/800x600",
      "likes": 12,
      "caption": "Nice day"
    },
    {
      "id": 2,
      "user": { "username": "bob", "profilePic": "" },
      "imageUrl": "https://via.placeholder.com/800x600",
      "likes": 34,
      "caption": "Sunset vibes"
    }
  ],
  "Story": [
    { "id": 1, "user": { "username": "alice", "profilePic": "" } },
    { "id": 2, "user": { "username": "bob", "profilePic": "" } }
  ],
  "suggestions": [
    { "id": 1, "username": "charlie", "profilePic": "" },
    { "id": 2, "username": "diana", "profilePic": "" }
  ],
  "profile": [
    {
      "id": 1,
      "username": "you",
      "profilePic": "",
      "posts": 2,
      "following": 10
    }
  ],
  "followers": [
    { "id": 1, "username": "follower1", "profilePic": "" },
    { "id": 2, "username": "follower2", "profilePic": "" }
  ]
}


- Start the server:
json-server --watch db.json --port 3001


- Reload the HTML file in your browser — the demo will fetch data from http://localhost:3001.

🛠️ Notes & tips
- No build step: the single file uses React UMD from a CDN so you can open it directly. For production or larger projects, use a bundler (Vite, CRA).
- Icons: the demo uses Bootstrap Icons via CDN. If icons don’t appear, check your internet connection or replace icons with text.
- Missing images: the UI shows initials when profilePic is empty — no broken image icons.
- CORS / API: if you run json-server on port 3001, the demo fetches data from http://localhost:3001. Ensure the server is running and accessible.
- Customization: edit the inline CSS and JS inside the single file to tweak layout, colors, or component behavior.

✅ Next steps (ideas)
- Replace alert calls with a toast/snackbar for better UX.
- Add client‑side validation and image preview for profile updates.
- Convert the single file into a modular React app (Vite) when you want to expand features.
- Replace json-server with a real backend for persistent storage.

📄 License
Free to use for learning and prototyping. Adapt and reuse as you like.
🔗 Link :https://dhinaseelan.github.io/Insta-Clone/
If you want, I can paste the complete single HTML file again here so you can copy it in one go. Would you like that?
