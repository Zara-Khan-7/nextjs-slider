"use client";
import Head from "next/head";
import Link from "next/link";
export default function Road(){
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
        <video className="video-slide" src="2.road.mp4" autoPlay muted loop></video>
        <div className="content">
          <h1>Road Trip.<br /><span>Together</span></h1>
          <p>
          Road trip is one of the best ways to freshen the mind and enjoy every moments with nature. It is a best way to uplift the mood and capture the happiest moments into the album of good memories for future. People who love travelling mostly prefer road trips as they offer a completely different experience. Whether one is going out with family or friends – road trips are considered to be the best way to enjoy the vacation to the fullest.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="media-icons">
          <a href="#"><i className='bx bxl-facebook-circle'></i></a>
          <a href="#"><i className='bx bxl-instagram'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
        </div>

        <div className="slider-navigation">
            <div className="nav-btn">
                <Link href="/adventure"></Link></div>
            <div className="nav-btn">
                <Link href="/camping"></Link></div>
            <div className="nav-btn">
                <Link href="/nature"></Link></div>
            <div className="nav-btn">
                <Link href="/road"></Link></div>
            <div className="nav-btn">
                <Link href="/"></Link></div>
        </div>
      </section>
    </>
  );
}
