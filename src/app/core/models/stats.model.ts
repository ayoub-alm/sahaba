export interface GenderStat {
  gender: string;      // 'نساء' (Women) | 'رجال' (Men)
  percentage: number;  // e.g., 77.3 or 22.7
  color: string;
}

export interface AgeStat {
  range: string;       // e.g., 'أقل من 30'
  count: number;       // e.g., 35
  percentage: number;
}

export interface AcademicStat {
  level: string;       // e.g., 'تعليم عالي'
  percentage: number;
}

export interface DashboardOverview {
  totalParticipants: number;
  totalWorkshops: number;
  municipalitiesCovered: number;
  satisfactionRate: number;
}
