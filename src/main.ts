import "./style.css";

const app = document.querySelector<HTMLParagraphElement>("#app");
if (app) {
  app.textContent = "If you can see this, Tailwind is working.";
}
