import  React  from  'react';

const  DisplayJoke = (props) => {
    console.log(props)
    return (
        <div  className="DisplayJoke">
            <ul>
                <li className="NoDot">Name : Chuck Norris </li>
                <li className="NoDot">
                    <img src={props.Joke.pic} /> 
                </li>
                <li className="NoDot">
                    Quote :  {props.Joke.quote} 
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayJoke;