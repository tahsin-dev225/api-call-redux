"use client"

import PrivateRoute from "@/component/PrivateRoute";
import { useSelector } from "react-redux";

const page = () => {
    const state = useSelector(state => state?.todoReducer?.data);
    const role = ["seller","admin","supper-admin"]
    return (
        <PrivateRoute role={role}>
            <div className="">
                <h1 className="text-5xl">Seller page ....</h1>
            </div>
        </PrivateRoute>
    )
};

export default page;