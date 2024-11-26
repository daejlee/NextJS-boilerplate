import Card from '@/components/Card';
import Divider from '@/components/Divider';
import ModeToggle from '@/components/ModeToggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 p-12">
      <Card />
      <Divider />
      <Card />
      <Divider />
      <Card />
      <ModeToggle />
    </main>
  );
}
