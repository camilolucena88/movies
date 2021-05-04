import React, {ReactElement, ReactNode} from 'react';
import {render, RenderOptions, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Home from './Home';

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

test('Render Layout', () => {
    render(<Home/>);
    const linkElement = screen.getByText(/© 2021 Brandtech —/i);
    expect(linkElement).toBeInTheDocument();
});