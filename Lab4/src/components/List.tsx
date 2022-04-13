import { Checkbox } from "antd"
import { IpcNetConnectOpts } from "net"
import React from "react"
import {IState1 as IProps} from "../App"



const List: React.FC<IProps> = ({items}) => {

    const renderList = () : JSX.Element[] =>
    {
        return items.map((items) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={items.url}></img>
                        <h2>{items.name}</h2>
                    </div>
                    <p>{items.author}.</p>
                    <p className="List-note">
                        {items.description}
                    </p>
                    <p>Pages: {items.page}</p>
                    <p>Are available: {items.isAvailable}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;