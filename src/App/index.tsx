import type { FC } from 'react';

import { users } from '../users';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import { Section } from './Section';
import { Wrapper } from './Wrapper';

export const App: FC = () => (
  <Wrapper>
    <Header />
    <Main>
      <Section>
        <div className="container">
          <h1>Hello, World!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dignissim nisi.</p>
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>User List</h2>
          <p>Create a new component called UsersTable that accepts an array of users as a prop and displays the users in a table. For users with no website, write &quot;n/a&quot; in the website column. Add the component below and pass in the users as a prop.</p>
          &lt;insert UsersTable here&gt;
          <pre>
            {JSON.stringify(users, null, '  ')}
          </pre>
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>Counter</h2>
          <p>Create a new component called Counter that displays a counter with an initial value of 0. Increment the counter by one once per second. Include a button in the component that, when clicked, increments the counter by one. Add the component below.</p>
          &lt;insert Counter here&gt;
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>State</h2>
          <p>Create a new component called Parent that displays a message, where the message's initial value is passed in as a prop. Add the component below and pass in an initial message of &quot;Hello&quot;.</p>
          <p>Create a second component called Child. Add the component to Parent. Add a text input and button to Child so that, when the button is clicked, the parent's message changes to whatever text is in the text input.</p>
          &lt;insert Parent here&gt;
        </div>
      </Section>
    </Main>
    <Footer />
  </Wrapper>
);
