import React, { useState, useEffect } from "react";
import "./index.css";
import { FaChartPie, FaWallet, FaShoppingCart } from "react-icons/fa";

// MY DATA
// const initialIncomes = [
//   { id: 1, icon: "💵", title: "Benefits", amount: 100.0 },
//   { id: 2, icon: "🇷🇺", title: "Russia", amount: 100.0 },
//   { id: 3, icon: "💰", title: "Salary", amount: 5100.0 },
//   { id: 4, icon: "🚗", title: "Doordash", amount: 100.0 },
//   { id: 5, icon: "📦", title: "Amazon", amount: 100.0 },
//   { id: 6, icon: "💲", title: "Tips", amount: 100.0 },
//   { id: 7, icon: "🎁", title: "Gifts", amount: 100.0 },
//   { id: 8, icon: "👩‍💼", title: "Wife Salary", amount: 1100.0 },
//   { id: 9, icon: "🔄", title: "Other", amount: 100.0 },
// ];

// const initialAccounts = [
//   { id: 1, icon: "💰", name: "Wallet", balance: 100.0 },
//   { id: 2, icon: "🏛️", name: "Wells Fargo", balance: 4200.0 },
//   { id: 3, icon: "🔒", name: "Safe", balance: 800.0 },
//   { id: 4, icon: "💳", name: "Discover", balance: 300.0 },
//   { id: 5, icon: "💳", name: "Capital One", balance: 300.0 },
//   { id: 6, icon: "🛍️", name: "Amazon", balance: 300.0 },
//   { id: 7, icon: "🤦‍♂️", name: "Maks", balance: 300.0 },
//   { id: 8, icon: "🌹", name: "Roza", balance: 300.0 },
//   { id: 9, icon: "👩", name: "Nastya", balance: 300.0 },
// ];

