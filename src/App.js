import { useState, useRef, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const inputRef = useRef();

  // Save notes in localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, { id: Date.now(), text: input }]);
    setInput("");
    inputRef.current.focus();
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Notes App</h1>

      <div style={styles.inputBox}>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your note..."
          style={styles.input}
        />
        <button onClick={addNote} style={styles.button}>
          Add
        </button>
      </div>

      <div style={styles.notesList}>
        {notes.map((note) => (
          <div key={note.id} style={styles.noteCard}>
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)} style={styles.deleteBtn}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20, fontFamily: "Arial" },
  heading: { textAlign: "center" },
  inputBox: { display: "flex", gap: 10, marginBottom: 20 },
  input: { flex: 1, padding: 10, fontSize: 16 },
  button: { padding: "10px 20px", fontSize: 16 },
  notesList: { display: "flex", flexDirection: "column", gap: 10 },
  noteCard: {
    padding: 10,
    background: "#f1f1f1",
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  deleteBtn: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: 4
  }
};

export default App;                                                                                                                onChange={(e) => setText(e.target.value)}
                                                                                                                          placeholder="Write a note..."
                                                                                                                                    style={styles.input}
                                                                                                                                            />

                                                                                                                                                    <button onClick={addNote} style={styles.btn}>Add</button>
                                                                                                                                                          </div>

                                                                                                                                                                <div style={styles.noteList}>
                                                                                                                                                                        {notes.map((note) => (
                                                                                                                                                                                  <div key={note.id} style={styles.note}>
                                                                                                                                                                                              <p>{note.text}</p>
                                                                                                                                                                                                          <button onClick={() => deleteNote(note.id)} style={styles.deleteBtn}>
                                                                                                                                                                                                                        Delete
                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                  const styles = {
                                                                                                                                                                                                                                                                    container: {
                                                                                                                                                                                                                                                                        padding: 20,
                                                                                                                                                                                                                                                                            fontFamily: "Arial",
                                                                                                                                                                                                                                                                                maxWidth: 500,
                                                                                                                                                                                                                                                                                    margin: "auto"
                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                        inputArea: {
                                                                                                                                                                                                                                                                                            display: "flex",
                                                                                                                                                                                                                                                                                                gap: 10
                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                    input: {
                                                                                                                                                                                                                                                                                                        flex: 1,
                                                                                                                                                                                                                                                                                                            padding: 10,
                                                                                                                                                                                                                                                                                                                fontSize: 16
                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                    btn: {
                                                                                                                                                                                                                                                                                                                        padding: "10px 20px",
                                                                                                                                                                                                                                                                                                                            fontSize: 16
                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                                noteList: {
                                                                                                                                                                                                                                                                                                                                    marginTop: 20
                                                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                                                        note: {
                                                                                                                                                                                                                                                                                                                                            padding: 10,
                                                                                                                                                                                                                                                                                                                                                border: "1px solid #ddd",
                                                                                                                                                                                                                                                                                                                                                    marginBottom: 10,
                                                                                                                                                                                                                                                                                                                                                        borderRadius: 8
                                                                                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                                                                                            deleteBtn: {
                                                                                                                                                                                                                                                                                                                                                                marginTop: 5,
                                                                                                                                                                                                                                                                                                                                                                    padding: "5px 10px",
                                                                                                                                                                                                                                                                                                                                                                        background: "red",
                                                                                                                                                                                                                                                                                                                                                                            color: "#fff",
                                                                                                                                                                                                                                                                                                                                                                                border: "none",
                                                                                                                                                                                                                                                                                                                                                                                    borderRadius: 5
                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                      };
