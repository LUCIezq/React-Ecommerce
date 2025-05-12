import Main from '@/components/Main';
import Products from '@/components/Products';
import Title from '@/components/Title';

export default function Home() {
    return (
        <>
            <Main>
                <Title text='Destacados' />
                <Products size={4} />
            </Main>
        </>
    )
}