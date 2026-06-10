import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Workshop } from '../models/workshop.model';
import { GenderStat, AgeStat, AcademicStat, DashboardOverview } from '../models/stats.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Dashboard Overview Metrics
  private overview: DashboardOverview = {
    totalParticipants: 350,
    totalWorkshops: 8,
    municipalitiesCovered: 12,
    satisfactionRate: 94.5
  };

  // Gender Distribution
  private genderStats: GenderStat[] = [
    { gender: 'نساء', percentage: 77.3, color: '#e83e8c' }, // Deep Rose Pink
    { gender: 'رجال', percentage: 22.7, color: '#17a2b8' }  // Ocean Teal
  ];

  // Age Groups
  private ageStats: AgeStat[] = [
    { range: 'أقل من 30 سنة', count: 123, percentage: 35 },
    { range: 'بين 30 و 45 سنة', count: 157, percentage: 45 },
    { range: 'أكثر من 45 سنة', count: 70, percentage: 20 }
  ];

  // Academic Levels
  private academicStats: AcademicStat[] = [
    { level: 'التعليم الأساسي / الثانوي', percentage: 25 },
    { level: 'التكوين المهني / الحرفي', percentage: 40 },
    { level: 'التعليم العالي (إجازة/ماستر/دكتوراه)', percentage: 35 }
  ];

  // Workshop list based on actual posters
  private workshops: Workshop[] = [
    {
      id: '1',
      title: 'القيادة النسائية في القطاع الحرفي',
      subtitle: 'الإدماج السوسيو اقتصادي للحرفيات',
      date: '26 و 27 مارس 2026',
      location: 'بمركز التربية والتكوين بحي ميمونة - سطات',
      description: 'دورة تكوينية تفاعلية تهدف لتمكين النساء الحرفيات من مهارات القيادة، التسيير الإداري، والتمثيلية الفعالة داخل التعاونيات والمجالس المحلية لتعزيز إدماجهن الاقتصادي والاجتماعي.',
      imagePath: 'assets/afiche1.jpg',
      speakerName: 'مؤطرات متخصصات في ريادة الأعمال النسائية',
      registrationOpen: true
    },
    {
      id: '2',
      title: 'صوتنا... دعم حقيقي لتحقيق المناصفة',
      subtitle: 'برنامج التوعية الشامل بإقليم سطات',
      date: 'ربيع 2026',
      location: 'مختلف جماعات إقليم سطات',
      description: 'اللقاء الافتتاحي لإطلاق برنامج التعبئة والمواكبة الميدانية الموجه لدعم الحضور السياسي والمشاركة الفعالة للمرأة السطاتية في تدبير الشأن المحلي.',
      imagePath: 'assets/afiche2.jpg',
      speakerName: 'جمعية سحابة الخير بالتنسيق مع الفاعلين المحليين',
      registrationOpen: false
    },
    {
      id: '3',
      title: 'اللقاء التحسيسي لتشجيع تمثيلية النساء',
      subtitle: 'الآليات الدستورية والقانونية لتمكين المرأة',
      date: 'الأربعاء 28 يناير 2026 (14:30)',
      location: 'قاعة الاجتماعات بجماعة البروج',
      description: 'لقاء توعوي لمناقشة تحديات وفرص المشاركة السياسية للمرأة في المجالس المنتخبة. الندوة تشهد مداخلات علمية تسلط الضوء على تفعيل مبدأ المناصفة والتمييز الإيجابي.',
      imagePath: 'assets/afiche3.jpg',
      speakerName: 'السيدة غزلان الناشد & السيد يوسف دحاوي',
      speakerRole: 'عضوة المكتب الجهوي للجمعية وباحث بسلك الدكتوراه في القانون العام والعلوم السياسية',
      registrationOpen: false
    }
  ];

  constructor() { }

  getOverview(): Observable<DashboardOverview> {
    return of(this.overview);
  }

  getGenderStats(): Observable<GenderStat[]> {
    return of(this.genderStats);
  }

  getAgeStats(): Observable<AgeStat[]> {
    return of(this.ageStats);
  }

  getAcademicStats(): Observable<AcademicStat[]> {
    return of(this.academicStats);
  }

  getWorkshops(): Observable<Workshop[]> {
    return of(this.workshops);
  }
}
