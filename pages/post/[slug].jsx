import Layout from "@/src/layout/Layout";
import React from "react";
import Link from "next/link";
import { GraphQLClient } from 'graphql-request';
import { Accordion } from "react-bootstrap";
import NavSearch from "@/src/layout/header/NavSearch";
import Menu from "@/src/layout/header/Menu";

const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/cllnfv0aq2c7801t5ghfnbhi3/master'
);

import { gql } from 'graphql-request';

const get = async (slug) => {
const post = await hygraph.request(QUERY)
return post;
}
export async function getStaticProps({params}) {
  const blog = await hygraph.request(
    `
  query Blogs($slug: String!) {
    blogs(where: {slug: $slug}) {
      createdAt
      id
      publishedAt
      publishedOn
      title
      updatedAt
      previewImage {
        url
      }
      postBody {
        text
        raw
        markdown
        html
      }
      mainImage {
        url
      }
      author {
        name
        instaLink
        linkedInLink
        twitterLink
        bio
      }
      comments {
        email
        fullName
        message
        createdAt
      }
    }
  }
`,{
slug:params.slug,
}
  );

  return {
    props: {
      post : blog.blogs,
    }
  }
}

export async function getStaticPaths(){
  const posts = await hygraph.request(gql`
  {
    blogs {
      createdAt
      id
      slug
      publishedAt
      publishedOn
      title
      updatedAt
      previewImage {
        url
      }
    }
    comments {
      id
    }
  }
`);
   return {
    paths: posts.blogs.map(({slug}) => ({ params: { slug } })),
    fallback: false,
   }
}


const BlogDetails = ({post, singleMenu}) => {
  const postItem = post[0];
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div>
       <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="../assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  src="../assets/images/logos/logo.png"
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            className="navbar-toggle"
            eventKey="navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="navbar-collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation d-none d-lg-flex desktop-menu">
      <li >
        <a href="/">Home</a>
        
      </li>
      <li>
        <Link legacyBehavior href="../about">
          About Us
        </Link>
      </li>
      <li>
        <a href="../blog">Blog</a>
      </li>
      <li>
        <a href="../contact">Contact Us</a>
      </li>
    </ul>
 
        </Accordion.Collapse>
      </Accordion>
    </nav>              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <NavSearch />
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto">
              <Link legacyBehavior href="/">
                <a className="theme-btn style-two me-4">
                  Let’s Talk <i className="far fa-arrow-right" />
                </a>
              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar">
                <button className="bg-transparent">
                  <img
                    src="../assets/images/icons/toggler-white.svg"
                    alt="Toggler"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
      {/* Page Banner Start */}
      <section
        className="page-banner-area overlay pt-250 pb-50 rel z-1 bgs-cover"
        style={{
          backgroundImage: "url(../assets/images/banner/banner-bg-two.jpg)",
        }}
      >
        <div className="container">
          <div className="banner-inner">
            <div className="row">
              <div className="col-xl-8">
                <ul className="blog-meta mb-15 wow fadeInUp delay-0-2s">
                  <li>
                    <i className="fal fa-user-alt" />
                    <a href="#">{postItem.author.name}</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">{postItem.publishedOn}</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment ({postItem.comments.length})</a>
                  </li>
                </ul>
                <h2 className="page-title wow fadeInUp delay-0-3s">
                  {postItem.title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Blog Details Page Area start */}
      <section className="blog-details-page py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row gap-60">
            <div className="">
              <div className="blog-single-content">
                <div className="image mb-155 rmb-100 wow fadeInUp delay-0-2s">
                  <img
                    src={postItem.mainImage.url}
                    alt="Blog Details"
                  />
                </div>
                <section className="big-first-letter"> 
                  {postItem.postBody.raw.children.map((typeObj, index) => {
                    const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
                    return getContentFragment(index, children, typeObj, typeObj.type)
                  })}
                  </section>
                
              </div>
              
              <div className="admin-comment bgc-lighter wow fadeInUp delay-0-2s">
                <div className="comment-body">
                  <div className="author-thumb">
                    <img
                      src="assets/images/blog/admin-author.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <h5>{postItem.author.name}</h5>
                    <p>
                      {postItem.author.bio}
                    </p>
                    <div className="social-style-one">
                      <Link legacyBehavior href={postItem.author.twitterLink}>
                        <a>
                          <i className="fab fa-twitter" />
                        </a>
                      </Link>
                      <Link legacyBehavior href={postItem.author.linkedInLink}>
                        <a>
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </Link>
                      <Link legacyBehavior href={postItem.author.instaLink}>
                        <a>
                          <i className="fab fa-instagram" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="comment-title mb-50">Popular Comments</h3>
              {postItem.comments.length > 0 && (
                <div className="comments">
                  {postItem.comments.map((comment) => (
                    <div className="comment-body wow fadeInUp delay-0-2s">
                  <div className="author-thumb">
                    <img
                      src="../assets/images/blog/comment-author1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="content">
                    <ul className="blog-meta">
                      <li>
                        <h6>{comment.fullName}</h6>
                      </li>
                      <li>
                        <a href="#">{comment.createdAt}</a>
                      </li>
                    </ul>
                    <p>
                      {comment.message}
                      </p>
                    <a className="read-more" href="#">
                      Reply <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
                  ))}
              </div>
              )}
              {!postItem.comments.length > 0 && (<p className="text-black text-[20px] w-full text-center">No comments to show</p>)}
              <form
                id="comment-form"
                className="comment-form bgc-lighter mt-95 wow fadeInUp delay-0-2s"
                name="comment-form"
                action="#"
                method="post"
              >
                <h4>Leave a Reply</h4>
                
                <div className="row mt-30">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="blog-email"
                        name="blog-email"
                        className="form-control"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="form-control"
                        placeholder="Website"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows={4}
                        placeholder="Message"
                        required={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="theme-btn style-two w-100"
                      >
                        Send a Reply <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            </div>
        </div>
      </section>
      {/* Blog Details Page Area end */}
      {/* footer area start */}
      </div>
  );
};
export default BlogDetails;
