import { Component } from "react";
import {Hello} from '../Frstcpn/FrstCode'


export default class ToggleName extends Component{

    constructor(props){
        super(props);
        this.state = {
            displayName : true
        }
    }

    toggleName=()=>{
        this.setState(prevState =>{
            return { displayName: !prevState.displayName}   // ky9leb state d prevstate d displayname
        })
    }

    render(){
        return <div>
            <button onClick={this.toggleName}>
                 {this.state.displayName.toString()}
            </button>
            
            {this.state.displayName === true ? 
                <Hello la9ab='Lamraoui'/> :
                undefined
            }
            
            
        </div>
    }


    /*
    rule: ay hja zdnaha f didmount kan7ydiha f didunmount

    */
}