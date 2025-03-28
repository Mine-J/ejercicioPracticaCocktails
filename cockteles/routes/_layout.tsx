import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
      <div >
          <div class="layout">
              <a href="/" >Home</a>
              <a href="/buscar">Buscar</a>
          </div>
      <Component />
    </div>
  );
}