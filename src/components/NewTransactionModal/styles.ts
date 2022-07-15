import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: var(--text-title);
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.375rem;

    background-color: var(--input-background);
    border: 1px solid var(--input-border);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type='submit'] {
    height: 4rem;

    font-weight: 600;
    color: var(--white);

    border: none;
    border-radius: 0.375rem;

    background-color: var(--green);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: 'var(--button-background-income-active)',
  red: 'var(--button-background-outcome-active)',
};

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1.5px solid var(--button-border);

  border-radius: 0.375rem;

  background-color: ${(props) =>
    props.isActive ? colors[props.activeColor] : 'transparent'};

  font-weight: 400;

  height: 4rem;
  gap: 1rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(1, 'rgba(150, 156, 178, 0.2)')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: var(--text-title);
  }
`;
