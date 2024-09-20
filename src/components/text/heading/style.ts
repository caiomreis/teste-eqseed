import styled from "styled-components";
import testeeqseed_theme from "../../../style/theme_colors";

export const Heading1 = styled.h1<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 40px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "58px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Heading2 = styled.h2<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 32px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "48px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Heading3 = styled.h3<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 26px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "40px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Heading4 = styled.h4<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "36px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
export const Heading5 = styled.h5<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "32px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;

export const Heading6 = styled.h6<{
  color?: string;
  fontWeight?: number;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "30px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
