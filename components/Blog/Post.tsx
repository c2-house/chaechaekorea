import dayjs from 'dayjs';
import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import Mdx from '../Mdx';

const Post = ({ post }: { post: Post }) => {
  return (
    <article className="prose mx-auto max-w-[730px] py-4 lg:prose-lg prose-figcaption:text-sm md:py-6">
      <header>
        <div className="mb-4">
          <Link
            href={`/category/${post.category}`}
            className="font-semibold uppercase text-gray-500 no-underline"
          >
            {post.category}
          </Link>
        </div>
        <h1 className="!mb-6">{post.title}</h1>
        <div className="text-sm text-gray-500 lg:text-base">
          <time dateTime={dayjs(post.date).format('YYYY-MM-DD')}>
            {dayjs(post.date).format('MMM D, YYYY')}
          </time>
          <span className="before:px-1.5 before:content-['·']">{post.readTime} min read</span>
        </div>
      </header>
      <hr className="not-prose my-8 lg:my-10" />
      <section>
        <Mdx code={post.body.code} />
      </section>
    </article>
  );
};

export default Post;
