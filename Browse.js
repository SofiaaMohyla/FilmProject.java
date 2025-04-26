const shows = [
    "The Queen’s Gambit", "Breaking Bad", "Dark", "Money Heist",
    "Stranger Things", "The Witcher", "Peaky Blinders", "Wednesday"
  ];
  
  const grid = document.getElementById("browse-grid");
  const search = document.getElementById("search");
  
  function renderShows(filter = "") {
    grid.innerHTML = "";
    shows
      .filter(title => title.toLowerCase().includes(filter.toLowerCase()))
      .forEach(title => {
        const div = document.createElement("div");
        div.className = "show-card";
        div.innerHTML = `<h3>${title}</h3>`;
        grid.appendChild(div);
      });
  }
  
  search.addEventListener("input", () => renderShows(search.value));
  
  document.addEventListener("DOMContentLoaded", () => {
    renderShows();
  });
  