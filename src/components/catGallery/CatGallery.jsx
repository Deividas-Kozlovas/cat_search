import { useState, useEffect } from "react";
import ajaxService from "../../models/services/ajaxService";
import reactLogo from "../../assets/react.svg";

const CatGallery = ({ selectedBreedId }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedBreedId) return;

    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await ajaxService(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}&limit=10`
        );
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedBreedId]);

  return (
    <div>
      {loading ? (
        <img src={reactLogo} alt="React Logo" className="loading" />
      ) : (
        <div>
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image.id}>
                <img src={image.url} alt={image.breeds?.[0]?.name || "Cat"} />
              </div>
            ))
          ) : (
            <p>No images found for this breed.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CatGallery;
