import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Loading.css';
const Loading = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue)
        }, 1000);
        count === 0 && navigate("/login", {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])
    return (
        <div>
            <h1 className='center'>Redirecting to you in {count} second</h1>
        </div>
    )
}

export default Loading
