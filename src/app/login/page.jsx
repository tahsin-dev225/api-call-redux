"use client"
import { fetchUser } from "@/redux/slice/todoSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const isSuccess = useSelector(state => state?.todoReducer?.isSuccess)
    console.log('from login',isSuccess)
    console.log('from login data of user',state)


    const handleLogin = (e)=>{
        e.preventDefault();
        const currentUser = {
            email : e.target.email.value,
            password : e.target.password.value
        }

        dispatch(fetchUser(currentUser))
    }

    useEffect(()=>{
        if(isSuccess === true){
            console.log('data from login after login', state?.todoReducer?.data)
            router.push('/')
        }
    },[isSuccess])

    return (
        <div>
            <h1 className="mx-auto my-6 text-5xl text-center">Login</h1>
            <form onSubmit={handleLogin} className="px-7 py-3 w-[40%] mx-auto">
                <p className="my-2">Email</p>
                <input name="email" className="py-2 text-slate-900 w-full rounded-md px-4 bg-slate-200 " type="text" placeholder="Email"  />
                <p className="my-2">Password</p>
                <input name="password" className="py-2 w-full text-slate-900 rounded-md px-4 bg-slate-200 " type="text" placeholder="Password"  />

                <input className="w-full py-1 px-3 my-9 rounded cursor-pointer bg-blue-800" type="submit" value="Login" />
                <p className="my-5 mx-auto">Don't have account <Link className="text-blue-900" href="/signup"> Sign up</Link></p>
            </form>
        </div>
    );
};

export default page;