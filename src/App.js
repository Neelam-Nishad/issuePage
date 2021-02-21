import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi'
import Isue from './components/Isue';
import {useState, useEffect} from 'react';
import { ThemeProvider } from 'react-bootstrap';


function App() {
  const [owner, setOwner] = useState("Neelam-Nishad");
  const [repo, setRepo] = useState("Neelam-Nishad-weatherApp");
  const [temp, setTemp] = useState([]);

  function clicked(){
    const user = document.getElementById("userName").value;
    const repository = document.getElementById("repoName").value;
    setOwner(user);
    setRepo(repository);
  }
  

  useEffect( () => {
    fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
    .then(res => res.json())
    .then(data => {
      setData(data);
      console.log(data);
      console.log(data.length);
      console.log(data[0].html_url);

      
    })
  }, [owner, repo]);

  const setData = (data) => {
    setTemp(data);
  }
  
  temp.forEach(element => {
    console.log(element);
  });

  console.log(temp);

  return (
    <div className="App container">
      <Navi clickme={clicked}/>
      <div className="container">
        <h3>🔉 Please enter exixting userName and repoName to get Issues Page.</h3>
      </div>
      {temp.map( (doc, i) => {
        {
            console.log(doc.html_url);
            console.log(doc.name)
          }
        return (
          <Isue links={doc.html_url} name={doc.title}/>
          
        )
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
