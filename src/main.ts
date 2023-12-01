import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  accessor greeting = "Welcome";
}
