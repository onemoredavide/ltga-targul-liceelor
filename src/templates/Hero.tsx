import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://www.lantipabt.ro/">Despre LTGA</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Liceul potrivit pentru\n'}
            <span className="text-primary-500">o carieră în IT</span>
          </>
        }
        description="Acest site a fost realizat pe baza cunoștințelor acumulate în cadrul orelor de informatică la Liceul Teoretic Grigore Antipa"
        button={
          <Link href="https://www.instagram.com/_davideantipa">
            <Button xl>Despre autor</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
