export class CreateProductDto {
  readonly name: string;
  readonly slug: string;
  readonly provider: string;
  readonly createdBy: string;
  readonly updatedBy: string;
  readonly deleted: boolean;
  readonly activated: boolean;
}
