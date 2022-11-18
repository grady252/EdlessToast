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
        }}>
            <div
                onClick={() => toast.closeToast()}
                style={{
                    position: 'absolute',
                    right: '5px',
                    cursor: 'pointer'
                }}>x</div>
            <div
                style={{
                    padding: '0.5rem',
                    fontSize: '1.5rem'
                }}>{text}</div>
        </div>
    )
}

export default DefaultToast