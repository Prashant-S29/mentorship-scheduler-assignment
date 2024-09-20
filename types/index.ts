import { IconType } from 'react-icons';

export type Mentor = {
  slug: string;
  name: string;
  image: string;
  description: string;
  bio: string;
};

export type MentorDummyData = {
  category: string;
  mentor: Mentor[];
};

export type Offerings = {
  icon: IconType;
  slug: string;
  title: string;
  description: string;
  price: {
    currency: string;
    amount: number;
  };
  duration: {
    time: number;
    unit: 'min' | 'hr';
  };
  sessionType: 'Priority DMs' | 'Video Meet' | 'Phone Call';
};

export type AvailableSessions = {
  date: string;
  day: string;
  time: string[];
};
