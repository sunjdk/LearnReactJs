import './App.css';
import { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'

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
        <CSSTransition onEntered={(el)=>{el.style.color='blue'}} 
        unmountOnExit 
        classNames='fade' 
        in={this.state.isShow} 
        timeout={1000}
        appear={true}
        >
          <div>toggle</div>
        </CSSTransition>
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
