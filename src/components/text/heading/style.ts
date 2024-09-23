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

  @media screen and (max-width: 1000px) {
    font-size: 34px;
    line-height: 36px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 32px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 30px;
    line-height: 32px;
  }
  @media screen and (max-width: 600px) {
    font-size: 25px;
    line-height: 27px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 24px;
    line-height: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 24px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 16px;
  }
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
  @media screen and (max-width: 1000px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
    line-height: 14px;
  }
`;
