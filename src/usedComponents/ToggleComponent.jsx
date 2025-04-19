import useToogle from "../components/useToogle"

export default function toggleComponent (){
    const [value, toggleValue] = useToogle(false)
    return (
        <div>
            <h1>{value.toString()}</h1>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={()=>toggleValue(true)}>Make True</button>
            <button onClick={()=>toggleValue(false)}>Make False</button>
        </div>
    )
}