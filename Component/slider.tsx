"use client";
import Head from "next/head";
import Link from "next/link";
export default function Slider(){
  return (
    <>
      <Head>
        <title>Image-Slider</title>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <header>
        <a href="#" className="brand">Travel</a>
        <div className="menu-btn active">
          <i className='bx bx-menu-alt-right'></i>
        </div>
        <div className="navigation active">
          <div className="navigation-items">
            <a href="/">Home</a>
            <a href="/adventure">Adventure</a>
            <a href="/camping">Camping</a>
            <a href="/nature">Nature</a>
            <a href="/road">Road</a>
          </div>
        </div>
      </header>

      <section className="home">
        <video className="video-slide" src="1.island.mp4" autoPlay muted loop></video>
        <div className="content">
          <h1>Wonderful.<br /><span>Island</span></h1>
          <p>
            The first thing that hit me was the sound. The sounds of birds, the
            sound of the sea crawling onto the sand. I felt million grains of
            sand underneath my feet and the cool breeze against my face.
            Moreover, the tantalizing scent of the washed-up waves, coconut, and
            pineapple are all mixed into one. As I opened my eyes, I was amazed
            by how easily fantasy and reality intertwined at that moment.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="media-icons">
          <a href="#"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
        </div>

        <div className="slider-navigation">
            <div className="nav-btn"><Link href="/adventure"></Link></div>
            <div className="nav-btn"><Link href="/camping"></Link></div>
            <div className="nav-btn"><Link href="/nature"></Link></div>
            <div className="nav-btn"><Link href="/road"></Link></div>
            <div className="nav-btn"><Link href="/"></Link></div>
        </div>
      </section>
    </>
  );
}
