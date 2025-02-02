"use client"
import PrivateRoute from "@/component/PrivateRoute";
import { useSelector } from "react-redux";


const page = () => {
    // const currentUser = useSelector(state => state?.todoReducer?.data);
    const role = ["admin","supper-admin"]

    return (
        <PrivateRoute role={role}>
            <div className="">
                <h1 className="text-5xl">Admin page</h1>
                {/* <div className="w-[60%] mx-auto my-10">
                    <h2 className="text-2xl">{currentUser?.name}</h2>
                    <h2 className="text-2xl">{currentUser?.email}</h2>
                    <h2 className="text-2xl">{currentUser?.role}</h2>
                </div> */}
            </div>
        </PrivateRoute>
    );
};

export default page;