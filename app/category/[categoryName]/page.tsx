import Image from 'next/image';
import { allPosts } from 'contentlayer/generated';
import { categories } from '@/constants/category';
import PostList from '@/components/Blog/PostList';

interface Props {
  params: {
    categoryName: string;
  };
}

export const generateStaticParams = async () => {
  return categories.map((categoryName) => ({ categoryName }));
};

const CategoryPage = ({ params: { categoryName } }: Props) => {
  const posts = allPosts
    .filter((post) => post.category === categoryName)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <section className="container-xl p-0 lg:px-8">
        <div className="relative flex h-[30vh] items-center justify-center bg-black/60">
          <div className="absolute inset-0 z-[-1] overflow-hidden">
            <Image
              src={`/images/cover/${categoryName}.jpg`}
              alt={`ChaeChae Korea - ${categoryName}`}
              width={1216}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="px-6 text-center text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            {categoryName.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className="container-xl pt-10">
        <PostList posts={posts} />
      </section>
    </main>
  );
};

export default CategoryPage;
