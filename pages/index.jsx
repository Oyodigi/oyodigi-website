import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index2 = () => {
  return (
    <Layout footer={2}>
      {/* Hero Section Start */}
      <section
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
          Own Your Own Website. Pay Small Small.

            <span className="arrow">
              <img
                className="wow fadeInLeft delay-0-6s"
                src="assets/images/hero/title-arrow.png"
                alt="Arrow"
              />
            </span>
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                Everything You Need in One Package! We've got all the essentials covered in our all-inclusive package,
                 tailored to fulfill your unique needs.

                </p>
                <img
                  className="mt-20"
                  src="assets/images/hero/arrow.png"
                  alt="Arrow"
                />
                <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">0+ Popular Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="/about">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      
      {/* About Us Area start */}
      <section className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Oyodigi</span>
                  <h2>A Stunning Website Designed Just for You!</h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                  Get ready to make a remarkable online presence with our bespoke website design starting 
                  from as low as ₦3,200 per month. And the best part? You can kickstart your online journey 
                  with just a small initial deposit of ₦5,000.


                  </p>
                </div>
                <div className="about-counter">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                        <Counter end={100} extraClass={"percent"} />
                        <span className="counter-title">
                          Clients Satisfactions
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                        <Counter end={93} extraClass={"percent"} />
                        <span className="counter-title">Success Rating</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                        <Counter end={35} extraClass={"percent"} />
                        <span className="counter-title">Project Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="image-border-shape wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-image-shape.png"
                  alt="About Image Shape"
                />
                <div className="bottom-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clean Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Fast</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Reliable</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Budget-Friendly</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Pay as you go</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>SEO</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Project Timeline-two Area start 
      <section className="project-timeline-two-area pt-130 rpt-100 rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-70 rmb-30 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Lat’s Look Our Recent Project Gallery</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 text-lg-end">
              <Link legacyBehavior href="/projects">
                <a className="explore-more rmb-50 wow fadeInRight delay-0-2s">
                  <i className="fas fa-arrow-right" /> <span>Explore more</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="row gap-90">
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">01</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>Business Task Management Dashboard Design</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">02</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>PSD, Figma &amp; XD to HTML Design &amp; Development</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">03</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>Mobile Application Design &amp; Development</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">04</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>Business Development and Marketing Strategy</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-2s">
                <span className="serial-number">05</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>eCommerce React Website Development</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="project-timeline-two wow fadeInUp delay-0-4s">
                <span className="serial-number">06</span>
                <h4>
                  <Link legacyBehavior href="/project-details">
                    <a>3D Flat UI UX Landing Page Design &amp; Development</a>
                  </Link>
                </h4>
                <div className="image">
                  <img
                    src="assets/images/projects/project-timeline-two1.jpg"
                    alt="Project TimeLine Image"
                  />
                </div>
                <div className="right-btn">
                  <a href="#">
                    <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline Two Area end */}
      {/* Why Choose Us start */}
      <section className="demo-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Here is our offer to you:</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>A Premium Website</h5>
                      </div>
                      <p>
                      We design a stunning website that perfectly embodies your brand
                       and captures your audience's attention.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>1-Year Domain Registration</h5>
                      </div>
                      <p>
                      Establish your online identity with a domain that truly represents your business.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>1-Year Web Hosting</h5>
                      </div>
                      <p>
                      Our reliable hosting services ensure your website stays
                       up and running smoothly, 99.9% of the time.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>10-Year SSL Certificate</h5>
                      </div>
                      <p>
                      Gain your customers' trust and protect their sensitive information with a secure SSL certificate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right.png"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Pricing style three start */}
      <section
        className="pricing-area-three pt-75 rpt-100 pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>Basic Plan</h5>
                <span className="price-text">
                  <span className="before">₦</span>
                  <span className="price">3,200</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Initial Deposit: ₦5,000</li>
                  <li>Buy Back Plan: ₦100K</li>
                  <li>Domain</li>
                  <li>Web Hosting</li>
                  <li>SEO</li>
                  <li>Development</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Premium Plan</h5>
                <span className="price-text">
                  <span className="before">₦</span>
                  <span className="price">6,000</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Initial Deposit: ₦10,000</li>
                  <li>Buy Back Plan: ₦150K</li>
                  <li>SEO Optimisations</li>
                  <li>Design</li>
                  <li>Domain</li>
                  <li>Hosting</li>
                  <li>Development</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>VIP Plan</h5>
                <span className="price-text">
                  <span className="before">₦</span>
                  <span className="price">8,000</span>{" "}
                  <span className="after">/per month</span>
                </span>
                <ul className="list-style-one">
                  <li>Initial Deposit: ₦15,000</li>
                  <li>Buy Back Plan: ₦250K</li>
                  <li>SEO Optimizations</li>
                  <li>Design</li>
                  <li>Domain</li>
                  <li>Hosting</li>
                  <li>Development</li>
                  <li>Content</li>
                </ul>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}
      {/* Headline area start */}
      <div className="headline-area style-two bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonial-section pt-130 rpt-90">
        <div className="container container-1210">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-border-shape rmb-20 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-four.jpg"
                  alt="Testimonial Left Image"
                />
                <div className="bottom-border" />
              </div>
            </div>
            <div className="col-lg-6"><div className="testimonial-one-right-part"> No Reviews Yet </div></div>
           {/*<div className="col-lg-6">
              <div className="testimonial-one-right-part">
                <Swiper
                  {...sliderProps.testimonialsActiveSwiper}
                  className="testimonials-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item">
                    <div className="author-speech">
                      <p>
                        <span className="quote">“</span> On the other hand we
                        denounce with see righteous indignation and dislike men
                        who are beguiled and demoralized by the charms offset
                        pleasure moments line desire that they cannot foresee
                        pain and trouble that are bound ensue and equal blame
                        belongs their duty{" "}
                        <span className="quote right-quote">“</span>
                      </p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img
                            src="assets/images/testimonials/author1.png"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-info">
                          <h4>James N. Johnson</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div className="ratting style-two">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls mt-75 rmt-40 wow fadeInUp delay-0-2s">
                  <button className="testimonial-prev slick-arrow">
                    <i className="far fa-chevron-left" />
                  </button>
                  <div className="testimonial-dots">
                    <div className="slick-dots"></div>
                  </div>
                  <button className="testimonial-next slick-arrow">
                    <i className="far fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      <section className="blog-area-two pt-125 rpt-100 pb-70 rpb-40">
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Blog &amp; News</span>
                <h2>Read Our Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div> No Posts Yet </div>
          {/*<div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>Voice Skills For Google Assistant And Amazon Alexa</a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Inclusive Design And Accessibility Stream Heydon Pickering
                    </a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <h4>
                  <Link legacyBehavior href="/blog-details">
                    <a>
                      Creating Online Environments The Work Well For Older Users
                    </a>
                  </Link>
                </h4>
                <hr />
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">February 18, 2023</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment (5)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
        </div>
      </section>
      {/* Blog Style Two end */}
    </Layout>
  );
};
export default Index2;
