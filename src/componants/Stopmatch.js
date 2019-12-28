import React from 'react';

export class Stopmatch extends React.Component {
  tickRef;

  tick=()=>{
    console.log('tick');
  }

  componentDidMount(){
    this.tickRef=setInterval(this.tick,1000)
  }
  componentWillUnmount() {
    clearInterval(this.tick);
  }
  render() {
    return (
      <div className='stopmatch'>
        <h2></h2>
        <span></span>
        <button></button>
        <button></button>
      </div>
    );
  }
}