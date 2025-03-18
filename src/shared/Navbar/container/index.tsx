import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component'
import Footer from '@/shared/Footer/component';
import { Toaster } from 'react-hot-toast';

export default function NavbarWrapper() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className='bg-[#F9FAFB]'>
                <Toaster position="top-right" />
                <Navbar expanded={expanded} setExpanded={setExpanded} />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
