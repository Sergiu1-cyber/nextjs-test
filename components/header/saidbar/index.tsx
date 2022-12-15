
import Link from 'next/link';
import {ITogeSaidbar} from '../../../types/ITogleSaidbar';

interface IProps {
  props: ITogeSaidbar
}

export default function Saidbar({props}: IProps) {

  const links = [
    {href: "/", title: "Home"},
    {href: "/about", title: "About"},
    {href: "/products", title: "Products"},
  ]

  const renderLinks = links.map(
    link => 
      <Link 
        href={link.href} 
        onClick={
          () => props.Hide()} 
        key={link.href}>
        {link.title}
        </Link>)

  return (
    <div 
      className="
        flex flex-col 
        absolute 
        h-screen w-1/4 
        bg-emerald-400">

      <button 
        onClick={
          () => props.Hide()} >
        close
        </button>

      <div 
        className='flex flex-col'>
        {renderLinks}
        </div>

      </div>
    )
  }
