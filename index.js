

const nameArr = ['Jane','Sara','Johne']
const newArr = [ <h2>Congratulation!</h2>, <h3>React are awesome!</h3>]
class HelloMessage extends React.Component{
render(){
  return (
    <div>
    <h1>Hello from Component</h1>
     <h1>Hell world</h1>
     {nameArr.map((item,index)=><p key={'_post'+index}>{item}</p>)}
     <HelloNames myArr={nameArr}/>
      <div className="container">
          {this.props.newestArr[0]}
          {this.props.newestArr[1]}
      </div>
      </div>
  )
}
}

class NodeLIst extends React.Component{
 
  render(){
  
    return(

     <ol>
       {this.props.children.map((item,index)=><li className={index===0? 'first': index===1? 'second': index===2 && 'third'} key={'_post'+index}>{item}</li>)}
     </ol>
     
    )
  }
}

 class HelloNames extends React.Component{
  HelloNames.propTypes = {
    name: PropTypes.array
  };
   render(){
     return (
      <NodeLIst>
      {this.props.myArr.map((item,index)=><p key={'_post'+index}>{item}</p>)}
      </NodeLIst> 
     )
    
   }
 }

function App(){
  return(
    <HelloMessage newestArr={newArr} />
  ) 
}

ReactDOM.render(
 <App/>

  , document.getElementById('root')
 );