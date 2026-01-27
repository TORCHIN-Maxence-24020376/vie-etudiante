import Link from 'next/link';
import ArticleDetail from '../../../components/ArticleDetail/ArticleDetail';
import bdeData from '../../../data/bde.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return bdeData.map((item) => ({
        slug: item.slug,
    }));
}

export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = bdeData.find((item) => item.slug === slug);

    if (!event) {
        notFound();
    }

    return (
        <ArticleDetail
            category={event.category}
            title={event.title}
            date={event.date}
            subtitle="Évènement BDE"
            description={event.desc}
            content={event.content}
            backLink="/bde"
            backText="← Retour aux événements"
            price={event.price}
            registerLink="#"
        />
    );
}
