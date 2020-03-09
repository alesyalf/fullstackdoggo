import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.scss';
import meme1 from './MemesImages/meme1.jpg'
import meme2 from './MemesImages/meme2.jpg'
import meme3 from './MemesImages/meme3.jpg'
import meme4 from './MemesImages/meme4.jpg'
import meme5 from './MemesImages/meme5.jpg'
import meme6 from './MemesImages/meme6.jpg'
import meme7 from './MemesImages/meme7.jpg'
import meme8 from './MemesImages/meme8.jpg'
import meme9 from './MemesImages/meme9.jpg'
import meme10 from './MemesImages/meme10.jpg'
import meme11 from './MemesImages/meme11.jpg'
import meme12 from './MemesImages/meme12.jpg'
import meme13 from './MemesImages/meme13.jpg'
import meme14 from './MemesImages/meme14.jpg'
import meme15 from './MemesImages/meme15.jpg'


export class _Memes extends React.Component{
render(){
return(
<div>
    <h1 className='Title_memes'> На этой страничке представлены все самые новые мемы про пёселей! </h1>
    <table>
        <tr>
            <td><img src={meme1} className="imagegetbigger" alt="meme1" /></td>
            <td><img src={meme2} className="imagegetbigger" alt="meme2" /></td>
            <td><img src={meme3} className="imagegetbigger" alt="meme3" /></td>
            <td><img src={meme4} className="imagegetbigger" alt="meme4" /></td>
            <td><img src={meme5} className="imagegetbigger" alt="meme5" /></td>
            </tr>
        <tr>
            <td><img src={meme6} className="imagegetbigger" alt="meme6" /></td>
            <td><img src={meme7} className="imagegetbigger" alt="meme7" /></td>
            <td><img src={meme8} className="imagegetbigger" alt="meme8" /></td>
            <td><img src={meme9} className="imagegetbigger" alt="meme9" /></td>
            <td><img src={meme10} className="imagegetbigger" alt="meme10" /></td>
        </tr>
        <tr>
            <td><img src={meme11} className="imagegetbigger" alt="meme11" /></td>
            <td><img src={meme12} className="imagegetbigger" alt="meme12" /></td>
            <td><img src={meme13} className="imagegetbigger" alt="meme13" /></td>
            <td><img src={meme14} className="imagegetbigger" alt="meme14" /></td>
            <td><img src={meme15} className="imagegetbigger" alt="meme15" /></td>
        </tr>
    </table>
</div>
);
}
}
