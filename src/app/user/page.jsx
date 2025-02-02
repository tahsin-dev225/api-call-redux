"use client"
import PrivateRoute from "@/component/PrivateRoute";

const page = () => {
    const role = ["admin","supper-admin","user"]

    return (
        <PrivateRoute role={role}>
            <div className="">
                <h1 className="text-5xl">User page</h1>
            </div>
        </PrivateRoute>
    );
};

export default page;