import { Component } from "react";


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            date : undefined
        }
    }

    // hda wahd lifecycle kyswel wach lcomponent 3ytna leh wla mzl 
    componentDidMount(){

        setInterval(()=>{
                        this.setState(
            prevState => {
                console.log(prevState)
                return {counter : prevState.counter + 1}          
             }
        )
                    },1000)

        
    }

    render(){
        return <div>
            il y a {this.state.counter}  secondes
        </div>
    }
}