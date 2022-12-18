
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
        key={link.href}
        className="
          bg-emerald-500
          mt-2
        ">
        {link.title}
        </Link>)

  return (
    <div 
      className="
        flex flex-col 
        absolute text-center
        h-screen w-1/4 
        bg-emerald-400">

      <button 
        onClick={
          () => props.Hide()} 
        className="bg-emerald-600">
        close
        </button>

      <div 
        className='flex flex-col'>
        {renderLinks}
        </div>

      </div>
    )
  }
