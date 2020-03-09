import React from 'react';
import ReactPlayer from 'react-player'
import './styles.module.scss';

export class _Videos extends React.Component{
    render () {
        return(
        <div><h1 className='Title_memes'> На этой страничке представлены новые видосики про пёселей! </h1>
        <div className="vid">

            <table>
                <tr>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=VyUF-MA4KzY' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=2qZHh_iN5Zs' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=ZtkUBamxs-0' /> <p className="hashtag"></p> </td>
                </tr>
                <tr>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=aZZ5ZhCB8MI' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=eLLZd7fW244' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=S0aLVSsOY78' /> <p className="hashtag"></p> </td>
                </tr>
                <tr>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=Wb3UrJjAac4' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=aCUbhUvC6FE' /> <p className="hashtag"></p> </td>
                    <td><ReactPlayer url='https://www.youtube.com/watch?v=t2jlvTVV2x4'  /> <p className="hashtag"></p> </td>
                </tr>
            </table>
            </div>
            </div>
        )
    }
}

