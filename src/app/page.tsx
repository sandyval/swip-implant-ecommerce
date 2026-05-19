import type { Metadata } from "next";
import { Suspense } from "react";
import { HomePageComponent } from "@/components/layout/home/home-page-component";
import { SITE_NAME, SITE_URL, buildCanonicalUrl } from "@/lib/metadata";
import { getAuthUserCustomerId } from "@/lib/auth";

export const metadata: Metadata = {
    title: {
        absolute: `${SITE_NAME} - Esteroide Anabolico Inyectable`,
    },
    description:
        "Especializados para el desempeño de ganado de engorda, bajo estrictas normas y controles de calidad.",
    alternates: {
        canonical: buildCanonicalUrl("/"),
    },
    openGraph: {
        title: `${SITE_NAME} - Esteroide Anabolico Inyectable`,
        description:
            "Especializados para el desempeño de ganado de engorda, bajo estrictas normas y controles de calidad.",
        type: "website",
        url: SITE_URL,
    },
};

async function HomeContent() {
    const customerId = await getAuthUserCustomerId();
    return <HomePageComponent customerId={customerId} />;
}

export default function Home(_props: PageProps<'/'>) {
    return (
        <Suspense fallback={<HomePageComponent customerId={undefined} />}>
            <HomeContent />
        </Suspense>
    );
}

