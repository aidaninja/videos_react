import React from 'react'

// import '..style/SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             term: ''
        }
    }

    onInputChange=(e)=>{
        this.setState({term: e.target.value});
    }

    onFormSubmit=(e)=>{
        e.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {   
        return (
            <div className="search-bar ui segment">
                {/* searchBar */}
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>
                            Video Search
                        </label>
                        <input onChange={this.onInputChange} value={this.state.term} type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;