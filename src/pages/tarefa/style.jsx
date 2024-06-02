import { TableCell, TableRow, styled } from "@mui/material";
import styledEmotion from "@emotion/styled";
export const TableRowHeader = styled(TableRow)`
  background-color: blue;
`;
export const TableCellStrong = styled(TableCell)`
  font-weight: bold !important;
  background-color: #c3c3f8;
  text-align: center;
`;
export const Badge = styledEmotion.div`
    padding: 8px;
    border-radius: 4px;
    text-align:center;
    font-weight: bold;
    background: ${({ status }) => {
      console.log(status);
      if (status === `Aguardando`) return "yellow";
      if (status === `Concluída`) return "green";
      return "blue";
    }};
`;
