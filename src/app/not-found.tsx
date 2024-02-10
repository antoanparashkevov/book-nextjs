import React from "react";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
    return (
        <section className='container flex flex-col justify-start items-center'>
            <h1 className='text-center mb-4'>Страницата, която се опитвате да достъпите не съществува!</h1>
            <Link href='/' className='base-btn'>Обратно към начална страница</Link>
        </section>
    )
};

export default NotFoundPage;