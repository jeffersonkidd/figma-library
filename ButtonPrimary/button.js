class ButtonPrimary extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <button class="button-primary"><slot>Button</slot></button>
      <style>
        .button-primary {
          background: var(--color-primary, #033C5A);
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .button-primary:hover {
          background: var(--color-primary-hover, #05507a);
        }
      </style>
    `;
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('button-primary', ButtonPrimary);