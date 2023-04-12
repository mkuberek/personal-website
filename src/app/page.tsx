'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      Hello World
    </div>
  )
}
