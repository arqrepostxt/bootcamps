import React from 'react';

const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);
{/* <Button onClick={() => handleChange(customer.id)}>Deletar</Button> */}

export default Button;
