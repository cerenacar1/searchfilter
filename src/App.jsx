import { Users } from './users';
import './App.css';
import { useState } from 'react';
import Table from './Table';

function App() {
  const [query, setQuery] = useState("");

  const keys = ["first_name", "last_name", "email"]

  console.log(Users[0]["email"])

  const search = (data)=>{
    return data.filter(
      (item) =>
        keys.some(key=>item[key].toLowerCase().includes(query)) 
    );
  };
  
  return (
    <div className="App">
      <input type="text" 
      placeholder="Search..." 
      className="search" 
      onChange={(e) => setQuery(e.target.value)} />
      
     <Table data={search(Users)}/>

    </div>
  );
}

export default App;
