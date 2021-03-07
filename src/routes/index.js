import Home from 'containers/Home';
import HotelsDiscovery from 'containers/HotelsDiscovery';
import {ROUTES} from './routes';

const routes = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: ROUTES.HOTELS_DISCOVERY,
    component: HotelsDiscovery,
  },
];

export default routes;
