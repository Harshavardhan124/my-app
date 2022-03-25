import { Component } from "react";
import CharacterItems from '../CharacterItems'

import './index.css'

class CharactersList extends Component {
    state = {characterData: [], isLoading: true}

    componentDidMount() {
        this.getCharactersData()
    }

    getCharactersData = async () => {
        const response = await fetch('https://www.breakingbadapi.com/api/characters')
        const data = await response.json()
        console.log(data)

        this.setState({characterData: data, isLoading: false})
    }

    render() {
        const {characterData, isLoading} = this.state
        return (
            <div className="characters-list-contianer">
                {
                    isLoading ? (<div><h1 className="loading">Loading...</h1></div>) : 
                    (characterData.map(item => <CharacterItems characterData={item} key={item.char_id} />))
                }
            </div>
        )
    }
}

export default CharactersList