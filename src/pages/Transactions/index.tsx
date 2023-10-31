import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary/inde";
import {
  Container,
  PriceHighlight,
  TransactionsContent,
  TransactionsTable,
} from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";
import { useContext } from "react";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";

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
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContent>
    </Container>
  );
}
