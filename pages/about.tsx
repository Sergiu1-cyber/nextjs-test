import { GetStaticProps, InferGetStaticPropsType } from "next/types";
import { IPost } from "../types/IPost";

interface IProps {
  posts: IPost[]
}

export default function About({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Abut Page</h1>
      {posts && posts.map(
        post => (<h1 key={post.id}>{post.title}</h1>)
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps<{posts: IPost[]}> = async () => {
  const res = await fetch("http://localhost:3000/api/posts")
  const posts: IPost[] = await res.json()

  return {
    props: { posts }
  }
}