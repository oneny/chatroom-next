import theme from 'styles/theme';
import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  height: 100vh;
  min-width: 30rem;
  max-width: 35rem;
  overflow-y: scroll;
  border-right: 1px solid ${theme.palette.whitesmoke};
`;
