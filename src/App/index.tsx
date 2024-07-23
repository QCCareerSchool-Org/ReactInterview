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
          &lt;insert table here&gt;
          <pre>
            {JSON.stringify(users, null, '  ')}
          </pre>
        </div>
      </Section>
      <Section>
        <div className="container">
          <h2>Counter</h2>
          &lt;insert counter here&gt;
        </div>
      </Section>
    </Main>
    <Footer />
  </Wrapper>
);
