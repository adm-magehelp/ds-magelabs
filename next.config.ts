import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  // Função de redirecionamento
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
};

export default nextConfig;
