import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Bem-vindo ao meu projeto 🚀</h1>
      <p>
        Veja a documentação dos componentes no{' '}
        <Link href="/storybook">Storybook</Link>
      </p>
    </main>
  );
}