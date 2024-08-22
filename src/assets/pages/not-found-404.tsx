import React from 'react';
// @ts-ignore
import classes from '../css/pages/not-found-404.module.scss'
const NotFound404 = () => {
    return (
        <main className={classes.main}>
            <section>
                <div className={'wrapper'}>
                    <h1>
                        404 ERROR
                    </h1>
                </div>
            </section>
        </main>
    );
};

export default NotFound404;