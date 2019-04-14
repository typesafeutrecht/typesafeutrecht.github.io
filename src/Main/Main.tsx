import React, { Component } from "react";
import "./Main.css";
import Sponsors from "./Sponsors/Sponsors";

export default () => (
  <div className="main">
    <article className="announcements">
      <p className="pinned">
        <b>LOCATION WANTED</b> <br /> if your company is in Utrecht and we can
        have a meetup there, drop me a mail:{" "}
        <a href="mailto:mike@typesafeutrecht.net">mike@typesafeutrecht.net</a>
      </p>
      <p className="pinned">
        <b>SPEAKERS WANTED</b> <br /> if you're interested at presenting –
        please fill in{" "}
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfvBCsceH_zZiRWCMPZi54ztpKWMQdz56y1HnnL4JKEao5Ufg/viewform?usp=sf_link"
        >
          the form
        </a>
        ! This could be a great start of your speaking career.
      </p>
    </article>
    <article className="manifesto">
      <p>
        We are <a href="/">Typesafe Utrecht</a>, a meetup group, which welcomes
        everyone, who has an opinion on strong typing in programming languages.
        Let's go cross-lingual and discuss the basics of type systems, compare
        different implementations and follow the newest developments.
        Developers, computer scientists and all sympathetic are welcome.
      </p>
      <p>
        Our perfect programming world is the world of{" "}
        <a
          href="https://en.wikipedia.org/wiki/Partial_function#Total_function"
          target="_blank"
        >
          Total Functions
        </a>{" "}
        where by checking the signature you can immediately be sure of what the
        function does and doesn't do, because 95% of them don't have any side
        effects.
      </p>
      <p>
        Where functions can be passed around easily, because they are first
        class and{" "}
        <a href="https://en.wikipedia.org/wiki/Higher-order_function">
          higher order
        </a>
        .
      </p>
      <p>
        Where types guide the implementation, and{" "}
        <a href="https://en.wikipedia.org/wiki/Parametric_polymorphism">
          parametric polymorphism
        </a>{" "}
        helps to create powerful reusable abstractions.
      </p>
      <p>
        Where good{" "}
        <a href="https://en.wikipedia.org/wiki/Type_inference">
          type inference
        </a>{" "}
        helps the code to be not only rock-solid, but also beautiful.
      </p>
      <p>
        Fantasy? No, it's functional programming. We need to embrace functional
        programming in typesafe languages, because it not only greatly improves
        development experience quality of our programs...
      </p>
    </article>

    <Sponsors />
  </div>
);
