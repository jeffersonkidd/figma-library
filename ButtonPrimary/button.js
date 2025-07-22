class ButtonPrimary extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <button class="button-primary"><slot>Button</slot></button>
      <style>
        .button-primary {
          background: var(--colors-primary);
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .button-primary:hover {
          background: var(--colors-primary-hover);
        }
        .button-primary:focus {
          outline: 2px solid var(--colors-primary-focus);
          outline-offset: -1px;
        }
        .button-primary:active {
          background: var(--colors-primary-active);
        }
      </style>
    `;
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('button-primary', ButtonPrimary);