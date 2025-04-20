import config from './src/envs/Config';
import Quickstart from './src/consumers/Quickstart';

const quickstart = new Quickstart(config);
quickstart.start();
