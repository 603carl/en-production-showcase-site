
import { useQuery } from '@tanstack/react-query';

// Define types for Playbook API responses
export interface PlaybookProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  video_url?: string;
  category: string;
  tags: string[];
  views?: number;
  likes?: number;
  created_at: string;
}

export interface PlaybookStats {
  total_projects: number;
  years_experience: number;
  client_satisfaction: number;
  total_views: number;
}

// Custom hook for fetching trailers
export const useTrailers = () => {
  return useQuery({
    queryKey: ['trailers'],
    queryFn: async (): Promise<PlaybookProject[]> => {
      // This will be replaced with actual Playbook API endpoint
      console.log('Fetching trailers from Playbook API...');
      
      // Simulated API response structure for now
      const mockTrailers: PlaybookProject[] = [
        {
          id: '1',
          title: 'Safaricom 5G Launch Campaign',
          description: 'High-impact commercial showcasing Kenya\'s 5G revolution',
          thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          video_url: 'https://example.com/trailer1',
          category: 'Trailer',
          tags: ['Commercial', 'Technology', 'Kenya'],
          views: 1200000,
          likes: 15000,
          created_at: '2024-01-15'
        },
        {
          id: '2',
          title: 'East African Music Festival',
          description: 'Cinematic coverage of the biggest music event in East Africa',
          thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          video_url: 'https://example.com/trailer2',
          category: 'Trailer',
          tags: ['Music', 'Event', 'Documentary'],
          views: 850000,
          likes: 12000,
          created_at: '2024-02-10'
        },
        {
          id: '3',
          title: 'Kenya Wildlife Conservation',
          description: 'Powerful documentary trailer highlighting conservation efforts',
          thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          video_url: 'https://example.com/trailer3',
          category: 'Trailer',
          tags: ['Documentary', 'Wildlife', 'Conservation'],
          views: 2100000,
          likes: 28000,
          created_at: '2024-03-05'
        }
      ];
      
      return mockTrailers;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes for real-time updates
  });
};

// Custom hook for fetching portfolio by category
export const usePortfolioByCategory = (category?: string) => {
  return useQuery({
    queryKey: ['portfolio', category],
    queryFn: async (): Promise<PlaybookProject[]> => {
      console.log(`Fetching ${category || 'all'} portfolio from Playbook API...`);
      
      // Mock portfolio data structured by categories
      const mockPortfolio: PlaybookProject[] = [
        {
          id: 'p1',
          title: 'HILDA Online Series',
          description: 'Digital series content for online streaming platform',
          thumbnail: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Online Bestie',
          tags: ['Series', 'Digital', 'Entertainment'],
          views: 500000,
          created_at: '2024-01-20'
        },
        {
          id: 'p2',
          title: 'Company Showreel 2024',
          description: 'Professional showreel highlighting our best work',
          thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'About/show reel',
          tags: ['Showreel', 'Professional', 'Portfolio'],
          views: 75000,
          created_at: '2024-02-01'
        },
        {
          id: 'p3',
          title: 'KCB Bank Commercial',
          description: '30-second commercial for financial services',
          thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Adds / Short Clips',
          tags: ['Commercial', 'Banking', 'Short Form'],
          views: 320000,
          created_at: '2024-01-28'
        },
        {
          id: 'p4',
          title: 'Luxury Car Launch',
          description: 'Premium automotive showcase for new model launch',
          thumbnail: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Cars',
          tags: ['Automotive', 'Luxury', 'Product Launch'],
          views: 180000,
          created_at: '2024-02-15'
        },
        {
          id: 'p5',
          title: 'Maasai Mara Documentary',
          description: 'Feature-length documentary about wildlife migration',
          thumbnail: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Film',
          tags: ['Documentary', 'Wildlife', 'Feature'],
          views: 890000,
          created_at: '2024-03-10'
        },
        {
          id: 'p6',
          title: 'Brand Identity Animation',
          description: 'Motion graphics package for tech startup rebrand',
          thumbnail: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'GRAPHICS',
          tags: ['Motion Graphics', 'Branding', 'Animation'],
          views: 145000,
          created_at: '2024-02-20'
        },
        {
          id: 'p7',
          title: 'Fashion Photography Collection',
          description: 'High-end fashion photography for leading designer',
          thumbnail: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Photography, Designing, Behan...',
          tags: ['Fashion', 'Photography', 'Design'],
          views: 67000,
          created_at: '2024-02-25'
        },
        {
          id: 'p8',
          title: 'Business Leaders Podcast',
          description: 'Weekly podcast series featuring Kenyan entrepreneurs',
          thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Podcast',
          tags: ['Podcast', 'Business', 'Interviews'],
          views: 25000,
          created_at: '2024-03-01'
        },
        {
          id: 'p9',
          title: 'TV Commercial Series',
          description: 'Multi-part television commercial campaign',
          thumbnail: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          category: 'Tv',
          tags: ['Television', 'Campaign', 'Series'],
          views: 1500000,
          created_at: '2024-03-15'
        }
      ];
      
      return category ? mockPortfolio.filter(item => item.category === category) : mockPortfolio;
    },
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });
};

// Custom hook for fetching company stats
export const useCompanyStats = () => {
  return useQuery({
    queryKey: ['company-stats'],
    queryFn: async (): Promise<PlaybookStats> => {
      console.log('Fetching company stats from Playbook API...');
      
      // This would calculate from actual portfolio data
      return {
        total_projects: 147,
        years_experience: 8,
        client_satisfaction: 98,
        total_views: 8500000
      };
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: 10 * 60 * 1000,
  });
};

// Custom hook for fetching hero background images
export const useHeroImages = () => {
  return useQuery({
    queryKey: ['hero-images'],
    queryFn: async (): Promise<string[]> => {
      console.log('Fetching hero images from Playbook API...');
      
      return [
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
      ];
    },
    staleTime: 15 * 60 * 1000,
  });
};
