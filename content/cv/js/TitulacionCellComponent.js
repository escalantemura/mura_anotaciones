import {dataTitulacion} from "./DataForTitulacion.js";

class TitulacionCell extends HTMLElement {
  connectedCallback() {
    const logoSrc = this.getAttribute("logo-src");
    const title = this.getAttribute("title");
    const university = this.getAttribute("university");

    this.innerHTML = `
      <table class="titulacion">
        <tr>
          <td class="titulacion-logo">
            <img alt="${title} Logo" src="img/${logoSrc}">
          </td>
          <td class="titulacion-contenido">
            <h2>${title}</h2>
            <p>${university}</p>
          </td>
        </tr>
      </table>
    `;
  }
}

// Definir el nuevo componente
customElements.define("titulacion-cell", TitulacionCell);

// Función para generar la tabla automáticamente
function generateTitulacionTable(data, sectionTitle, sectionId) {
  const section = document.createElement("section");
  section.id = sectionId; // Asignar el ID a la sección
  const h2 = document.createElement("h2");
  h2.textContent = sectionTitle;
  section.appendChild(h2);

  const table = document.createElement("table");
  data.forEach((item) => {
    const titulacionCell = document.createElement("titulacion-cell");
    titulacionCell.setAttribute("logo-src", item["logo-src"]);
    titulacionCell.setAttribute("title", item.title);
    titulacionCell.setAttribute("university", item.university);
    table.appendChild(titulacionCell);
  });

  section.appendChild(table);
  return section;
}

// Generar la tabla
const titulacionSection = generateTitulacionTable(dataTitulacion, "Titulación", "titulacion");

// Insertar la tabla en el body
document.addEventListener('DOMContentLoaded', () => {
  const titulacionContainer = document.getElementById("titulacion-container");

  if (titulacionContainer) {
    titulacionContainer.appendChild(titulacionSection);
  }
});
