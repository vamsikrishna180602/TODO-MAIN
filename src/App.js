import React, { useState } from "react";

function App() {
  const [items, setItems] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.trim() === "") return;
    const copyData = [...data, items];
    setData(copyData);
    setItems("");
  };

  const handleDelete = (i) => {
    const copyData = [...data];
    copyData.splice(i, 1);
    setData(copyData);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>TODO-LIST</h1>
      <form style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Add item"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          style={{ padding: "5px", fontSize: "16px", marginRight: "10px" }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </form>

      <ol style={{ paddingLeft: "0", maxWidth: "400px", margin: "0 auto" }}>
        {data.map((item, i) => {
          return (
            <li
              key={i}
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                listStyleType: "decimal",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              {item}
              <button
                onClick={() => handleDelete(i)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "3px",
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
