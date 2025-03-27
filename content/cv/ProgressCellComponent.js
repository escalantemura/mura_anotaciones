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
          <img alt="${labelText} Logo" src="../../img/cv/${imgSrc}">
          <h3>${labelText}</h3>
          ${bodyText ? `<p>${bodyText}</p>` : ''}
        </div>
      </div>
    `;
  }
}

// Definir el nuevo componente
customElements.define("progress-cell", ProgressCell);
