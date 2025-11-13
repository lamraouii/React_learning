import { useState } from "react"

export default function FruitsList() {
    

    
    const [fruit,setFruit] = useState('')

    const [fruitList, setFruitList] =useState([])
    const displayFruits =  () => fruitList.map((fruit, frtkey)=> <li key={frtkey}>{fruit}</li>)
    
                        //fruits.push('hlib')  // hadi a ne pas faire NVR
                                        // if we needd toadd smtgn we create a copy of the full array here in this bloc and then add 
                                        //=> so nvr change things comming frm the index

    const handleInput =()=>{
        const fruitVal = document.querySelector('#fruit').value
        setFruit(fruitVal)
    }

    const handleAdd = (e) =>{
        e.preventDefault()
        // no more .push() 
        setFruitList([...fruitList, fruit])
    }
    return <>
        <span>
            <form action="">
                <input onChange={handleInput} type="text" id="fruit"/>
                <input onClick={handleAdd} type="submit" value='add fruit'/>
            </form>
        </span>

        <h1 className="h1">Fruits : </h1>
        <ul>
             {displayFruits()}
        </ul>
    </>
}