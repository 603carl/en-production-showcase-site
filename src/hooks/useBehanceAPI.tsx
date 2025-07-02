import { useQuery } from '@tanstack/react-query';

// Types for Behance-style portfolio data
export interface BehanceProject {
  id: string;
  name: string;
  description: string;
  covers: {
    "404": string;
    "808": string;
    original: string;
  };
  fields: string[];
  owners: {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    city: string;
    country: string;
    images: {
      "50": string;
      "100": string;
      "115": string;
      "230": string;
    };
  }[];
  stats: {
    views: number;
    appreciations: number;
    comments: number;
  };
  published_on: string;
  created_on: string;
  modified_on: string;
  url: string;
  privacy: string;
  tags: string[];
}

export interface BehanceUser {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  city: string;
  country: string;
  company: string;
  occupation: string;
  created_on: string;
  url: string;
  images: {
    "50": string;
    "100": string;
    "115": string;
    "138": string;
    "230": string;
  };
  display_name: string;
  fields: string[];
  has_default_image: number;
  website: string;
  twitter: string;
  banner_image_url: string;
  stats: {
    followers: number;
    following: number;
    appreciations: number;
    views: number;
    comments: number;
  };
}

// Since Behance API is deprecated, we'll use mock data with the same structure
// This can be easily replaced with real API calls if alternative APIs become available
export const useBehanceProjects = (username?: string) => {
  return useQuery({
    queryKey: ['behance-projects', username],
    queryFn: async (): Promise<BehanceProject[]> => {
      console.log('Loading portfolio projects...');
      
      // Mock data structured like Behance API response
      // Replace this with your actual portfolio data
      const mockProjects: BehanceProject[] = [
        {
          id: '1',
          name: 'Safaricom 5G Campaign',
          description: 'Revolutionary 5G network launch campaign showcasing Kenya\'s digital transformation journey',
          covers: {
            "404": 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&q=80',
            "808": 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=808&q=80',
            original: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
          },
          fields: ['Advertising', 'Commercial', 'Technology'],
          owners: [{
            id: 'en_production',
            first_name: 'EN',
            last_name: 'Production',
            username: 'en_production',
            city: 'Nairobi',
            country: 'Kenya',
            images: {
              "50": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
              "100": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              "115": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=115&q=80',
              "230": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=230&q=80'
            }
          }],
          stats: {
            views: 1250000,
            appreciations: 15000,
            comments: 320
          },
          published_on: '2024-01-15',
          created_on: '2024-01-10',
          modified_on: '2024-01-15',
          url: 'https://behance.net/gallery/example1',
          privacy: 'public',
          tags: ['5G', 'Technology', 'Commercial', 'Kenya', 'Safaricom']
        },
        {
          id: '2',
          name: 'East African Music Festival',
          description: 'Cinematic documentation of the biggest music festival in East Africa featuring top artists',
          covers: {
            "404": 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&q=80',
            "808": 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=808&q=80',
            original: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
          },
          fields: ['Event Photography', 'Documentary', 'Music'],
          owners: [{
            id: 'en_production',
            first_name: 'EN',
            last_name: 'Production',
            username: 'en_production',
            city: 'Nairobi',
            country: 'Kenya',
            images: {
              "50": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
              "100": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              "115": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=115&q=80',
              "230": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=230&q=80'
            }
          }],
          stats: {
            views: 890000,
            appreciations: 12500,
            comments: 280
          },
          published_on: '2024-02-10',
          created_on: '2024-02-05',
          modified_on: '2024-02-12',
          url: 'https://behance.net/gallery/example2',
          privacy: 'public',
          tags: ['Music', 'Festival', 'Documentary', 'Live', 'East Africa']
        },
        {
          id: '3',
          name: 'Wildlife Conservation Documentary',
          description: 'Award-winning documentary highlighting Kenya\'s wildlife conservation efforts and success stories',
          covers: {
            "404": 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=404&q=80',
            "808": 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=808&q=80',
            original: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
          },
          fields: ['Documentary', 'Wildlife', 'Conservation'],
          owners: [{
            id: 'en_production',
            first_name: 'EN',
            last_name: 'Production',
            username: 'en_production',
            city: 'Nairobi',
            country: 'Kenya',
            images: {
              "50": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
              "100": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
              "115": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=115&q=80',
              "230": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=230&q=80'
            }
          }],
          stats: {
            views: 2100000,
            appreciations: 28000,
            comments: 450
          },
          published_on: '2024-03-05',
          created_on: '2024-02-28',
          modified_on: '2024-03-08',
          url: 'https://behance.net/gallery/example3',
          privacy: 'public',
          tags: ['Wildlife', 'Conservation', 'Documentary', 'Kenya', 'Nature']
        }
      ];
      
      return mockProjects;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
    refetchInterval: 10 * 60 * 1000,
  });
};

export const useBehanceUser = (username: string) => {
  return useQuery({
    queryKey: ['behance-user', username],
    queryFn: async (): Promise<BehanceUser> => {
      console.log(`Loading user profile for ${username}...`);
      
      // Mock user data structured like Behance API response
      const mockUser: BehanceUser = {
        id: 'en_production',
        first_name: 'EN',
        last_name: 'Production',
        username: 'en_production',
        city: 'Nairobi',
        country: 'Kenya',
        company: 'EN Production Studio',
        occupation: 'Creative Director & Film Producer',
        created_on: '2016-01-01',
        url: 'https://behance.net/en_production',
        images: {
          "50": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80',
          "100": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
          "115": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=115&q=80',
          "138": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=138&q=80',
          "230": 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=230&q=80'
        },
        display_name: 'EN Production',
        fields: ['Film Production', 'Motion Graphics', 'Photography', 'Brand Identity'],
        has_default_image: 0,
        website: 'https://enproduction.co.ke',
        twitter: '@enproduction',
        banner_image_url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        stats: {
          followers: 15420,
          following: 890,
          appreciations: 55600,
          views: 4500000,
          comments: 1250
        }
      };
      
      return mockUser;
    },
    staleTime: 15 * 60 * 1000,
  });
};