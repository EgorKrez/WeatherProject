import React from "react";
import Item from "./Item";
import {useSelector} from "react-redux";
import {postsSelector} from "../redux/selectors";

const List = () => {
    const items = useSelector(postsSelector)

  if (items[0].length) {
        return (
            <div>
                {items[0].map((item) => <Item item={item} key={item.time}/>)}
            </div>
        );
    }
    return (
        <div>
           {/* <Item />*/}
            {items.map((item) => <Item item={item} key={item.time}/>)}
        </div>
    );
}

export default List