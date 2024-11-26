import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Card() {
  return (
    <Link
      className="flex min-h-32 w-full cursor-pointer items-center justify-center rounded-lg
      border bg-card p-4 transition-all duration-150 *:flex-row hover:bg-muted hover:underline"
      href="/"
    >
      <Avatar className="size-20">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>Loading..</AvatarFallback>
      </Avatar>
      <div className="ml-4">
        <h2 className="text-lg font-semibold">Shad</h2>
        <p className="text-foreground">Software Engineer</p>
      </div>
    </Link>
  );
}
