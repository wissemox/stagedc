import React from 'react'

const MappAddproduct = ({el}) => {
    return (
        <div>
         <div className="Flex-box">
            <p>{el.name}</p>
            <div className="Flex-boxName">
            <p>{el.price}</p>
            </div>
            <p>{el.Descraption}</p>
            </div>
        </div>
    )
}

export default MappAddproduct
