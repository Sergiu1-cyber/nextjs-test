import {GetStaticPaths, GetStaticProps} from "next";
import ProductRender from "../../components/products/ProductRender";
import {IProduct} from "../../types/IProduct";

interface IProps {
  product: IProduct
}

export default function Product({product}: IProps) {
  return (
    <>
      <ProductRender product={product}/>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const products: IProduct[] = await res.json()
  const paths = products.map(
    pr => ({
      params: {id: pr.id.toString()}}))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{product: IProduct}> = async ({params}) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product: IProduct = await res.json()
  return {
    props: {
      product,},}
}
