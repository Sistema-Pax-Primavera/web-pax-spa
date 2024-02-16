import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pax/pax-login",
  app: () => import("@pax/pax-login"),
  activeWhen: (location) => {
    if (location.pathname === '/') {
      window.location.href = '/login';
      return false;
    }
    return location.pathname === '/login';
  }
});

registerApplication({
  name: "@pax/pax-home",
  app: () => import("@pax/pax-home"),
  activeWhen: ["/pax-primavera"],
});

registerApplication({
  name: "@pax/pax-associado",
  app: () => import("@pax/pax-associado"),
  //activeWhen: (location) => location.pathname === '/pax-primavera',
  activeWhen: ["/associado"],
});

registerApplication({
  name: "@pax/pax-venda",
  app: () => import("@pax/pax-venda"),
  //activeWhen: (location) => location.pathname === '/pax-primavera',
  activeWhen: ["/vendas"],
});

start({
  urlRerouteOnly: true,
});