// const initialExpenses = [
//   {
//     id: 1,
//     name: "Food",
//     icon: "🍎",
//     subcategories: [
//       { id: 101, name: "Groceries", icon: "🛒", amount: 0.0 },
//       { id: 102, name: "Lunch", icon: "🍔", amount: 0.0 },
//     ],
//   },
//   {
//     id: 2,
//     name: "House",
//     icon: "🏠",
//     subcategories: [
//       { id: 201, name: "Rent", icon: "🏡", amount: 0.0 },
//       { id: 202, name: "Xcel Energy", icon: "⚡", amount: 0.0 },
//       { id: 203, name: "Water", icon: "💧", amount: 0.0 },
//       { id: 204, name: "Internet", icon: "🌐", amount: 0.0 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Technology",
//     icon: "💻",
//     subcategories: [
//       { id: 301, name: "Google Fi", icon: "📱", amount: 0.0 },
//       { id: 302, name: "Amazon", icon: "📦", amount: 0.0 },
//       { id: 303, name: "AliExpress", icon: "🛍️", amount: 0.0 },
//       { id: 304, name: "Tools", icon: "🔧", amount: 0.0 },
//       { id: 305, name: "Technology", icon: "🔌", amount: 0.0 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Fun",
//     icon: "🎉",
//     subcategories: [
//       { id: 401, name: "Restaurants", icon: "🍽️", amount: 0.0 },
//       { id: 402, name: "Movies", icon: "🎬", amount: 0.0 },
//       { id: 403, name: "Hobby", icon: "🎨", amount: 0.0 },
//       { id: 404, name: "Museums", icon: "🏛️", amount: 0.0 },
//       { id: 405, name: "Swimming Pool", icon: "🏊", amount: 0.0 },
//       { id: 406, name: "Concerts", icon: "🎵", amount: 0.0 },
//       { id: 407, name: "Toys", icon: "🧸", amount: 0.0 },
//       { id: 408, name: "Sports", icon: "⚽", amount: 0.0 },
//       { id: 409, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 5,
//     name: "Gifts",
//     icon: "🎁",
//     subcategories: [
//       { id: 501, name: "Birth Days", icon: "🎂", amount: 0.0 },
//       { id: 502, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 6,
//     name: "Vacation",
//     icon: "🏖️",
//     subcategories: [
//       { id: 601, name: "Airplane", icon: "✈️", amount: 0.0 },
//       { id: 602, name: "Hotel", icon: "🏨", amount: 0.0 },
//       { id: 603, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 7,
//     name: "Make Up",
//     icon: "💄",
//     subcategories: [
//       { id: 701, name: "Clothes", icon: "👗", amount: 0.0 },
//       { id: 702, name: "Haircut", icon: "💇", amount: 0.0 },
//       { id: 703, name: "Sport", icon: "🏃", amount: 0.0 },
//       { id: 704, name: "Cosmetics", icon: "💋", amount: 0.0 },
//       { id: 705, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 8,
//     name: "Cars",
//     icon: "🚗",
//     subcategories: [
//       { id: 801, name: "Gas", icon: "⛽", amount: 0.0 },
//       { id: 802, name: "Parking", icon: "🅿️", amount: 0.0 },
//       { id: 803, name: "Insurance", icon: "📄", amount: 0.0 },
//       { id: 804, name: "Lease", icon: "📝", amount: 0.0 },
//       { id: 805, name: "Parts", icon: "🔩", amount: 0.0 },
//       { id: 806, name: "Fix", icon: "🔧", amount: 0.0 },
//       { id: 807, name: "Tires", icon: "🛞", amount: 0.0 },
//       { id: 808, name: "Taxes", icon: "💸", amount: 0.0 },
//       { id: 809, name: "Wash", icon: "🧽", amount: 0.0 },
//       { id: 810, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 9,
//     name: "Travel",
//     icon: "🧳",
//     subcategories: [
//       { id: 901, name: "Taxi", icon: "🚕", amount: 0.0 },
//       { id: 902, name: "Transport", icon: "🚌", amount: 0.0 },
//     ],
//   },
//   {
//     id: 10,
//     name: "Housekeeping",
//     icon: "🧹",
//     subcategories: [
//       { id: 1001, name: "Hoztovar", icon: "📦", amount: 0.0 },
//       { id: 1002, name: "Kitchen Staff", icon: "👩‍🍳", amount: 0.0 },
//       { id: 1003, name: "Furniture", icon: "🛋️", amount: 0.0 },
//       { id: 1004, name: "Fix", icon: "🔧", amount: 0.0 },
//     ],
//   },
//   {
//     id: 11,
//     name: "Health",
//     icon: "❤️",
//     subcategories: [
//       { id: 1101, name: "Drugs", icon: "💊", amount: 0.0 },
//       { id: 1102, name: "Doctor", icon: "👨‍⚕️", amount: 0.0 },
//     ],
//   },
//   {
//     id: 12,
//     name: "Learning",
//     icon: "📚",
//     subcategories: [
//       { id: 1201, name: "College", icon: "🏫", amount: 0.0 },
//       { id: 1202, name: "Courses", icon: "💻", amount: 0.0 },
//       { id: 1203, name: "Other", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 13,
//     name: "Donations",
//     icon: "🙏",
//     subcategories: [
//       { id: 1301, name: "Church", icon: "⛪", amount: 0.0 },
//       { id: 1302, name: "Political Prisoners", icon: "✊", amount: 0.0 },
//       { id: 1303, name: "Others", icon: "❓", amount: 0.0 },
//     ],
//   },
//   {
//     id: 14,
//     name: "Other",
//     icon: "❓",
//     subcategories: [],
//   },
// ];

const initialIncomes = [
  { id: 1, icon: "💵", title: "Salary", amount: 5000.0 },
  { id: 2, icon: "💰", title: "Investments", amount: 200.0 },
  { id: 3, icon: "🎁", title: "Gifts", amount: 100.0 },
  { id: 4, icon: "📦", title: "Freelance", amount: 300.0 },
  { id: 5, icon: "🚗", title: "Side Job", amount: 150.0 },
  { id: 6, icon: "💲", title: "Bonuses", amount: 250.0 },
  { id: 7, icon: "🏦", title: "Bank Interest", amount: 50.0 },
  { id: 8, icon: "🔄", title: "Refunds", amount: 75.0 },
  { id: 9, icon: "🔧", title: "Extra Work", amount: 120.0 },
];

