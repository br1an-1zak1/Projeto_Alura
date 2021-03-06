import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormfieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      // chamado de curto-circuito quando usado operadores lógicos
      hasValue
      && css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

function FormField({
  label, name, type, value, onChange, suggestions,
}) {
  const fieldId = `Id_${name}`;

  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  const hasSuggestion = Boolean(suggestions.length);

  return (
    <FormfieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
        </Label.Text>

        {/*
          está sendo utilizado uma datalist que permite
          mostrar opções do que deve ser digitado
        */}

        {
          hasSuggestion && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option
                    value={suggestion}
                    key={`suggestionFor_${fieldId}_option_${suggestion}`}
                  >
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }
      </Label>
    </FormfieldWrapper>
  );
}

/**
 * utilizando a lib propTypes
 */

// ajuda a especificar o tipo default dos campos
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

// especifica os tipos de dados dos campos e se é obrigatório
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
