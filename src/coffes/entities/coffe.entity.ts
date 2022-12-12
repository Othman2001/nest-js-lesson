import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("coffes") // table name
export class Coffe {
  @PrimaryGeneratedColumn()
  id: number;
  name: string;
  brand: string;

  @Column("json", { nullable: true })
  flavors: string[];
}
