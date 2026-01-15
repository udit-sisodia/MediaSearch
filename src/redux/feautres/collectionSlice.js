import { createSlice } from "@reduxjs/toolkit";

import { toast, Zoom } from 'react-toastify';

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
        addCollection: (state, actions) => {
            const alreadyExists = state.items.find(elem => elem.id === actions.payload.id)

            if (!alreadyExists) {
                state.items.push(actions.payload)
                localStorage.setItem("collection", JSON.stringify(state.items))
            }
            else {
                console.log("already exist")
            }
        },

        removeCollection: (state, actions) => {
            state.items = state.items.filter((elem) => elem.id !== actions.payload.id)
            localStorage.setItem("collection", JSON.stringify(state.items))
        },

        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem("collection")
        },

        toastAdded: (state) => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },

        toastRemoved: () => {
            toast.error('Removed from Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export default collectionSlice.reducer
export const { addCollection, removeCollection, clearCollection, toastAdded , toastRemoved } = collectionSlice.actions