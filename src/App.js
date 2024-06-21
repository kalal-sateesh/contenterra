import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";
import AppHeader from "./components/AppHeader";

function App() {
  const [data, setData] = useState([]);

  // console.log(data);

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/reactjs.json")
      .then((res) => setData(res.data.data.children))
      .catch((err) => console.log("Error", err));
  }, []);

  const list = data.map((ele, index) => <Card key={index} ele={ele} />);

  return (
    <>
      <AppHeader />
      <div className="flex justify-center items-center gap-5 flex-wrap flex-col">
        {list}
      </div>
    </>
  );
}

export default App;
