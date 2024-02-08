const template = document.createElement("template");
template.innerHTML = `
<style>
div {
    color: green;
    margin: 50px;
}
</style>
<div>
    You have entered <p></p>
</div>
`;
class Name extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["name-attribute"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "name-attribute") {
      this.shadowRoot.querySelector("p").innerHTML = `: ${newVal}`;
    }
  }
}

window.customElements.define("input-name", Name);

let handleName = (e) => {
  const nameElement = document.querySelector("input-name");
  nameElement.setAttribute("name-attribute", e.target.value);
};
