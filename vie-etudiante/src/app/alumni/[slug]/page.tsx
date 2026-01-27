import Link from 'next/link';
import ArticleDetail from '../../../components/ArticleDetail/ArticleDetail';
import alumniData from '../../../data/alumni.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return alumniData.items.map((item) => ({
        slug: item.slug,
    }));
}

export default async function AlumniArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = alumniData.items.find((item) => item.slug === slug);

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
            backLink="/alumni"
            backText="← Retour aux alumni"
        />
    );
}
