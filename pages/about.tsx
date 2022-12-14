import useSWR from 'swr';
import { IPost } from '../types/IPost';
import Img2 from '../public/img2.jpg'
import Image from 'next/image';

export default function About() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const { data: posts, error } = useSWR('/api/posts', fetcher);

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <h1>Abut Page</h1>
      <Image src={Img2} alt="img2" />
      <h1>Front fetch data with swr</h1>
      {posts && posts.map((post: IPost) => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  );
}
