export class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string
  ){}
}
export const Departments =[
  {DeptNo:10, DeptName:'IT'},
  {DeptNo:20, DeptName:'HR'},
  {DeptNo:30, DeptName:'SL'}
];

export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptNo: number
  ){}
}

export const Employees =[
  {EmpNo:101, EmpName:'A', DeptNo:10},
  {EmpNo:102, EmpName:'B', DeptNo:20},
  {EmpNo:103, EmpName:'C', DeptNo:30},
  {EmpNo:104, EmpName:'D', DeptNo:10},
  {EmpNo:105, EmpName:'E', DeptNo:20},
  {EmpNo:106, EmpName:'F', DeptNo:30}
];

