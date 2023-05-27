import React, { useState, useEffect } from "react";
//import galleryImagesData from "./data/gallery_images.json";

const Welcome = () => {
  const [galleryImagesData, setGalleryImagesData] = useState([]);

  const loadGalleryImagesData = async () => {
    try {
      const resp = await fetch(
        "https://0ap34ldvw1.execute-api.us-east-1.amazonaws.com/Production/galleryimages"
      );
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      let jsonData = await resp.json();
      setGalleryImagesData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  //Side Effects
  useEffect(() => {
    loadGalleryImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {galleryImagesData.map((image) => (
            <img className={image.className} src={image.src} alt={image.alt} />
          ))}
        </div>
        <h1>Welcome to the Landon&nbsp;Hotel</h1>
        <p>
          The original Landon perseveres after 50 years in the heart of West
          London. The West End neighborhood has something for everyone—from
          theater to dining to historic sights. And the not-to-miss Rooftop Cafe
          is a great place for travelers and locals to engage over drinks, food,
          and good&nbsp;conversation. &nbsp;To learn more about the React +
          Amplify # 001 in the West End, browse our website and{" "}
          <a href="files/landon_information_sheet_London.pdf">
            download our handy information sheet
          </a>
          .
        </p>
      </article>
    </div>
  );
};

export default Welcome;
