'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Canvas } from '@react-three/fiber'

import { Environment, OrbitControls } from '@react-three/drei';

import React from 'react';
import Link from 'next/link';


const page: React.FC = () => {
  return (
    <div className="container">
      <div className="container">
        <Image src="Images/WebsiteProfilePic1.jpeg" alt="Your Name" className="profile-image"/>
      </div>
      <header className="header">
        <div className="info">
          <h1 className="name">Matteo Kuberek</h1>
          <div className="description">Digital Marketer</div>
        </div>
       
        <div className="background-text">
          <p className="text-large">
          Imagine a world where your brand not only survives but flourishes. Envision your products or services touching the lives of countless individuals, leaving an indelible mark. Picture the joy of surpassing your competitors, the satisfaction of a growing customer base, and the financial security you deserve.

            <br /><br />
            In today&apos;s fast-paced digital landscape, I understand the weight of your aspirations and the ache of unmet goals. Your business is more than just an enterprise; it&apos;s your passion, legacy, and livelihood. It deserves to thrive.

            <br /><br />
            ​This is where I step in.
            <br /><br />
            I don&apos;t just promise results; I craft them meticulously. Your dreams and desires become my mission. With a tailored strategy in hand, we&apos;ll navigate the labyrinth of the digital realm, taking every opportunity to make your business turn into an empire.

            <br /><br />
            Long nights and tireless efforts have prepared me to become your ally in this journey. I&apos;ve witnessed businesses evolve from obscurity to stardom, and I&apos;m here to guide you through that transformation. The landscape is ever-changing, and so am I, constantly adapting to the latest trends and technologies.

            <br /><br />
            But it&apos;s not just about numbers and data; it&apos;s about the emotional connection you forge with your audience. We&apos;ll weave stories that resonate, create experiences that captivate, and build relationships that last. Your brand will become more than a name; it will become a symbol of trust, reliability, and authenticity.

            <br /><br />
            Let&apos;s embark on this voyage together, achieving your dreams and fulfilling your desires. Your success is not just a business transaction for me; it&apos;s a shared journey, an emotional investment. Together, we will not only weather the storms but thrive in them.

            <br /><br />
            Reach out today, and let&apos;s bring your vision to life. Your business deserves nothing less than the spotlight it craves.

          </p>

        
      </div>
      </header>
      <div className="buttons">
          <a href="https://www.instagram.com/your-instagram-profile/" target="_blank" rel="noopener noreferrer" className="button">Instagram</a>
          <a href="mailto:your.email@gmail.com" className="button">Email</a>
        </div>
    </div>

    
  );
};

export default page;