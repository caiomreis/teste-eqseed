import styled from "styled-components";
import testeeqseed_theme from "../../../style/theme_colors";

export const Body1 = styled.span<{
  color?: string;
  fontWeight?: number | string;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "20px"};
  text-align: ${(props) => props.textalign ?? "left"};

  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 118px;
  }
`;
export const Body2 = styled.span<{
  color?: string;
  fontWeight?: number | string;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "20px"};
  text-align: ${(props) => props.textalign ?? "left"};

  @media screen and (max-width: 1200px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const Body3 = styled.span<{
  color?: string;
  fontWeight?: number | string;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "18px"};
  text-align: ${(props) => props.textalign ?? "left"};

  @media screen and (max-width: 1200px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const Body4 = styled.span<{
  color?: string;
  fontWeight?: number | string;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  font-family: Poppins;
  margin: 0px;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "16px"};
  text-align: ${(props) => props.textalign ?? "left"};

  @media screen and (max-width: 1200px) {
    font-size: 10px;
    line-height: 14px;
  }
`;
export const Caution1 = styled.span<{
  color?: string;
  fontWeight?: number | string;
  textalign?: string;
  lineheight?: string;
}>`
  color: ${(props) => props.color ?? testeeqseed_theme.theme.black};
  margin: 0px;
  font-size: 11px;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: ${(props) => props.lineheight ?? "15px"};
  text-align: ${(props) => props.textalign ?? "left"};
`;
