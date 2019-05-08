import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
    return {
        searchInput: state.searchInput
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: e => dispatch(setSearchField(e.target.value))
    }
}

class App extends Component {
    state = {
        robots: []
    }

    // handleChange = e => {
    //     const { name, value } = e.target;
    //     this.setState({ [name]: value });
    // }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(user => this.setState({ robots: user }));
    }
    render() {
        const { robots } = this.state;
        const { searchInput, handleChange } = this.props;
        const filterRobots = robots.filter(x => (
            x.name.toLowerCase().includes(searchInput.toLowerCase())
        ));
        return !robots.length?
        (<h1>Loading...</h1>)
        : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox
                    search={searchInput}
                    handleChange={handleChange}
                />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);