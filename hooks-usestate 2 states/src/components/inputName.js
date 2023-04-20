import React, { useState } from 'react';

function InputName() {
    const [name, setName] = useState("");

    const handlechange = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            <p> Hello {name}</p>
            <input type='text' value={name} onChange={handlechange} />
        </div>
    )
}

export default InputName