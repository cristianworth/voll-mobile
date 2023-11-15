const secoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    entradasDeTexto: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Digite seu email",
      },
      {
        id: 3,
        label: "Senha",
        placeholder: "Digite sua senha",
      },
      {
        id: 4,
        label: "Repita a senha",
        placeholder: "Digite sua senha novamente",
      },
    ],
    checkboxes: [],
  },
  {
    id: 2,
    titulo: "Agora, mais alguns dados sobre você",
    entradasDeTexto: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Digite seu CEP",
      },
      {
        id: 2,
        label: "Endereço",
        placeholder: "Digite seu endereço",
      },
      {
        id: 3,
        label: "Número",
        placeholder: "Digite seu número",
      },
      {
        id: 4,
        label: "Complemento",
        placeholder: "Digite seu complemento",
      },
      {
        id: 5,
        label: "Telefone",
        placeholder: "Digite seu telefone",
      },
    ],
    checkboxes: [],
  },
  {
    id: 3,
    titulo: "Para finalizar, qual seu plano de saúde",
    entradasDeTexto: [],
    checkboxes: [
      {
        id: 1,
        descricao: "Sulamerica",
      },
      {
        id: 2,
        descricao: "Unimed",
      },
      {
        id: 3,
        descricao: "Bradesco",
      },
      {
        id: 4,
        descricao: "Amil",
      },
      {
        id: 5,
        descricao: "Biosaúde",
      },
      {
        id: 6,
        descricao: "Biovida",
      },
      {
        id: 7,
        descricao: "Outros",
      },
      {
        id: 8,
        descricao: "Não possui plano",
      },
    ],
  },
];

export { secoes };
