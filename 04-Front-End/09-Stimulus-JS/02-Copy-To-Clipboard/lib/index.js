import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import copy_clipboard_controller from "./controllers/copy_to_clipboard_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register('copy-to-clipboard', copy_clipboard_controller)
