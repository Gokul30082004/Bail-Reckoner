import React, { useState } from 'react';
import "./style.css";
export const Chat_app = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [contacts] = useState(['Alice', 'Bob', 'Charlie']);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Contacts</h2>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`contact ${contact === selectedContact ? 'active' : ''}`}
            onClick={() => setSelectedContact(contact)}
          >
            {contact}
          </div>
        ))}
      </div>
      <div className="chat">
        <div className="chat-header">
          <h2>{selectedContact}</h2>
        </div>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};