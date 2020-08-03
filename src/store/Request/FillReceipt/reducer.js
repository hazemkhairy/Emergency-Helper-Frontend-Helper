import {
    Add_Item_To_Receipt,
    Delete_Item_From_Receipt,
    Modifie_Item_In_Receipt,
    Clear_Receipt,
    Set_Items,
} from './action';

const initialState = {
    items: [{ name: 'visit', price: '1', nameError: false, priceError: false }]
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Clear_Receipt: {
            let copy = { items: [{ name: 'visit', price: '1', nameError: false, priceError: false }] }
            return { ...copy };
        }
        case Delete_Item_From_Receipt: {
            let copy = state;
            copy.items.splice(action.payload.index, 1);
            return { ...copy };
        }
        case Add_Item_To_Receipt: {
            let copy = state;
            copy.items.splice(action.payload.index + 1, 0, { name: '', price: '' });
            return { ...copy };
        }
        case Modifie_Item_In_Receipt: {
            let copy = state;
            copy.items[action.payload.index] = {
                ...copy.items[action.payload.index],
                ...action.payload.item
            };
            return { ...copy };
        }
        case Set_Items: {
            return { items: action.payload.items }
        }
    }
    return state;
}