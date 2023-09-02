import config from "../config";

import Header from "../layouts/components/Header/Header";
import Space from "../layouts/components/Space/Space";
import About from "../layouts/components/About/About";
import MenuWater from "../layouts/components/MenuWater/MenuWater";
import Endow from "../layouts/components/Endow/Endow";
import MenuCake from "../layouts/components/MenuCake/MenuCake";
import Introduce from "../layouts/components/Introduce/Introduce";
import GetInfo from "../layouts/components/GetInfo/GetInfo";
import Team from "../layouts/components/Team/Team";
import Review from "../layouts/components/Review/Review";
import Slogan from "../layouts/components/Slogan/Slogan";
import Footer from "../layouts/components/Footer/Footer";

import Cart from "../layouts/components/Cart/Cart";
import Order from "../layouts/components/Order/Order";
import Login from "../layouts/components/Form/Login";
import Register from "../layouts/components/Form/Register";
import CartLayout from "../layouts/CartLayout/CartLayout";
import LoginLayout from "../layouts/LoginLayout/LoginLayout";

const publicRoutes = [
  { path: config.routes.home, component: Header },
  { path: config.routes.home, component: Space },
  { path: config.routes.home, component: About },
  { path: config.routes.home, component: MenuWater },
  { path: config.routes.home, component: Endow },
  { path: config.routes.home, component: MenuCake },
  { path: config.routes.home, component: Introduce },
  { path: config.routes.home, component: GetInfo },
  { path: config.routes.home, component: Team },
  { path: config.routes.home, component: Review },
  { path: config.routes.home, component: Slogan },
  { path: config.routes.home, component: Footer },

  { path: config.routes.cart, component: Cart, layout: CartLayout },
  { path: config.routes.order, component: Order, layout: CartLayout },
  { path: config.routes.login, component: Login, layout: LoginLayout },
  { path: config.routes.register, component: Register, layout: LoginLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
