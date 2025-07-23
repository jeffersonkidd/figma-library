class MyButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <button class="btn">
        ${this.getAttribute("label")}
      </button>
    `;
  }
}

customElements.define("my-button", MyButton);

class MyCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="card">
        <h2>${this.getAttribute('title')}</h2>
        <p>${this.getAttribute('body')}</p>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);