import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";

  
import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

test("it is exported as a default export", () => {
  try {
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
