import React from 'react';
import MyComponent from './Ajax/MyComponent';
import MyFunComponent from './Ajax/MyFunComponent';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comp: ''
        }
    }
    render(){
     const classComponent = () => {
      this.setState({comp :<MyComponent />});
      };
      const functionalComponent = () => {
      this.setState({comp: <MyFunComponent />});
    };
        return (
            <>
            <button type="button" onClick={classComponent}>ClassComponent</button>
             <button type="button" onClick={functionalComponent}>functionalComponent</button>
             {this.state.comp}
         </>
        ) ;
    }
}
export default App;