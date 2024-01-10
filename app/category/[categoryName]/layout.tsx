import { Metadata, ResolvingMetadata } from 'next';
import { title, description, openGraph } from '@/app/shared-metadata';

interface Props {
  params: {
    categoryName: string;
  };
}

export const generateMetadata = async (
  { params: { categoryName } }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const category = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const ogTitle = `${category} | ${title}`;
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: category,
    description,
    openGraph: {
      ...openGraph,
      title: ogTitle,
      description,
      url: `/category/${categoryName}`,
      images: [`/images/cover/${categoryName}.jpg`, ...previousImages],
    },
    twitter: {
      title: ogTitle,
      description,
      card: 'summary_large_image',
    },
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => children;

export default Layout;
