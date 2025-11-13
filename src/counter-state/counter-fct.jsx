import { useEffect, useState } from "react"

export default function Counter_F({initialVal,step}) {
    //hooks
    //usestate

    // Useeffect : hadi feha ga3 duk componentDid... fde9a

    const [count,setCount] = useState(initialVal) //  initial value 0
    
    useEffect(()=>{
        console.log('executed everytime !') // after every render()
    })
    
    useEffect(()=>{
        console.log('component mounted !') // only flbdya  bhal didMount
    }, []) // hna zdna dependies [] 


    useEffect(()=>{
        console.log('count changed !')  // bhal didUpdated
    }, [count]) // hna ilaaa tbdel count 


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