// Class Base component to update and change state
import React from 'react';
import './SearchBar.css';
import { Paper, TextField } from '@material-ui/core';



class SearchBar extends React.Component {
    
    state = {
        searchInput: ''
    }

    handleChange = (event) => this.setState({searchInput: event.target.value})
    
    handleSubmit = (event) => {
        const { searchInput } = this.state;

        // In class base components we have access to
        // onSubmit with this.props.onSubmit
        this.props.onSubmit(searchInput);
        event.preventDefault();
        
    }

    render() {
        return (
            <Paper className="search-paper" elevation={6}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth id="Search-input" label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;

