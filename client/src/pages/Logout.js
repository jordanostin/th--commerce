import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const Logout = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    useEffect(() => {

        console.log('début du logout')

        localStorage.removeItem('token')

        console.log('token supprimé')
        console.log('navigate')

        navigate('/')

        console.log('Logout terminé')
    }, [])
    
    return null
}