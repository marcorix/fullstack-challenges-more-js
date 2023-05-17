/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { Application } from "stimulus";

import EventListenerController from "./controllers/event_listener_controller.js";

// eslint-disable-next-line import/extensions

window.Stimulus = Application.start();
Stimulus.register("event-listener", EventListenerController);
