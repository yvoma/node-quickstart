import config  from "./Config";
import Quickstart from "./src/consumers/Quickstart";

const quickstart = new Quickstart(config);
quickstart.start(config.PORT);

