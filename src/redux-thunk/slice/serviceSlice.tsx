import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Service {
  id: string;
  idservice: string;
  name: string;
  describe: string;
  status: string;
}

interface ServiceState {
  serviceList: Service[];
  filter: string;
  dropdown: string;
}

const initialState: ServiceState = {
  serviceList: [],
  filter: "",
  dropdown: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setServiceList: (state, action: PayloadAction<Service[]>) => {
      state.serviceList = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setDropdown: (state, action: PayloadAction<string>) => {
      state.dropdown = action.payload;
    },
  },
});

export const { setServiceList, setFilter, setDropdown } = serviceSlice.actions;

export const selectServiceList = (state: RootState) =>
  state.service.serviceList;
export const selectFilter = (state: RootState) => state.service.filter;
export const selectDropdown = (state: RootState) => state.service.dropdown;

export default serviceSlice.reducer;
