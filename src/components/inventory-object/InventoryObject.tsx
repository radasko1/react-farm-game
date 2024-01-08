import './InventoryObject.css';

interface InventoryObjectProps {
    imageUrl: string;
    name: string;
    description: string;
    count: number;
}

export function InventoryObject(props: InventoryObjectProps) {
    const { imageUrl, name, description, count } = props;

    return (
        <div className="inventory-object__wrapper">
            <div className="inventory-object__image">
                {/* TODO: missing image */}
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