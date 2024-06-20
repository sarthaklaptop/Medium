import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "name": string;
    }
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem("token") || "",
          },
        })
        .then((response) => {
          setBlogs(response.data.blogs);
          setLoading(false);
        })
        .catch((err) => {
          setError("Error fetching blogs");
          setLoading(false);
        });
    }, []);
  
    return {
      blogs,
      loading,
      error,
    };
  };

export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
            .catch(err => {
                setError("Error fetcing blog");
                setLoading(false)
            })
    }, [])

    console.log(blog)

    return {
        loading,
        blog,
        error
    }

}
