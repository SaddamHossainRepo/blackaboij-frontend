import { useEffect, useState } from "react";


const BlogPosts = () => {
    const [blog, setBlog] = useState([]);

    const blogs = './blogs.json';

    useEffect(() => {
        // Fetch the JSON data
        fetch(blogs)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setBlog(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, [blogs]);
    return (
        <div className="section-gap">
            <h1>Blog Posts</h1>
            <div >
                {
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-[2px] section-gap" >
                        {blog?.map(product => (
                            <div key={product.id} >
                                <img src={product.img} alt={product.title} />
                                <div className="py-[30px]">
                                    <h3 className='px-2'>{product.title}</h3>
                                    <p className="px-2">{product.date}</p>
                                    <p className='px-2'>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogPosts;