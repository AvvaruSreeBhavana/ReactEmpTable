import EmpData from './emp';
import './App.css';

function App() {
  var tabData =  <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
  <thead>
  <tr><th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP ID</th> 
  <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP Name</th> 
  <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP DEPT</th></tr></thead>
  <tbody>
  {EmpData.map((data) => {
      return (       
        <tr key={data.empId}>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empId}</td>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empName}</td>
        <td  style={{border: '1px solid black', borderCollapse: 'collapse'}}>{data.empDept}</td>
  </tr>
      );
    })}
    </tbody>
    <tfoot></tfoot>
    </table>
  return (
    <div className="App">
     {tabData}
    </div>
  );
}
export default App;
