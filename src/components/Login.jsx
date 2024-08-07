import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        if(email && password) {
            e.preventDefault();
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate('/home');
            } catch (error) {
                alert("Wrong Email and Password");
            }
        }
    };
    const SignUpHandler = () => {
        navigate('/signup');
    };
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-custom-gradient gap-10 p-4 md:p-0">
            <div className='text-center text-white mb-8'>
                <h1 className='text-3xl md:text-4xl font-bold'>You have Joined Us!</h1>
                <p className='text-base md:text-lg mt-2'>Login with the account that you have created</p>
            </div>
            <div className="bg-white p-6 shadow-md w-full max-w-sm bg-gradient-to-t from-green-400 via-blue-400 to-purple-400 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button
                        onClick={handleLogin}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" >
                        Login
                    </button>
                </form>
                <button onClick={SignUpHandler} className="mt-2 underline text-center w-full text-white">
                    Sign Up
                </button>
            </div>
        </div>
    );
};
export default LoginPage;
