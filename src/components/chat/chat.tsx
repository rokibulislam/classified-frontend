import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client'

const Chat: React.FC<{}> = (props) => {
    const [ messages, setMessages ] = useState([]);

    useEffect(() => {
        return () => {
            
        }
    })

    return (
        <>
            <h1> Chating </h1>
        </>
    )
}