import React from 'react'

const Frutas = (props) => {

    // console.log(props)

    return (
    <>
    <div>
        <ul>
            {
                props.frutasApp.map((frutas, index) => (
                <li key={index}>{index +1 } - {frutas}</li>))
            }
        </ul>
    </div>
    </>
    )
}

export default Frutas
