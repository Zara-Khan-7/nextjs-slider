"use client";
import Head from "next/head";
export default function Adventure(){
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
        <video className="video-slide" src="4.adventure.mp4" autoPlay muted loop></video>
        <div className="content">
          <h1>Adventures.<br /><span>Off Road</span></h1>
          <p>
          Being covered head to toe in thick, chunky mud really means you have been through a lot. Off roading seems to be a fun way to spend your Saturday night. Most high school seniors would go party and get drunk, but not me. 
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="media-icons">
          <a href="#"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
        </div>

        <div className="slider-navigation">
            <div className="nav-btn"><a href="/adventure"></a></div>
            <div className="nav-btn"><a href="/camping"></a></div>
            <div className="nav-btn"><a href="/nature"></a></div>
            <div className="nav-btn"><a href="/road"></a></div>
            <div className="nav-btn"><a href="/"></a></div>
        </div>
      </section>
    </>
  );
}
