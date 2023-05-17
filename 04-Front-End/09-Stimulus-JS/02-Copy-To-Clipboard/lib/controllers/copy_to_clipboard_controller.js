import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input"];
  static values = {
    feedbackText: String
  }

  connect() {
    console.log("hello from copy to clipboard!")
  }

  copy(event) {
    navigator.clipboard.writeText(this.inputTarget.value);
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = this.feedbackTextValue;
  }
}
