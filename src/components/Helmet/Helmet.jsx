import React from "react";
import Head from "react-helmet";
const mainKeyWords = "bâtiment, alimentation, services, fabrication, Auvergne-Rhône-Alpes"
const mainTitle = "Trouve ton artisan - Région Auvergne-Rhône-Alpes"
const mainDescription = "Vous avez besoin de faire appel à un entreprise de services ou à un artisan. Découvrez et entrez en contact avec les spécialistes de votre région."


export default function Helmet ({
    title,
    description,
    link,
    keywords

}) {
    const metaTitle = title + "-" + mainTitle
    const metaDescription = mainDescription
    const metaKeyWords = mainKeyWords

    return <Head>
        <html lang="fr"/>
        <meta charset="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeyWords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        

    </Head>

}