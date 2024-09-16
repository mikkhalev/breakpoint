import React from 'react';
import ServicesPageTitleScreen from "../components/sections/services-page-title-screen";
import Category from "../components/sections/category";

const Development = () => {
    return (
        <main>
            <ServicesPageTitleScreen
                title='Разработка продающих сайтов'
                bid="/"
                img={`${process.env.PUBLIC_URL}/images/development.svg`}
            />
            <Category
                title={['стильные и удобные сайты ', 'для решения бизнес-задач']}
                cards={[
                    {
                        title: 'ЛЭНДИНГ',
                        list: [
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                        ],
                        price: 'от 20 000 ₽'
                    },
                    {
                        title: 'САЙТ КОМПАНИИ',
                        list: [
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                        ],
                        price: 'от 30 000 ₽'
                    },
                    {
                        title: 'интернет-магазин',
                        list: [
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                            '/CMS WordPress, CMS Textalit, Tilda',
                        ],
                        price: 'от 60 000 ₽'
                    }

                ]}
            />
        </main>
    );
};

export default Development;