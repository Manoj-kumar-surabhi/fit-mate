import "../css_files/home.css";

export default function home() {
  return (
    <div>
      <div className="home">
        <div className="div1">
          <h2 id="transform" style={{ margin: "0px" }}>
            TRANSFORM
          </h2>
          <h1 id="life" style={{ margin: "0px" }}>
            YOUR LIFE
          </h1>
          <p id="caring">
            Caring for your physical fitness is an investment in your present
            and future health and happiness. Prioritizing physical activity and
            adopting a healthy lifestyle can lead to a happier, more fulfilling
            life.
          </p>

          <h5 id="readmore"> READ MORE </h5>
        </div>

        <div className="div2">
          <h3 className="photo">image</h3>
        </div>
      </div>

      <div id="cards">
        <div className="card">
          <h4 style={{ margin: "0px" }}>GETTING</h4>
          <h3 style={{ margin: "0px" }}>STARTED</h3>
          <p> Heres a step-by-step guide to help you begin your journey</p>
        </div>

        <div className="card">
          <h4 style={{ margin: "0px" }}>BEGGINER</h4>
          <h3 style={{ margin: "0px" }}>PROGRAMS</h3>
          <p>
            Ready to embark on your fitness journey? Find a program that
            inspires and motivates you
          </p>
        </div>

        <div className="card">
          <h4 style={{ margin: "0px" }}>MASS GAIN</h4>
          <h3 style={{ margin: "0px" }}>PROGRAMS</h3>
          <p>
            Increase muscle mass and overall body size through targeted
            exercise, nutrition, and lifestyle strategies
          </p>
        </div>
      </div>
    </div>
  );
}
