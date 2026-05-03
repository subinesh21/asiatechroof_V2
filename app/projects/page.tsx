import fs from 'fs';
import path from 'path';
import SiteLayout from "@/components/SiteLayout";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

export default function Projects() {
  const projectsDir = path.join(process.cwd(), 'public', 'Projects');
  
  const getImages = (subDir: string = "") => {
    try {
      const dirPath = path.join(projectsDir, subDir);
      if (!fs.existsSync(dirPath)) return [];
      return fs.readdirSync(dirPath)
        .filter(file => file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.png'))
        .map(file => path.join('/Projects', subDir, file));
    } catch {
      return [];
    }
  };

  const categories = [
    {
      id: 1,
      title: 'All Projects',
      imageUrl: '/Projects/image-1.webp',
      gallery: getImages()
    },
    {
      id: 2,
      title: 'Membrane Repair',
      imageUrl: '/Projects/image-4.webp',
      gallery: getImages('Membrane Repair')
    },
    {
      id: 3,
      title: 'Metal roof',
      imageUrl: '/Projects/image-5.webp',
      gallery: getImages('Metal roof')
    },
    {
      id: 4,
      title: 'Waterproofing',
      imageUrl: '/Projects/image-6.webp',
      gallery: getImages('Waterproofing')
    }
  ];

  return (
    <SiteLayout>
      <LandingAccordionItem categories={categories} />
    </SiteLayout>
  );
}
