import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent, useEffect, useState } from 'react'

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}> = ({activeItem,name,route,setActiveItem})=>{
    return (
        activeItem !== name ? ( 
            <Link href={route}>
                <a>
                    <span onClick={()=>setActiveItem(name)} className='hover:text-indigo-700'>{name}</span>
                </a>
            </Link>
            ):null
    )
}

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()
    
    useEffect(() => {
        if(pathname === '/' )setActiveItem('About')
        if(pathname === '/resume' )setActiveItem('Resume')
    }, [])
  return (
    <div className='flex justify-between px-5 py-3 my-3'>
        <span className='text-xl font-bold text-indigo-700 border-b-4 border-indigo-700 md:text-2xl'>{activeItem}</span>
        <div className='flex space-x-5 font-lg'>
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
            <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume' route='/resume' />
        </div>
        </div>
  )
}
