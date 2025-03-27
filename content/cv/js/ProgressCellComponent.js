// /Users/mura/PhpstormProjects/mura_anotaciones/content/cv/ProgressCellComponent.js

// Importar los datos desde data.js
import { dataAnalisis, dataOfimatica, dataDiseno, dataInterfaz, dataBackend } from './DataForTables.js';

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
  const h2 = document.createElement("h2");
  h2.textContent = sectionTitle;
  section.appendChild(h2);

  const table = document.createElement("table");
  const tr = document.createElement("tr");

  data.forEach((item) => {
    const td = document.createElement("td");
    const progressCell = document.createElement("progress-cell");
    progressCell.setAttribute("img-src", item["img-src"]);
    progressCell.setAttribute("label", item.label);
    progressCell.setAttribute("level", item.level);
    if (item.bodyText) {
      progressCell.setAttribute("bodytext", item.bodyText);
    }
    td.appendChild(progressCell);
    tr.appendChild(td);
  });

  table.appendChild(tr);
  section.appendChild(table);
  return section;
}

// Generar la tabla
const analisisSection = generateProgressTable(dataAnalisis, "Análisis de datos", "analisis-datos");
const ofimaticaSection = generateProgressTable(dataOfimatica, "Ofimática", "ofimatica");
const disenoSection = generateProgressTable(dataDiseno, "Diseño gráfico y Estructura de documentos", "diseno");
const interfazSection = generateProgressTable(dataInterfaz, "Interfaz de usuario (Frontend/ UI/UX)", "interfaz");
const backendSection = generateProgressTable(dataBackend, "Informática (Backend/Business Logic)", "backend");

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
