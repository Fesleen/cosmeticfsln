import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const TOKEN = '7236837279:AAH1eakMjF6ZClhKunEotfyHVRI3cDlNgVU';
const CHAT_ID = '-1002152542741';

export const PostContact = createAsyncThunk(
  "contact/post",
  async (body) => {
    try {
      const info = `Name : ${body.name} %0ATelephone: ${body.phone}  %0AEmail: ${body.email}`;
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${info}&parse_mode=html`);
      return true; // Assuming success if no error is thrown
    } catch (error) {
      console.error("Error posting contact info:", error);
      throw error;
    }
  }
);

const ContactSlice = createSlice({
  name: "contact",
  initialState: {
    postContact: {
      error: false,
      success: false,
      loading: false,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PostContact.pending, (state) => {
        state.postContact.loading = true;
        state.postContact.success = false;
        state.postContact.error = false;
      })
      .addCase(PostContact.fulfilled, (state) => {
        state.postContact.loading = false;
        state.postContact.success = true;
        state.postContact.error = false;
      })
      .addCase(PostContact.rejected, (state) => {
        state.postContact.loading = false;
        state.postContact.success = false;
        state.postContact.error = true;
      });
  },
});

export default ContactSlice.reducer;
