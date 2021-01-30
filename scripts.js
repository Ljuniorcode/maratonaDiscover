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
    amount: 280,
    date: '22/01/2021',
  },
  {
    id: 2,
    description: 'Website',
    amount: 3000,
    date: '14/01/2021',
  },
  {
    id: 3,
    description: 'Internet',
    amount: -2000,
    date: '18/01/2021',
  },
  {
    id: 4,
    description: 'App',
    amount: 8000,
    date: '29/01/2021',
  },
];

const Transaction = {
  all: transactions,
  add(transaction) {
    Transaction.all.push(transaction)

    App.reload()
  },

  incomes() {
    let income = 0;
    //pegar todas as Transações
    //para cada transacao, se ela for maior que zero
    Transaction.all.forEach(transaction => {
      if (transaction.amount > 0) {
        //somar a uma variável e retornar a variável
        income += transaction.amount;
      }

    })

    //somar a uma variavel e retornar a variavel
    return income;
  },

  expenses() {
    let expense = 0;
    //pegar todas as Transações
    //para cada transacao, se ela for menor que zero
    Transaction.all.forEach(transaction => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    })

    //somar a uma variavel e retornar a variavel
    return expense;
  },

  total() {
    //entradas - saídas
    return Transaction.incomes() + Transaction.expenses();
  }
}

const DOM = {
  transactionContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionContainer.appendChild(tr)


  },

  innerHTMLTransaction(transaction) {

    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}"> ${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="/assets/minus.svg" alt="Remover transação">
        </td>
    `
    return html
  },

  updateBalance() {
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())

    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())

    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
  },

  clearTransactions() {
    DOM.transactionContainer.innerHTML = ""
  }

}


const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    ///\D/g - procurando tudo que não é número
    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  }
}


const App = {
  init() {
    Transaction.all.forEach(transaction => {
      DOM.addTransaction(transaction)
    })

    DOM.updateBalance()



  },
  reload() {
    DOM.clearTransactions()
    App.init()
  },
}

App.init()

Transaction.add({
  id: 39,
  description: 'add itens novos',
  amount: 200,
  date: '23/01/2021'
})