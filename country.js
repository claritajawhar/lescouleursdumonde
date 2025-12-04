// country.js

document.addEventListener("DOMContentLoaded", () => {
  const list = window.countriesList;
  const data = window.countriesData;
  if (!Array.isArray(list) || !data) return;

  const params = new URLSearchParams(window.location.search);
  const idFromUrl = params.get("id");

  const fallbackId = list[0].id;
  const currentId = idFromUrl && data[idFromUrl] ? idFromUrl : fallbackId;
  const country = data[currentId];

  // DOM refs
  const nameEl = document.querySelector("[data-country-name]");
  const introEl = document.querySelector("[data-country-intro]");
  const heroImgEl = document.querySelector("[data-country-hero-image]");
  const sectionsContainer = document.getElementById("country-sections");
  const selectEl = document.getElementById("country-select");
  const prevLink = document.querySelector("[data-prev-country]");
  const nextLink = document.querySelector("[data-next-country]");

  // hero
  if (nameEl) nameEl.textContent = country.name;
  if (introEl) introEl.textContent = country.intro;
  if (heroImgEl) {
    heroImgEl.src = country.heroImage;
    heroImgEl.alt = `${country.name} – paysage culturel`;
  }
  document.title = `Les couleurs du monde – ${country.name}`;

  // sections
  if (sectionsContainer) {
    sectionsContainer.innerHTML = "";
    country.sections.forEach((section, index) => {
      const block = document.createElement("article");
      block.className = "culture-block";
      block.innerHTML = `
        <div class="culture-block__text">
          <p class="culture-block__eyebrow">Instantané ${index + 1}</p>
          <h2 class="culture-block__title">${section.smallTitle}</h2>
          <p class="culture-block__body">${section.text}</p>
        </div>
        <div class="culture-block__image">
          <img src="${section.image}" alt="${section.smallTitle}" loading="lazy" />
        </div>
      `;
      sectionsContainer.appendChild(block);
    });
  }

  // dropdown
  if (selectEl) {
    selectEl.innerHTML = "";
    list.forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.name;
      if (c.id === country.id) opt.selected = true;
      selectEl.appendChild(opt);
    });

    selectEl.addEventListener("change", (e) => {
      const newId = e.target.value;
      if (!newId) return;
      window.location.href = `country.html?id=${newId}`;
    });
  }

  // prev / next
  const idx = list.findIndex((c) => c.id === country.id);
  const prevIdx = (idx - 1 + list.length) % list.length;
  const nextIdx = (idx + 1) % list.length;
  const prevCountry = list[prevIdx];
  const nextCountry = list[nextIdx];

  if (prevLink && prevCountry) {
    prevLink.href = `country.html?id=${prevCountry.id}`;
    prevLink.innerHTML = `← <span>${prevCountry.name}</span>`;
  }

 	if (nextLink && nextCountry) {
    nextLink.href = `country.html?id=${nextCountry.id}`;
    nextLink.innerHTML = `<span>${nextCountry.name}</span> →`;
  }
});