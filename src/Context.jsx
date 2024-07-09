import { createContext, useState } from "react";

export const ContextProvide=createContext();

export function Context(props){
    const [items,setItems]=useState([])
    const [cart,setCart]=useState([])
    const [catagory,setCatagory]=useState("")
    const[data, setData] = useState([])

return (
    <>
    <ContextProvide.Provider value={[items,setItems,cart,setCart,catagory,setCatagory,data,setData]}>
        {props.children}
    </ContextProvide.Provider>
    </>
)
}