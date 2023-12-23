import '@radix-ui/themes/styles.css';
import { Icon } from '@iconify/react';
import { Table } from '@radix-ui/themes';

export default function Transactions() {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Balance</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Current Income</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
          <Table.Cell>danilo@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            2000
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            5000
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
          <Table.Cell>jasper@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            2000
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            5000
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            5000
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            5000
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
          <Table.Cell>zahra@example.com</Table.Cell>
          <Table.Cell>
            <Icon icon="tabler:currency-naira" className="inline" />
            5000
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
