import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Detail from './Detail';

function App() {
const [desc, setDesc] = useState([])

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>setDesc(data))
},[])
  return (
    <div className="overflow-x-auto">
  <table className="table w-full">

    <thead >
      <tr>
        <th>No</th>
        <th>Company</th>
        <th>Contact</th>
        <th>City</th>
        <th>street</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {desc && desc.map((item)=><tr key={item.id}>
        <th>{item.id}</th>
        <td>{item?.company?.name}</td>
        <td>{item?.name}</td>
        <td>{item?.address?.city}</td>
        <td>{item?.address?.street}</td>
        <td><NavLink to={`detail/${item.id}`} className="btn btn-success text-white hover:bg-green-800">Details</NavLink></td>
        
      </tr>)}
      
      
    </tbody>
  </table>
  
</div>
  );
}

export default App;
