import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITicket {
  id: string;
  executorId?: string | null;
  comment: string;
  status: string;
  action: string;
  userId: string;
  equipmentId: string;
}

interface IInitialState {
  allTickets: ITicket[];
  isError: boolean;
  error: {
    message: string;
  };
}

export const initialTicketState: IInitialState = {
  allTickets: [],
  isError: false,
  error: {
    message: "",
  },
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: initialTicketState,
  reducers: {
    setTickets: (state: IInitialState, action: PayloadAction<ITicket[]>) => {
      state.allTickets = action.payload;
    },
    addTicket: (state: IInitialState, action: PayloadAction<ITicket>) => {
      state.allTickets = [...state.allTickets, action.payload];
    },
    editTicket: (state: IInitialState, action: PayloadAction<ITicket>) => {
      state.allTickets = state.allTickets.map((ticket) =>
        ticket.id === action.payload.id ? action.payload : ticket
      );
    },
    deleteTicket: (state: IInitialState, action: PayloadAction<string>) => {
      state.allTickets = state.allTickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },
    catchTicketErrors:(state, action:PayloadAction<{message:string}>)=>{
      state.error.message=action.payload.message;
      state.isError=true;
    }
  },
});

export const {
  setTickets,
  addTicket,
  editTicket,
  deleteTicket,
  catchTicketErrors
} = ticketSlice.actions;

export default ticketSlice.reducer;
