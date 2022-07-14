import styled from 'styled-components';

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

  div {
    display: flex;
    width: 100%;
    gap: 0.5rem;

    & button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: 1.5px solid var(--input-border);
      border-radius: 0.375rem;

      font-weight: 400;

      height: 4rem;
      gap: 1rem;
      flex: 1;
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
