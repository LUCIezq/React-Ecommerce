import Main from '@/components/Main';
import Products from '@/components/Products';
import Title from '@/components/Title';
import type { ApiData } from '@/types/ApiData';

interface ProductoProps {
    cart: ApiData[],
    setCart: React.Dispatch<React.SetStateAction<ApiData[]>>;
}

export default function Home({ cart, setCart }: ProductoProps) {
    return (
        <>
            <Main>
                <Title text='Destacados' />
                <Products size={5} cart={cart} setCart={setCart} />
            </Main>
        </>
    )
}