import axios from "axios";
import type { Note } from "../types/note";

const API_URL = "https://notehub-public.goit.study/api/notes";
const TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (params: FetchNotesParams): Promise<FetchNotesResponse> => {
  const { data } = await axiosInstance.get("/", { params });
  return data;
};

export const createNote = async (note: Omit<Note, "id" | "createdAt">): Promise<Note> => {
  const { data } = await axiosInstance.post("/", note);
  return data;
};

export const deleteNote = async (id: string): Promise<{ id: string }> => {
  const { data } = await axiosInstance.delete(`/${id}`);
  return data;
};