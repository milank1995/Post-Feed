import Classes from './Feed.module.css';
import {useEffect, useState} from "react";

const Feed = () => {

    const [state, setState] = useState([]);

    console.log({state});

    useEffect(() => {
        (async () => {
            await fetch("https://randomuser.me/api/?page=3&results=10&inc=name,id,picture").then(res => res.json()).then(res => setState(() => res.results));
        })();
    }, []);


    return (
        <>
            <div className={Classes.container}>
                {state.map(({name, picture, id}) => (
                    <div key={id.value} className={Classes.card}>
                        <img src={picture?.large} alt={name?.first} className={Classes.cardAvatar}/>
                        <h3 className={Classes.cardAvatarName}>{name?.first}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Feed;