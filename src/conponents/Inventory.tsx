import React from 'react';
import { RootState } from '../store';
import { removeItemFromInventory, addItemToInventory } from '../store/inventory/action';
import { Item } from '../store/inventory/types';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';


export interface IInventoryProps {
    removeItemFromInventory: typeof removeItemFromInventory,
    addItemToInventory: typeof addItemToInventory,
    items: Item[]
}

export class inventory extends React.Component<IInventoryProps>
{
    render ()
    { 
        return (
            <Grid>
                { this.props.items.map( item => {
                    return ( <p>Item</p>);
                } ) }
            </Grid>
        );
    }
}

const mapStateToProps = ( state: RootState ) => {
    return {
        items: state.inventory.items 
    }
}

export default connect(
    mapStateToProps, 
    { addItemToInventory, removeItemFromInventory }
)( inventory );
