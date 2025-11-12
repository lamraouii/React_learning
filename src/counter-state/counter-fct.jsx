import { useState } from "react"

export default function Counter_F({initialVal,step}) {
    //hooks
    //usestate

    const [count,setCount] = useState(initialVal) //  initial value 0
    
    return <div>
        <span>
            <button onClick={()=>{
                setCount(prevState =>{  //ma3rftch bsh fach knkhedmo b fct had prevstate ktkhdm m3ana (prevstate rh ghir smya dvar)
                    return prevState + step
                })
            }}>incrementer</button>
            <button onClick={()=>{
                setCount(0)
            }}>Reset</button>
           it's been {count} secnds
        </span>
    </div>
}