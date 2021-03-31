import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./components/Navi";
import Isue from "./components/Isue";
import { useState, useEffect } from "react";

function App() {
  const [owner, setOwner] = useState("vercel");
  const [repo, setRepo] = useState("next.js");
  const [temp, setTemp] = useState([]);
  const [heading, setHeading] = useState("🔉 List Of Issues.");

  function clicked() {
    const user = document.getElementById("userName").value;
    const repository = document.getElementById("repoName").value;
    setOwner(user);
    setRepo(repository);
  }

  useEffect(() => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [owner, repo]);

  const setData = (data) => {
    console.log(typeof data + "type of data");

    try {
      data.map((ele) => {
        console.log("in the try block");
        console.log(ele);
        setTemp(data);
      });
    } catch (e) {
      setTemp([
        { title: "❌❌❌❌ERROR❌❌❌❌" },
        { title: "❌❌❌❌INVALID INPUTS❌❌❌❌" },
        { title: "❌❌❌❌PLEASE ENTER EXISTING REPO❌❌❌❌" }
      ]);
      setHeading("🔉 list of Errors.......");
    }
    console.log(temp + "is our new temp");
  };

  return (
    <div className="App container">
      <Navi clickme={clicked} />
      <div className="container">
        <h3>{heading}</h3>
      </div>
      {temp.map((doc, i) => {
        return <Isue links={doc.html_url} name={doc.title} />;
      })}
    </div>
  );
}

export default App;

// const fetchApi = async () => {
//   const url = `https://api.github.com/repos/${owner}/${repo}/issues`;
//   let response = await  fetch(url);
//   response = await response.json();

//   console.log(response);

//   return response;
// }
