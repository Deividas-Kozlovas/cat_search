import "./App.scss";
import BreedSelector from "../breedSelector/BreedSelector";
import CatGallery from "../catGallery/CatGallery";
import ajaxService from "../../models/services/ajaxService";
import { useState, useEffect } from "react";

function App() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreedId, setSelectedBreedId] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await ajaxService(
          " https://api.thecatapi.com/v1/breeds"
        );
        setBreeds(response);
      } catch (error) {
        console.error("Error fetching breeds");
      }
    };

    fetchBreeds();
  }, []);

  return (
    <section className="app">
      <BreedSelector breeds={breeds} setSelectedBreedId={setSelectedBreedId} />
      <CatGallery selectedBreedId={selectedBreedId} />
    </section>
  );
}

export default App;
