import React, {useState} from "react";
import Modal from "./Modal";

const Item = () => {
    const [active, setActive] = useState(false)
    return (
        <div>
        <div className="item" onClick={() => setActive(true)}>
            Item
        </div>

        <Modal active={active} setActive={setActive}/>
        </div>
    );
}

export default Item