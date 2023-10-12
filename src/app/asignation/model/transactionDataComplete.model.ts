export interface transactionDataCompleteResponse {
  funcionaryResponseDto: {
    id_funcionary: number;
    name: string;
    surnamefather: string;
    surnamemother: string;
    dni: string;
    phonenumber: string;
    range: string;
    confirmation: string;
    department: string;
    address: string;
    email: string;
    status: string;
  };

  teenResponseDto: {
    id_teen: number;
    name: string;
    surnamefather: string;
    surnamemother: string;
    dni: string;
    phonenumber: string;
    address: string;
    email: string;
    status: string;
  };

  transaccionalAllocation: {
    id_funcionaryteend: number;
    description: string;
    status: string;
    id_teen: number;
    id_funcionary: number;
  };
}
