import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.scss';
import meme1 from "./DoggoTypes/meme1.jpg";
import meme2 from "./DoggoTypes/meme2.jpg";
import meme3 from "./DoggoTypes/meme3.jpg";
import meme4 from "./DoggoTypes/meme4.jpg";
import meme5 from "./DoggoTypes/meme5.jpg";
import meme6 from "./DoggoTypes/meme6.jpg";
import husky1 from "./Husky/husky1.jpg"
import husky2 from "./Husky/husky2.jpeg"
import husky3 from "./Husky/husky3.jpeg"
import husky4 from "./Husky/husky4.jpeg"
import husky5 from "./Husky/husky5.jpeg"
import husky6 from "./Husky/husky6.jpg"
import husky7 from "./Husky/husky7.jpg"
import husky8 from "./Husky/husky8.jpg"
import husky9 from "./Husky/husky9.jpg"
import husky10 from "./Husky/husky10.jpg"

function getRandomImage(){
    let myPix = new Array(meme1, meme2, meme3, meme4, meme5, meme6);

    let randomNum = Math.floor(Math.random() * myPix.length);
    return myPix[randomNum]
}


export class _Login extends React.Component{
    state = {
        isActive: false  }

    handleShow = ()=>{
        this.setState({
            isActive: true      })
    }

    handleHide = () =>{
        this.setState({
            isActive: false      })
    }

    render(){
        let random_meme = getRandomImage();
        return(
            <div>
                <h1 className='Title_memes'> На этой страничке просто рандомные мемы! </h1>
                <table>
                    <td>Узнайте какой пёсель вы сегодня!
                        <td><button className="dropbtn" onClick={this.handleShow}>Show</button>
                        </td>
                        <td><button className="dropbtn" onClick={this.handleHide}>Hide</button>
                        </td>
                        {this.state.isActive ? <img src={random_meme} alt="meme1" /> : <h1>Daily Doggo</h1> }
                    </td>
                    <td>
                        <h2>Порода месяца это хаски! Специальная подборка мемов с хаски!</h2>
                        <img src={husky7} className="imagegetbig" alt="husky1"/>
                        <img src={husky10} className="imagegetbig" alt="husky2"/>
                        <img src={husky3} className="imagegetbig" alt="husky3"/>
                        <img src={husky4} className="imagegetbig" alt="husky4"/>
                        <img src={husky2} className="imagegetbig" alt="husky5"/>
                        <img src={husky6} className="imagegetbig" alt="husky6"/>
                        <img src={husky1} className="imagegetbig" alt="husky7"/>
                        <img src={husky8} className="imagegetbig" alt="husky8"/>
                        <img src={husky9} className="imagegetbig" alt="husky9"/>
                        <img src={husky5} className="imagegetbig" alt="husky10"/>
                    </td>
                </table>

            </div>

        );
    }
}

