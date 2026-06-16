import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/
export default defineConfig({
  output: 'static',
  site: 'https://docs.ovav.dev',
  integrations: [
    starlight({
      title: 'OVAV Docs',
      description: 'OVAV — Professional Development Governance. Complete documentation.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ovav-dev/ovav-docs' },
      ],
      editLink: {
        baseUrl: 'https://github.com/ovav-dev/ovav-docs/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/intro' },
            { label: 'Quickstart', slug: 'getting-started/quickstart' },
            { label: 'Installation', slug: 'getting-started/installation' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Architecture', slug: 'core/architecture' },
            { label: 'Professional Profiles', slug: 'core/profiles' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Security', slug: 'reference/security' },
          ],
        },
      ],
      customCss: [
        './src/assets/ovav.css',
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'og:description',
            content: 'OVAV documentation — Professional Development Governance.',
          },
        },
      ],
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['@astrojs/starlight'],
    },
  },
});
