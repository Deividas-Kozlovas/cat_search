import "./BreedSelector.scss";

const BreedSelector = ({ breeds, setSelectedBreedId }) => {
  return (
    <div className="breed-selector">
      <select
        className="breed-selector__dropdown"
        onChange={(e) => {
          setSelectedBreedId(e.target.value);
        }}
      >
        <option value="">Select a breed</option>
        {breeds.map((breed) => (
          <option
            key={breed.id}
            value={breed.id}
            className="breed-selector__option"
          >
            {breed.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BreedSelector;
