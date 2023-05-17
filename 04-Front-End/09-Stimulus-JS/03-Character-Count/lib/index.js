import { Application } from "@hotwired/stimulus";

// TODO: Import the Stimulus Controller here
import character_count_controller from "./controllers/character_count_controller.js";

window.Stimulus = Application.start();
// TODO: Register your Stimulus Controller below
Stimulus.register("character-count", character_count_controller)
