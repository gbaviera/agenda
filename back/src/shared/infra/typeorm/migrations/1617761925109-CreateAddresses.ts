import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateAddresses1617761925109 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'addresses',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'street',
                        type: 'varchar',
                    },
                    {
                        name: 'number',
                        type: 'int',
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'contact_id',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
                foreignKeys: [
                    {
                        name: 'Contact',
                        referencedTableName: 'contacts',
                        referencedColumnNames: ['id'],
                        columnNames: ['contact_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    }
                ]

            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses');
    }

}
