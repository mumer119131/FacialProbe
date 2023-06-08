import React, { useEffect } from 'react'
import PrimaryButton from '../../components/Common/PrimaryButton/PrimaryButton'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)
    const navigate = useNavigate()
    const handleLogin = async(e) => {
        e.preventDefault()
        try{
            setError('')
            const form = new FormData(e.target)
            form.append('username', username)
            form.append('password', password)

            const response = await axios.post('http://localhost:5000/login', form)
            if(response.data.message === 'Login successful'){
                localStorage.setItem('token', response.data.token)
                navigate('/')
            }
        }catch(err){
            setError(err.response.data.message)
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/')
        }
    },[])
    return (
    <div className='min-h-[calc(100vh)] flex items-center pt-[90px] justify-center flex-col w-full'>
        <h2 className='text-white text-4xl font-bold uppercase tracking-[8px] select-none'>Login</h2>
        <form className='w-[22rem]' onSubmit={handleLogin}>
            <input type="text" placeholder='Username' className='bg-background bg-opacity-75 text-white w-full py-3 px-4 mt-4 outline-none' value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input type="password" placeholder='Password' className='bg-background bg-opacity-75 text-white w-full py-3 px-4 mt-4 outline-none' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <PrimaryButton className='w-full mt-4' type="submit">Login</PrimaryButton>
            {error && <p className='text-red text-center mt-4'>{error}</p>}
        </form>
    </div>
  )
}

export default Login