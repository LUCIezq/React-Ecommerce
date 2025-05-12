import Main from '@/components/Main';
import Products from '@/components/Products';
import Title from '@/components/Title';
interface ProductoProps {
    cart: ApiData[],
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}
interface ApiData {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    quantity: number
}


export default function Home({ cart, setCart }: ProductoProps) {
    return (
        <>
            <Main>
                <Title text='Destacados' />
                <Products size={4} cart={cart} setCart={setCart} />
            </Main>
        </>
    )
}