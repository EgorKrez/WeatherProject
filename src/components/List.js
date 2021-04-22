import React, {useState} from "react";
import Item from "./Item";
import {useSelector} from "react-redux";
import {postsSelector} from "../redux/selectors";

const List = () => {
    const [key, setKey] = useState(0)
    const items = useSelector(postsSelector)
    setKey(prev => prev + 1)

    return (
        <div>
            {/*{items.map((item) => <Item item={item} key={key}/>)}*/}
        </div>
    );
}

export default List