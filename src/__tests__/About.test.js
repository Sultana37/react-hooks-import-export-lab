import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import About from "../components/About";
import React from "react";
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
test("it is exported as a default export", () => {
  try {
    expect(() => render(<About />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
