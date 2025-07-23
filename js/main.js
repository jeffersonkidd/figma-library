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

