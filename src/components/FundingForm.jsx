import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function FundingForm({ project }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`You funded ₹${amount} to "${project.title}"`);
    setAmount('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <h4>Support this project</h4>
      <TextField
        fullWidth
        label="Amount (INR)"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Fund Now
      </Button>
    </Box>
  );
}
