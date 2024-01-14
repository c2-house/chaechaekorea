import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import PostList from '@/components/Blog/PostList';

const Home = () => {
  const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <section className="mx-auto max-w-screen-xl">
        <div className="h-[50svh] overflow-hidden rounded-b-3xl md:rounded-b-[36px] lg:rounded-b-[48px]">
          <Image
            src="/images/cover/main-01.jpg"
            alt="ChaeChae Korea Cover Image"
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="container-xl flex flex-col justify-between gap-x-8 gap-y-6 py-8 sm:flex-row">
          <h1 className="flex-2 whitespace-pre-line text-5xl font-semibold md:text-7xl lg:text-8xl">
            {`Discover the\nAuthentic Korea`}
          </h1>
          <p className="min-w-[200px] max-w-[400px] flex-1 text-gray-700 md:text-lg lg:text-xl">
            Explore Korea through the eyes of locals! Get authentic insights on travel, cuisine,
            daily life, and vibrant culture of Korea.
          </p>
        </div>
      </section>

      <section className="container-xl pt-16">
        <h2 className="mb-5 text-3xl font-semibold">Recent Posts</h2>
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default Home;
