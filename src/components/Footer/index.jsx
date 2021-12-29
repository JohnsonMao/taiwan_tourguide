import React from "react";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center bg-light py-2">
      <span className="fs-6 py-5">
        Taiwan Tourguide © Code:{" "}
        <a
          href="https://github.com/JohnsonMao"
          target="_blank"
          rel="noreferrer"
        >
          Mao
        </a>{" "}
        / Design:{" "}
        <a
          href="https://www.behance.net/KT_Designer"
          target="_blank"
          rel="noreferrer"
        >
          KT
        </a>
      </span>
    </footer>
  );
}
