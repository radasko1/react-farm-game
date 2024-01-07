import React, { Component } from 'react';
import { InventoryObject } from "./InventoryObject";

export class Inventory extends Component {
    render() {
        return (
            <div className="inventory__wrapper">
            {/*  TODO: inventory item  */}
                <InventoryObject imageUrl="X" name="Stribrny mec" description="Popisek objektu" count={2} />
                <InventoryObject imageUrl="X" name="Cigarety" description="Popisek objektu" count={1} />
            </div>
        );
    }
}