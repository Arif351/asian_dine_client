import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data);
    }

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
                        <input type="text" placeholder="Password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters" } })} className="input input-bordered" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forger Password?</span>
                        </label>
                    </div>
                    <input className="btn btn-block btn-warning" type="Submit" />
                </form>
                <p className='my-3'><span className=''>New to Asian Dine?</span> <Link to="/register"> <span className='text-blue-500 font-semibold'>Register Now</span> </Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-accent w-full">Login with Google</button>
            </div>
        </div>
    );
};

export default Login;