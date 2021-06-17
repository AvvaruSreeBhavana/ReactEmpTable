import React, {useState, useEffect} from "react";

function MyFunComponent() {
const [error, setError] = useState(null);
const[isLoaded, setIsLoaded] = useState(false);
const[empArr, setEmpArr] = useState([]);


useEffect(() => {
    fetch("emp.json")
     .then(res => res.json())
     .then(
         (result) => {
              setIsLoaded(true);
              setEmpArr(result.empList);
         },
         (error) => {
             setIsLoaded(true);
             setError(error);
         } 
       )
}, [])

if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded){
    return <div>Loading....</div>;
} else { 
    return ( 
      <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
      <thead>
       <tr>
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP ID</th> 
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP Name</th> 
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP DEPT</th>
      </tr>
      </thead>
      <tbody>
      {empArr.map((data) => (   
       <tr key={data.empId}>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empId}</td>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empName}</td>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empDept}</td>
      </tr>
      ))}
      </tbody>
      <tfoot></tfoot>
      </table>
    );
}
}

export default MyFunComponent;