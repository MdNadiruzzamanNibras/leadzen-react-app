import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [desc, setDesc] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>console.log(data))
},[])
  return (
    <div className='bg-sky-500'>
      <h1 >test</h1>
    </div>
  );
}

export default App;
