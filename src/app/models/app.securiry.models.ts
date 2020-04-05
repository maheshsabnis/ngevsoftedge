export class Register {
  constructor(
    public Email: string,
    public Password: string,
    public ConfirmPassword: string
    ){}
}

export class Login {
  constructor(
    public UserName: string,
    public Password: string
    ){}
}

export class Product {
  constructor(
    public productRowId: number,
    public productName: string,
    public price: number
    ){}
}

export class ResponseMessage {
  constructor(
    public message: string
  ){}
}
