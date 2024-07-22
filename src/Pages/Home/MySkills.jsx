import data from "../../data/index.json";

export default function MySkills() {
  const clickableImages = [
    { src: "./img/makasana.png", link: "https://makasana.vercel.app" },
    { src: "./img/tech.png", link: "https://splendorous-wisp-9628e5.netlify.app/" },
    { src: "./img/land.png", link: "https://candid-marigold-9c7448.netlify.app" },
    { src: "./img/sneak.png", link: "https://deluxe-khapse-e89819.netlify.app" },
    { src: "./img/chat.png", link: "" },
  ];

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
      <h2 className="view-projects--heading">View My Projects</h2>
      <div className="clickable-images--grid">
        {clickableImages.map((image, index) => (
          <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.src} alt={`Clickable ${index + 1}`} className="clickable-image" />
          </a>
        ))}
      </div>
    </section>
  );
}
