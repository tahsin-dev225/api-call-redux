"use client"

import { useSelector } from "react-redux";

const PrivateRoute = ({children,role}) => {

    const currentRole = useSelector(state => state?.todoReducer?.data?.role);
    const currentUser = useSelector(state => state?.todoReducer?.data);
    const isLoading = useSelector(state => state?.todoReducer?.isLoading);
    const isMatched = role.includes(currentRole);
    
    if(isLoading === true){
        return <h1 className="text-4xl mx-auto ">Loading....</h1>
    }

    if(isMatched === true){
        return <div className="flex flex-col items-center justify-center w-full h-screen">
            {children}
            <div className="w-[60%] text-center mx-auto my-10">
                <h2 className="text-2xl">{currentUser?.name}</h2>
                <h2 className="text-2xl">{currentUser?.email}</h2>
                <h2 className="text-2xl">{currentUser?.role}</h2>
            </div>
        </div> 
    }

    return <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-4xl ">You are not valid.</h1>
    </div>

    // console.log(role, 'current role', currentRole)
    // return children
};

export default PrivateRoute;