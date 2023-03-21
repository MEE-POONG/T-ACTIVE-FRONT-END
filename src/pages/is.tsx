import { useState, useEffect } from "react";

const IndexPage: React.FC = () => {
  const [navbarTop, setNavbarTop] = useState<string>("-50px");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const bodyScroll = document.body.scrollTop;
    const elementScroll = document.documentElement.scrollTop;
    if (bodyScroll > 20 || elementScroll > 20) {
      setNavbarTop("0");
    } else {
      setNavbarTop("-50px");
    }
  };

  return (
    <>
      <style jsx>{`
        body {
          margin: 0;
          background-color: #f1f1f1;
          font-family: Arial, Helvetica, sans-serif;
        }

        #navbar {
          background-color: #333;
          position: fixed;
          top: ${navbarTop};
          width: 100%;
          display: block;
          transition: top 0.3s;
        }
      `}</style>
      <div id="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
      <div style={{ padding: "15px 15px 2500px", fontSize: "30px" }}>
        <p>
          <b>
            This example demonstrates how to slide down a navbar when the user
            starts to scroll the page.
          </b>
        </p>
        <p>Scroll to the top to hide the navbar.</p>
      </div>
    </>
  );
};

export default IndexPage;
