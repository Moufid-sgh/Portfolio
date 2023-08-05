import Navbar from './component/Navbar';
import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Moufid Sghiri',
  description: 'Web developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
