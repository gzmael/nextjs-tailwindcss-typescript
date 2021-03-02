import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

import { Container } from '../styles/main'
const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Container>
      <h1>
        Hello Next.js + Twin.macro + TypeScript{' '}
        <span role="img" aria-label="hand emoji">
          👋
        </span>
      </h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Container>
  </Layout>
)

export default IndexPage