const initialAccounts = [
  { id: 1, icon: "💰", name: "Cash", balance: 200.0 },
  { id: 2, icon: "🏦", name: "Checking Account", balance: 4000.0 },
  { id: 3, icon: "💳", name: "Credit Card", balance: 1000.0 },
  { id: 4, icon: "📈", name: "Investment", balance: 5000.0 },
  { id: 5, icon: "🔐", name: "Savings", balance: 7000.0 },
  { id: 6, icon: "🛍️", name: "Shopping Card", balance: 300.0 },
];

const initialExpenses = [
  {
    id: 1,
    name: "Food",
    icon: "🍕",
    subcategories: [
      { id: 101, name: "Groceries", icon: "🛒", amount: 0.0 },
      { id: 102, name: "Restaurants", icon: "🍔", amount: 0.0 },
    ],
  },
  {
    id: 2,
    name: "Housing",
    icon: "🏠",
    subcategories: [
      { id: 201, name: "Rent", icon: "🏡", amount: 0.0 },
      { id: 202, name: "Utilities", icon: "💡", amount: 0.0 },
      { id: 203, name: "Internet", icon: "🌐", amount: 0.0 },
    ],
  },
  {
    id: 3,
    name: "Transportation",
    icon: "🚗",
    subcategories: [
      { id: 301, name: "Gas", icon: "⛽", amount: 0.0 },
      { id: 302, name: "Public Transit", icon: "🚌", amount: 0.0 },
      { id: 303, name: "Car Maintenance", icon: "🔧", amount: 0.0 },
    ],
  },
  {
    id: 4,
    name: "Entertainment",
    icon: "🎉",
    subcategories: [
      { id: 401, name: "Movies", icon: "🎬", amount: 0.0 },
      { id: 402, name: "Games", icon: "🎮", amount: 0.0 },
      { id: 403, name: "Streaming", icon: "📺", amount: 0.0 },
    ],
  },
  {
    id: 5,
    name: "Shopping",
    icon: "🛍️",
    subcategories: [
      { id: 501, name: "Clothing", icon: "👕", amount: 0.0 },
      { id: 502, name: "Electronics", icon: "📱", amount: 0.0 },
      { id: 503, name: "Home Goods", icon: "🏡", amount: 0.0 },
    ],
  },
  {
    id: 6,
    name: "Health",
    icon: "🏥",
    subcategories: [
      { id: 601, name: "Doctor Visits", icon: "🩺", amount: 0.0 },
      { id: 602, name: "Medicine", icon: "💊", amount: 0.0 },
      { id: 603, name: "Gym", icon: "🏋️", amount: 0.0 },
    ],
  },
  {
    id: 7,
    name: "Travel",
    icon: "✈️",
    subcategories: [
      { id: 701, name: "Flights", icon: "🛫", amount: 0.0 },
      { id: 702, name: "Hotels", icon: "🏨", amount: 0.0 },
      { id: 703, name: "Local Transport", icon: "🚖", amount: 0.0 },
    ],
  },
  {
    id: 8,
    name: "Education",
    icon: "📚",
    subcategories: [
      { id: 801, name: "Books", icon: "📖", amount: 0.0 },
      { id: 802, name: "Courses", icon: "💻", amount: 0.0 },
      { id: 803, name: "School Fees", icon: "🏫", amount: 0.0 },
    ],
  },
  {
    id: 9,
    name: "Gifts & Donations",
    icon: "🎁",
    subcategories: [
      { id: 901, name: "Charity", icon: "🙏", amount: 0.0 },
      { id: 902, name: "Personal Gifts", icon: "🎀", amount: 0.0 },
    ],
  },
  {
    id: 10,
    name: "Miscellaneous",
    icon: "❓",
    subcategories: [
      { id: 1001, name: "Unexpected Expenses", icon: "⚠️", amount: 0.0 },
      { id: 1002, name: "Subscriptions", icon: "📦", amount: 0.0 },
    ],
  },
];

