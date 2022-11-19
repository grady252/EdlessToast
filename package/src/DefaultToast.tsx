import React from 'react'
import { useToast } from '.'



function DefaultToast({ color, text }: any) {
    const toast = useToast();
    return (
        <div style={{
            position: 'fixed',
            backgroundColor: color,
            textAlign: 'center',
            left: '50%',
            bottom: '20px',
            transform: 'translate(-50%, -50%)',
            margin: '0 auto',
            //border: '2px solid grey',
            borderRadius: '0.5rem',
            color: 'white',
            maxWidth: '25em',
            fontSize: '16pt',
            boxShadow: '1px 0px 4px 1px #000000A0'
        }}>
            <div
                onClick={() => toast.closeToast()}
                style={{
                    position: 'absolute',
                    right: '0.5em',
                    top: '',
                    float: 'right',
                    textShadow: '0 1px 0 #fff',
                    cursor: 'pointer'
                }}>x</div>
            <div
                style={{
                    padding: '0.5em',
                    marginRight: '1em',
                    fontWeight: '400',
                    textAlign: 'left'
                }}>{text}</div>
        </div>
    )
}

export default DefaultToast