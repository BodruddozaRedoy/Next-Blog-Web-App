import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      revalidate: 10
    }
  })
  const {data:posts} =await res.json()
  console.log(posts)
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto container my-10">
        {
          posts?.slice(0,3)?.map((post:any) => <BlogCard key={post.id} post={post}/>)
        }
      </div>
    </div>
  );
}
