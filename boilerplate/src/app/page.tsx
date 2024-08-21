import Card from "@/components/Card";
import Divider from "@/components/Divider";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12 gap-4">
      <Card />
      <Divider />
      <Card />
      <Divider />
      <Card />
      <ModeToggle />
    </main>
  );
}
