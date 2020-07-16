import React from "react";
import { white } from "../util/color";

const Nav = () => {
  return (
    <nav>
      <style jsx>{`
        nav {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          height: 80px;
          background-color: ${white};
        }
      `}</style>
    </nav>
  );
};

export default Nav;
