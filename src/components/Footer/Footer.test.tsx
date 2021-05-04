import React, {ReactElement, ReactNode} from 'react';
import {render, RenderOptions, screen} from '@testing-library/react';
import Footer from './Footer';
import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";

let container: Element | undefined | DocumentFragment = undefined;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(document.createElement("div"));
    document.createElement("div").remove();
    container = undefined;
});

test('Render Footer', () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/© 2021 Brandtech —/i);
    expect(linkElement).toBeInTheDocument();
});

it("renders with or without a name", () => {
    render(<Footer/>);
    const linkElement = screen.getByText(/Brand Name Here/i);
    expect(linkElement).toBeInTheDocument();

    render(<Footer brandName="Escuela Uno"/>);
    const linkElementWithBrandName = screen.getByText(/Escuela Uno/i);
    expect(linkElementWithBrandName).toBeInTheDocument();
});

it("Render link", () => {
    act(() => {
        render(<Footer/>);
        const img = screen.getByAltText('brandLogo')
        expect(img).toBeInTheDocument();
        expect(img).toBeVisible();
    })
})

