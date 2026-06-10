export interface Workshop {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  description: string;
  imagePath: string; // References the localized posters
  speakerName?: string;
  speakerRole?: string;
  speakerImage?: string;
  registrationOpen: boolean;
}
