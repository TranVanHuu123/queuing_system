import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-app/Firebase-config";

interface DeviceState {
  devicetype: any;
  devicetypes: any;
  loading: boolean;
  error: string | null;
}

const initialState: DeviceState = {
  devicetype: null,
  devicetypes: null,
  loading: false,
  error: null,
};

export const fetchDevice = createAsyncThunk(
  "device/fetchDevice",
  async (deviceId: string, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "device", deviceId);
      const docSnapshot = await getDoc(docRef);
      const devicetype = docSnapshot.data();

      const devicedocRef = doc(db, "devicetype", deviceId);
      const devicedocSnapshot = await getDoc(devicedocRef);
      const devicetypes = devicedocSnapshot.data();

      return { devicetype, devicetypes };
    } catch (error) {
      return rejectWithValue("");
    }
  }
);

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDevice.fulfilled, (state, action) => {
        state.loading = false;
        state.devicetype = action.payload.devicetype;
        state.devicetypes = action.payload.devicetypes;
      })
      .addCase(fetchDevice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectDevice = (state: RootState) => state.device;

export default deviceSlice.reducer;
