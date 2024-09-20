import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { LiquidationContentContainer } from "./style";
import { Body3 } from "../../../../components/text/body/style";
import { Heading5 } from "../../../../components/text/heading/style";
import testeeqseed_theme from "../../../../style/theme_colors";
import LiquidationHeader from "./components/LiquidationHeader";
import LiquidationTed from "./components/LiquidationTed";
import LiquidationPix from "./components/LiquidationPix";
import ImportantConsiderations from "./components/ImportantConsiderations";
import QuestionsAndSuggestions from "./components/QuestionsAndSuggestions";
import PaymentProof from "./components/PaymentProof";

const LiquidationContent: React.FC = () => {
  const state = useSelector((state: RootState) => state.liquidation);

  return (
    <LiquidationContentContainer>
      <LiquidationHeader state={state} />
      <Body3 fontWeight={600} className="under">
        ESCOLHA SUA FORMA DE PAGAMENTO
      </Body3>
      <LiquidationPix state={state} />
      <LiquidationTed state={state} />
      <div className="line"></div>
      <Heading5 color={testeeqseed_theme.theme.green.strong} fontWeight={700}>
        CONSIDERAÇÕES IMPORTANTES
      </Heading5>
      <ImportantConsiderations />
      <PaymentProof state={state} />
      <QuestionsAndSuggestions />
    </LiquidationContentContainer>
  );
};

export default LiquidationContent;
