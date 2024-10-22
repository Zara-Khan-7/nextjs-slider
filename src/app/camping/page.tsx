"use client";
import Head from "next/head";
import Link from "next/link";
export default function Camping(){
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
        <video className="video-slide" src="3.camping.mp4" autoPlay muted loop></video>
        <div className="content">
          <h1>camping.<br /><span>Enjoy</span></h1>
          <p>
          The jungle. It looked way bigger than I expected. As we walked through the woods the trees stood tall, ready to greet us and the green grass looked like a person with a bad hair day.
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
