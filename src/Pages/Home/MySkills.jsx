import data from "../../data/index.json";
import React, { useState } from "react";

export default function MySkills() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const clickableImages = [
    { src: "./img/makasana.png", link: "https://makasana.vercel.app" },
    { src: "./img/tech.png", link: "https://splendorous-wisp-9628e5.netlify.app/" },
    { src: "./img/land.png", link: "https://candid-marigold-9c7448.netlify.app" },
    { src: "./img/sneak.png", link: "https://deluxe-khapse-e89819.netlify.app" },
    { src: "./img/bankw.png", link: "" },
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
          index === clickableImages.length - 1 ? (
            <img
              key={index}
              src={image.src}
              alt={`Clickable ${index + 1}`}
              className="clickable-image"
              onClick={openModal}
            />
          ) : (
            <a key={index} href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} alt={`Clickable ${index + 1}`} className="clickable-image" />
            </a>
          )
        ))}
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <video controls>
              <source src="/Video/vid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

