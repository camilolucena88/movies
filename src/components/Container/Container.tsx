import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default function Container({children}: Props) {
    return <div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {children}
                </div>
            </div>
        </section>
    </div>
}