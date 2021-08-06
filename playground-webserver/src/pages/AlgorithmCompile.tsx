import React from 'react'
import axios from 'axios'

export default function AlgorithmCompile() {

    async function handleSubmit() {
        try {
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            const response = await axios.get("http://internal-a632fa04fef014836b0094b7e6382303-1735845395.us-east-2.elb.amazonaws.com/api/algorithms/")
            console.log(response)
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            ALGORITHM COMPILE PAGE
            <button onClick={() => handleSubmit()}>
            BUTTON TEST
            </button>
        </div>
    )
}