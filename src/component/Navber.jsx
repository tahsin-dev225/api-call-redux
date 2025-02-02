import Link from "next/link";


const Navber = () => {
    return (
        <div className="text-5xl w-full flex flex-row justify-center gap-2 py-3">
            <Link href="/" className="text-xl "> Home</Link>
            <Link href="/login" className="text-xl mx-4">login</Link>
            <Link href="/admin" className="text-xl "> Admin </Link>
            <Link href="/user" className="text-xl "> User </Link>
            <Link href="/seller" className="text-xl "> Seller </Link>
            <Link href="/supper-admin" className="text-xl "> Supper-Admin </Link>
        </div>
    );
};

export default Navber;