import React, {useState} from "react";
import Modal from "./Modal";

const Item = ({ item }) => {
    const [active, setActive] = useState(false)
    return (
        <div>
        <div className="item" onClick={() => setActive(true)}>
            {item}
        </div>

        <Modal active={active} setActive={setActive}/>
        </div>
    );
}

export default Item