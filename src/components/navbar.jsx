import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Navbar() {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const currentPath = location.pathname;
        setActiveLink(currentPath);
    }, [location]);

    return (
        <>
            <section className='flex h-screen w-screen'>
                <div className='sidebar flex flex-col justify-center items-center  w-1/5 h-screen py-10 px-4 bg-zinc-100 fixed transition-all'>
                    <Link to="/" className=' absolute mt-3 top-0 p-5 bg-white text-2xl rounded'>ADMIN</Link>
                    <div className='flex flex-col justify-between gap-1 w-full'>
                        <Link to="/about" className={`my-1 py-2 rounded hover:bg-zinc-300 transition-all ${activeLink.startsWith('/about') ? 'bg-zinc-300' : 'bg-zinc-200'}`}>Présentation</Link>
                        <Link to="/parcours" className={`my-1 py-2 rounded hover:bg-zinc-300 transition-all ${activeLink.startsWith('/parcours') ? 'bg-zinc-300' : 'bg-zinc-200'}`}>Parcours</Link>
                        <Link to="/projects" className={`my-1 py-2 rounded text-nowrap hover:bg-zinc-300 transition-all ${activeLink.startsWith('/projects') ? 'bg-zinc-300' : 'bg-zinc-200'}`}>Réalisations</Link>
                        <Link to="/xppro" className={`my-1 py-2 rounded text-nowrap hover:bg-zinc-300 transition-all ${activeLink.startsWith('/xppro') ? 'bg-zinc-300' : 'bg-zinc-200'}`}>Experience pro</Link>
                    </div>
                </div>
                <div className='content w-4/5 ml-auto p-4'>
                    <Outlet />
                </div>
            </section>
        </>
    )


}
