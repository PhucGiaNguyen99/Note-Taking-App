import './App.css';
import { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = { id: notes.length + 1, title, content };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  }

  return (
    <div className="app-container">
      <form className='note-form' onSubmit={handleAddNote}>
        <input placeholder='Title' required />
        <textarea placeholder='Content' rows={10} required />
        <button type="submit">Add Note</button>
      </form>

      <div className='notes-grid'>
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className='notes-header'>
              <button onClick={() => setNotes(notes.filter((n) => n.id !== note.id))}>x</button>
            </div>
            <h2>Note Title</h2>
            <p>Note Content</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
