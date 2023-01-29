import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const baseUrl = "https://randomuser.me/api/?";
  useEffect(() => {
    axios.get(`${baseUrl}results=10`).then((res) => {
      setData(res.data.results);
    });
  }, []);
  return (
    <div>App</div>
  )
}

export default App;
