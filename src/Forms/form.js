export default function TextField({inputName, inputLabel,children}){
    return (<>
        <label>{inputLabel}</label>
        <input name={inputName} type="text"/>
        <div>Plz enter {inputName}</div>
        <div>{children}</div>

    </>
)
}