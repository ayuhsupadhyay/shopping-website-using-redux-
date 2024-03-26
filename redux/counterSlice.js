import React from 'react'
import {createSlice} from "@reduxjs/toolkit";


const initiaState={
    value:0,
}

const counterSlice = createSlice({
    name:"counter",
    initiaState,
    reducers:{
        i
    }
})