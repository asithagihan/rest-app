import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public description: string;
}

export default Issue;
