import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    state = {
        robots: [],
        search: ''
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(user => this.setState({ robots: user }));
    }
    render() {
        const { robots, search} = this.state;
        const filterRobots = robots.filter(x => (
            x.name.toLowerCase().includes(search.toLowerCase())
        ));
        return !robots.length?
        (<h1>Loading...</h1>)
        : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox
                    search={this.state.search}
                    handleChange={this.handleChange}
                />
                <Scroll>
                    <CardList robots={filterRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App;