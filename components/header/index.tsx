import {ITogeSaidbar} from "../../types/ITogleSaidbar"
import Saidbar from "./saidbar"

interface IProps {
  props: ITogeSaidbar
} 

export default function Header({props}: IProps) {

  return (
    <div 
      className="bg-emerald-400 py-2">

      {props.visible && 
        <Saidbar 
          props={props} />}

      <button 
        className="px-4" 
        onClick={
          () => props.Show()}>
        @</button>

      <h1>Header</h1>

      </div>
  )
}
