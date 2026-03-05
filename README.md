# InstaClone – Single File React App

A simple **Instagram-like clone** built using **React (CDN)**, **HTML**, **CSS**, and **JavaScript** in a **single HTML file**.
This project demonstrates a basic social media interface with **stories, posts, suggestions, followers, and profile editing**.

---

## 🚀 Features

* 📱 **Responsive Layout**

  * Desktop: Left navigation, feed, and right sidebar
  * Mobile: Bottom navigation

* 📸 **Stories Section**

  * Displays user stories fetched from API

* 🖼 **Posts Feed**

  * Shows posts with:

    * User avatar
    * Image
    * Likes
    * Caption
    * Action icons (like, comment, share)

* 👤 **Profile Editor**

  * Update username
  * Update profile picture URL
  * View posts, followers, following count

* 🤝 **Suggestions**

  * Follow suggested users
  * Adds them to followers list

* 👥 **Followers List**

  * View followers
  * Unfollow users

---

## 🛠 Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **React 18 (CDN version)**
* **Bootstrap Icons**
* **JSON Server (for fake API)**

---

## 📂 Project Structure

```
project-folder
│
├── index.html      # Main application file (React + UI)
├── db.json         # JSON Server database
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install JSON Server

```bash
npm install -g json-server
```

---

### 2️⃣ Create `db.json`

Example database:

```json
{
  "profile": [
    {
      "id": 1,
      "username": "john_doe",
      "profilePic": "",
      "posts": 5,
      "following": 120
    }
  ],
  "Story": [
    {
      "id": 1,
      "user": {
        "username": "alex",
        "profilePic": ""
      }
    }
  ],
  "posts": [
    {
      "id": 1,
      "user": {
        "username": "alex",
        "profilePic": ""
      },
      "imageUrl": "https://picsum.photos/600/400",
      "likes": 120,
      "caption": "Beautiful day!"
    }
  ],
  "suggestions": [
    {
      "id": 1,
      "username": "maria"
    },
    {
      "id": 2,
      "username": "david"
    }
  ],
  "followers": []
}
```

---

### 3️⃣ Start the API Server

```bash
json-server --watch db.json --port 3001
```

API will run at:

```
http://localhost:3001
```

---

### 4️⃣ Run the App

Simply open:

```
index.html
```

in your browser.

No build tools required.

---

## 🔗 API Endpoints

| Endpoint       | Description             |
| -------------- | ----------------------- |
| `/profile`     | Get profile information |
| `/posts`       | Get all posts           |
| `/Story`       | Get stories             |
| `/suggestions` | Suggested users         |
| `/followers`   | Followers list          |

---

## 📱 Responsive Design

The app adapts to different screen sizes:

**Desktop Layout**

```
Left Navigation | Feed | Suggestions + Profile
```

**Mobile Layout**

```
Feed
Bottom Navigation
```

---

## ✨ Future Improvements

* Like / Unlike functionality
* Comment system
* Create new posts
* Story upload
* Authentication
* Real backend (Node.js + MongoDB)

---

## 📄 License

This project is for **learning and educational purposes**.

---

## 👨‍💻 Author

Created as a **React practice project** to understand:

* React with CDN
* Component-based UI
* Fetch API
* Responsive layout
* JSON Server backend
## 🔗 link
