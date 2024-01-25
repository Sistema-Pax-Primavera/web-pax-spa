import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@pax/pax-login",
  app: () => System.import("@pax/pax-login"),
  activeWhen: ["/pax-primavera"]
});

start({
  urlRerouteOnly: true,
});
