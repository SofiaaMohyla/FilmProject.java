document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const welcomeTitle = document.getElementById("welcome-title");
  
    if (!user) {
      window.location.href = "Main.html";
      return;
    }
  
    welcomeTitle.textContent = `Welcome back, ${user.name}!`;
    renderMovies();
    loadSavedMovies();
  });
  
  const sampleMovies = [
    { title: "The Queen’s Gambit", genre: "Drama", year: 2020 },
    { title: "Stranger Things", genre: "Sci-Fi", year: 2016 },
    { title: "Breaking Bad", genre: "Crime", year: 2008 },
    { title: "Dark", genre: "Mystery", year: 2017 },
    { title: "Money Heist", genre: "Thriller", year: 2017 },
    { title: "Peaky Blinders", genre: "Drama", year: 2013 },
    { title: "The Witcher", genre: "Fantasy", year: 2019 },
    { title: "Wednesday", genre: "Horror", year: 2022 }
  ];
  
  function renderMovies() {
    const movieGrid = document.getElementById("movie-grid");
    movieGrid.innerHTML = "";
    sampleMovies.forEach(movie => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <h3>${movie.title}</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <button class="save-btn" onclick="saveMovie('${movie.title}')">💾 Save</button>
      `;
      movieGrid.appendChild(card);
    });
  }
  
  function saveMovie(title) {
    let saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
    if (!saved.includes(title)) {
      saved.push(title);
      localStorage.setItem("savedMovies", JSON.stringify(saved));
      loadSavedMovies();
      alert(`✅ "${title}" added to Saved!`);
    } else {
      alert(`⚠️ "${title}" is already saved.`);
    }
  }
  
  function loadSavedMovies() {
    const savedList = document.getElementById("saved-list");
    const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
    savedList.innerHTML = "";
    if (saved.length === 0) {
      savedList.innerHTML = `<p class="dim">No saved shows yet.</p>`;
    } else {
      saved.forEach(title => {
        const item = document.createElement("div");
        item.className = "saved-item";
        item.textContent = `🎬 ${title}`;
        savedList.appendChild(item);
      });
    }
  }
  
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "LogIn.html";
  }
  