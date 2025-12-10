import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://giftlanka.com';

  return [
    // 1. The Homepage (Highest Priority)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },

    // 2. Article: Gifts for Men
    {
      url: `${baseUrl}/blog/top-10-gifts-for-men`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 3. Article: Gifts for Her
    {
      url: `${baseUrl}/blog/gifts-for-her-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 4. Article: Wedding & Anniversary
    {
      url: `${baseUrl}/blog/wedding-anniversary-gifts-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 5. Article: Gamers & Tech
    {
      url: `${baseUrl}/blog/gifts-for-gamers-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 6. Article: Corporate & Boss
    {
      url: `${baseUrl}/blog/corporate-gifts-sri-lanka`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}