import { Appbar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs, error } = useBlogs();

  if (loading) {
    return <div>
            <Appbar />

            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                    <BlogSkeleton/>
                </div>
            </div>;
        </div>
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blogs.length) {
    return <div>No blogs available.</div>;
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate="11/09/2003"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
