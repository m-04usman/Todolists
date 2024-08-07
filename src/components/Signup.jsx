import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

    const handleSignUp = async (e) => {
        if (email && password) {
            e.preventDefault();
        
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert('User created successfully!');
                setEmail('');
                setPassword('');
            } catch (error) {<q>212</q>
                alert(error.message);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='flex flex-col bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-16 '>
            <div className='text-center text-white mb-8'>
                <h1 className='text-4xl font-bold'>Join Us Today!</h1>
                <p className='text-lg mt-2'>Create an account to start managing your tasks efficiently.</p>
            </div>
            <form>
                <div className='flex flex-col gap-5 max-w-[400px] shadow-md mx-auto p-5 bg-gradient-to-t from-green-400 via-blue-400 to-purple-400 rounded-2xl w-full my-10'>
                    <div className='flex flex-col gap-2 relative'>
                        <p className='text-3xl font-500 text-white text-center font-bold'>Sign Up</p>
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <label className='text-xl font-bold'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            id='email'
                            type="text"
                            className='w-full text-[20px] p-2 border-gray-200 rounded'
                            placeholder='Enter Your Email'
                            value={email}
                        />
                    </div>
                    <div className='flex flex-col gap-2 relative'>
                        <label className='text-xl font-bold'>Password</label>
                        <div className='relative'>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                name="password"
                                id='password'
                                type={showPassword ? "text" : "password"} // Toggle input type
                                value={password}
                                className='w-full text-[20px] p-2 border-gray-200 rounded'
                                placeholder='Enter Password'
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>
                    <button onClick={handleSignUp} type='submit' className='h-[50px] w-[100px] rounded-md text-white bg-emerald-600 mx-auto mt-8 mb-8 font-bold'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;