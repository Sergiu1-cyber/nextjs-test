import Saidbar from "./saidbar"

export default function Header() {
  return (
    <div className="bg-emerald-400 py-2">
      <Saidbar />
      <h1 className="px-4">@</h1>
    </div>
  )
}