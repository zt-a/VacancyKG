export interface VacancyAttributes {
  id: number;
  title: string;
  deadline: Date;
  salary: string;
  experience?: string;
  address?: string;
  employment: string;
  information?: string;
  about?: string;
  scheduleId: number;
  cityId: number;
  companyId: number;
}
