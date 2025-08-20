# Memory Match — GitHub Pages + Global Leaderboard (Firebase)

This package is **static** (no server needed) and ready for **GitHub Pages**.
It includes profile, global leaderboard, and a separate Custom mode (no scoring).

## Deploy on GitHub Pages
1) Create a repo, upload all files in this folder.
2) Settings → Pages → Deploy from branch → `main` → `/(root)`.
3) Open your Pages URL.

## Enable Global Leaderboard
1) Firebase Console → Create Project
2) Authentication → Sign-in method → **Enable Anonymous**
3) Firestore Database → Create Database (Production)
4) Copy **static/config.example.js** to **static/config.js** and paste web app config:
```js
window.FIREBASE_CONFIG = {
  apiKey: "...", authDomain: "...", projectId: "...",
  storageBucket: "...", messagingSenderId: "...", appId: "..."
};
```
5) Firestore Rules:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{nameKey} {
      allow read: if true;
      allow create, update: if request.auth != null
        && ( !exists(/databases/$(database)/documents/users/$(nameKey))
             || get(/databases/$(database)/documents/users/$(nameKey)).data.ownerUid == request.auth.uid );
    }
    match /scores/{nameKey} {
      allow read: if true;
      allow create, update: if request.auth != null
        && get(/databases/$(database)/documents/users/$(nameKey)).data.ownerUid == request.auth.uid
        && request.resource.data.best is int
        && ( !exists(/databases/$(database)/documents/scores/$(nameKey))
             || request.resource.data.best > get(/databases/$(database)/documents/scores/$(nameKey)).data.best );
    }
  }
}
```
