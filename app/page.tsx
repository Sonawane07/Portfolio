import { Suspense } from "react";
import HomeContent from "@/components/HomeContent";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}