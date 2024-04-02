import React from 'react'

const PersonCard = (props) => {
    return (
        <div style={{ borderRadius: 3, display: "flex", flexWrap: 'wrap' }}>
            {props.colors.map((c, idx) =>
                <fieldset key={idx} style={{ backgroundColor: c, width: '200PX', height: '200px' }}>
                    <legend >welcome to the dojo world</legend>
                </fieldset>
            )}
        </div>
    )
}

export default PersonCard
