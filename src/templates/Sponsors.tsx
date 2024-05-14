import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Tehnologii utilizate"
    description="Următoarele tehnologii au fost utilizate în cadrul proiectului"
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nextjs.org/" target="_blank">
              <Image
                src="/assets/images/nextjs-logo.png"
                alt="Next JS"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://react.dev/" target="_blank">
              <Image
                src="/assets/images/react-logo.jpeg"
                alt="React JS"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://aws.amazon.com/">
              <Image
                src="/assets/images/aws-logo.jpeg"
                alt="AWS"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3">
            <a href="https://tailwindcss.com/" target="_blank">
              <Image
                src="/assets/images/tailwindcss-logo.jpeg"
                alt="Tailwind CSS"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://www.typescriptlang.org/" target="_blank">
              <Image
                src="/assets/images/ts-logo.png"
                alt="TypeScript"
                width={260}
                height={224}
              />
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3">
            <a href="https://nodejs.org/en" target="_blank">
              <Image
                src="/assets/images/nodejs-logo.jpeg"
                alt="Crowdin"
                width={260}
                height={224}
              />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