export default function App() {
  const [incomes, setIncomes] = useState(() => {
    const stored = localStorage.getItem("incomes");
    return stored ? JSON.parse(stored) : initialIncomes;
  });
  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);
  const [accounts, setAccounts] = useState(() => {
    const stored = localStorage.getItem("accounts");
    return stored ? JSON.parse(stored) : initialAccounts;
  });
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses");
    return stored ? JSON.parse(stored) : initialExpenses;
  });
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const [transferModal, setTransferModal] = useState({
    show: false,
    destination: null,
  });
  const [incomeModal, setIncomeModal] = useState({ show: false, income: null });
  const [expenseModal, setExpenseModal] = useState({
    show: false,
    categoryId: null,
    subcategory: null,
  });
  const [activeSection, setActiveSection] = useState("");

  const totalIncomes = incomes.reduce(
    (total, income) => total + income.amount,
    0
  );
  const totalAccountBalance = accounts.reduce(
    (total, account) => total + account.balance,
    0
  );
  const totalExpenses = expenses.reduce((total, category) => {
    const categoryTotal = category.subcategories.reduce(
      (subTotal, sub) => subTotal + sub.amount,
      0
    );
    return total + categoryTotal;
  }, 0);

  const handleAccountClick = (account) => {
    setTransferModal({ show: true, destination: account });
  };

  const handleCloseModal = () => {
    setTransferModal({ show: false, destination: null });
  };

  const handleTransfer = (sourceAccountId, amount) => {
    if (!sourceAccountId || amount <= 0) return; // basic validation

    setAccounts((prevAccounts) =>
      prevAccounts.map((acc) => {
        if (acc.id === parseInt(sourceAccountId)) {
          return { ...acc, balance: acc.balance - amount };
        } else if (acc.id === transferModal.destination.id) {
          return { ...acc, balance: acc.balance + amount };
        }
        return acc;
      })
    );
    handleCloseModal();
  };

  const handleIncomeClick = (incomeItem) => {
    setIncomeModal({ show: true, income: incomeItem });
  };

  const handleCloseIncomeModal = () => {
    setIncomeModal({ show: false, income: null });
  };

  const handleAddIncome = (accountId, amount) => {
    if (!accountId || amount <= 0) return;

    setIncomes((inc) =>
      inc.map((item) => {
        if (item.id === incomeModal.income.id) {
          return { ...item, amount: item.amount + amount };
        }
        return item;
      })
    );

    setAccounts((prevAccounts) =>
      prevAccounts.map((acc) => {
        if (acc.id === parseInt(accountId)) {
          return { ...acc, balance: acc.balance + amount };
        }
        return acc;
      })
    );
    handleCloseIncomeModal();
  };

  const handleExpenseSubcategoryClick = (categoryId, subcategory) => {
    setExpenseModal({ show: true, categoryId, subcategory });
  };

  const handleCloseExpenseModal = () => {
    setExpenseModal({ show: false, categoryId: null, subcategory: null });
  };

  const handleAddExpense = (categoryId, subcategoryId, accountId, amount) => {
    if (!accountId || amount <= 0) return;

    // Subtract expense amount from the chosen account:
    setAccounts((prevAccounts) =>
      prevAccounts.map((acc) => {
        if (acc.id === parseInt(accountId)) {
          return { ...acc, balance: acc.balance - amount };
        }
        return acc;
      })
    );

    // Add the expense amount to the specific subcategory:
    setExpenses((prevExpenses) =>
      prevExpenses.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            subcategories: category.subcategories.map((sub) => {
              if (sub.id === subcategoryId) {
                return { ...sub, amount: sub.amount + amount };
              }
              return sub;
            }),
          };
        }
        return category;
      })
    );

    handleCloseExpenseModal();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Personal Finance</h1>
      </header>

      {/* If a section is active, render it with a back arrow */}
      {activeSection !== "" && (
        <div className="section-container">
          <button className="back-arrow" onClick={() => setActiveSection("")}>
            ← Back
          </button>
          {activeSection === "incomes" && (
            <Incomes incomes={incomes} onIncomeClick={handleIncomeClick} />
          )}
          {activeSection === "expenses" && (
            <Expenses
              expenses={expenses}
              onSubcategoryClick={handleExpenseSubcategoryClick}
            />
          )}
          {activeSection === "accounts" && (
            <Accounts accounts={accounts} onAccountClick={handleAccountClick} />
          )}
        </div>
      )}

      {/* When no section is active, show the Info card */}
      {activeSection === "" && (
        <Info
          totalExpenses={totalExpenses}
          totalAccountBalance={totalAccountBalance}
          totalIncomes={totalIncomes}
        />
      )}

      {/* Always render the Footer, and pass the section-change handler */}
      <Footer onSectionChange={setActiveSection} />

      {/* Your modals, etc. remain rendered as needed */}
      {transferModal.show && (
        <TransferModal
          accounts={accounts}
          destinationAccount={transferModal.destination}
          onClose={handleCloseModal}
          onTransfer={handleTransfer}
        />
      )}

      {incomeModal.show && (
        <IncomeModal
          income={incomeModal.income}
          accounts={accounts}
          onClose={handleCloseIncomeModal}
          onAddIncome={handleAddIncome}
        />
      )}

      {expenseModal.show && (
        <ExpenseModal
          categoryId={expenseModal.categoryId}
          subcategory={expenseModal.subcategory}
          accounts={accounts}
          onClose={handleCloseExpenseModal}
          onAddExpense={handleAddExpense}
        />
      )}
    </div>
  );
}

