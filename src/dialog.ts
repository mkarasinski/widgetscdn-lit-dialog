import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('custom-dialog')
export class Dialog extends LitElement {

  static styles = css`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .dialog {
      border: 1px solid #ccfbf1;
      border-radius: 8px;
      padding: 24px;
      background-color: #0d9488;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      color: #ccfbf1;
      min-width: 320px;
      max-width: 90%;
      width: auto;
      height: auto;
      flex-shrink: 0;
      max-height: 90vh;
      z-index: 1001;
      position: relative;
    }

    .dialog-content {
      margin-top: 8px;
    }
    
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      color: #ccfbf1;
      font-size: 20px;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .close-button:hover {
      background-color: rgba(204, 251, 241, 0.2);
    }
  `;

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  title = '';

  private _closeDialog() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('dialog-closed', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return this.open
      ? html`
        <div class="overlay" @click=${(e: Event) => {
          if (e.target === e.currentTarget) this._closeDialog();
        }}>
          <div class="dialog">
            ${this.title ? html`<h2>${this.title}</h2>` : ''}
            <button class="close-button" @click=${this._closeDialog}>×</button>
            <div class="dialog-content">
              <slot></slot>
            </div>
          </div>
        </div>
      `
      : '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'custom-dialog': Dialog
  }
}
