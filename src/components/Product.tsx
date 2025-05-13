import type { ProductProps } from "@/types/ProductProps"

export default function Product({ item, onClick }: ProductProps) {
    return (
        <div className=" h-fit border-1  bg-black border-[#ffffff4d] hover:shadow-xl/5 shadow-white 
                        cursor-pointer transition-all duration-400 w-full rounded-xl  hover:scale-105  ">

            <div className="  min-h-[230px] rounded-xl flex  flex-col p-4 gap-5 justify-between">
            </div >

            <div className=" p-5 flex flex-col gap-10">
                <div className="flex flex-col gap-1 min-h-[100px]">
                    <span className="text-gray-700 font-light">{item.category}</span>
                    <h2 className="text-gray-400 font-medium text-[15px] hover:underline w-fit">{item.title}</h2>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-white font-medium">$ {item.price}</span>
                    <button onClick={() => onClick(item)} className="border-1 border-white self-start px-3 py-1 text-white
                    rounded-2xl cursor-pointer hover:bg-white hover:text-black transition-all ">Comprar</button>
                </div>
            </div>
        </div >
    )
}