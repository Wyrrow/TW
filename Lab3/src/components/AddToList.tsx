import React, { useState } from "react";
import {IState as Props} from "../App"
import { Button } from "antd"
import { parseJsonText } from "typescript";

interface IProps {
    items: Props["items"]
    setItems:
        React.Dispatch<React.SetStateAction<Props["items"]>>
}

const AddToList : React.FC<IProps> = ({items, setItems}) => {

    const [input, setInput] = useState({
        name:"",
        author:"",
        img:"",
        description:""
    })

    const hanldeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
        setInput(
            {
                ...input,
                [e.target.name] : e.target.value
            }
        )
    }

    const handleClick = () : void => {
        if (!input.name){
            alert("The NAME field is empty!");
            console.error("The NAME field is empty!");
            return;
        }

        if (!input.author){
            alert("The PRICE field is empty!");
            console.error("The author field is empty!");
            return;
        }

        setItems([
            ...items,
            {
                name:input.name,
                author: input.author,
                url:input.img,
                description:input.description
            }
        ])

        alert("You created new Item: " + input.name);
        console.log("New item was created:" + input.name + " " + input.author);
    };

    return (
        <div className="AddToList">
            <input 
            type="text"
            placeholder="Name: 1984"
            className="AddToList-input"
            value={input.name}
            onChange={hanldeChange}
            name="name"
            />
            <input 
            type="text"
            placeholder="Author: George Orwell"
            className="AddToList-input"
            value={input.author}
            onChange={hanldeChange}
            name="author"
            />
            <input 
            type="text"
            placeholder="Image URL: https://...."
            className="AddToList-input"
            value={input.img}
            onChange={hanldeChange}
            name="img"
            />
            <textarea   
            placeholder="Description: "
            className="AddToList-input"
            value={input.description}
            onChange={hanldeChange}
            name="description"
            />
            <Button
                className="AddToList-btn"
                onClick={handleClick}
                type="primary">
                Add to list.
            </Button>
        </div>
    )
}

export default AddToList;