import { useState } from "react";

function App() {
  const [animate, setAnimate] = useState();
  const images = [
    {
      img: "https://picsum.photos/200",
      animation: "fadeIn",
    },
    {
      img: "https://picsum.photos/200",
      animation: "shake",
    },
    {
      img: "https://picsum.photos/200",
      animation: "flipInX",
    },
    {
      img: "https://picsum.photos/200",
      animation: "rotateIn",
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className={`col-sm-6 text-center animated ${animate}`}>
            <img
              src="https://picsum.photos/200"
              className={`img-fluid img-thumbnail  ${animate}`}
            />
          </div>

          <div className="col-sm-6">
            <h1>React Animate.css</h1>
            <p>Smallest example of animation with css</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-6">
            <div className="row">
              {images.map((row, index) => {
                return (
                  <div key={index} className="col-sm-3">
                    <a
                      href="javacript:void();"
                      onClick={(e) => {
                        setAnimate(row.animation);
                      }}
                    >
                      <img src={row.img} className="img-thumbnail" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
