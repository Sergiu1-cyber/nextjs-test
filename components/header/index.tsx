import Saidbar from "./saidbar"

export default function Header(props) {

  return (
    <div className="bg-emerald-400 py-2">
       {props.props.visible && <Saidbar props={props.props} />}
      <button className="px-4" onClick={() => props.props.Show()}>@</button>
    </div>
  )
}