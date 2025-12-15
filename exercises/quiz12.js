//! hard
//- Create an object called company that contains:
const company = {
  employee: [{
    name: 'employee1',
    role: 'frontend',
    salary: 20
  },{
    name: 'employee2',
    role: 'backend',
    salary: 30
  }, {
    name: 'employee3',
    role: 'project manager',
    salary: 60
  }], 
  getTotalSalary: function() {
    let total = 0;
    for (let items of company.employee) {
      for (let [key, value] of Object.entries(items)) {
        if (key === 'salary' && !isNaN(value)) {
          total += value;
        }
      }
    }
    return total;
  }, 
  getRoles: function() {
    let roles = [];
    for (let items of company.employee) {
      for (let [key, value] of Object.entries(items)) {
        if (key === 'role') {
          roles.push(value);
        }
      }
    }
    return roles;
  }
};

console.log(company.getTotalSalary());
console.log(company.getRoles());