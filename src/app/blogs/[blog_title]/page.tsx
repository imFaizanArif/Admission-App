export default function blogTitle({ params }: { params: any }) {
    const { blog_title } = params;
    return <h1>My Blog {blog_title}</h1>
}