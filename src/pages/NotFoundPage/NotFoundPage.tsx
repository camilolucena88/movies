import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export const NotFoundPage = () => {
    return (
        <div>
            <Layout>
                <h1>Page Not Found</h1>
                <p>Sorry, there is nothing to see here.</p>
                <p><Link to="/">Back to Home</Link></p>
            </Layout>
        </div>
    );
}
