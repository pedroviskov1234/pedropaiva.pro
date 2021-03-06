import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { HiMenu } from 'react-icons/hi'
import { VscClose } from 'react-icons/vsc'

import { SidebarData } from './SidebarData'

import { Background, Container } from './styles'

const NavBar: React.FC = () => {
  const [sidebar, setSidebar] = useState<boolean>(false)

  const router = useRouter()

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Background>
      <Container>
        <Link href="/">
          <p>Pedro Paiva</p>
        </Link>
        {sidebar && (
          <VscClose size={28} color="#e1e1e6" onClick={showSidebar} />
        )}
        {!sidebar && <HiMenu size={28} color="#e1e1e6" onClick={showSidebar} />}
        <ul>
          <Link href="/portfolio">
            <li
              onClick={() => router.push('/portfolio')}
              id={router.pathname === '/portfolio' ? 'path' : ''}
            >
              portfolio
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={() => router.push('/contact')}
              id={router.pathname === '/contact' ? 'path' : ''}
            >
              contato
            </li>
          </Link>
        </ul>
      </Container>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} onClick={showSidebar}>
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </Background>
  )
}

export default NavBar
