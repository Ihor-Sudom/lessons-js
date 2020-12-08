const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  return [...new Set(allStudentsList)].filter(item => !studentsForRetake.includes(item))
         .map(item => 'Good job, ' + item);


}

console.log(getMessagesForBestStudents(['a', 'b', 'c', 'd'], ['b', 'd']));