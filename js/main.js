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
        <img src="${this.getAttribute('image')}" alt="Card Image" class="card-image" />
        <hr class="divider line" />
        <h2 class="text-2xl sans-bold">${this.getAttribute('title')}</h2>
        <p class="sans-regular">${this.getAttribute('body')}</p>
      </div>
      `
    ;
  }
}

customElements.define('my-card', MyCard);