import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'Anea Beauty & Spa',
  id: 'anea-beauty-and-spa',
  logo: logoImage,
  seo: {
    title: 'Anea Beauty & Spa',
    description:
      'ANEA Beauty& Spa is a calming space designed for deep relaxation and gentle care. Our beauty and spa treatments focus on slow touch, comfort, and restoring balance for both skin. Quiet space, Gentle touch, No pressure sellin',
    author: 'Anea Beauty & Spa',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#f0efe1',
    secondary: '#3b556b',
    neutral: '#ede8d0',
    outline: '#263542',
  },
  navigation: {
    darkmode: false,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/incluud/',
      icon: 'lucide:github',
    },
    {
      label: 'Bluesky',
      href: 'https://bsky.app/profile/incluud.dev',
      icon: 'lucide:bot-message-square',
    },
    {
      label: 'Open Collective',
      href: 'https://opencollective.com/incluud',
      icon: 'lucide:hand-heart',
    },
  ],
})
