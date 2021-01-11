import React, {useState, useEffect } from 'react'

function Api()  {

    const [test, setTest] = useState([])

    useEffect(()=> {
        fetch('/api').then(response => {
            console.log(response)
        })
    })

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}
export default Api