import { resolve } from "path/win32";
import { IPost } from "../../types/IPost";


export default (req, res) => {
  const posts: IPost[] = [
    {id: 1, title: "Post 1", post: "Blafdksgdfy fvshegfvlsjg fcthjafdey"},
    {id: 2, title: "Post 2", post: "ygftw yguwyefri jyfdtewdfdruw gfwuykg"},
    {id: 3, title: "Post 3", post: "uigfe grfre ugfurge gwtgeriwgyt fuewur"}
  ]
  res.json({posts});
};
