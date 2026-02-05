import { PageType } from '../types';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';

interface HomeProps {
  onNavigate: (page: PageType, memberId?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-16">
      <Hero onNavigate={onNavigate} />
      <Services />
      <Team onNavigate={onNavigate} />
    </div>
  );
}
