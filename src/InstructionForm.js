import { useState } from 'react';

export default function InstructionForm({ instructions, setInstructions }) {
  
  const [instructionInForm, setInstructionInForm] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInForm]);
    setInstructionInForm('');
  }

  function handleInstructionChange(e) {
    setInstructionInForm(e.target.value);
  }
  
  return <form onSubmit={handleSubmit}>
    <label>
      Instructions
      <input required value={instructionInForm} onChange={handleInstructionChange}></input>
    </label>
    <button>Add instruction</button>
  </form>;

}
