import {ITogeSaidbar} from "../../types/ITogleSaidbar"
import {MenuIcon} from "./menu_icon"
import Saidbar from "./saidbar"

interface IProps {
  props: ITogeSaidbar
} 

export default function Header({props}: IProps) {

  return (
    <div 
      className="flex bg-emerald-400 py-2">

      {props.visible && 
        <Saidbar 
          props={props} />}

      <MenuIcon props={props}/>

      <h1>Header</h1>
      </div>
  )
}