function Info({ totalExpenses, totalAccountBalance, totalIncomes }) {
  return (
    <div className="info-card">
      <h2>Expenses</h2>
      <div className="circle-container">
        <div className="circle">{totalExpenses}</div>
      </div>
      <div className="stats">
        <p>
          Balance: <strong>{totalAccountBalance}</strong>
        </p>
        <p>
          Incomes: <strong>{totalIncomes}</strong>
        </p>
      </div>
    </div>
  );
}

function TodayInfo() {
  return (
    <div className="today-info">
      <h2>Today</h2>
      <div className="bar income">
        <span>Incomes</span> <strong>90</strong>
      </div>
      <div className="bar expense">
        <span>Expenses</span> <strong>418</strong>
      </div>
      <div className="bar prediction">
        <span>Predicted savings</span> <strong>-328</strong>
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="report-card">
      <h3>Daily report</h3>
      <p>Incomes: 90</p>
      <p>Expenses: 183</p>
      <div className="report-card">
        <h3>The results for February, 2025</h3>
        <p>
          Monthly savings: <strong>734</strong>
        </p>
        <p>
          Balance: <strong>7,968</strong>
        </p>
        <p>
          Incomes: <strong>6,395</strong>
        </p>
        <p>
          Expenses: <strong>-5,661</strong>
        </p>
      </div>
    </div>
  );
}

function Footer({ onSectionChange }) {
  return (
    <div className="footer">
      <FooterButton
        icon={<FaWallet />}
        text="Incomes"
        onClick={() => onSectionChange("incomes")}
      />
      <FooterButton
        icon={<FaChartPie />}
        text="Accounts"
        onClick={() => onSectionChange("accounts")}
      />
      <FooterButton
        icon={<FaShoppingCart />}
        text="Expenses"
        onClick={() => onSectionChange("expenses")}
      />
    </div>
  );
}

function FooterButton({ icon, text, onClick }) {
  return (
    <button className="footer-btn" onClick={onClick}>
      {icon}
      <span>{text}</span>
    </button>
  );
}

function Incomes({ incomes, onIncomeClick }) {
  return (
    <>
      <h2>Incomes</h2>
      <div className="grid-container">
        {incomes.map((item) => (
          <IncomeItem item={item} key={item.id} onIncomeClick={onIncomeClick} />
        ))}
      </div>
    </>
  );
}

function IncomeItem({ item, onIncomeClick }) {
  return (
    <div className="income-item" onClick={() => onIncomeClick(item)}>
      <div className="income-icon">{item.icon}</div>
      <p>{item.title}</p>
      <p>${item.amount}</p>
    </div>
  );
}

