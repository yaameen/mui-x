import { DataGridPro } from '@mui/x-data-grid-pro';

const rows = [
  {
    id: 1,
    username: '@MUI',
    age: 20,
  },
];

export default function ColumnSizingGrid() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGridPro
        columns={[
          { field: 'id' },
          { field: 'username', width: 125, minWidth: 150, maxWidth: 200 },
          { field: 'age', resizable: false },
        ]}
        rows={rows}
      />
    </div>
  );
}
