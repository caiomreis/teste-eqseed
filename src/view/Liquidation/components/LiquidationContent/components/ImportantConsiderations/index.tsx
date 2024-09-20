import { ConsiderationsContent, ImportantConsiderationsContent } from "./style";

import TesteIcon from "../../../../../../components/testeIcons";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { Body4 } from "../../../../../../components/text/body/style";

const ImportantConsiderations: React.FC = () => {
  return (
    <ImportantConsiderationsContent>
      <Considerations icon={"recent_actors"}>
        Você pode fazer transações de diferentes contas, porém,{" "}
        <b>elas precisam</b> ter a{" "}
        <b>mesma titularidade de quem assinou o contrato de investimento.</b>
      </Considerations>
      <Considerations icon={"phone_disabled"}>
        <b>Nunca enviaremos</b> boletos ou pedos de pagamento via WhatsApp
      </Considerations>
      <Considerations icon={"money_off"}>
        Não é permitido <b>pagamento em espécie</b> (dinheiro)
      </Considerations>
      <Considerations icon={"schedule"}>
        Tranferência via PIX realizadas entre <b>20h</b> e <b>6h</b> podem
        sofrer limitações
      </Considerations>
    </ImportantConsiderationsContent>
  );
};
const Considerations: React.FC<{
  icon: string;
  children?: React.ReactNode;
}> = ({ icon, children }) => {
  return (
    <ConsiderationsContent>
      <TesteIcon
        icon={icon}
        size={42}
        color={testeeqseed_theme.theme.green.medium}
      />
      <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={400}>
        {children}
      </Body4>
    </ConsiderationsContent>
  );
};

export default ImportantConsiderations;
