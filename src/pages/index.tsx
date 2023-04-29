import React, { useState } from "react";
import Head from 'next/head'
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import Footer from "@/components/Footer";
import ColoredBall from "@/components/ColoredBall";
import Modal from "@/components/Modal";

export default function Home() {
    const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Head>
        <title>WELBEX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header handleClick={setIsClicked}/>
          <MainSection/>
          <Footer/>
          <Modal isClicked={isClicked} handleClick={setIsClicked}/>
          <ColoredBall
              width={311} height={311}
              background={'#961A1A'}
              top={251} left={'calc(-102 / 14.4 * 1%)'}
              opacity={0.5}
              filter={'blur(196px)'}
          />
          <ColoredBall
              width={83} height={83}
              background={'radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%)'}
              top={83} left={'calc(519 / 14.4 * 1%)'}
              boxShadow={'3px 6px 27px -10px rgba(223, 125, 125, 0.25)'}
              backdropFilter={'blur(2px)'}
          />
          <ColoredBall
              width={60} height={60}
              background={'radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)'}
              top={-2} left={'calc(868 / 14.4 * 1%)'}
              boxShadow={'3px 6px 27px -10px rgba(177, 118, 217, 0.25)'}
              filter={'blur(5px)'}
              backdropFilter={'blur(2px)'}
          />
          <ColoredBall
              width={28} height={28}
              background={'radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%)'}
              top={547} left={'calc(851 / 14.4 * 1%)'}
              boxShadow={'3px 6px 27px -10px rgba(177, 118, 217, 0.25)'}
              filter={'blur(2.5px)'}
              backdropFilter={'blur(2px)'}
          />
          <ColoredBall
              width={259} height={259}
              background={'#833AB4'}
              top={-154} left={'calc(602 / 14.4 * 1%)'}
              opacity={0.5}
              filter={'blur(196px)'}
          />
      </main>
    </>
  )
}
