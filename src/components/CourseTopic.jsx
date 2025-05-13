import React from 'react';

const CourseTopic = ({imgSrc, translate, scale}) => {
    return (
        <div
            style={{
                margin: '50px',
                width: '150px',            // Viewport width
                height: '150px',           // Viewport height
                overflow: 'hidden',
                position: 'relative',
                border: '5px solid #F34637',
                borderRadius: '25px',
            }}
        >
            <img src={imgSrc} style={{
                transform: 'scale(' + scale + ') translate(' + translate.x + ',' + translate.y + ')',
                transformOrigin: 'top left',
                position: 'absolute',
                top: 0,
                left: 0,
            }}/>
        </div>
        /*<div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'white',
        }}></div>*/
    )
}


export default CourseTopic;