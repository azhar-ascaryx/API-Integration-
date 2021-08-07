import Axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Charactergrid from "./Components/Charactergrid";
import Header from "./Components/Header";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await Axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        console.log(result.data);
        setItems(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <Charactergrid loading={loading} items={items} />
    </div>
  );
};

export default App;
