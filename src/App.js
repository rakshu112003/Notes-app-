import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState(() => {
      return JSON.parse(localStorage.getItem("notes")) || [];
        });
          const [text, setText] = useState("");
            const inputRef = useRef(null);

              useEffect(() => {
                  localStorage.setItem("notes", JSON.stringify(notes));
                    }, [notes]);

                      useEffect(() => {
                          inputRef.current.focus();
                            }, []);

                              const addNote = () => {
                                  if (text.trim() === "") return;
                                      setNotes([...notes, { id: Date.now(), text }]);
                                          setText("");
                                              inputRef.current.focus();
                                                };

                                                  const deleteNote = (id) => {
                                                      setNotes(notes.filter((n) => n.id !== id));
                                                        };

                                                          return (
                                                              <div style={styles.container}>
                                                                    <h2>Notes App</h2>

                                                                          <div style={styles.inputArea}>
                                                                                  <input
                                                                                            ref={inputRef}
                                                                                                      value={text}
                                                                                                                onChange={(e) => setText(e.target.value)}
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
