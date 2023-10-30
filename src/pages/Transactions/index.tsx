import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary/inde";
import {
  Container,
  PriceHighlight,
  TransactionsContent,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";
import { useContext } from "react";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <Header />
      <Summary />
      <TransactionsContent>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width={"50%"}>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContent>
    </Container>
  );
}
