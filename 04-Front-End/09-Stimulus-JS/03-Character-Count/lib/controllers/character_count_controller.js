import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['counter']
    static values = {
    limit: Number
  }

  connect() {
    console.log("characters controller")
  }

  updateCounter(event) {
    const numberOfCharacters = event.target.value.length;
    if (numberOfCharacters >= this.limitValue) {
      this.counterTarget.innerHTML = `Number of character exceeded by ${numberOfCharacters - this.limitValue}`;
      this.counterTarget.classList.add("text-danger");
    } else {
      this.counterTarget.innerHTML = `${numberOfCharacters} characters`;
    }
  }
}
