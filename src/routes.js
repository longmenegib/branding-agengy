/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import Portfolio from "./views/Portfolio";
import Register from "./views/Register";
import BrandingDesign from "./views/services/BrandingDesign";
import SocialDesign from "./views/services/SocialDesign";
import WebsiteDesign from "./views/services/WebsiteDesign";
import MobileDesign from "./views/services/MobileDesign";
import Article from "./views/Article";


var routes = [
 
  {
    path: "/home",
    component: <Home />,
  },
  {
    path: "blogs",
    component: <Blog />,
  },
  {
    path: "portfolio",
    component: <Portfolio />,
  },
  {
    path: "contact",
    component: <Contact />,
  },
  {
    path: "login",
    component: <Login />,
  },
  {
    path: "register",
    component: <Register />,
  },
  {
    path: "services/brand-design",
    component: <BrandingDesign />,
  },
  {
    path: "services/website-design",
    component: <WebsiteDesign />
  },
  {
    path: "services/logo-design",
    component: <MobileDesign />
  },
  {
    path: "services/social-media-design",
    component: <SocialDesign />
  },
  {
    path: "blog/article",
    component: <Article />
  },
];
export default routes;
