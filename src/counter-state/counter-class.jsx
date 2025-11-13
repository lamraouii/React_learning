import { Component } from "react";


export default class Counter_C extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            date : undefined
        }
        console.log('hada awl hja ktexecuta')
    }

    handleClick=()=>{
        return this.setState(
            prevState => {
                console.log(prevState)
                return {counter : prevState.counter + 1}          
             })
    }

    handleReset=()=>{
       this.setState({counter : 0})
    }


    // hda wahd lifecycle kyswel wach lcomponent 3ytna leh wla mzl 
    /*componentDidMount(){

        setInterval(()=>{
                        this.setState(
            prevState => {
                console.log(prevState)
                return {counter : prevState.counter + 1}          
             }
        )
                    },1000)

        
    }
*/
    componentDidMount(){
        // chi hja kan3yto leha mrra w7da flcode bhal : fetch api
        console.log('componenet mounted')
    }

    componentDidUpdate(PrevProps,prevState){

        if (prevState.counter != this.state.counter){
            console.log('component updated')
            console.log(prevState, this.state) //hadi bach iban changemnt
        }
    }

    render(){
        console.log('hada tani hja ktexecuta')
        return <div>
            {/* <button onClick={this.handleClick.bind(this)}>incrementer</button> // hadi nrmlment ila mdrnach arow funct f handleClick*/}
            <button onClick={this.handleClick}>incrementer</button>
            <button onClick={this.handleReset}>Reset</button>
            il y a {this.state.counter}  secondes
        </div>
    }

}
