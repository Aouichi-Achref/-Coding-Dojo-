
import React from 'react'

const Display= (props) => {
    return (
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {props.colors.map((c, idx) =>
                    <fieldset key={idx} style={{ backgroundColor: c,borderRadius: '10px',border: '5px solid black', width: '150PX', height: '150px' }}>
                    </fieldset>
            )}
        </div>
    )
}

export default Display
