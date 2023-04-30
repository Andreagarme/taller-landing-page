import { footerComponent } from "../components/Footer";
import { headerComponent } from "../components/header.componet";
import { Page } from "../interfaces/page.interface";

export const homePage: Page = {
  components: [headerComponent, footerComponent],
};
