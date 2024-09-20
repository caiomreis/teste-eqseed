import styled from "styled-components";
import testeeqseed_theme from "../../../style/theme_colors";

export const Display1 = styled.h1<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 64px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 700};
  line-height: ${(props) => props.lineheight ?? "80px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Display2 = styled.h2<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 56px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 600};
  line-height: ${(props) => props.lineheight ?? "72px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Display3 = styled.h3<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 48px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 500};
  line-height: ${(props) => props.lineheight ?? "64px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
