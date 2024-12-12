import BlogCard from "components/BlogCard";

const BlogsContent = ({filteredBlogs}) => {
    return (         <div className="d-flex justify-content-center align-items-start flex-wrap">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        ) : (
          <p>No blogs found matching your search.</p>
        )}
      </div> );
}
 
export default BlogsContent;