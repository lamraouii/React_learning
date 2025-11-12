
export default function fawakeh({fruits}){
    const displayFruits = function () {
        return fruits.map(function(fruit){
            return <li>{fruit}</li>
        })
    }
    //fruits.push('hlib')  // hadi a ne pas faire NVR
                    // if we needd toadd smtgn we create a copy of the full array here in this bloc and then add 
                    //=> so nvr change things comming frm the index
    return <>
        <h1 className="h1">Fruits : </h1>
        <ul>
             {displayFruits()}
        </ul>
    </>
}