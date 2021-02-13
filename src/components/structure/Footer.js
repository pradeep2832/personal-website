import React from "react";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
          Built at <i className="fas fa-home"></i> by{" "}
          <a href="https://github.com/pradeep2832" className="has-text-white">
            <strong>Pradeep</strong>
          </a>
        </p>
        <p> Credits to <i className="fas fa-home"></i> by{" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
          <strong>José Coelho</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
