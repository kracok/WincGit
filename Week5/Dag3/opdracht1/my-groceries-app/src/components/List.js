import { Component } from "react";
import React from "react";
import ListItem from "./ListItem"

class List extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         groceryItems: [
    //             { id: 1, title: "Stokbrood" },
    //             { id: 2, title: "Wafels" },
    //             { id: 3, title: "Vlokken" },
    //             { id: 4, title: "Fanta" },
    //             { id: 5, title: "Melk" }
    //           ]
    //     }
    // }
//verplaatst naar container.js
    render() {
        const items = this.state.groceryItems
        const listItem = items.map(item => <ListItem key={item.id} title={item} clickItem={clickItem}/>)
        return (
            <React.Fragment>
            <ul>
                {listItem}
                
            </ul>
            </React.Fragment>
        )
    }
}

export default List;