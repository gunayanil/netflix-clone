import React from 'react';
import { Accordion, OptForm } from '../components';
import faqData from '../fixtures/faq.json';

export const FaqContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map(item => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Input placeholder='Email Address' />
        <OptForm.Button>Try it now!</OptForm.Button>
        <OptForm.Break /> {/* To do: remove it */}
        <OptForm.Text>
          Ready to watch? Enter your email to create your membership.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
};
