import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';



    const handleLogin = (data) => {
        setLoginError('');
        console.log(data);
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    };

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className="w-5/12 border border-orange-600 p-8">
                <h1 className='text-center text-orange-600 text-3xl font-sans font-bold'>LOGIN</h1>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email"
                            {...register("email", { required: "Email address is required" })}
                            className="input input-bordered" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters" }, pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/, message: "Password must have 1 uppercase, 1 lowercase, number and special character"
                            }
                        })} className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forger Password?</span>
                        </label>
                    </div>
                    <input className="btn btn-block btn-warning" type="Submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='my-3'><span className=''>New to Asian Dine?</span> <Link to="/register"> <span className='text-blue-500 font-semibold'>Register Now</span> </Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-accent w-full">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;