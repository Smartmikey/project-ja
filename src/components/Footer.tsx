import Link from 'next/link'
import React from 'react'
import Accordion from './Accordion'

const Footer = () => {
    const data = [
        {
            title: "Link",
            content: <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
        </ul>
        },
        {
            title: "Help",
            content: <ul>
            <li><Link href="#">Payment options</Link></li>
            <li><Link href="#">Returns</Link></li>
            <li><Link href="#">Terms of service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
        </ul>
        },
        {
            title: "Newsletter",
            content: <form>
            <input type="email" placeholder='Enter your email' className='border-b p-1 rounded-md'/>
            <button type="submit" >Subscribe</button>
        </form>
        }
    ]
  return (
    <footer className='footer'>
        <div className='mb-6'>
            <h4 className='footer_logo'>Furniro.</h4>
        </div>
        <div className='hidden md:block'>
            <h4>Links</h4>
            <ul>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Shop</Link></li>
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </div>
        <div className='hidden md:block'>
            <h4>Help</h4>
            <ul>
                <li><Link href="#">Payment options</Link></li>
                <li><Link href="#">Returns</Link></li>
                <li><Link href="#">Terms of service</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
            </ul>
        </div>
        <div className='hidden md:block'>
            <h4>Newsletter</h4>
            <form>
                <input type="email" placeholder='Enter your email' className='border-b'/>
                <button type="submit" >Subscribe</button>
            </form>
        </div>

        {data.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
    </footer>
  )
}

export default Footer