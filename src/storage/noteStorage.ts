import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTE_STORAGE_KEY = "@notes:notes";

export type NoteStorage = {
  id: string;
  title: string;
  description: string;
};

async function get(): Promise<NoteStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(NOTE_STORAGE_KEY);
    const items: NoteStorage[] = storage ? JSON.parse(storage) : [];
    return items;
  } catch (error) {
    throw new Error("Error fetching notes from storage");
  }
}
async function save(items: NoteStorage[]): Promise<void> {
  try {
    const storage = JSON.stringify(items);
    await AsyncStorage.setItem(NOTE_STORAGE_KEY, storage);
  } catch (error) {
    throw new Error("Error saving notes to storage");
  }
}
async function add(newnote: NoteStorage): Promise<NoteStorage[]> {
  const items = await get();
  const updatedItems = [...items, newnote];
  await save(updatedItems);
  return updatedItems;
}
async function clearAll(): Promise<void> {
  try {
    await AsyncStorage.removeItem(NOTE_STORAGE_KEY);
  } catch (error) {
    throw new Error("Error clearing notes from storage");
  }
}
export const notesStorage = {
  get,
  save,
  add,
  clearAll,
};
