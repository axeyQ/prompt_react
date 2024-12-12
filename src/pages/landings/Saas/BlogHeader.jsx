import "./Blogs.css"
const BlogHeader = ({title, category, author, date}) => {
    return ( 
        <div className="blog-header d-flex flex-column align-items-start justify-content-start mt-4">
        <div className="blog-header-contents d-flex justify-content-start align-items-center gap-3">
            <p className="blog-category-header">{category}</p>
            <p className="blog-header-date">{date}</p>
        </div>
            <h1 className="blog-header-title">{title}</h1>
            <p className="blog-header-author">by {author}</p>
        </div>
     );
}
 
export default BlogHeader;