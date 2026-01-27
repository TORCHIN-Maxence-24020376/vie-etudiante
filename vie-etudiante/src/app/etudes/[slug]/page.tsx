import Link from 'next/link';
import ArticleDetail from '../../../components/ArticleDetail/ArticleDetail';
import etudesData from '../../../data/etudes.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return etudesData.map((item) => ({
        slug: item.slug,
    }));
}

export default async function EtudesArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = etudesData.find((item) => item.slug === slug);

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
            backLink="/etudes"
            backText="← Retour aux études"
        />
    );
}
