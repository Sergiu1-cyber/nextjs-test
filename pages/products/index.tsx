import {GetStaticProps} from "next";
import Link from "next/link";
import {IProduct} from "../../types/IProduct";

interface IProps {
  products: IProduct[]
}

export default function Products({products}: IProps) {

  const renderProducts = products.map(
    product => (
        <li 
          key={product.id}>
          <Link 
            href={
            `/products/${product.id}`}>
            {product.title}
            </Link>
          </li>))

  return (
    <>
      <h1>Posts Page</h1>
      <ul>
        {renderProducts}
        </ul>
        </>
  );
}

export const getStaticProps: GetStaticProps<{products: IProduct[]}> = async () => {

  const res = await fetch('https://fakestoreapi.com/products')
  const products: IProduct[] = await res.json()

  return {
    props: {
      products,
    },
  }
}
