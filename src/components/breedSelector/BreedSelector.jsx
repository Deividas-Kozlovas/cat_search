const BreedSelector = ({ breeds, setSelectedBreedId }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          setSelectedBreedId(e.target.value);
        }}
      >
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
