import Link from "next/link";

const PageBanner = ({ pageName }) => {
  return (
    <section
      className="page-banner-area overlay pt-220 rpt-150 pb-170 rpb-100 rel z-1 bgs-cover text-center"
      style={{ backgroundImage: "url(assets/images/banner/banner-bg.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner rpt-10">
          <h2 className="page-title wow fadeInUp delay-0-2s">{pageName}</h2>
        </div>
      </div>
    </section>
  );
};
export default PageBanner;
