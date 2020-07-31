import React from "react";

export default function FormField({descricao, name, type, value, onChange}) {
  return (
    <div>
      <label>
        {descricao}
        
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
