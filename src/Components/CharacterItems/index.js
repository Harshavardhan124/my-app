import {Link} from 'react-router-dom'



import './index.css'


const CharacterItems = props => {
    const {characterData} = props
    const {char_id, img, name} = characterData
    return (
        <Link to={`/characters/${char_id}`}  className='item-link'>
            <div className='item-container'>
                <img className='item-image' src={img} alt={`item${char_id}`}/>
                <div className='item-info'>
                    <p className='item-name'>{name}</p>
                </div>
            </div>
        </Link>
    )
}

export default CharacterItems