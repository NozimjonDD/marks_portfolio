import "./App.css";
import "./assets/css/style.css";
import "./assets/css/media_query.css";
import "./assets/css/swap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import { useEffect, useState, useRef } from "react";
import loadingImg from "./assets/images/load_gif.gif";

function App() {
  const [loading, setLoading] = useState(true);
  const progressRef = useRef(null);
  const hasAnimated = useRef(false);
  const colors = ["#fff"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      const progressSection = progressRef.current;
      const items = progressSection.querySelectorAll(".progress-item");
      const observerOptions = { threshold: 0.1 };
      const progressContainer = document.querySelector(".percent__progress");
      function handleIntersection(entries, observer) {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          items.forEach((item, index) => {
            let num = parseInt(item.dataset.num);
            let count = 0;
            let color = colors[index % colors.length];
            let interval = setInterval(() => {
              if (count === num) {
                clearInterval(interval);
              } else {
                count++;
                item.style.background = `conic-gradient(${color} ${count}%, #80808047 0deg)`;
                item.setAttribute("data-value", `${count}%`);
                progressContainer.innerHTML = `${count}%`;
              }
            }, 15);
          });
          observer.unobserve(progressSection);
          hasAnimated.current = true; // Mark that the animation has run
        }
      }

      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );
      observer.observe(progressSection);

      return () => observer.disconnect();
    }
  }, [colors]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="App">
      <div className="site_contain">
        <div className="fix-bg">
          <div className="Ellipse1"></div>
          <div className="Ellipse2"></div>

          <div className="container">
            {loading && (
              <div className="page-loader">
                <div id="progress" ref={progressRef}>
                  <div data-num="100" className="progress-item">
                    <div className="loader__img">
                      <img src={loadingImg} alt="loader" />
                    </div>
                  </div>
                </div>
                <h3 className="percent__progress"></h3>
              </div>
            )}
            {!loading && <Home />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
