import { useState } from 'react'

const useToogle = () => {
    const [value, setValue] = useState(false)
    function toggleValue(value){
        setValue(currentValue => typeof value ===  'boolean' ? value : !currentValue)
    }
    return ( [value, toggleValue] )
}

export default useToogle