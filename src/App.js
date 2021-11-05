import './App.css';
import { Component, Fragment } from 'react';


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isShow:true
    }
    this.toggle=this.toggle.bind(this)
  }
  render(){
    return (
      <Fragment>
        <div className={this.state.isShow?"show":"hide"}>toggle</div>
        <button onClick={this.toggle}>切换</button>
      </Fragment>
    )
  }
  toggle(){
    this.setState(()=>({
      isShow:this.state.isShow?false:true
    }))
  }
}

export default App;
