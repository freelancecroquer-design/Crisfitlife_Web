import { defineConfig, ViteDevServer } from "vite";
import type { IncomingMessage, ServerResponse } from "http";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: 'ebook-redirects',
      configureServer(server: ViteDevServer) {
        server.middlewares.use((req: IncomingMessage, res: ServerResponse, next: () => void) => {
          if (req.url === '/ebook-nutrir-es-mas-que-comer' || req.url === '/ebook-nutrir-es-mas-que-comer.html') {
            req.url = '/ebook-nutrir-es-mas-que-comer.html';
          } else if (req.url === '/ebook-descifrando-etiquetas' || req.url === '/ebook-descifrando-etiquetas.html') {
            req.url = '/ebook-descifrando-etiquetas.html';
          }
          next();
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

