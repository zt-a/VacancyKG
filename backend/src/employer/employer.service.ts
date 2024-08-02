import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './models/employer.models';
import { Repository } from 'sequelize-typescript';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/create-company.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class EmployerService {
  constructor(
    @InjectModel(Company)
    private readonly companyRepository: Repository<Company>,
    private readonly fileService: FilesService,
  ) {}

  async findAllCompanies(): Promise<Company[]> {
    return await this.companyRepository.findAll();
  }

  async findOneCompany(id: number): Promise<Company> {
    const company = await this.companyRepository.findOne({ where: { id } });
    if (!company) {
      throw new NotFoundException(`Company with ID ${id} not found`);
    }
    return company;
  }

  async createCompany(
    createCompanyDto: CreateCompanyDto,
    logo: any,
  ): Promise<Company> {
    const fileName = await this.fileService.createFile(logo);
    return await this.companyRepository.create({
      ...createCompanyDto,
      logo: fileName,
    });
  }

  async updateCompany(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
    logo: any,
  ): Promise<Company> {
    const fileName = await this.fileService.createFile(logo);
    const company = await this.findOneCompany(id);
    return await company.update({ ...updateCompanyDto, logo: fileName });
  }

  async deleteCompany(id: number): Promise<void> {
    const company = await this.findOneCompany(id); // Reuse method for existence check
    await company.destroy();
  }
}
