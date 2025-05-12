import Main from "@/components/Main"
import Products from "@/components/Products"
import Title from "@/components/Title"
interface ApiData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
}

interface ProductoProps {
    cart: ApiData[],
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

export default function Producto({ cart, setCart }: ProductoProps) {
    return (
        <>
            <Main>
                <Title text="Nuestros productos" />
                <Products cart={cart} setCart={setCart} />
            </Main>
        </>
    )
}