import { createConnection } from 'typeorm';
import { Student } from './students/entities/student.entity';

async function seed() {
  const connection = await createConnection();
  const studentRepository = connection.getRepository(Student);

  const students = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      enrollmentDate: new Date('2023-01-01'),
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      enrollmentDate: new Date('2023-02-01'),
    },
    // Add more students as needed
  ];

  await studentRepository.save(students);
  console.log('Seeding completed!');
  await connection.close();
}

seed().catch((error) => console.error(error)); 