//Se va presentar de manera dinamica
import { Outlet } from 'react-router-dom'

const Login = () => {
    return (
        <div className='text-center'>
            <Outlet />
        </div>
    )
}

export default Login