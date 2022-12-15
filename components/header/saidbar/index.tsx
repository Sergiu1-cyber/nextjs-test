
import Link from 'next/link';

export default function Saidbar(props) {
  return (
    <div className="flex flex-col absolute h-screen w-1/4 bg-emerald-400">
      <button onClick={() => props.props.Hide()} >close</button>
      <div className='flex flex-col'>
        <Link href="/" onClick={() => props.props.Hide()}>Home</Link>
        <Link href="/about" onClick={() => props.props.Hide()}>About</Link>
      </div>
    </div>
  )
  }