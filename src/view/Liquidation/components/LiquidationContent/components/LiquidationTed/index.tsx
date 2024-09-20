import { Body4 } from "../../../../../../components/text/body/style";
import {
  LiquidationSliceType,
  PaymentMethod,
  setPaymentMethod,
} from "../../../../../../store/ofertas_slice";
import { useAppDispatch } from "../../../../../../store/store";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { LiquidationTedContent, PaymentInfosContent } from "./style";

const LiquidationTed: React.FC<{ state: LiquidationSliceType }> = ({
  state,
}) => {
  const dispatch = useAppDispatch();
  return (
    <LiquidationTedContent
      $isselected={state.paymentMethod == PaymentMethod.ted}
      onClick={() => dispatch(setPaymentMethod(PaymentMethod.ted))}
    >
      <div className="header">
        <Body4
          color={
            state.paymentMethod == PaymentMethod.ted
              ? testeeqseed_theme.theme.white
              : testeeqseed_theme.theme.black
          }
          fontWeight={600}
        >
          TED
        </Body4>
      </div>
      <div className="content">
        <div className="ted_info">
          <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={400}>
            TEDs são válidos mas{" "}
            <a>possuem desvantagens em relação a Chave PIX.</a> sendo essas:
          </Body4>

          <ul>
            <li>
              <Body4
                color={testeeqseed_theme.theme.grey.medium}
                fontWeight={600}
              >
                Serão cobradas taxas pela transação
              </Body4>
            </li>
            <li>
              <Body4
                color={testeeqseed_theme.theme.grey.medium}
                fontWeight={600}
              >
                Tempo para cuncluir o pagamento será maior
              </Body4>
            </li>
          </ul>
          <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={400}>
            Por esses motivos, recomendamos que utilize a <a>Chave Pix</a> como
            metodo de pagamento
          </Body4>
        </div>
        <div className="paymantInfos">
          <PaymentInfos title={"TED"} info={"Insira as opções"} />
          <PaymentInfos
            title={"FAVORECIDO"}
            info={state.liquidationSelected?.nome_favorecido!}
          />
          <PaymentInfos
            title={"BANCO"}
            info={state.liquidationSelected?.banco!}
          />
          <PaymentInfos
            title={"AGÊNCIA"}
            info={state.liquidationSelected?.agencia!}
          />
          <PaymentInfos
            title={"CONTA CORRENTE"}
            info={state.liquidationSelected?.numero_conta_corrente!}
          />
          <PaymentInfos
            title={"CNPJ"}
            info={state.liquidationSelected?.cnpj!}
          />
        </div>
      </div>
    </LiquidationTedContent>
  );
};
const PaymentInfos: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <PaymentInfosContent>
      <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={600}>
        {title}
      </Body4>
      <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={700}>
        {info}
      </Body4>
    </PaymentInfosContent>
  );
};

export default LiquidationTed;
