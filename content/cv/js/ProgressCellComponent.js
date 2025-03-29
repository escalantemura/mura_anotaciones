import {dataAnalisis, dataBackend, dataDiseno, dataInterfaz, dataOfimatica} from './DataForTables.js';

class ProgressCell extends HTMLElement {
  connectedCallback() {
    const level = this.getAttribute("level");
    const imgSrc = this.getAttribute("img-src");
    const labelText = this.getAttribute("label");
    const bodyText = this.getAttribute("bodytext");

    this.innerHTML = `
      <div class="icon-content">
        <div class="progress-bar">
          <div class="${level}"></div>
        </div>
        <div class="icon-content-text">
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
  const mainDiv = document.createElement("div");
  mainDiv.id = sectionId; // Asignar el ID a la sección
  mainDiv.classList.add("div-conocimientos")

  const table1 = document.createElement("table")
  table1.classList.add("sello-container", "sello-table");
  const tr1 = document.createElement("tr")
  const td1 = document.createElement("td")

  // Crear la imagen del sello
  const selloImg = document.createElement("img");
  selloImg.src = "img/Sellorojo.png";
  selloImg.alt = "sello";

  // Crear el span para el texto
  const selloSpan = document.createElement("span");
  selloSpan.textContent = sectionTitle;

  td1.appendChild(selloImg);
  td1.appendChild(selloSpan);
  tr1.appendChild(td1);
  table1.appendChild(tr1)
  mainDiv.appendChild(table1);

  const table = document.createElement("table");
  table.classList.add("icon-presentator", "table-icon");

  data.forEach((item) => {
    const tr = document.createElement("tr");
    tr.classList.add("tr-icon");
    const td = document.createElement("td")
    td.classList.add("td-icon");
    const progressCell = document.createElement("progress-cell");
    progressCell.setAttribute("img-src", item["img-src"]);
    progressCell.setAttribute("label", item.label);
    progressCell.setAttribute("level", item.level);
    if (item.bodyText) {
      progressCell.setAttribute("bodytext", item.bodyText);
    }
    td.appendChild(progressCell)
    tr.appendChild(td);
    table.appendChild(tr);
  });

  mainDiv.appendChild(table);
  return mainDiv;
}

// Generar la tabla
const analisisSection = generateProgressTable(dataAnalisis, "Análisis de datos", "analisis-datos");
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
