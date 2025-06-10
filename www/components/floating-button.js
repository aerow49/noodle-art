import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class FloatingButton extends LitElement {
    render() {
        return html`<h1>test</h1>`;
    }
}
customElements.define('floating-button', FloatingButton);

class MyElement extends LitElement {
    render() {
        return html`
      <div>Hello from MyElement!</div>
    `;
    }
}
customElements.define('my-element', MyElement);