// Archivo para futuros scripts de JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Verifica si estamos en la página de temporadas buscando el selector
    const seasonSelector = document.getElementById('season-select');
    if (seasonSelector) {
        const seasonInfos = document.querySelectorAll('.season-info');
        const seasonChapters = document.querySelectorAll('.season-chapters');

        function updateSeasonInfo() {
            const selectedValue = seasonSelector.value;

            // Oculta todos los contenedores de información
            seasonInfos.forEach(info => {
                info.classList.remove('active');
            });

            // Oculta todos los contenedores de capítulos
            seasonChapters.forEach(chapters => {
                chapters.classList.remove('active');
            });

            // Muestra solo el contenedor de información seleccionado
            const selectedInfo = document.getElementById(selectedValue);
            if (selectedInfo) {
                selectedInfo.classList.add('active');
            }

            // Muestra solo el contenedor de capítulos seleccionado
            const selectedChapters = document.getElementById(selectedValue + '-chapters');
            if (selectedChapters) {
                selectedChapters.classList.add('active');
            }
        }

        // Agrega el evento 'change' al selector
        seasonSelector.addEventListener('change', updateSeasonInfo);

        // Muestra la información de la primera temporada por defecto al cargar la página
        updateSeasonInfo();
    }
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

const images = document.querySelectorAll(".gallery img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});