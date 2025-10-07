import type { NextConfig } from "next";

const nextConfig = {
  // ... outras configurações

  // Adicione a função rewrites
  async rewrites() {
    return [
      {
        source: '/storybook', // O caminho que o usuário acessa
        destination: '/storybook-static/index.html', // O arquivo HTML principal do Storybook
      },
      {
        source: '/storybook/:path*', // Captura todos os outros arquivos e assets do Storybook
        destination: '/storybook-static/:path*', // Mapeia-os para a pasta estática
      },
    ];
  },
};

export default nextConfig;
