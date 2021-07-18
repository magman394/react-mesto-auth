import React from "react";
import { currentYear } from "../utils/constants";
function Footer() {
    return (
        <footer className="footer">
          <p className="footer__copyright">&copy; {currentYear} Mesto Russia</p>
        </footer>
  );
}
export default Footer;