import type { NextConfig } from "next";

const nextConfig = {
  // ... outras configurações

  // Adicione a função rewrites
  async rewrites() {
    return [
    {
        source: '/storybook', 
        destination: '/storybook-static/index.html', 
      },
      // REGRA PARA /storybook/ (barra final
      {
        source: '/storybook/', 
        destination: '/storybook-static/index.html', 
      },
      // REGRA PARA ASSETS
      {
        source: '/storybook/:path*',
        destination: '/storybook-static/:path*',
      },
    ];
  },
};

export default nextConfig;
