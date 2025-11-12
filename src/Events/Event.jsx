import { Component } from "react"

function Event(){
    const HandleClick = ()=>{
        alert('StaMat!!')
    }
    return <div>
        <button onClick={HandleClick}>
            click
        </button>
    </div>
}

export default class Evvent extends Component {
    //always work with arrow function here to got the this withoout bund(this) f return
    HandleClick= ()=>{
        console.log(this) 
        alert('StaMat!!')
    }
    render(){
        return <div>
        <button onClick={this.HandleClick}>
            click
        </button>
    </div>
    }
}