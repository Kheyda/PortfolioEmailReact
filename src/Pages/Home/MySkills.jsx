import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Proficiency</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              <div className="skills--section--images">
                {item.images.map((imgSrc, imgIndex) => (
                  <img key={imgIndex} src={imgSrc} alt={`${item.title} ${imgIndex + 1}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
