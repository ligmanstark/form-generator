var l = Object.defineProperty
var s = (t, e, o) =>
  e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (t[e] = o)
var r = (t, e, o) => s(t, typeof e != 'symbol' ? e + '' : e, o)
import { i, r as n, a as f, x as c } from './lit-element-BOQ22vrq.js'
import { g as m } from './style-D1GnwkJ5.js'
class a extends i {
  render() {
    return c`
      <header class="header text-white p-4 text-center">
        <slot name="header"><h1>Мой Lit Проект</h1></slot>
      </header>
      <main class="main p-8">
        <slot></slot>
      </main>
      <footer class="footer p-4 text-center">
        <slot name="footer"><p>&copy; 2023 Мой Проект</p></slot>
      </footer>
    `
  }
}
r(a, 'styles', [
  n(m),
  f`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .header {
        background-color: var(--header-bg, #0f6bff);
      }

      .main {
        flex: 1;
      }

      .footer {
        background-color: var(--footer-bg, #f6f8fb);
      }
    `,
])
customElements.get('lit-layout') || customElements.define('lit-layout', a)
const u = 'lit-layout'
export { u as LAYOUT_TAG, a as LitLayout }
