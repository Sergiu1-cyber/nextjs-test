import {useContext} from 'react'
import {SaidbarContext} from '../../../store/contexts/SaidbarContext'
import Link from 'next/link';

export default function Saidbar() {

  const {state, hide} = useContext(SaidbarContext)

  function Hide() {
    hide()
  }

  return (
    <div className={state.classes}>
      <button onClick={Hide}>close</button>
      <div className='flex flex-col'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}