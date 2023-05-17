import { Controller } from "stimulus";

export default class extends Controller {
  connect() {
    console.log("hello from my first controller!");
  }

  disable() {
    console.log("disable!")
    this.element.disabled = true
    this.element.innerText = "Bingo!";
    const audio = new Audio("sound.mp3");
    audio.play();
  }
}
