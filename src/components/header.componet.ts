import { html } from "../helpers/html.helper";
import { Component } from "../interfaces/component.interface";

const template = () =>
  html(`
    <header>
        Header Works
            <button id="btn-ingresar">
            Ingresar 
            </button>
            <button id="btn-theme">
            Cambiar Tema
            </button>
    </header>
`);

export const headerComponent: Component = {
  template: template(),
  afterViewInit() {
    const btnIngresar =
      this.template.querySelector<HTMLButtonElement>("#btn-ingresar");

    btnIngresar?.addEventListener("click", () => {
      alert("Ingresar");
    });

    const btntheme =
      this.template.querySelector<HTMLButtonElement>("#btn-theme")!;

    btntheme.onclick = () => {
      document.querySelector("html")?.classList.toggle("dark");
    };
  },
};
