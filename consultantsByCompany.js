let consultants = [
  { name: 'Peyton Turner', company: 'Walker Inc' },
  { name: 'Isaias Fritsch', company: 'Walker Inc' },
  { name: 'Susana Wilderman', company: 'Nolan Inc' }
];

function groupConsultantsByCompany(consultantsArray) {
  const groupedConsultants = {};

  consultantsArray.forEach(consultant => {
      const company = consultant.company;
      if (!groupedConsultants[company]) {
          groupedConsultants[company] = [];
      }
      groupedConsultants[company].push(consultant);
  });

  return groupedConsultants;
}

const groupedByCompany = groupConsultantsByCompany(consultants);
console.log(groupedByCompany);
