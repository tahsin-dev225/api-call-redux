"use client"
import PrivateRoute from "@/component/PrivateRoute";


const page = () => {
    const role = ["supper-admin"]

    return (
        <PrivateRoute role={role}>
            <div className="">
                <h1 className="text-5xl">Supper Admin page</h1>
            </div>
        </PrivateRoute>
    );
};

export default page;