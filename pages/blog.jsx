import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://api-us-west-2.hygraph.com/v2/cllnfv0aq2c7801t5ghfnbhi3/master'
);

import { gql } from 'graphql-request';
export const getPosts = async () => {
const QUERY = gql`
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
`
const post = await hygraph.request(QUERY)
return post;
}
export async function getStaticProps() {
  const data = await getPosts();
  return {
    props: {
      blogs: data.blogs,
      comments: data.comments
    }
  }
}

const Blog = ({blogs, comments}) => {
  
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Blog"} />
      {/* Page Banner End */}
      {/* Blog Page Area start */}
      <section className="blog-page-area py-130 rpy-100 rel z-1">
        <div className="container container-1290">
          <div className="row">
            {blogs.length > 0 && (
              <div>
              {blogs.map((blog) => (
              <div className="col-xl-4 col-md-6" key={blog.id}>
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src={blog.previewImage.url} alt="Blog" />
                </div>
                <ul className="blog-meta">
                  <li>
                    <i className="far fa-calendar-alt" />
                    <a href="#">{blog.publishedOn}</a>
                  </li>
                  <li>
                    <i className="far fa-comments" />
                    <a href="#">Comment ({comments.length})</a>
                  </li>
                </ul>
                <hr />
                <h4>
                  <Link legacyBehavior href={`/post/${blog.slug}`}>
                    <a>{blog.title}</a>
                  </Link>
                </h4>
                <Link legacyBehavior href={`/post/${blog.slug}`}>
                  <a className="read-more">
                    Read More <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            ))}
</div>
            )}
            {!blogs.length > 0 && (<p className="text-black text-[20px] w-full text-center">No posts to show</p>)}

            
           {/* <div className="col-lg-12">
              <ul className="pagination mt-10 flex-wrap justify-content-center wow fadeInUp delay-0-2s">
                <li className="page-item disabled">
                  <span className="page-link">
                    <i className="fas fa-angle-left" />
                  </span>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    01
                    <span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    04
                  </a>
                </li>
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item dot" />
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-right" />
                  </a>
                </li>
              </ul>
            </div>*/}
          </div>
        </div>
      </section>
      {/* Blog Page Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Blog;
