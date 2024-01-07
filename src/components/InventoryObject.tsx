import React, { Component } from 'react';
import './InventoryObject.css';

interface InventoryObjectProps {
    imageUrl: string;
    name: string;
    description: string;
    count: number;
}

export class InventoryObject extends Component<InventoryObjectProps> {
    render() {
        const { imageUrl, name, description, count } = this.props;

        return (
            <div className="inventory-object__wrapper">
                <div className="inventory-object__image">
                    <img src={imageUrl} alt={name}/>
                </div>
                <div className="inventory-object__content">
                    <div className="inventory-object__name">{name}</div>
                    <div>{description}</div>
                </div>
                <div className="inventory-object__count">{count}x</div>
            </div>
        );
    }
}