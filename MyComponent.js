import React from 'react';

class MyComponent extends React.Component{
constructor(props){
    super(props);
    this.state = {
    error: null,
    isLoaded: false,
    items: []
    };
}

componentDidMount(){
fetch("emp.json")
 .then(res => res.json())
 .then(
     (result) => {
         this.setState({
             isLoaded: true,
             items: result.empList
         });
     },
     (error) => {
         this.setState({
             isLoaded: true,
             error
       });
     }
 )

}

render(){
const {error, isLoaded, items} = this.state;
if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded){
    return <div>Loading....</div>;
} else { 
    return ( 
      <table style={{border: '1px solid black', borderCollapse: 'collapse'}}>
      <thead>
       <tr>
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP CID</th> 
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP CName</th> 
        <th style={{border: '1px solid black', borderCollapse: 'collapse'}}>EMP CDEPT</th>
      </tr>
      </thead>
      <tbody>
      {items.map((data) => (   
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
}
export default MyComponent;