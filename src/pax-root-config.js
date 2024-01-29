import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pax/pax-login",
  app: () => import("@pax/pax-login"),
  activeWhen: (location) => location.pathname === '/login',
  //activeWhen: ["/pax-primavera"]
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

// registerApplication({
//   name: "@pax/pax-associado",
//   app: () => System.import("@pax/pax-associado"),
//   activeWhen: ["/associado"]
//   // activeWhen: (location) => location.pathname.startsWith('/pax-primavera/associado'),
// });

start({
  urlRerouteOnly: true,
});
