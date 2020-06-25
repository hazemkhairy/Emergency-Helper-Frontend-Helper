export const Clear_Receipt = "CLEAR_RECEIPT";
export const Add_Item_To_Receipt = "ADD_ITEM_TO_RECEIPT";
export const Delete_Item_From_Receipt = "DELETE_ITEM_FROM_RECEIPT";
export const Modifie_Item_In_Receipt = 'MODIFIE_ITEM_IN_RECEIPT';
export const Set_Items = 'SET_ITEMS';


export const clearReceipt = () => {
    return { type: Clear_Receipt }
}
export const addItemToReceipt = (index) => {

    return { type: Add_Item_To_Receipt, payload: { index } }
}
export const deleteItemFromReceipt = (index) => {

    return { type: Delete_Item_From_Receipt, payload: { index } }
}
export const modifieItemInReceipt = (index, item) => {

    return { type: Modifie_Item_In_Receipt, payload: { item, index } }
}
export const setItems = (items) => {

    return { type: Set_Items, payload: { items } }
}