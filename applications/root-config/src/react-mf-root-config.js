import { constructRoutes, constructApplications, constructLayoutEngine } from "single-spa-layout";
import { registerApplication, start, navigateToUrl } from "single-spa"; //eslint-disable-line
  
 
const routes = constructRoutes(
      document.querySelector("#single-spa-layout")
    );
   
const applications = constructApplications({
      routes,
      loadApp: ({ name })=> System.import(name)
    });

const layoutEngine = constructLayoutEngine({
      routes,
      applications,
        active: false,
    });
applications.forEach(registerApplication);
layoutEngine.activate();
start();
  