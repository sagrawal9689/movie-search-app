import React from 'react'

class SearchBar extends React.Component
{
    constructor()
    {
        super()
        this.state= {
            searchTerm: ''
        }
    }

    onInputChange=(event)=>{
        
        this.setState({ searchTerm: event.target.value })
    }

    onSubmitForm=(event)=>{
        event.preventDefault()
    }

    render()
    {
        return (
            <div className="search-container">
                <form className="search-form" onSubmit={ this.onSubmitForm }>
                    <input className="search-input" onChange={ this.onInputChange} value= {this.state.searchTerm} />
                </form>
            </div>
        )
    }
}

export default SearchBar
