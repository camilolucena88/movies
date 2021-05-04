import React from 'react';
import {render, screen} from '@testing-library/react';
import {unmountComponentAtNode} from "react-dom";
import Section from './Section';

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

test('Render Empty Section', () => {
    render(<Section payload={[]} categories={[]}/>);
    const linkElement = screen.getByText(/No movies to show/i);
    expect(linkElement).toBeInTheDocument();
});