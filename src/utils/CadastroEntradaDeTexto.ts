const secoes = [
  {
    id: 1,
    titulo: "Insira alguns dados básicos",
    entradasDeTexto: [
      {
        id: 1,
        name: "nome",
        label: "Nome",
        placeholder: "Digite seu nome",
      },
      {
        id: 2,
        name: "email",
        label: "Email",
        placeholder: "Digite seu email",
      },
      {
        id: 3,
        name: "senha",
        label: "Senha",
        secureTextEntry: true,
        placeholder: "Digite sua senha",
      },
      {
        id: 4,
        name: "confirmeSenha",
        label: "Confirme a senha",
        secureTextEntry: true,
        placeholder: "Digite sua senha novamente",
      },
      {
        id: 5,
        name: "cpf",
        label: "CPF",
        placeholder: "Digite seu CPF",
      },
      {
        id: 6,
        name: "imagem",
        label: "Foto de perfil",
        placeholder: "Link da foto",
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
        name: "cep",
        label: "CEP",
        placeholder: "Digite seu CEP",
      },
      {
        id: 2,
        name: "rua",
        label: "Rua",
        placeholder: "Digite sua rua",
      },
      {
        id: 3,
        name: "numero",
        label: "Número",
        placeholder: "Digite seu número",
      },
      {
        id: 4,
        name: "complemento",
        label: "Complemento",
        placeholder: "Digite seu complemento",
      },
      {
        id: 5,
        name: "estado",
        label: "Estado",
        placeholder: "Digite seu estado",
      },
      {
        id: 6,
        name: "telefone",
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
