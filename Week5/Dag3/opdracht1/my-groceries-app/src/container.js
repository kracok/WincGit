import React from 'react';
import GroceryList from "./containers/GroceryList"
import ShoppingCard from "./containers/AppShoppingCard"

class Container extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Stokbrood" },
                { id: 2, title: "Wafels" },
                { id: 3, title: "Vlokken" },
                { id: 4, title: "Fanta" },
                { id: 5, title: "Melk" }
              ]
        }
    }
    render() {
        return
        <div>
            <GroceryList />
            <ShoppingCard />
        </div>
    }

export default Container;