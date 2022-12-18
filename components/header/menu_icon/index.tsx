import {ITogeSaidbar} from "../../../types/ITogleSaidbar"

interface IProps {
  props: ITogeSaidbar


}

export function MenuIcon({props}: IProps) {
  return (
    <button className="container w-8 mx-4" onClick={() => props.Show()}>
      <div className="w-8 h-1 bg-black my-1"></div>
      <div className="w-8 h-1 bg-black my-1"></div>
      <div className="w-8 h-1 bg-black my-1"></div>
    </button>
  )
}
