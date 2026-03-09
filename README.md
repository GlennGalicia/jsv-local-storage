# 🐦 Tweet List with LocalStorage

A Vanilla JavaScript project built to practice browser storage, dynamic DOM rendering, and persistent data management. This is part of my JavaScript learning portfolio.

## 🚀 Live Demo

[View on Netlify](https://tweet-list-miller.netlify.app/)

## 📌 About the Project

A mini tweet manager where users can write, save, and delete short messages. Every tweet added to the list is automatically saved to the browser's **LocalStorage**, so the data persists even after refreshing the page or closing the browser tab. Each tweet can be individually removed, and the list stays in sync with storage at all times.

## 🧠 Concepts Practiced

### DOM Scripting
- Selecting elements with `querySelector`
- Creating HTML elements dynamically (`createElement`, `appendChild`)
- Cleaning up the DOM with a `while` loop (`removeChild`)
- Listening to `submit` events and blocking default behavior with `e.preventDefault()`
- Attaching inline `onclick` handlers to dynamically created elements
- Auto-removing error alerts with `setTimeout`

### LocalStorage (Browser Storage API)
- Saving data with `localStorage.setItem()`
- Reading data with `localStorage.getItem()`
- Parsing stored JSON strings back into arrays with `JSON.parse()`
- Serializing JavaScript arrays into JSON strings with `JSON.stringify()`
- Keeping storage in sync after every add or delete operation

### JavaScript Vanilla

| Concept                             | Where it's used                                            |
| ----------------------------------- | ---------------------------------------------------------- |
| Object Literal                      | Each tweet is stored as `{ id, tweet }`                    |
| `Date.now()`                        | Generates a unique numeric ID for each tweet               |
| Spread operator `[...arr]`          | Creates new array copies on add/delete (immutable updates) |
| `Array.filter()`                    | Removes a tweet from the array by matching its `id`        |
| `Array.forEach()`                   | Iterates over the tweets array to render each item         |
| `JSON.parse()` / `JSON.stringify()` | Converts between objects and LocalStorage strings          |
| `DOMContentLoaded`                  | Loads saved tweets from storage when the page is ready     |
| `setTimeout`                        | Auto-removes the error message after 3 seconds             |

## 🗂️ Project Structure

```
├── index.html
├── js/
│   └── app.js
├── css/
│   ├── custom.css
│   ├── normalize.css
│   └── skeleton.css
```

## ⚙️ How It Works

1. **Page load** — `DOMContentLoaded` fires and reads any existing tweets from `localStorage`, parses them with `JSON.parse()`, and renders them immediately.
2. **Add tweet** — on form submit, the textarea value is validated. If not empty, a new object `{ id: Date.now(), tweet }` is created and added to the array using the spread operator. The list re-renders and storage is updated.
3. **Empty validation** — if the textarea is empty, `mostrarError()` injects a red `<p>` alert that auto-removes after 3 seconds via `setTimeout`.
4. **Delete tweet** — each tweet item has an **X** button with an `onclick` that calls `eliminarTweet(id)`, which filters out that tweet by `id`, re-renders the list, and syncs storage.
5. **Sync storage** — `sincronizarStorage()` runs after every change, always writing the latest version of the tweets array to `localStorage`.

## 🛠️ Technologies

- HTML5
- CSS3 (Skeleton CSS grid)
- JavaScript ES6+ (Vanilla — no frameworks or libraries)
- Web API: LocalStorage

## 📚 What I Learned

This project introduced me to **LocalStorage** as a way to make data survive beyond a single browser session — without a server or database. The key insight was understanding that LocalStorage only stores strings, so arrays and objects need to be converted with `JSON.stringify()` on save and `JSON.parse()` on load. Keeping the storage always in sync with the JavaScript array (instead of reading from the DOM) reinforces the same data-first pattern seen in the previous projects.

## 👨‍💻 Author

*Glenn Fernando Galicia Aviña* — [GitHub](https://github.com/GlennGalicia) · [LinkedIn](https://www.linkedin.com/in/glenn-galicia/)

> Part of my JavaScript learning journey. Feedback is welcome! 🙌
