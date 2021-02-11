var employees = [
    { 'Id': 1, 'Name': 'Yasser', 'Age': 25, 'Salary': 100, 'Gender': 'Male' },
    { 'Id': 99, 'Name': 'Mohamed', 'Age': 30, 'Salary': 200, 'Gender': 'Male' },
    { 'Id': 3, 'Name': 'Ali', 'Age': 30, 'Salary': 200, 'Gender': 'Male' }
];

function drawEmployees() {
    var tableHtml = '<table class="table table-striped">' +
        '<thead>' +
        '<tr>' +
        '<th>Id</th>' +
        '<th>Name</th>' +
        '<th>Age</th>' +
        '<th>Salary</th>' +
        '<th>Gender</th>' +
        '<th>Action</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';
    for (var employee of employees) {
        tableHtml += '<tr>' +
            '<td>' + employee.Id + '</td>' +
            '<td>' + employee.Name + '</td>' +
            '<td>' + employee.Age + '</td>' +
            '<td>' + employee.Salary + '</td>' +
            '<td>' + employee.Gender + '</td>' +
            '<td>' +
            '<button onclick="deleteEmployee(' + employee.Id + ')" class="btn btn-danger">Delete</button>' +
            '<button onclick="editEmployee(' + employee.Id + ')" class="btn btn-primary">Edit</button>' +
            '</td>' +
            '</tr>';
    }



    tableHtml += '</tbody>' +
        '</table>';

    document.getElementById('employeeListContent').innerHTML = tableHtml;
}

function displayView() {
    document.getElementById('details').setAttribute('class', 'hide');
    document.getElementById('view').setAttribute('class', '');
}
function displayDetails() {
    document.getElementById('details').setAttribute('class', '');
    document.getElementById('view').setAttribute('class', 'hide');
}


function saveEmployee() {

    var name = document.getElementById('txtName').value;
    var age = document.getElementById('txtAge').value;
    var salary = document.getElementById('txtSalary').value;
    var gender = document.getElementById('dropGender').value;

    if(document.getElementById('txtId').value=='')
    {
        var id = 1;
        if (employees.length > 0) {
            id = employees[employees.length-1].Id + 1;
        }
        var employee = { 'Id': id, 'Name': name, 'Age': age, 'Salary': salary, 'Gender': gender };
        employees.push(employee);
        
    }
    else
    {
        var id = document.getElementById('txtId').value;
        var eIndex = getEmployeeIndexById(id);
        employees[eIndex].Name = name;
        employees[eIndex].Salary = salary;
        employees[eIndex].Age = age;
        employees[eIndex].Gender = gender;
    }
    drawEmployees();
    displayView();
    

}


function addEmployee() {
    document.getElementById('txtId').value = '';
    document.getElementById('txtName').value = '';
    document.getElementById('txtAge').value = '';
    document.getElementById('txtSalary').value = '';
    document.getElementById('dropGender').value = '';
    displayDetails();
}

function getEmployeeIndexById(id) {
    for (var i = 0; i < employees.length; i++) {
        if (employees[i].Id == id) {
            return i;
        }
    }
}





function deleteEmployee(id) {
    var eIndex = getEmployeeIndexById(id);
    employees.splice(eIndex,1);
    drawEmployees();
}
function editEmployee(id) {
    var eIndex = getEmployeeIndexById(id);
    document.getElementById('txtId').value = employees[eIndex].Id;
    document.getElementById('txtName').value = employees[eIndex].Name;
    document.getElementById('txtAge').value = employees[eIndex].Age;
    document.getElementById('txtSalary').value = employees[eIndex].Salary;
    document.getElementById('dropGender').value = employees[eIndex].Gender;
    displayDetails();
}


drawEmployees();