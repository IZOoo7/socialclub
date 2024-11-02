
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Liquor {
  @PrimaryGeneratedColumn('identity')
  id: number;
  @Column('text',{
    unique:true
  })
  name:string;

  @Column()
  price: number;

  @Column()
  currentStock : number;

  @Column()
  reorderStock: number;

  @Column()
  liquorType: string;

}
