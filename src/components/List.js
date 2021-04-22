import React, {useState} from "react";
import Item from "./Item";
import {useSelector} from "react-redux";
import {postsSelector} from "../redux/selectors";

const List = () => {
    const items = useSelector(postsSelector)
    const [key, setKey] = useState(0)

    const getKey = () => {
        setKey(key + 1)
        return key
    }

    if (items[0].length) {
        return (
            <div>
                {items[0].map((item) => <Item item={item} key={item.time}/>)}
            </div>
        );
    }
    return (
        <div>
            {items.map((item) => <Item item={item} key={getKey}/>)}
        </div>
    );

}

export default List