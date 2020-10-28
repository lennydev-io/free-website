// LIBS
import { Main } from '../lib/styles';
// COMPONENTS
import Layout from '../components/layout';
import MainLogo from '../components/main-logo';
import MainPhoto from '../components/main-photo';
import CTA from '../components/cta';

export default function Home() {
  return (
    <Layout>
      <Main>
        <MainLogo />
        <MainPhoto />
        <CTA />
      </Main>
    </Layout>
  )
}
