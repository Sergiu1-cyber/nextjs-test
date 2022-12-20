import Image from 'next/image';
import { IProduct } from '../../types/IProduct';

interface IProps {
  product: IProduct;
}

export default function ProductRender({ product }: IProps) {
  return (
    <div>
      <h1>{product.id}</h1>
      <h1>{product.title}</h1>
      <Image src={product.image} width={300} height={300} alt="img" />
      <p>{product.description}</p>
    </div>
  );
}
