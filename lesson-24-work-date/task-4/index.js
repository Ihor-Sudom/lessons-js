
const studentsBirthDays = students => {

  const sor = students.sort((a, b) => new Date(a.birthDate).getMonth() - new Date(b.birthDate).getMonth());
  console.log(sor);
  const val = sor.map(el => Object.values(el));
  console.log(val);
}

const students = [{name: 'Tom', birthDate: '06/15/2010'}, {name: 'Ben', birthDate: '03/17/2008'}, {name: 'Sam', birthDate: '01/15/2010'}];

studentsBirthDays(students);