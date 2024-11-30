import { useEffect, useState } from "react";
import ajaxService from "../../models/services/ajaxService";

const BreedSelector = () => {
  const [breeds, setBreeds] = useState([]);

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
    <div>
      <select>
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;
