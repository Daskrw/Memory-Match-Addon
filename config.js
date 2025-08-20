// เริ่มต้น Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, set, push, get, child } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMQu94tf4my3KvFZth_n-bWvXj5Z2c5LA",
  authDomain: "aj-taa-fixed.firebaseapp.com",
  databaseURL: "https://aj-taa-fixed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aj-taa-fixed",
  storageBucket: "aj-taa-fixed.appspot.com",
  messagingSenderId: "816240311620",
  appId: "1:816240311620:web:09cf64eca2df004550ab11",
  measurementId: "G-SWK0WLZ97T"
};

// init firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ฟังก์ชันบันทึกคะแนน
function saveScore(playerName, score) {
  const scoresRef = ref(db, 'leaderboards');
  const newScoreRef = push(scoresRef);
  set(newScoreRef, {
    name: playerName,
    score: score,
    timestamp: Date.now()
  });
}

// ฟังก์ชันดึงคะแนนทั้งหมด
async function getScores() {
  const snapshot = await get(child(ref(db), 'leaderboards'));
  if (snapshot.exists()) {
    const scores = snapshot.val();
    const leaderboardDiv = document.getElementById("leaderboard");
    leaderboardDiv.innerHTML = ""; // ล้างก่อน

    // แปลง object → array
    Object.values(scores).forEach(scoreData => {
      const p = document.createElement("p");
      p.textContent = `${scoreData.name} - ${scoreData.score}`;
      leaderboardDiv.appendChild(p);
    });
  } else {
    console.log("No data available");
  }
}

