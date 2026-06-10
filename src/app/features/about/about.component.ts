import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Goals of the initiative
  objectives = [
    {
      icon: 'star',
      title: 'تحقيق المناصفة الفعلية',
      description: 'العمل على تفعيل المبادئ الدستورية وتوجيهات صاحب الجلالة لتحقيق المناصفة الفعلية وتوسيع مشاركة النساء في الهياكل المحلية.'
    },
    {
      icon: 'school',
      title: 'بناء القدرات والمهارات',
      description: 'تنظيم ورش عمل ولقاءات علمية لتأهيل المستشارات والنساء في مجالات القيادة والتسيير الجماعي والتواصل السياسي.'
    },
    {
      icon: 'gavel',
      title: 'التوعية بالقوانين والآليات',
      description: 'تبسيط الإطار التشريعي والقوانين المنظمة للانتخابات والجماعات المحلية لتمكين النساء من الدفاع عن حقوقهن وتمثيليتهن.'
    },
    {
      icon: 'groups',
      title: 'التعبئة المجتمعية',
      description: 'خلق حوار جهوي تشاركي وبناء شبكات داعمة لتمثيلية النساء بمشاركة مختلف الفاعلين المؤسساتيين والمجتمعيين.'
    }
  ];
}