function Accounts({ accounts, onAccountClick }) {
  return (
    <>
      <h2>Accounts</h2>
      <div className="grid-container">
        {accounts.map((item) => (
          <AccountItem
            item={item}
            key={item.id}
            onAccountClick={onAccountClick}
          />
        ))}
      </div>
    </>
  );
}

function AccountItem({ item, onAccountClick }) {
  return (
    <div className="income-item" onClick={() => onAccountClick(item)}>
      <div className="income-icon">{item.icon}</div>
      <p>{item.name}</p>
      <p>${item.balance}</p>
    </div>
  );
}

function Expenses({ expenses, onSubcategoryClick }) {
  return (
    <>
      <h2>Expenses</h2>
      <div className="grid-container">
        {expenses.map((category) => (
          <ExpenseCategoryItem
            key={category.id}
            category={category}
            onSubcategoryClick={onSubcategoryClick}
          />
        ))}
      </div>
    </>
  );
}

function ExpenseCategoryItem({ category, onSubcategoryClick }) {
  const categoryTotal = category.subcategories.reduce(
    (total, sub) => total + sub.amount,
    0
  );
  return (
    <div className="expense-category-item">
      <div className="expense-category-header">
        <span className="expense-category-icon">{category.icon}</span>
        <h3 className="expense-category-name">
          {category.name} - ${categoryTotal.toFixed(2)}
        </h3>
      </div>
      {category.subcategories && category.subcategories.length > 0 ? (
        <div className="grid-container">
          {category.subcategories.map((sub) => (
            <ExpenseSubItem
              key={sub.id}
              sub={sub}
              categoryId={category.id}
              onSubcategoryClick={onSubcategoryClick}
            />
          ))}
        </div>
      ) : (
        <p>No subcategories</p>
      )}
    </div>
  );
}

function ExpenseSubItem({ sub, categoryId, onSubcategoryClick }) {
  return (
    <div
      className="expense-item"
      onClick={() => onSubcategoryClick(categoryId, sub)}
    >
      <span className="expense-sub-icon">{sub.icon}</span>
      <div className="expense-item-info">
        <p className="expense-sub-name">{sub.name}</p>
        <p className="expense-sub-amount">${sub.amount.toFixed(2)}</p>
      </div>
    </div>
  );
}

function TransferModal({ accounts, destinationAccount, onClose, onTransfer }) {
  const [sourceAccountId, setSourceAccountId] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Transfer to {destinationAccount.name}</h3>
        <label>
          From:
          <select
            value={sourceAccountId}
            onChange={(e) => setSourceAccountId(e.target.value)}
          >
            <option value="">Select source account</option>
            {accounts
              .filter((acc) => acc.id !== destinationAccount.id)
              .map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name}
                </option>
              ))}
          </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>
        <button onClick={() => onTransfer(sourceAccountId, amount)}>
          Transfer
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

function IncomeModal({ income, accounts, onClose, onAddIncome }) {
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [amount, setAmount] = useState(income.amount);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Income from {income.title}</h3>
        <label>
          Choose Account:
          <select
            value={selectedAccountId}
            onChange={(e) => setSelectedAccountId(e.target.value)}
          >
            <option value="">Select account</option>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>
        <button onClick={() => onAddIncome(selectedAccountId, amount)}>
          Add Income
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

function ExpenseModal({
  categoryId,
  subcategory,
  accounts,
  onClose,
  onAddExpense,
}) {
  const [selectedAccountId, setSelectedAccountId] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Expense for {subcategory.name}</h3>
        <label>
          Choose Account:
          <select
            value={selectedAccountId}
            onChange={(e) => setSelectedAccountId(e.target.value)}
          >
            <option value="">Select account</option>
            {accounts.map((acc) => (
              <option key={acc.id} value={acc.id}>
                {acc.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </label>
        <button
          onClick={() =>
            onAddExpense(categoryId, subcategory.id, selectedAccountId, amount)
          }
        >
          Add Expense
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
