import Link from 'next/link';
import ArticleDetail from '../../../components/ArticleDetail/ArticleDetail';
import contentData from '../../../data/content.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return contentData.news.map((item) => ({
        slug: item.slug,
    }));
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = contentData.news.find((item) => item.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <ArticleDetail
            category={article.category}
            title={article.title}
            date={article.date}
            description={article.desc}
            content={article.content}
            backLink="/actualites"
            backText="← Retour aux actualités"
        />
    );
}
