import React, {useState} from 'react';
import FilterNavBar from "../Filter/FilterNavBar";
import Container from "../Container/Container";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

type Payload = {
    id: number
    url: string,
    title: string,
    type: string[],
    message: string,
    img: string
    slug?: string,
    rating?: string,
    length?: string,
}

type Props = {
    payload: Payload[]
    categories: string[]
    onLiked: (event: React.MouseEvent) => void;
    onComment: (comment: string, id: number) => void;
    onBookmark: (event: React.MouseEvent) => void;
    onCommentLike: (elementId: number, commentId: number) => void;
}

export default function Section({payload, categories, onLiked, onComment, onBookmark, onCommentLike}: Props) {
    const [text, setText] = useState<string>('')
    const [types, setTypes] = useState<string[]>([])

    const filterByInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setText(event.target.value)
    }

    const addFilter = (event: React.MouseEvent): void => {
        const filter = event.currentTarget.getAttribute('data-filter')
        if (filter !== null && !types.includes(filter)) {
            setTypes([...types, filter])
        }
    }

    const removeFilter = (event: React.MouseEvent): void => {
        const newTypes = [...types]; // make a separate copy of the array
        const filter = event.currentTarget.getAttribute('data-filter')
        if (filter !== null) {
            const index = newTypes.indexOf(filter)
            if (index !== -1) {
                newTypes.splice(index, 1);
                setTypes(newTypes)
            }
        }
    }

    const filterBySearchTerm = (item: Payload) => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
    }

    const filterByCategory = (item: Payload) => {
        return types.length > 0 ? types.some(type => item.type.indexOf(type) !== -1) : true
    }

    const filteredPayload = payload.filter((item: Payload) => {
        return (
            filterBySearchTerm(item) &&
            filterByCategory(item)
        )
    })

    const cards = () => {
        if (filteredPayload.length > 0) {
            return filteredPayload.map((payload: Payload) => {
                return <Card
                    id={payload.id}
                    payload={payload}
                    onLiked={onLiked}
                    onComment={onComment}
                    onBookmark={onBookmark}
                    onCommentLike={onCommentLike}
                />
            })
        } else {
            return <p>No places to show</p>
        }
    }

    return <div>
        <main>
            <SearchBar value={text} onChange={(e) => filterByInput(e)}/>
            <FilterNavBar removeFilter={(event: React.MouseEvent) => removeFilter(event)}
                          filters={types}
                          categories={categories}
                          onClick={(event: React.MouseEvent) => addFilter(event)}/>
            <div className="text-justify mx-5"><small>Total: {filteredPayload.length}</small></div>
            <Container>
                {cards()}
            </Container>
        </main>
    </div>
}

