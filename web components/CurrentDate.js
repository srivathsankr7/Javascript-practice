class CurrentDate extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const now = new Date();
    this.textContent = now.toLocaleDateString();
  }
}
customElements.define("current-date", CurrentDate);
