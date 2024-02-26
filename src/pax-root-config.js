import { registerApplication, start } from "single-spa";
import jsonData from '../src/aplications.json';

fetch('https://run.mocky.io/v3/d2c61dab-6892-434c-8dac-22aabf9c42cb')
  .then(resp => resp.json())
  .then(data => {
    data.applications.forEach(app => {
      if (app.name === "@pax/pax-login") {
        // Tratamento especial para a aplicação de login
        registerApplication({
          name: app.name,
          app: () => System.import(app.package),
          activeWhen: (location) => {
            if (location.pathname === '/') {
              window.location.href = '/login';
              return false;
            }
            return location.pathname === '/login';
          }
        });
      } else {
        // Registro normal para outras aplicações
        registerApplication({
          name: app.name,
          app: () => System.import(app.package),
          activeWhen: app.exact
            ? (location) => location.pathname === app.activeWhen
            : [app.activeWhen],
        });
      }
    });
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  });