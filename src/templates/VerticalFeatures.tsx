import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="LTGA: Punctul de lansare pentru succesul tău în IT"
    description="Educație de Avangardă și Oportunități Reale pentru Aspiranții în Tehnologie"
  >
    <VerticalFeatureRow
      title="Curriculum Modernizat și Specializat"
      description="Elevii beneficiază de un curriculum adaptat cerințelor actuale ale industriei IT. Aceasta pregătire specializată îi ajută să dobândească competențe relevante și aplicabile direct în carieră."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Acces la tehnologie"
      description="Școala pune la dispoziție resurse tehnologice moderne, incluzând laboratoare dotate cu echipamente de ultimă oră, ceea ce permite elevilor să experimenteze și să învețe folosind tehnologii actualizate, esențiale în domeniul IT."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Robotica: Inovație și Practică în Tehnologie"
      description="Elevii de la Liceul Teoretic Grigore Antipa explorează universul roboticii prin construirea și programarea roboților în cadrul atelierelor specializate. Aceste activități le dezvoltă abilitățile tehnice și creative, amplificându-le înțelegerea aplicată a tehnologiei."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
