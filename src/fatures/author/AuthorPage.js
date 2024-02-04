import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

// eslint-disable-next-line
export default () => (
  <Container>
    <Header title="Creator" />
    <Section
      title="Andrzej Hryniewicz"
      body={
        <>
          <p>
            Hi, my name is <strong>Andrzej Hryniewicz</strong> and I am the creator of
            this amazing app. I am a student of <em>Front End Developing school</em> at the
            UInternet Scholl YouCode, and I developed this app as a one of final project
            for my school. I have always been passionate about{" "}
            <strong>programming</strong> and <strong>web development</strong>,
            and I enjoy learning new technologies and creating useful
            applications. Some of the skills and tools that I used for this
            project are:{" "}
            <em>
              HTML, CSS, JavaScript, React, 
            </em>
            .
          </p>
          <p>
            This app is designed to help people <strong>daily tasks</strong>{" "}
            in a fun and interactive way.  The
            app is user-friendly, responsive, and secure, and it works on any
            device. I hope you will enjoy using this app as much as I enjoyed
            creating it.
          </p>
          <p>
            If you want to know more about me or my work, you can contact me at{" "}
            <em>andrzej.krzysztof.hryniewicz@gmail.com</em> or follow me on{" "}
            <em>Twitter, Facebook, or LinkedIn</em>. I would love to hear your
            feedback and suggestions. Thank you for visiting my website and have
            a great day!
          </p>
        </>
      }
    />
  </Container>
);
