import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthProvider'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading/Loading'

const Private = () => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    useEffect(() => {
        const authCHeck = async () => {
            const res = await axios.get('/user-auth')
            if (res.data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) authCHeck();
    }, [auth?.token])
    return (
        ok ? <Outlet /> : <Loading />
    )
}

export default Private
