"use client"
import { fetchTodos } from "@/redux/slice/todoSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  // const dispatch = useDispatch();
  const state = useSelector((state)=> state);
  
  console.log("State", state)

  return (
    <div className=" p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* <button onClick={(e)=> dispatch(fetchTodos())}>Fethc Todos.</button> */}
      {/* {state?.todoReducer?.data?.map(e => <li key={e.title}>
        {e.title}
      </li>)} */}

      {/* <h1 className="">{state?.todoReducer?.data}</h1> */}
    </div>
  );
}
