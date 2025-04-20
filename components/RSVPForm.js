// components/RSVPForm.js
import { color, pixels, radius, typography } from '@styles/index';
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    font-size: ${typography.size.f7};
  }

  label span {
    font-family: ${typography.family.title};
    color: ${color.green[100]};

    .required {
      color: ${color.green[60]};
      margin-left: 0.25rem;
      font-weight: bold;
    }
  }

  input,
  select,
  textarea {
    font-family: ${typography.family.body};
    font-size: 0.8rem;
    color: ${color.green[90]};
    padding: 0.75rem;
    border-radius: ${radius.md};
    border: ${pixels.one} solid ${color.green[40]};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${color.green[60]};
    font-style: italic;
    opacity: 1; /* default is 0.5 in some browsers */
  }

  small {
    font-size: 0.7rem;
    color: ${color.green[80]};
    margin-top: 0.25rem;
  }

  button {
    background-color: ${color.green[70]};
    color: white;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: ${radius.md};

    &:hover {
      background-color: ${color.green[70]};
    }
  }

  .feedback {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .error {
    color: red;
  }

  .success {
    color: green;
  }
`;

const Group = styled.div``;

const Label = styled.label`
  display: block;
  margin: 1rem 0 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  min-height: 80px;
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.2rem;
`;

const Button = styled.button``;

const RSVPForm = () => {
  const [attending, setAttending] = useState('');
  const [numGuests, setNumGuests] = useState(1);

  const formAction = 'https://submit-form.com/QGmiggea0'; // Replace with your Formspark form endpoint

  const handleRedirect = (e) => {
    const url = attending === 'yes' ? '/attending' : '/not-attending';
    setTimeout(() => (window.location.href = url), 100);
  };

  return (
    <FormWrapper action={formAction} method='POST'>
      <Group>
        <Label>Will you be attending?</Label>
        <Select
          name='attending'
          value={attending}
          required
          onChange={(e) => setAttending(e.target.value)}
        >
          <option value=''>Select an option</option>
          <option value='yes'>Yes</option>
          <option value='no'>No</option>
        </Select>
      </Group>

      {attending === 'no' && (
        <>
          <Group>
            <Label htmlFor='guestName'>Your Name</Label>
            <Input type='text' id='guestName' name='guest_1_name' required />
          </Group>
          <Group>
            <Label htmlFor='message'>Leave us a message (optional)</Label>
            <Textarea id='message' name='message' />
          </Group>
        </>
      )}

      {attending === 'yes' && (
        <>
          <Group>
            <Label htmlFor='numGuests'>
              How many people are you RSVPing for?
            </Label>
            <Select
              id='numGuests'
              name='number_of_guests'
              value={numGuests}
              onChange={(e) => setNumGuests(Number(e.target.value))}
              required
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </Select>
          </Group>
          {Array.from({ length: numGuests }).map((_, idx) => (
            <Group>
              <div key={idx}>
                <Label htmlFor={`guestName${idx}`}>
                  Guest {idx + 1} Full Name
                </Label>
                <Input
                  type='text'
                  id={`guestName${idx}`}
                  name={`guest_${idx + 1}_name`}
                  required
                />

                <Label htmlFor={`guestDiet${idx}`}>
                  Guest {idx + 1} Dietary Requirements
                </Label>
                <Input
                  type='text'
                  id={`guestDiet${idx}`}
                  name={`guest_${idx + 1}_diet`}
                />
                <HelperText>
                  e.g. vegetarian, gluten-free, nut allergy
                </HelperText>
              </div>
            </Group>
          ))}
          <Group>
            <Label htmlFor='message'>Any additional message?</Label>
            <Textarea id='message' name='message' />
          </Group>
        </>
      )}

      {attending && (
        <>
          <input
            type='hidden'
            name='_redirect'
            value={
              attending === 'yes'
                ? 'http://localhost:3000/attending'
                : 'http://localhost:3000/not-attending'
            }
          />
          <Button type='submit'>Submit RSVP</Button>
        </>
      )}
    </FormWrapper>
  );
};

export default RSVPForm;
