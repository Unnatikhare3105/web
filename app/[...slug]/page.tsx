import React from "react";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

function toTitle(str: string) {
  return str
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.length ? resolvedParams.slug.join("/") : "";
  const title = slug ? toTitle(decodeURIComponent(slug)) : "Item";

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white">
      {/* {resolvedParams?.slug && (
        <div className="absolute top-4 left-4 text-sm text-gray-500">
          /{resolvedParams.slug.join("/")}
        </div>
      )} */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">{title}</h1>
    </main>
  );
}
