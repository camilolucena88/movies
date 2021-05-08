import React from 'react';
import FilterNavBar from "../Filter/FilterNavBar";
import Container from "../Container/Container";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";

type State = {
    text: string
    types: string[]
}

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
}

class Section extends React.Component<Props, State> {
    state: State = {
        text: "",
        types: [],
    }

    filterByInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            text: event.target.value
        })
    }

    addFilter = (event: React.MouseEvent): void => {
        const filter = event.currentTarget.getAttribute('data-filter')
        if (filter !== null && !this.state.types.includes(filter)) {
            this.setState({
                types: [...this.state.types, filter]
            })
        }
    }

    removeFilter = (event: React.MouseEvent): void => {
        const newTypes = [...this.state.types]; // make a separate copy of the array
        const filter = event.currentTarget.getAttribute('data-filter')
        if (filter !== null) {
            const index = newTypes.indexOf(filter)
            if (index !== -1) {
                newTypes.splice(index, 1);
                this.setState({
                    types: newTypes
                });
            }
        }
    }

    render() {
        const filterBySearchTerm = (item: Payload) => {
            return item.title.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1
        }

        const filterByCategory = (item: Payload) => {
            return this.state.types.length > 0 ? this.state.types.some(type => item.type.indexOf(type) !== -1) : true
        }

        const filteredPayload = this.props.payload.filter((item: Payload) => {
            return (
                filterBySearchTerm(item) &&
                filterByCategory(item)
            )
        })

        const cards = () => {
            if (filteredPayload.length > 0) {
                return filteredPayload.map((payload: Payload) => {
                    return <Card
                        payload={payload}
                    />
                })
            } else {
                return <p>No movies to show</p>
            }
        }

        return <div>
            <main>
                <SearchBar value={this.state.text} onChange={(e) => this.filterByInput(e)}/>
                <FilterNavBar removeFilter={(event: React.MouseEvent) => this.removeFilter(event)}
                              filters={this.state.types}
                              categories={this.props.categories}
                              onClick={(event: React.MouseEvent) => this.addFilter(event)}/>
                <Container>
                    {cards()}
                </Container>
            </main>
        </div>
    }
}

export default Section;