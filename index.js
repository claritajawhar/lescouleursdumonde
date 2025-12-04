// index.js

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".country-grid");
  const list = window.countriesList;

  if (!grid || !Array.isArray(list)) return;

  list.forEach((country) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "country-card";

    card.innerHTML = `
      <div class="country-card__image-wrapper">
        <img src="${country.cardImage}" alt="${country.name}" loading="lazy" />
      </div>
      <div class="country-card__label">${country.name}</div>
      <div class="country-card__meta">${country.sections.length} cultural snapshots</div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `country.html?id=${country.id}`;
    });

    grid.appendChild(card);
  });
});