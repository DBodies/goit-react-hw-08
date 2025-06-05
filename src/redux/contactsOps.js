import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://683985206561b8d882b0bc00.mockapi.io'

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/contacts")
            return res.data
        } catch {
            return thunkAPI.rejectWithValue
        }
})

export const addContact = createAsyncThunk("contacts/addContact", 
    async (newContact) => {
        console.log("addContact", newContact);
        const res = await axios.post('/contacts', newContact)
        return res.data
})

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (deleteContactId) => {
        console.log("deleteContact", deleteContactId);
        const res = await axios.delete(`/contacts/${deleteContactId}`)
        return res.data
})


