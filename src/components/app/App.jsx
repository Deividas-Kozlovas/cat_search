import ajaxService from "../../models/services/ajaxService";
import "./App.scss";

function App() {
  const getData = () => {
    const response = ajaxService(
      "  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key="
    );
    console.log(response);
  };

  getData();
  return (
    <>
      <p>test</p>
    </>
  );
}

export default App;
