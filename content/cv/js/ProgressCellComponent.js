import {dataAnalisis, dataBackend, dataDiseno, dataInterfaz, dataOfimatica} from './DataForTables.js';

class ProgressCell extends HTMLElement {
  connectedCallback() {
    const level = this.getAttribute("level");
    const imgSrc = this.getAttribute("img-src");
    const labelText = this.getAttribute("label");
    const bodyText = this.getAttribute("bodytext");

    this.innerHTML = `
      <div class="td-content">
        <div class="progress-bar">
          <div class="${level}"></div>
        </div>
        <div class="td-content-text">
          <img alt="${labelText} Logo" src="img/${imgSrc}">
          <h3>${labelText}</h3>
          ${bodyText ? `<p>${bodyText}</p>` : ''}
        </div>
      </div>
    `;
  }
}

// Definir el nuevo componente
customElements.define("progress-cell", ProgressCell);

// Función para generar la tabla automáticamente
function generateProgressTable(data, sectionTitle, sectionId) {
  const section = document.createElement("section");
  section.id = sectionId; // Asignar el ID a la sección

  // Crear el contenedor del sello
  const selloContainer = document.createElement("div");
  selloContainer.classList.add("sello-container");

  // Crear la imagen del sello
  const selloImg = document.createElement("img");
  selloImg.src = "img/Sellorojo.png";
  selloImg.alt = "sello";

  // Crear el span para el texto
  const selloSpan = document.createElement("span");
  selloSpan.textContent = sectionTitle;

  // Agregar la imagen y el span al contenedor del sello
  selloContainer.appendChild(selloImg);
  selloContainer.appendChild(selloSpan);

  // Agregar el contenedor del sello a la sección
  section.appendChild(selloContainer);

  const table = document.createElement("table");
  table.classList.add("iconpresentator");

  data.forEach((item) => {
    const trInside = document.createElement("tr");
    const progressCell = document.createElement("progress-cell");
    progressCell.setAttribute("img-src", item["img-src"]);
    progressCell.setAttribute("label", item.label);
    progressCell.setAttribute("level", item.level);
    if (item.bodyText) {
      progressCell.setAttribute("bodytext", item.bodyText);
    }
    trInside.appendChild(progressCell);
    table.appendChild(trInside);
  });

  section.appendChild(table);
  return section;
}

// Generar la tabla
const analisisSection = generateProgressTable(dataAnalisis, "Análisis", "analisis-datos");
const ofimaticaSection = generateProgressTable(dataOfimatica, "Ofimática", "ofimatica");
const disenoSection = generateProgressTable(dataDiseno, "Diseño gráfico y de video", "diseno");
const interfazSection = generateProgressTable(dataInterfaz, "Interfaces (Frontend)", "interfaz");
const backendSection = generateProgressTable(dataBackend, "Algoritmia (Backend)", "backend");

// Insertar la tabla en el body
document.addEventListener('DOMContentLoaded', () => {
  const analisisContainer = document.getElementById("analisis-container");
  const ofimaticaContainer = document.getElementById("ofimatica-container");
  const disenoContainer = document.getElementById("diseno-container");
  const interfazContainer = document.getElementById("interfaz-container");
  const backendContainer = document.getElementById("backend-container");

  if (analisisContainer) {
    analisisContainer.appendChild(analisisSection);
  }
  if (ofimaticaContainer) {
    ofimaticaContainer.appendChild(ofimaticaSection);
  }
  if (disenoContainer) {
    disenoContainer.appendChild(disenoSection);
  }
  if (interfazContainer) {
    interfazContainer.appendChild(interfazSection);
  }
  if (backendContainer) {
    backendContainer.appendChild(backendSection);
  }
});
