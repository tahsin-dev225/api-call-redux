"use client"
import { fetchTodos } from "@/redux/slice/todoSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const isSuccess = useSelector(state => state?.todoReducer?.isSuccess)
    // console.log(state)
    // console.log(isSuccess)


    const handleSignup = (e)=>{
        e.preventDefault();
        const newUser ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            role: e.target.role.value,
        }
        dispatch(fetchTodos(newUser))

        // axios.post(`http://localhost:5000/users`, newUser,{withCredentials:true})
        // .then(res =>{
        //     console.log(res.data)
        //     if(res?.data?.insertedId === null){
        //         Swal.fire({
        //             position: "center",
        //             icon: "error",
        //             title: `${res?.data?.message}`,
        //             showConfirmButton: false,
        //             timer: 1500
        //             });
        //         return 
        //     }
        //     router.push('/')
        // })
    }

    useEffect(()=>{
        if(isSuccess === true){
            // console.log('from sign up ', state?.todoReducer?.data)
            router.push('/login')
        }
    },[isSuccess])

    return (
        <div>
            <h1 className="mx-auto text-center my-6 text-5xl">Sign Up.</h1>
            <form onSubmit={handleSignup} className="px-7 py-3 w-[40%] mx-auto">
                <p className="my-2">Name</p>
                <input name="name" className="py-2 w-full rounded-md px-4 bg-slate-200 " type="text" placeholder="Name"  />
                <p className="my-2">Email</p>
                <input name="email" className="py-2 w-full rounded-md px-4 bg-slate-200 " type="text" placeholder="Email"  />
                <p className="my-2">Password</p>
                <input name="password" className="py-2 w-full rounded-md px-4 bg-slate-200 " type="text" placeholder="Password"  />
                <p className="my-2">Role</p>
                <select name="role" className="py-2 w-full text-slate-800 rounded-md px-4 bg-slate-200 ">
                    <option value="user">User</option>
                    <option value="admin">admin</option>
                    <option value="supper-admin">supper-admin</option>
                    <option value="seller">seller</option>
                </select>

                <input className="w-full py-1 px-3 my-9 rounded cursor-pointer bg-blue-800" type="submit" value="Sign up" />
                <p className="my-5 mx-auto text-center">Don't have account <Link className="text-blue-500" href="/login"> Sign-in</Link></p>
            </form>
        </div>
    );
};

export default page;