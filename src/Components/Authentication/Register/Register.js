import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleProvider } = useContext(AuthContext);
    const [registrationError, setRegistrationError] = useState('')
    const navigate = useNavigate();

    const handleLogin = (data) => {
        setRegistrationError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Registration Success!")
                const userInfo = {
                    displayName: data.name,
                    phoneNumber: data.phoneNumber,
                    file: data.file
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                setRegistrationError(error.message)
            })
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                getToken(email)

            })
    };

    const getToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('AccessToken', data.accessToken)
                    navigate('/')
                }
            })
    }

    const googleProviderReg = new GoogleAuthProvider()
    const handleGoogle = (data) => {
        googleProvider(googleProviderReg)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name,
                    phoneNumber: data.phoneNumber,
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }



    return (
        // <div className=''>
        //     <div className="form-control w-full max-w-xs">
        //         <label className="label">
        //             <span className="label-text">Pick the best fantasy franchise</span>
        //             <span className="label-text-alt">Alt label</span>
        //         </label>
        //         <select {...register("category", { required: true })} className="select select-bordered">
        //             <option disabled selected>Pick one</option>
        //             <option>Star Wars</option>
        //             <option>Harry Potter</option>
        //             <option>Lord of the Rings</option>
        //             <option>Planet of the Apes</option>
        //             <option>Star Trek</option>
        //         </select>
        //         <label className="label">
        //             <span className="label-text-alt">Alt label</span>
        //             <span className="label-text-alt">Alt label</span>
        //         </label>
        //     </div>
        // </div>

        <div className='h-[900px] flex justify-center items-center'>
            <div className="w-5/12 border border-orange-600 p-8">
                <h1 className='text-center text-orange-600 text-3xl font-sans font-bold'>REGISTER</h1>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered" />
                        {errors.name && <p className='text-red-600 my-2'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email"
                            {...register("email", { required: "Email address is required" })}
                            className="input input-bordered" />
                        {errors.email && <p className='text-red-600 my-2'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Phone"
                            {...register("phone", { required: "Phone number is required" })}
                            className="input input-bordered" />
                        {errors.phone && <p className='text-red-600 my-2'>{errors.phone?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-2xl">
                        <label className="label">
                            <span className="label-text">Pick an image</span>
                        </label>
                        <input type="file" {...register("file")} className="file-input file-input-warning w-full max-w-2xl" />
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
                        {errors.password && <p className='text-red-600 my-2'>{errors.password?.message}</p>}
                    </div>
                    <input className="btn btn-block btn-warning mt-3" type="Submit" />
                    <div>
                        {registrationError && <p className='text-red-600'>{registrationError}</p>}
                    </div>
                </form>
                <p className='my-3'><span className=''>Already have an account?</span> <Link to="/login"> <span className='text-blue-500 font-semibold'>Login</span> </Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className="btn btn-outline btn-accent w-full">Register with Google</button>
            </div>
        </div>

    );
};

export default Register;