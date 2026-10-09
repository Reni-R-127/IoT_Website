import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/content.js";
// import PageHero from "../../components/PageHero/PageHero.jsx";
// import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
// import BlogCard from "../../components/BlogCard/BlogCard.jsx";
import CTASection from "../../components/CTASection/CTASection.jsx";
import "./Blog.css";
import BlogHero from "../../components/Blog/BlogHero/BlogHero.jsx";
import Blogs from "../../components/Blog/Blogs/Blogs.jsx";

const slugs = ["what-is-iot","5-fun-iot-projects-kids-can-build","how-do-smart-homes-work","what-is-arduino","why-should-kids-learn-coding"];

export function Blog() {
  return (
    <>
      {/* <PageHero eyebrow="Blog" title="Simple technology ideas for curious minds." text="Short, practical articles about IoT, robotics, coding, electronics, AI and STEM education." /> */}
      <BlogHero />
      <Blogs />
      {/* <main className="blog-page">
        <SectionTitle eyebrow="Technology education" title="Explore the blog" />
        <div className="category-row">{["All","IoT","Robotics","Coding","Electronics","AI","Kids Projects","STEM Education"].map((x,i) => <span className={i === 0 ? "selected" : ""} key={x}>{x}</span>)}</div>
        <div className="blog-grid">{blogPosts.map((post,i) => <BlogCard key={post[1]} post={post} slug={slugs[i]} index={i}/>)}</div>
      </main> */}
      <CTASection />
    </>
  );
}

export function BlogDetails() {
  const { slug } = useParams();
  const index = slugs.indexOf(slug);
  const post = blogPosts[index];

  if (!post) return <div className="blog-not-found"><h1>Article not found</h1></div>;

  return (
    <main className="blog-detail" data-animate="fade-up">
      <span>{post[0]}</span><h1>{post[1]}</h1><time>{post[3]}</time>
      <div className="blog-detail-image" data-animate="zoom">⚡</div>
      <p>{post[2]}</p>
      <p>This placeholder article area is ready for your full blog content. You can replace this text with a longer educational article, images, project instructions and links without changing the page structure.</p>
    </main>
  );
}
