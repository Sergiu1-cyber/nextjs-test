// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { title } from "process";
import { IPosts } from "../../types/IPosts";

const posts: IPosts[] = [
  {id: 1, title: "Post 1", post: "Blafdksgdfy fvshegfvlsjg fcthjafdey"},
  {id: 2, title: "Post 2", post: "ygftw yguwyefri jyfdtewdfdruw gfwuykg"},
  {id: 3, title: "Post 3", post: "uigfe grfre ugfurge gwtgeriwgyt fuewur"}
]

export default (req, res) => {
  res.status(200).json({posts});
};
