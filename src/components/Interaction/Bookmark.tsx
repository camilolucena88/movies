import React from "react";

type Props = {
    bookmark: boolean,
    onBookmark: (event: React.MouseEvent) => any;
    id: number
}


export default function Bookmark({bookmark, id, onBookmark}:Props) {
    const currentFill = bookmark ? "currentColor" : "none"
    return <div className="flex flex-column">
        <button value={id} className="text-gray-500" onClick={(event) => onBookmark(event)}>
            <small>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={currentFill} viewBox="0 0 24 24"
                        stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
            </small>
        </button>
    </div>
}