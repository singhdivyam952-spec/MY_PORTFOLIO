import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-narrow flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="text-sm font-medium tracking-[0.18em] text-brand uppercase">
          404
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or was moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
}
