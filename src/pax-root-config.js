import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pax/pax-login",
  app: () => System.import("@pax/pax-login"),
  activeWhen: ["/pax-primavera"]
});

// registerApplication({
//   name: "@pax/pax-associado",
//   app: () => System.import("@pax/pax-associado"),
//   // activeWhen: ["/pax-primavera/home"]
//   activeWhen: (location) => location.pathname.startsWith('/pax-primavera/associado'),
// });

start({
  urlRerouteOnly: true,
});
