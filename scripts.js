const Modal = {
  open() {
    document
      .querySelector('.modal-overlay')
      .classList.add('active')
  },
  close() {
    document
      .querySelector('.modal-overlay')
      .classList.remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -500,
    date: '28/01/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: 50000,
    date: '28/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -2000,
    date: '28/01/2021',
  },
];

const Transaction = {
  incomes() {
    //somar as entradas
  },

  expenses() {
    //somar as saídas

  },

  total() {
    //entradas - saídas
  }
}

const DOM = {
  innerHTMLTransaction() {
    const html = `
    <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$500,00</td>
        <td class="date">08/02/2021</td>
        <td>
          <img src="/assets/minus.svg" alt="Remover transação">
        </td>
    </tr>
    `
  }
}