import useSWR from 'swr'
import {IPost} from '../types/IPost';

export default function About() {

  const fetcher = (url: string) => fetch(url).then(r => r.json())

  const {data: posts, error} = useSWR('/api/posts', fetcher)

  if(error) {
    return (
      <h1>Error</h1>
    )
  }

  return (
    <div>
      <h1>Abut Page</h1>
      {posts && posts.map(
         (post: IPost) => (<h1 key={post.id}>{post.title}</h1>)
      )}
    </div>
  );
}

